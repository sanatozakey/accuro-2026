import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Target, Users, Award, TrendingUp, Shield, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import { BeamexPartnerBadge } from '../components/BeamexPartnerBadge'
import { ClientTrustGrid } from '../components/ClientTrustGrid'
import { ContactCTA } from '../components/ContactCTA'

export function About() {
  return (
    <div className="w-full bg-background">
      {/* About Header */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-blue-900 opacity-90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">About us</h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-gray-200">
            Accuro is the exclusive partner and distributor of Beamex in the Philippines, delivering world-class instrumentation, calibration solutions, and metrology services.
          </p>
        </div>
      </section>

      {/* Official Exclusive Distributor Certification Showcase */}
      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800/90 rounded-2xl shadow-xl border-2 border-emerald-500/40 dark:border-emerald-500/30 overflow-hidden">
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                {/* Badge Container */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="p-6 bg-slate-50 dark:bg-gray-900/90 rounded-2xl border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-md flex items-center justify-center">
                    <img
                      src="/images/beamex-expert-partner-accuro.png"
                      alt="Beamex Expert Partner - Accuro"
                      className="h-32 sm:h-40 w-auto object-contain"
                    />
                  </div>
                  <span className="mt-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Official Beamex shield
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold tracking-wide border border-emerald-300 dark:border-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Official exclusive representation
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                    Accuro is the exclusive distributor of Beamex in the Philippines
                  </h2>

                  <p className="text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed">
                    As the exclusive Beamex Expert Partner in the country, Accuro is your exclusive local provider for genuine Beamex calibrators, authentic factory warranties, ISO/IEC 17025 accredited recalibration, and direct Nordic engineering support.
                  </p>

                  {/* Guarantee Grid */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block text-slate-900 dark:text-white">100% genuine Nordic hardware</strong>
                        <span className="text-xs text-slate-600 dark:text-gray-400">Directly from Pietarsaari, Finland with authentic factory coverage.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block text-slate-900 dark:text-white">Exclusive Philippine rights</strong>
                        <span className="text-xs text-slate-600 dark:text-gray-400">Exclusive sales, software licensing, and authorized servicing.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block text-slate-900 dark:text-white">ISO/IEC 17025 recalibration</strong>
                        <span className="text-xs text-slate-600 dark:text-gray-400">Local accredited calibration lab for periodic recertification.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block text-slate-900 dark:text-white">Certified Filipino metrologists</strong>
                        <span className="text-xs text-slate-600 dark:text-gray-400">Nordic-trained engineers for on-site commissioning & audits.</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 shadow-md">
                      <Link to="/contact?type=quote">
                        Request official pricing
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 font-semibold px-7">
                      <a href="https://www.beamex.com" target="_blank" rel="noopener noreferrer">
                        Verify on Beamex.com
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What drives us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Delivering accurate measurements and reliable calibration solutions that meet the highest industry standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Partnering with global leaders like{' '}
                  <a
                    href="https://www.beamex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80 transition-opacity"
                  >
                    Beamex
                  </a>{' '}
                  to provide world-class calibration equipment and software
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Building long-term relationships with our clients through exceptional service and dedicated support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-24 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <BeamexPartnerBadge variant="eyebrow" className="mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our company</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Accuro is founded with a vision to deliver excellence in the field of calibration. As the exclusive distributor of Beamex in the Philippines, we bring over 50 years of Nordic metrology innovation directly to local industrial operations.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We have grown to become the trusted calibration partner of the country's most demanding process industries—including power generation, oil & gas, pharmaceuticals, and food & beverage. Our team of certified metrologists understands our clients' unique challenges and delivers end-to-end solutions that guarantee measurement integrity, regulatory compliance, and audit readiness.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At Accuro, we believe in building lasting relationships. We provide not just premium hardware, but complete lifecycle support—including on-site commissioning, ISO/IEC 17025 accredited calibration, CMX software integration, and comprehensive personnel training.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-20" />
              <Card className="relative overflow-hidden border-2 shadow-2xl rounded-2xl">
                <CardContent className="p-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Accuro calibration and metrology team"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">The Accuro team</p>
                    <p className="text-xs text-gray-300">Dedicated calibration and metrology specialists</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Work at Accuro */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why we work at Accuro?</h2>
            </div>
            <Card className="border-2 dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Accuro, our passion for precision and excellence drives everything we do. Our team
                  of dedicated professionals brings deep expertise in calibration technology, and we are
                  committed to delivering solutions of the highest quality to every client we serve.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We believe that accurate measurements have the power to transform industrial operations.
                  From ensuring safety compliance to improving process efficiency and maintaining product
                  quality, calibration plays a vital role in operational success.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our mission is to empower businesses with dependable calibration equipment and expert
                  guidance. We collaborate closely with each client, understanding their unique challenges
                  to deliver tailored solutions. Through our partnership with industry leaders like{' '}
                  <a
                    href="https://www.beamex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80 transition-opacity"
                  >
                    Beamex
                  </a>
                  , we ensure our clients have access to the most advanced calibration
                  technology available.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  What truly sets us apart is our dedication to building lasting relationships. We go
                  beyond selling equipment by providing comprehensive solutions that include training,
                  ongoing support, and maintenance services, ensuring our clients achieve optimal results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who we serve?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Providing calibration solutions across diverse industries with precision and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/images/Oil & Gas.png"
                    alt="Oil & gas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 min-h-[36px]">
                  <Building2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <CardTitle className="text-xl">Oil & gas</CardTitle>
                </div>
                <CardDescription className="text-base text-gray-700 flex-grow">
                  We provide reliable calibration solutions for the oil and gas
                  industry, ensuring accurate measurements and compliance with
                  safety standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/images/Power Generation.png"
                    alt="Power generation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 min-h-[36px]">
                  <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <CardTitle className="text-xl">Power generation</CardTitle>
                </div>
                <CardDescription className="text-base text-gray-700 flex-grow">
                  We serve power generation facilities with calibration equipment
                  that ensures efficient operations and compliance with
                  environmental regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/images/Food & Beverage.png"
                    alt="Food & beverage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 min-h-[36px]">
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <CardTitle className="text-xl">Food & beverage</CardTitle>
                </div>
                <CardDescription className="text-base text-gray-700 flex-grow">
                  Our calibration solutions support the food and beverage industry
                  with precise measurement tools for quality assurance, process
                  control, and regulatory compliance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/images/Compliance-driven industries with skilled workforce.png"
                    alt="Regulated & compliance-driven industries"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 min-h-[36px]">
                  <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <CardTitle className="text-xl">Regulated industries</CardTitle>
                </div>
                <CardDescription className="text-base text-gray-700 flex-grow">
                  Supporting compliance-driven industries requiring strict regulatory
                  standards with certified calibration equipment and expert technical personnel.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philippine Client Trust Proof Grid */}
      <ClientTrustGrid />

      {/* Contact & Consultation CTA */}
      <ContactCTA
        title="Partner with the Philippines' exclusive Beamex distributor"
        description="Schedule an engineering consultation or request an on-site calibration audit with our certified Filipino metrologists."
        inquiryType="quote"
        buttonText="Get in touch with our team"
      />
    </div>
  )
}
