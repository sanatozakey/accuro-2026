import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';

import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, CheckCircle2, Gauge, Zap, Shield } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const FieldCalibration: React.FC = () => {
  const mc6Products = [
    {
      name: 'Beamex MC6',
      image: '/images/Beamex MC6.png',
      description: 'The MC6 is a high-accuracy field calibrator that offers calibration capabilities for pressure, temperature, and various electrical signals. It is also a multi-bus field communicator for fieldbus instruments.',
      link: 'https://www.beamex.com/calibrators/beamex-mc6/',
    },
    {
      name: 'Beamex MC6-Ex',
      image: '/images/Beamex MC6-Ex.png',
      description: 'The Beamex MC6-Ex is the world\'s most accurate intrinsically safe field calibrator and communicator. It is ATEX, IECEx, and North American certified and can be used in all hazardous areas.',
      link: 'https://www.beamex.com/calibrators/beamex-mc6-ex/',
    },
    {
      name: 'Beamex MC6-T',
      image: '/images/Beamex MC6-T.png',
      description: 'The Beamex MC6-T combines a state-of-the-art temperature dry block with built-in multifunction process calibrator and communicator technology.',
      link: 'https://www.beamex.com/calibrators/beamex-mc6-t/',
    },
  ];

  const otherProducts = [
    {
      name: 'Beamex ePG',
      image: '/images/Beamex ePG.png',
      description: 'Portable, battery-operated electric pressure pump and controller for industrial pressure calibration applications in ranges from -0.85 to 20 bar.',
      link: 'https://www.beamex.com/calibrators/beamex-epg/',
    },
    {
      name: 'Beamex PG Calibration Pumps',
      image: '/images/Calibration Pumps.png',
      description: 'Available pressure ranges: PGC (-0.95 … 35 bar), PGM (0 … 20 bar), PGHH (0 … 700 bar), PGPH (–0.95 … 140 bar), PGL (–400 … 400 mbar)',
      link: 'https://www.beamex.com/calibrators/beamex-pg-calibration-pumps/',
    },
    {
      name: 'External Pressure Modules',
      image: '/images/Beamex External Pressure Modules.png',
      description: 'The Beamex EXT range of external pressure modules will increase your configuration possibilities, making it possible to calibrate even more pressure ranges with the same calibrator.',
      link: 'https://www.beamex.com/calibrators/beamex-ext-modules/',
    },
    {
      name: 'Smart Temperature Sensors',
      image: '/images/Beamex Temperature Sensors.png',
      description: 'Beamex RPRT (up to 660 °C), IPRT (-45 to 300 °C), and SIRT (-30 to 155 °C) high-accuracy reference sensors for temperature calibration.',
      link: 'https://www.beamex.com/calibrators/temperature-sensors/',
    },
  ];

  const features = [
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: 'Multifunctional Calibration',
      description: 'Provides calibration for pressure, temperature, and electrical signals in a single device.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: 'High Accuracy',
      description: 'Ensures precise measurements with traceable, accredited calibration certificates.',
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Digital Data Flow',
      description: 'Documenting calibrators that connect with Beamex software, enabling paperless calibration.',
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: 'Durable Design',
      description: 'Built for demanding environments with an ergonomic, IP65-rated construction.',
    },
  ];

  const capabilities = [
    'Pressure measurement (internal/external)',
    'Voltage measurement and generation',
    'Current measurement and generation',
    'Frequency measurement and generation',
    'Pulse counting and generation',
    'Switch state sensing',
    'Built-in 24 VDC loop supply',
    'Resistance and RTD measurement, two simultaneous channels',
    'Resistance and RTD simulation',
    'Thermocouple measurement, two simultaneous channels',
    'Thermocouple simulation',
    'HART, FOUNDATION Fieldbus, and Profibus PA communicator',
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
            src="https://www.beamex.com/app/uploads/2024/04/header_image_field_calibration_v1-scaled.jpg"
            alt="Field Calibration Equipment"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-h1-mobile md:text-h1-desktop font-bold mb-6 drop-shadow-lg">
              Field Calibration
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Versatile, accurate, and reliable. The Beamex MC6 family of calibrators meets the diverse calibration
              needs of process industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
          Whether working in the field or in hazardous environments, the MC6 family of field calibrators offers models
          tailored to your requirements.
        </p>
      </section>

      {/* Common Features */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4">
              Common Features of the Beamex MC6 Family
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Capabilities */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4">
            Common Capabilities of the Beamex MC6 Family
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{capability}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MC6 Family Products */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {mc6Products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center p-8">
                      <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-h3-mobile md:text-h3-desktop font-bold mb-4">{product.name}</h3>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    <div>
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2">
                          Read more about {product.name} <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Field Calibration Products */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4">
              Other Field Calibration Equipment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center p-8">
                  <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h3-mobile font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 w-full">
                      Read more <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Field Calibration"
        title="Elevate Your Field Calibration"
        description="Explore the Beamex MC6 family of field calibrators and find the perfect solution for your on-site calibration needs."
      />
    </div>
  );
};

export default FieldCalibration;
