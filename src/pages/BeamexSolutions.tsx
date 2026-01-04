import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, Zap, Database, Settings } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

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
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Beamex Solutions</Badge>
            <h1 className="text-h1-mobile md:text-h1-desktop font-bold mb-6 drop-shadow-lg">
              Beamex Solutions for Calibration Excellence
            </h1>
            <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Since its founding in 1975, <a href="https://www.beamex.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-baseline mx-0.5"><img src="/images/beamex-logo.png" alt="Beamex" className="h-[1.1em] inline-block hover:opacity-80 transition-opacity" /></a> has been a trusted partner for calibration
              excellence, helping its customers to continuously improve efficiency, ensure compliance, and increase
              safety in their operations. <a href="https://www.beamex.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-baseline mx-0.5"><img src="/images/beamex-logo.png" alt="Beamex" className="h-[1.1em] inline-block hover:opacity-80 transition-opacity" /></a> sets the industry standard with its way of working, its expertise,
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
            and services, Beamex is a trusted advisor for continuous process improvement and sustainable, safe operations.
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
              Beamex Calibration Ecosystem
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beamex calibration ecosystem is a unique combination of calibration software, calibration equipment and expert services,
              designed to improve your efficiency and increase accuracy, traceability and safety in your operations. Every component in
              the calibration ecosystem supports you throughout the solution lifecycle to meet your data-enabled business needs.
            </p>
          </div>

          {/* Four Main Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12">
            {/* Calibration Management */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col h-full">
              <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg mb-3 md:mb-4 mx-auto">
                  <Database className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-h3-mobile lg:text-h3-desktop font-bold text-center mb-2 md:mb-3">
                  Calibration Management
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 flex-grow leading-relaxed">
                  Beamex calibration management software lets you manage instrumentation assets and calibration
                  procedures – what, when and how to calibrate. Analyze high-quality digital data, identify trends,
                  create reports, generate calibration certificates and ensure compliance.
                </p>
                <Link to="/beamex/calibration-management" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Field Calibration */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col h-full">
              <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg mb-3 md:mb-4 mx-auto">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-h3-mobile lg:text-h3-desktop font-bold text-center mb-2 md:mb-3">
                  Field Calibration
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 flex-grow leading-relaxed">
                  Versatile, accurate, and reliable field calibrators for on-site calibration. The Beamex MC6 family meets
                  the diverse calibration needs of process industries worldwide, including hazardous environments.
                </p>
                <Link to="/beamex/field-calibration" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Workshop Calibration */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col h-full">
              <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg mb-3 md:mb-4 mx-auto">
                  <Settings className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-h3-mobile lg:text-h3-desktop font-bold text-center mb-2 md:mb-3">
                  Workshop Calibration
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 flex-grow leading-relaxed">
                  The Beamex CENTRiCAL is a central place for all your workshop calibrations. This standardized yet configurable
                  solution is easy to use, versatile, and ergonomic for professional workshop calibration.
                </p>
                <Link to="/beamex/workshop-calibration" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Expert Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col h-full">
              <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg mb-3 md:mb-4 mx-auto">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-h3-mobile lg:text-h3-desktop font-bold text-center mb-2 md:mb-3">
                  Expert Services and Training
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 flex-grow leading-relaxed">
                  The Beamex team of experienced, world-leading specialists will guide you throughout the solution
                  lifecycle, from definition to daily operation. We provide calibration services, repairs and convenient
                  service plans to help you keep your equipment operating at its full potential.
                </p>
                <Link to="/beamex/services" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
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
            Why Choose Beamex Calibration Ecosystem?
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
                Secure Digital Data Flow and Data Enabled Decisions
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
                Calibration Excellence
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
                Collaboration Platform
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
                Sustainable by Design
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
                Guided Calibration
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

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Beamex Solutions"
        title="Interested in Beamex Solutions?"
        description="Contact us to discuss how Beamex calibration solutions can improve your operations, ensure compliance, and increase safety."
      />
    </div>
  );
};

export default BeamexSolutions;
