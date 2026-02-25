import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, Cloud, Server, BarChart3, Link as LinkIcon } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const CalibrationManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/beamex" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Beamex Solutions</span>
          </Link>
        </div>
      </div>

      {/* Hero Section with Header Image */}
      <section className="relative bg-navy-900 text-white py-8 md:py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.beamex.com/app/uploads/2024/04/header_image_calibration_management_v1-scaled.jpg"
            alt="Calibration Management Software"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-h1-mobile lg:text-h1-desktop font-bold mb-3 md:mb-6 drop-shadow-lg">
              Calibration Management
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed drop-shadow-md px-2">
              Streamline your calibration processes with Beamex calibration management software
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-6 md:py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-none space-y-3 md:space-y-4">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Why use software for calibration management? Manual calibration management can be time-consuming, error-prone,
            and inefficient, particularly for organizations with a large number of instruments.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Calibration management software automates calibration work scheduling, data collection, and reporting,
            reducing the risk of human error and saving time.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            By centralizing calibration data, calibration software also improves traceability, supports compliance with
            standards like ISO 9001, and provides insights for decision-making and audit purposes.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            We offer two calibration management software solutions, <strong>Beamex LOGiCAL</strong> and{' '}
            <strong>Beamex CMX</strong>. Both are designed to help you manage instrument assets, plan and execute
            calibrations, store calibration histories, and provide data for analysis, reporting and calibration certificates.
          </p>
        </div>
      </section>

      {/* Beamex LOGiCAL */}
      <section className="py-6 md:py-10 lg:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h2 className="text-lg md:text-h2-mobile lg:text-h2-desktop font-bold leading-tight">
                  Beamex LOGiCAL Calibration Management Software
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Beamex LOGiCAL is a modern, cloud-based calibration software designed to streamline and digitalize your
                  calibration processes. It offers an easy-to-use interface for managing, documenting, and storing
                  calibration data securely in the cloud.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  LOGiCAL helps eliminate manual data entry and paperwork, reducing errors and saving time. It integrates
                  seamlessly with Beamex documenting calibrators, enabling automated data transfer for fast, reliable, and
                  traceable results.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Whether you're calibrating pressure, temperature, or electrical instruments, LOGiCAL supports a wide range
                  of devices and industries. Accessible from anywhere, it's ideal for teams working across multiple locations.
                  LOGiCAL is a cost-effective way to bring efficiency, accuracy, and compliance to your calibration work.
                </p>
                <div className="pt-2 md:pt-4">
                  <a href="https://www.beamex.com/calibration-software/beamex-logical/" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 text-sm md:text-base w-full md:w-auto">
                      Read more about Beamex LOGiCAL <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Card className="overflow-hidden border-2 shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center p-4 md:p-8">
                  <div className="text-center">
                    <Cloud className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-2 md:mb-4" />
                    <p className="text-sm md:text-base lg:text-lg font-semibold text-primary">Cloud-Based Solution</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beamex CMX */}
      <section className="py-6 md:py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="order-first lg:order-1 relative">
              <Card className="overflow-hidden border-2 shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-navy-50 to-blue-100 dark:from-navy-950 dark:to-blue-900 flex items-center justify-center p-4 md:p-8">
                  <div className="text-center">
                    <Server className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-2 md:mb-4" />
                    <p className="text-sm md:text-base lg:text-lg font-semibold text-primary">On-Premises Solution</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-last lg:order-2">
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Server className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h2 className="text-lg md:text-h2-mobile lg:text-h2-desktop font-bold leading-tight">
                  Beamex CMX Calibration Management Software
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Beamex CMX is a comprehensive, on-premises calibration management software designed for industries with
                  demanding compliance and quality requirements. It helps you plan, execute, analyze, and document
                  calibrations efficiently while ensuring full traceability and data integrity.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  CMX supports both manual and automated calibration workflows and integrates with Beamex calibrators and
                  ERP/CMMS systems for a seamless process. It includes advanced features like risk-based calibration planning,
                  audit trail, and electronic signatures, making it ideal for regulated industries such as pharmaceutical,
                  energy, and food & beverage.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  With CMX, you gain full control over your calibration program, improve productivity, and ensure compliance
                  with industry standards and regulations.
                </p>
                <div className="pt-2 md:pt-4">
                  <a href="https://www.beamex.com/calibration-software/beamex-cmx/" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 text-sm md:text-base w-full md:w-auto">
                      Read more about Beamex CMX <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taking CMX to the Next Level */}
      <section className="py-6 md:py-10 lg:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10 lg:mb-12">
            <h2 className="text-xl md:text-h2-mobile lg:text-h2-desktop font-bold mb-2 md:mb-4">
              Taking CMX to the Next Level
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* CMX Analytics Dashboard */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3 md:pb-6">
                <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-h3-mobile lg:text-h3-desktop leading-tight">
                    CMX Analytics Dashboard
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  The Beamex CMX Analytics Dashboard provides an easy-to-use visual summary of your key calibration
                  performance indicators.
                </p>
                <a href="https://www.beamex.com/calibration-software/beamex-cmx-analytics-dashboard/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 text-sm md:text-base w-full md:w-auto">
                    Read more about CMX Analytics Dashboard <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Beamex Business Bridge */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3 md:pb-6">
                <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LinkIcon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-h3-mobile lg:text-h3-desktop leading-tight">
                    Beamex Business Bridge
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  Beamex Business Bridge is a commercial configurable solution for connecting Beamex CMX and maintenance
                  management systems such as SAP or IBM Maximo.
                </p>
                <a href="https://www.beamex.com/calibration-software/cmx/business-bridge/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 text-sm md:text-base w-full md:w-auto">
                    Read more about Beamex Business Bridge <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Calibration Management"
        title="Streamline Your Calibration Management"
        description="Learn how Beamex LOGiCAL and CMX calibration management software can automate your processes and improve efficiency."
      />
    </div>
  );
};

export default CalibrationManagement;
