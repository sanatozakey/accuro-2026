import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, FileText } from 'lucide-react'
import contactService from '../services/contactService'
import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'

import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Alert, AlertDescription } from '../components/ui/alert'
import { Label } from '../components/ui/label'
import { productCategories } from '../data/products'

export function Contact() {
  const { user } = useAuth()
  const [searchParams] = useSearchParams()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    productInterest: '',
    industry: '',
    timeline: '',
    subject: '',
    message: '',
  })

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Auto-fill form for logged-in users
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        company: user.company || prev.company,
      }))
    }
  }, [user])

  // Pre-populate fields from URL parameters
  useEffect(() => {
    const typeParam = searchParams.get('type')
    const productParam = searchParams.get('product')
    const solutionParam = searchParams.get('solution')
    const modelParam = searchParams.get('model')
    const industryParam = searchParams.get('industry')

    setFormData(prev => {
      const next = { ...prev }
      if (typeParam === 'quote') {
        next.inquiryType = 'quote'
      }
      if (productParam) {
        next.productInterest = productParam
      } else if (solutionParam) {
        const lower = solutionParam.toLowerCase()
        if (lower.includes('field') || lower.includes('mc6')) {
          next.productInterest = 'Field calibrators'
        } else if (lower.includes('workshop') || lower.includes('centrical')) {
          next.productInterest = 'Workshop calibrators'
        } else if (lower.includes('software') || lower.includes('management') || lower.includes('cmx') || lower.includes('logical')) {
          next.productInterest = 'Calibration software'
        } else if (lower.includes('service')) {
          next.productInterest = 'Accessories'
        }
      }

      if (modelParam) {
        next.subject = `Official quotation request: ${modelParam}`
        if (!next.message) {
          next.message = `Hello Accuro Technical Team,\n\nWe would like to request an official quotation, technical specifications, and delivery lead time for ${modelParam}.\n\nPlease include applicable ISO 17025 calibration certification options.`
        }
      } else if (typeParam === 'quote' && !next.subject) {
        next.subject = 'Official Beamex quotation request'
      }

      if (industryParam) {
        next.industry = industryParam
      }
      return next
    })
  }, [searchParams])

  // Real-time validation functions
  const validateEmail = (email: string): string => {
    if (!email) return ''
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) ? '' : 'Please enter a valid email address'
  }

  const validatePhone = (phone: string): string => {
    if (!phone) return ''
    // Philippine phone number format: +63 or 0, followed by 10 digits
    const phoneRegex = /^(\+63|0)[0-9]{10}$/
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      return 'Please enter a valid Philippine phone number (e.g., +63 9171507737 or 09171507737)'
    }
    return ''
  }

  const validateName = (name: string, field: string): string => {
    if (!name) return ''
    if (name.length < 2) return `${field} must be at least 2 characters`
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    setError('')

    // Real-time validation
    if (name === 'email') {
      setValidationErrors(prev => ({ ...prev, email: validateEmail(value) }))
    } else if (name === 'phone') {
      setValidationErrors(prev => ({ ...prev, phone: validatePhone(value) }))
    } else if (name === 'firstName') {
      setValidationErrors(prev => ({ ...prev, firstName: validateName(value, 'First name') }))
    } else if (name === 'lastName') {
      setValidationErrors(prev => ({ ...prev, lastName: validateName(value, 'Last name') }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate all fields
    const emailError = validateEmail(formData.email)
    const phoneError = validatePhone(formData.phone)
    const firstNameError = validateName(formData.firstName, 'First name')
    const lastNameError = validateName(formData.lastName, 'Last name')

    setValidationErrors({
      email: emailError,
      phone: phoneError,
      firstName: firstNameError,
      lastName: lastNameError,
    })

    // Check if any validation errors
    if (emailError || phoneError || firstNameError || lastNameError) {
      setError('Please fix the validation errors before submitting')
      return
    }

    // Frontend validation
    if (formData.message.length < 20) {
      setError('Message must be at least 20 characters long. You currently have ' + formData.message.length + ' characters.')
      return
    }

    if (formData.message.length > 2000) {
      setError('Message must be no more than 2000 characters long.')
      return
    }

    setLoading(true)

    try {
      let finalMessage = formData.message;
      const metaTags = [];
      if (formData.industry) metaTags.push(`[Industry: ${formData.industry}]`);
      if (formData.timeline) metaTags.push(`[Timeline: ${formData.timeline}]`);
      if (metaTags.length > 0 && !finalMessage.includes('[Industry:')) {
        finalMessage = `${metaTags.join(' ')}\n\n${formData.message}`;
      }

      await contactService.create({
        ...formData,
        message: finalMessage,
      })
      setSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: user?.email || '',
        phone: user?.phone || '',
        company: user?.company || '',
        inquiryType: '',
        productInterest: '',
        industry: '',
        timeline: '',
        subject: '',
        message: '',
      })
      setValidationErrors({ email: '', phone: '', firstName: '', lastName: '' })
      setTimeout(() => setSuccess(false), 10000)
    } catch (err: any) {
      // Show detailed validation errors if available
      if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
        const errorMessages = err.response.data.errors.map((e: any) =>
          `${e.field}: ${e.message}`
        ).join(', ');
        setError(errorMessages);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to send message. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full bg-background dark:bg-gray-950">
      {/* Contact Header */}
      <section className="bg-navy-900 dark:bg-gray-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-blue-900 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 opacity-90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-h1-mobile md:text-h1-desktop font-bold mb-6 drop-shadow-lg">
            Get in touch with us
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Do you have questions about our products or services? Contact us today and
            our team will be happy to assist you.
          </p>
        </div>
      </section>
      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-6 text-gray-900 dark:text-gray-100">Send us a message</h2>

              {success && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertDescription className="ml-2">
                    <h3 className="text-base font-semibold text-green-800">Message sent successfully!</h3>
                    <p className="text-green-700 mt-1 text-sm">
                      We'll get back to you as soon as possible.
                    </p>
                  </AlertDescription>
                </Alert>
              )}

              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-5 w-5" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Card className="border-2 shadow-lg dark:bg-gray-900 dark:border-gray-700">
                <CardContent className="pt-6">
                  {formData.inquiryType === 'quote' && (
                    <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-600 text-white flex-shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-blue-900 dark:text-blue-200">
                            Official Beamex quotation guarantee
                          </h4>
                          <span className="text-[10px] font-bold bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-1.5 py-0.2 rounded">
                            24h turnaround
                          </span>
                        </div>
                        <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                          Our local Philippine calibration engineers will prepare an itemized quotation including standard accessories, ISO 17025 certification options, and local warranty coverage.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">
                          First name *
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Your first name"
                          required
                          className={validationErrors.firstName ? 'border-red-500' : ''}
                        />
                        {validationErrors.firstName && (
                          <p className="text-sm text-red-600 mt-1">{validationErrors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">
                          Last name *
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Your last name"
                          required
                          className={validationErrors.lastName ? 'border-red-500' : ''}
                        />
                        {validationErrors.lastName && (
                          <p className="text-sm text-red-600 mt-1">{validationErrors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">
                        Email address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className={validationErrors.email ? 'border-red-500' : ''}
                      />
                      {validationErrors.email && (
                        <p className="text-sm text-red-600 mt-1">{validationErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">
                        Phone number *
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+63 9171507737 or 09171507737"
                        required
                        className={validationErrors.phone ? 'border-red-500' : ''}
                      />
                      {validationErrors.phone && (
                        <p className="text-sm text-red-600 mt-1">{validationErrors.phone}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="company">
                        Company / facility name
                      </Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Petron Bataan, First Gen, San Miguel"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="inquiryType">
                          Inquiry type *
                        </Label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select inquiry type...</option>
                          <option value="quote">Request formal quotation</option>
                          <option value="product">Product specification inquiry</option>
                          <option value="technical">Technical support / calibration service</option>
                          <option value="sales">Sales consultation</option>
                          <option value="general">General inquiry</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="productInterest">
                          Product or solution category
                        </Label>
                        <select
                          id="productInterest"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select product category...</option>
                          {productCategories.filter(cat => cat !== 'All products').map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                          <option value="Beamex Services & Training">Beamex services & training</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>

                    {/* Industry Sector & Expected Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="industry">
                          Industry sector
                        </Label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select your industry sector...</option>
                          <option value="Power Generation & Utilities">Power generation & utilities</option>
                          <option value="Oil & Gas / Petrochemical">Oil & gas / petrochemical</option>
                          <option value="Pharmaceutical & Life Sciences (21 CFR Part 11)">Pharmaceutical & life sciences (21 CFR Part 11)</option>
                          <option value="Food & Beverage Processing">Food & beverage processing</option>
                          <option value="Chemical Manufacturing">Chemical manufacturing</option>
                          <option value="Calibration & Metrology Lab (ISO/IEC 17025)">Calibration & metrology lab (ISO/IEC 17025)</option>
                          <option value="Water & Environmental Utilities">Water & environmental utilities</option>
                          <option value="Other Industry">Other industry</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">
                          Expected timeline / urgency
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select project timeline...</option>
                          <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                          <option value="1 to 3 months">1 to 3 months</option>
                          <option value="3 to 6 months">3 to 6 months</option>
                          <option value="Budgeting for Next Fiscal Year">Budgeting for next fiscal year</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">
                        Subject *
                      </Label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Message subject"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your calibration application, tag numbers, or models needed (minimum 20 characters)"
                        minLength={20}
                        maxLength={2000}
                        required
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        {formData.message.length}/2000 characters (minimum 20)
                      </p>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        disabled={loading}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 font-semibold"
                      >
                        {loading
                          ? 'Processing...'
                          : formData.inquiryType === 'quote'
                          ? 'Request official quotation'
                          : 'Send message'}
                        {formData.inquiryType === 'quote' ? (
                          <FileText size={18} className="ml-2" />
                        ) : (
                          <Send size={18} className="ml-2" />
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            {/* Contact Information */}
            <div>
              <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-6 text-gray-900 dark:text-gray-100">Contact information</h2>
              <Card className="border-2 shadow-lg mb-8 dark:bg-gray-900 dark:border-gray-700">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">+63 9171507737</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Monday to Friday, 9am to 5pm PHT
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">info@accuro.com.ph</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          Office address
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                          Room 305 Annex Verde Oro Bldg.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                          535 Commonwealth Ave.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                          Quezon City, Metro Manila, 1119 Philippines
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Map */}
              <Card className="border-2 shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-700">
                <CardContent className="p-0">
                  <div className="h-80 bg-gray-200 dark:bg-gray-800">
                    <iframe
                      title="Office Location"
                      className="w-full h-full border-0"
                      src="https://www.google.com/maps?q=Verde+Oro+Building,+535+Commonwealth+Ave,+Quezon+City,+1119+Metro+Manila&output=embed&z=17"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
