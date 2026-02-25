import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, Settings, Laptop, Package } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const WorkshopCalibration: React.FC = () => {
  const configurations = [
    {
      name: 'CENTRiCAL bench',
      icon: <Settings className="w-8 h-8 text-primary" />,
      description: 'The Beamex CENTRiCAL calibration and test bench is available as a straight bench and as a corner bench version.',
    },
    {
      name: 'CENTRiCAL trolley',
      icon: <Package className="w-8 h-8 text-primary" />,
      description: 'The Beamex CENTRiCAL trolley is equipped with wheels, an adjustable shelf, and a lockable drawer unit for storage.',
    },
    {
      name: 'CENTRiCAL tabletop',
      icon: <Laptop className="w-8 h-8 text-primary" />,
      description: 'The Beamex CENTRiCAL tabletop case is a convenient solution if you already have tables in your workshop.',
    },
  ];

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
      <section className="relative bg-navy-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.beamex.com/app/uploads/2024/04/header_image_workshop_calibration_v1-scaled.jpg"
            alt="Workshop Calibration"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-h1-mobile md:text-h1-desktop font-bold mb-6 drop-shadow-lg">
              Workshop Calibration
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              The Beamex CENTRiCAL is a central place for all your workshop calibrations.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground">
            This standardized yet configurable solution is easy to use, versatile, and ergonomic. The Beamex CENTRiCAL
            Workshop Calibration Solution reflects the result of decades of experience providing world-class solutions
            for the process industries.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            The modular design makes CENTRiCAL versatile and easy to configure according to your needs, with the ability
            to add or replace modules as needed.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Available CENTRiCAL configurations include a bench, trolley or table-top solution.
          </p>
        </div>
      </section>

      {/* CENTRiCAL Hero Image */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-2 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center p-8">
              <img
                src="/images/Beamex CENTRiCAL.png"
                alt="Beamex CENTRiCAL Workshop Calibration Solution"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Configurations */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {configurations.map((config, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {config.icon}
                  </div>
                  <CardTitle className="text-h3-mobile md:text-h3-desktop">
                    {config.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{config.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Workflow Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4">
              Benefit from a Fully Digital Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-h3-mobile md:text-h3-desktop font-bold mb-4">
                Connect with calibration management software
              </h3>
              <p className="text-muted-foreground mb-6">
                The MC6-WS Advanced Workshop Calibrator and Communicator is the heart of the CENTRiCAL workshop
                calibration solution. It is a documenting calibrator that can connect with Beamex calibration management
                software, enabling a fully digital calibration data flow.
              </p>

              <h3 className="text-h3-mobile md:text-h3-desktop font-bold mb-4 mt-8">
                Manage what, how, and when
              </h3>
              <p className="text-muted-foreground mb-6">
                You can use Beamex calibration management software to manage what, how, and when to calibrate, as well
                as to execute calibrations with the MC6-WS according to your pre-configured calibration procedure – even
                fully automatically.
              </p>
            </div>

            <div>
              <Card className="overflow-hidden border-2 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center p-8">
                  <img
                    src="/images/Beamex MC6-WS.png"
                    alt="Beamex MC6-WS Workshop Calibrator"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://www.beamex.com/calibrators/beamex-centrical-calibration-bench/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Read more about Beamex CENTRiCAL <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Modular Design</h3>
                <p className="text-sm text-muted-foreground">
                  Easily configure and expand your workshop solution with modular components that grow with your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Digital Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Seamlessly connect with Beamex calibration management software for paperless, automated workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Flexible Configurations</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from bench, trolley, or tabletop configurations to fit your workshop space and requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Workshop Calibration"
        title="Transform Your Workshop Calibration"
        description="Discover how the Beamex CENTRiCAL solution can streamline your workshop operations with modular, professional calibration capabilities."
      />
    </div>
  );
};

export default WorkshopCalibration;
