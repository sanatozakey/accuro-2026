import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';

import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, Zap, Database, Settings } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import { CalibrationSolutionFinder } from '../components/CalibrationSolutionFinder';
import { BeamexVideoSection } from '../components/BeamexVideoSection';

const BeamexSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Header Image */}
      <section className="relative bg-navy-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.beamex.com/app/uploads/2024/04/header_image_beamex_solution_overview_v1-scaled.jpg"
            alt="Beamex Solutions"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-h1-mobile md:text-h1-desktop font-bold mb-6 drop-shadow-lg">
              Beamex solutions for calibration excellence
            </h1>
            <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Since its founding in 1975, <a href="https://www.beamex.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">Beamex</a> has been a trusted partner for calibration
              excellence, helping its customers to continuously improve efficiency, ensure compliance, and increase
              safety in their operations. <a href="https://www.beamex.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">Beamex</a> sets the industry standard with its way of working, its expertise,
              and its innovative calibration technology that provides accurate measurements, reliable data, and traceability.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-none space-y-4">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            With more than 50 years of experience in manufacturing and developing cutting-edge calibrators, systems,
            and services, Beamex is a trusted leader for continuous process improvement and sustainable, safe operations.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Beamex has a comprehensive ecosystem of calibration solutions that covers everything from field calibration
            to workshop calibration, calibration management, and services. Through the company's global reach, its products
            and services are helping to create a safer and less uncertain world for customers across more than 90 countries.
          </p>
        </div>
      </section>

      {/* Beamex Calibration Ecosystem */}
      <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-3 md:mb-4">
              Beamex calibration ecosystem
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beamex calibration ecosystem is a unique combination of calibration software, calibration equipment and expert services,
              designed to improve your efficiency and increase accuracy, traceability and safety in your operations. Every component in
              the calibration ecosystem supports you throughout the solution lifecycle to meet your data-enabled business needs.
            </p>
          </div>

          {/* Ecosystem Image */}
          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <img
              src="/images/Beamex calibration ecosystem.png"
              alt="Beamex calibration ecosystem"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Four Main Solutions with Value On Top & Pictures */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Field Calibration */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-950/60 px-4 py-2 border-b border-blue-100 dark:border-blue-900 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide text-blue-800 dark:text-blue-300">
                  Value on top
                </span>
                <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                  Zero pen & paper
                </span>
              </div>
              <div className="h-44 bg-gray-50 dark:bg-gray-900/60 p-4 flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
                <img
                  src="/images/Field Calibrators.png"
                  alt="Beamex field calibrators"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Field calibration
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  Portable multifunction documenting calibrators (MC6 family) for high-accuracy pressure, temperature, and electrical calibrations in safe and hazardous zones.
                </p>
                <Link to="/beamex/field-calibration" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Explore field calibration <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Workshop Calibration */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-950/60 px-4 py-2 border-b border-blue-100 dark:border-blue-900 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide text-blue-800 dark:text-blue-300">
                  Value on top
                </span>
                <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                  Modular & ergonomic
                </span>
              </div>
              <div className="h-44 bg-gray-50 dark:bg-gray-900/60 p-4 flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
                <img
                  src="/images/Workshop Calibration.jpg"
                  alt="Beamex workshop calibration bench"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Workshop calibration
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  Beamex CENTRiCAL test benches, mobile trolleys, and tabletop modules providing standardized, ESD-protected precision workstations.
                </p>
                <Link to="/beamex/workshop-calibration" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Explore workshop solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Calibration Management */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-950/60 px-4 py-2 border-b border-blue-100 dark:border-blue-900 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide text-blue-800 dark:text-blue-300">
                  Value on top
                </span>
                <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                  100% audit-ready
                </span>
              </div>
              <div className="h-44 bg-gray-50 dark:bg-gray-900/60 p-4 flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
                <img
                  src="/images/Calibration Management.webp"
                  alt="Beamex calibration management software"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Calibration management
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  Beamex LOGiCAL (cloud) and CMX (enterprise on-premise) software with bMobile app for digital asset management, trend analysis, and automated certificates.
                </p>
                <Link to="/beamex/calibration-management" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Explore software <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Expert Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 flex flex-col h-full overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-950/60 px-4 py-2 border-b border-blue-100 dark:border-blue-900 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide text-blue-800 dark:text-blue-300">
                  Value on top
                </span>
                <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                  Certified engineers
                </span>
              </div>
              <div className="h-44 bg-gray-50 dark:bg-gray-900/60 p-4 flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Beamex expert services and training"
                  className="max-h-full max-w-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Calibration services
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  Local and global specialists delivering ISO 17025 re-calibration, maintenance agreements, software implementation, and technician certification.
                </p>
                <Link to="/beamex/services" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Explore services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Beamex */}
      <section className="py-8 md:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-3 md:mb-4">
            Why choose Beamex calibration ecosystem?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="flex gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-base md:text-h4-mobile lg:text-h4-desktop font-bold mb-1.5 md:mb-2">
                Secure digital data flow and data enabled decisions
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Data is your most valuable asset. Our technology captures data digitally at the measurement source and
                ensures secure data flow between products and systems. A completely digital flow of traceable and reliable
                calibration data throughout your business improves efficiency and ensures compliance.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-base md:text-h4-mobile lg:text-h4-desktop font-bold mb-1.5 md:mb-2">
                Calibration excellence
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We will help you develop your calibration program and to continuously analyze, improve, manage, and execute.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-base md:text-h4-mobile lg:text-h4-desktop font-bold mb-1.5 md:mb-2">
                Collaboration platform
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Beamex technology acts as a digital enabler. Our platform makes it possible for calibration work orders,
                data and insight to be shared across distributed organizations and between companies.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-base md:text-h4-mobile lg:text-h4-desktop font-bold mb-1.5 md:mb-2">
                Sustainable by design
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We design durable, scalable and highly configurable solutions that evolve to meet your changing needs.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex gap-3 md:gap-4 md:col-span-2 lg:col-span-1">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-base md:text-h4-mobile lg:text-h4-desktop font-bold mb-1.5 md:mb-2">
                Guided calibration
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Calibrate in the field with pre-defined calibration procedures and step-by-step guidance from your Beamex
                calibrator or application. With Beamex technology you can even fully automate calibrations, ensuring
                traceability and consistency every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calibration Solution Finder */}
      <CalibrationSolutionFinder />

      {/* Official Beamex Video Demonstrations */}
      <BeamexVideoSection />

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Beamex solutions"
        solution="beamex-solutions"
        inquiryType="quote"
        title="Interested in the complete Beamex ecosystem?"
        description="Schedule a technical consultation with Accuro's local Filipino calibration engineers to evaluate your instrumentation assets."
        buttonText="Request consultation & quote"
      />
    </div>
  );
};

export default BeamexSolutions;
