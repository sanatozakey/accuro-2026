import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { HeroSlider } from '../components/HeroSlider';
import { BeamexPartnerBadge } from '../components/BeamexPartnerBadge';
import { ClientTrustGrid } from '../components/ClientTrustGrid';
import { CalibrationSolutionFinder } from '../components/CalibrationSolutionFinder';
import { ContactCTA } from '../components/ContactCTA';

export function Home() {
  return (
    <div className="w-full bg-background">
      {/* Dynamic Moving Hero Slider (Addressing Feedback 1) */}
      <HeroSlider />

      {/* Key Features Strip */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Certified quality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">ISO-compliant solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Expert support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dedicated technical team</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Industry leader</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by top companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Who We Are Section */}
      <section className="py-16 sm:py-24 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Official Partner Badge */}
              <div>
                <BeamexPartnerBadge variant="eyebrow" className="mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Who we are</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Accuro is the exclusive distributor and authorized partner of Beamex in the Philippines, providing high-quality instrumentation and calibration solutions for industrial applications. We specialize in the complete Beamex ecosystem—from portable field calibrators to standardized CENTRiCAL workshop benches and digital calibration management software.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With deep local industry expertise backed by Beamex's 50+ years of Nordic calibration excellence, we help our clients optimize their processes, eliminate transcription errors, improve operational efficiency, and maintain strict compliance with ISO/IEC 17025 and global audit standards.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                <Link to="/about" className="inline-flex items-center text-lg font-semibold">
                  Learn more about us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20" />
              <Card className="relative overflow-hidden border-2 shadow-xl">
                <CardContent className="p-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Industrial calibration facility"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  {/* Floating Trust Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <BeamexPartnerBadge variant="card" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philippine Client Trust Proof Grid */}
      <ClientTrustGrid />

      {/* Backed by Industry Leaders */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Backed by industry leaders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Partnering with Beamex to deliver world-standard measurement and calibration solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://www.beamex.com/app/uploads/2020/05/Beamex-webshop_big-tablet_v1-e1590471740956.jpeg"
                    alt="Beamex"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Exclusive distributor</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Exclusive partner and distributor of Beamex calibration equipment and software solutions across the Philippines.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Company office"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Strategic partners</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Partnered with leading industrial automation and process control enterprises nationwide.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Industrial equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Certified experts</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Certified experts in precision measurement, ISO 17025 compliance, and automated calibration workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Products Preview */}
      <section className="py-16 sm:py-24 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Our products & solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We offer the complete ecosystem of Beamex calibration equipment, software, and accessories for process industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-44 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center overflow-hidden group-hover:bg-gray-100 transition-colors p-4">
                  <img
                    src="/images/Field Calibrators.png"
                    alt="Field calibrators"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-5 flex flex-col flex-grow">
                <CardTitle className="mb-2 text-lg">Field calibrators</CardTitle>
                <CardDescription className="mb-4 flex-grow text-sm">
                  Advanced multifunction documenting calibrators (MC6 family) for pressure, temperature, and electrical signals.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent mt-auto">
                  <Link to="/beamex/field-calibration" className="inline-flex items-center font-semibold text-sm">
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-44 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center overflow-hidden group-hover:bg-gray-100 transition-colors p-4">
                  <img
                    src="/images/Calibration Management.webp"
                    alt="Calibration management"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-5 flex flex-col flex-grow">
                <CardTitle className="mb-2 text-lg">Calibration management</CardTitle>
                <CardDescription className="mb-4 flex-grow text-sm">
                  Cloud (LOGiCAL) and enterprise on-premise (CMX) software for automated paperless calibration management.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent mt-auto">
                  <Link to="/beamex/calibration-management" className="inline-flex items-center font-semibold text-sm">
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-44 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center overflow-hidden group-hover:bg-gray-100 transition-colors p-4">
                  <img
                    src="/images/Workshop Calibration.jpg"
                    alt="Workshop calibration"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-5 flex flex-col flex-grow">
                <CardTitle className="mb-2 text-lg">Workshop calibration</CardTitle>
                <CardDescription className="mb-4 flex-grow text-sm">
                  Standardized yet configurable Beamex CENTRiCAL test benches, trolleys, and tabletop cases.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent mt-auto">
                  <Link to="/beamex/workshop-calibration" className="inline-flex items-center font-semibold text-sm">
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-blue-600 flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="h-44 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center overflow-hidden group-hover:bg-gray-100 transition-colors p-4">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Calibration services and training"
                    className="max-h-full max-w-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-5 flex flex-col flex-grow">
                <CardTitle className="mb-2 text-lg">Calibration services</CardTitle>
                <CardDescription className="mb-4 flex-grow text-sm">
                  Local ISO 17025 re-calibration, service agreements, software integration, and technician training.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent mt-auto">
                  <Link to="/beamex/services" className="inline-flex items-center font-semibold text-sm">
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/beamex">
                View all Beamex solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Calibration Solution Finder */}
      <CalibrationSolutionFinder />

      {/* Conversion Contact CTA */}
      <ContactCTA
        title="Need an Official Quotation or Technical Demonstration?"
        description="Connect directly with Accuro's certified Beamex application engineers in the Philippines. We provide itemized quotes, compliance advisories, and on-site demonstrations."
        inquiryType="quote"
        buttonText="Request Official Beamex Quote"
      />
    </div>
  );
}
