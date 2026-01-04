import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import contactService from '../services/contactService';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription } from './ui/alert';
import { Label } from './ui/label';
import { productCategories } from '../data/products';

export function ContactFormSection() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    productInterest: '',
    subject: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Auto-fill form for logged-in users
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        company: user.company || prev.company,
      }));
    }
  }, [user]);

  // Real-time validation functions
  const validateEmail = (email: string): string => {
    if (!email) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Please enter a valid email address';
  };

  const validatePhone = (phone: string): string => {
    if (!phone) return '';
    const phoneRegex = /^(\+63|0)[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      return 'Please enter a valid Philippine phone number (e.g., +63 9171507737 or 09171507737)';
    }
    return '';
  };

  const validateName = (name: string, field: string): string => {
    if (!name) return '';
    if (name.length < 2) return `${field} must be at least 2 characters`;
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');

    // Real-time validation
    if (name === 'email') {
      setValidationErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    } else if (name === 'phone') {
      setValidationErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    } else if (name === 'firstName') {
      setValidationErrors((prev) => ({ ...prev, firstName: validateName(value, 'First name') }));
    } else if (name === 'lastName') {
      setValidationErrors((prev) => ({ ...prev, lastName: validateName(value, 'Last name') }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const firstNameError = validateName(formData.firstName, 'First name');
    const lastNameError = validateName(formData.lastName, 'Last name');

    setValidationErrors({
      email: emailError,
      phone: phoneError,
      firstName: firstNameError,
      lastName: lastNameError,
    });

    // Check if any validation errors
    if (emailError || phoneError || firstNameError || lastNameError) {
      setError('Please fix the validation errors before submitting');
      return;
    }

    // Frontend validation
    if (formData.message.length < 20) {
      setError('Message must be at least 20 characters long. You currently have ' + formData.message.length + ' characters.');
      return;
    }

    if (formData.message.length > 2000) {
      setError('Message must be no more than 2000 characters long.');
      return;
    }

    setLoading(true);

    try {
      await contactService.create(formData);
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: user?.email || '',
        phone: user?.phone || '',
        company: user?.company || '',
        inquiryType: '',
        productInterest: '',
        subject: '',
        message: '',
      });
      setValidationErrors({ email: '', phone: '', firstName: '', lastName: '' });
      setTimeout(() => setSuccess(false), 10000);
    } catch (err: any) {
      if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
        const errorMessages = err.response.data.errors.map((e: any) => `${e.field}: ${e.message}`).join(', ');
        setError(errorMessages);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-navy-900 dark:bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-200">
            Have questions or need a quote? Contact us and our team will be happy to assist you.
          </p>
        </div>

        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <AlertDescription className="ml-2">
              <h3 className="text-base font-semibold text-green-800">Message sent successfully!</h3>
              <p className="text-green-700 mt-1 text-sm">We'll get back to you as soon as possible.</p>
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="border-2 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-900 dark:text-gray-100 font-semibold">
                    First Name *
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    required
                    className={`bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 ${validationErrors.firstName ? 'border-red-500' : ''}`}
                  />
                  {validationErrors.firstName && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{validationErrors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-900 dark:text-gray-100 font-semibold">
                    Last Name *
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    required
                    className={`bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 ${validationErrors.lastName ? 'border-red-500' : ''}`}
                  />
                  {validationErrors.lastName && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{validationErrors.lastName}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-900 dark:text-gray-100 font-semibold">
                  Email Address *
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className={`bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 ${validationErrors.email ? 'border-red-500' : ''}`}
                />
                {validationErrors.email && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{validationErrors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-900 dark:text-gray-100 font-semibold">
                  Phone Number *
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+63 9171507737 or 09171507737"
                  required
                  className={`bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 ${validationErrors.phone ? 'border-red-500' : ''}`}
                />
                {validationErrors.phone && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{validationErrors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="company" className="text-gray-900 dark:text-gray-100 font-semibold">
                  Company
                </Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name (optional)"
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="inquiryType" className="text-gray-900 dark:text-gray-100 font-semibold">
                    Inquiry Type *
                  </Label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder:text-gray-400"
                  >
                    <option value="">Select inquiry type...</option>
                    <option value="product">Product Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="productInterest" className="text-gray-900 dark:text-gray-100 font-semibold">
                    Product Category
                  </Label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder:text-gray-400"
                  >
                    <option value="">Select product category...</option>
                    {productCategories.filter(cat => cat !== 'All Products').map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Optional - helps us direct your inquiry
                  </p>
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-900 dark:text-gray-100 font-semibold">
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
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-900 dark:text-gray-100 font-semibold">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message (minimum 20 characters)"
                  minLength={20}
                  maxLength={2000}
                  required
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{formData.message.length}/2000 characters (minimum 20)</p>
              </div>

              <div>
                <Button type="submit" disabled={loading} size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold">
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={18} className="ml-2" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
