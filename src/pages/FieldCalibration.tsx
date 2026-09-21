import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Gauge,
  Zap,
  Sparkles,
  Flame,
  Cpu,
} from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const FieldCalibration: React.FC = () => {
  // Value propositions placed on top
  const valuePropositions = [
    {
      title: 'Multifunctional calibration',
      badge: 'All-in-one handheld',
      icon: <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Calibrate pressure, temperature, and electrical signals simultaneously in a single, rugged portable device.',
    },
    {
      title: 'Intrinsically safe compliance',
      badge: 'ATEX & IECEx certified',
      icon: <Flame className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'The MC6-Ex is certified for all hazardous areas (Zone 0, 1, and 2), providing ultimate safety in oil, gas, and chemical environments.',
    },
    {
      title: '100% digital data flow',
      badge: 'Paperless automation',
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Documenting calibrators seamlessly communicate with Beamex CMX & LOGiCAL software, eliminating pen-and-paper transcription mistakes.',
    },
    {
      title: 'Fieldbus communicator',
      badge: 'Multi-bus built in',
      icon: <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Built-in field communicator for HART, FOUNDATION Fieldbus H1, and Profibus PA smart instruments.',
    },
  ];

  const mc6Products = [
    {
      name: 'Beamex MC6 advanced field calibrator',
      badge: 'Flagship documenting calibrator',
      image: '/images/Beamex MC6.png',
      description:
        'A high-accuracy, versatile field calibrator and multi-bus communicator offering precision measurement and generation for pressure, temperature, and electrical signals.',
      features: [
        'Internal and external pressure modules',
        'High-accuracy RTD & thermocouple simulation',
        'Integrated HART, FF, and Profibus communicator',
        'Large full-color touchscreen with glove operation',
      ],
      link: 'https://www.beamex.com/calibrators/beamex-mc6/',
    },
    {
      name: 'Beamex MC6-Ex intrinsically safe calibrator',
      badge: 'Certified hazardous zone 0/1/2',
      image: '/images/Beamex MC6-Ex.png',
      description:
        'The world’s most accurate intrinsically safe field calibrator and communicator. ATEX, IECEx, and North American certified for safe operation in explosive atmospheres.',
      features: [
        'Approved for use in all Ex zones (Zone 0, 1, 2)',
        'No hot work permit required',
        'Full documenting calibrator functionality',
        'Rugged IP65 dust and water resistant enclosure',
      ],
      link: 'https://www.beamex.com/calibrators/beamex-mc6-ex/',
    },
    {
      name: 'Beamex MC6-T temperature calibrator',
      badge: 'Temperature block + calibrator',
      image: '/images/Beamex MC6-T.png',
      description:
        'Combines a state-of-the-art temperature dry block with built-in multifunction process calibrator and communicator technology for versatile on-site temperature calibrations.',
      features: [
        'Active multi-zone temperature control',
        'Interchangeable inserts for diverse probes',
        'Built-in multifunction documenting calibrator',
        'Automated temperature sensor calibration procedures',
      ],
      link: 'https://www.beamex.com/calibrators/beamex-mc6-t/',
    },
  ];

  const accessories = [
    {
      name: 'Beamex ePG electric pressure pump',
      badge: 'Electric pressure generation',
      image: '/images/Beamex ePG.png',
      description:
        'Portable, battery-operated electric pressure pump and controller for industrial pressure calibration from -0.85 to 20 bar (-12 to 300 psi).',
      link: 'https://www.beamex.com/calibrators/beamex-epg/',
    },
    {
      name: 'Beamex PG manual calibration pumps',
      badge: 'Hydraulic & pneumatic',
      image: '/images/Calibration Pumps.png',
      description:
        'Robust hand pumps ranging from fine low-pressure pneumatic control up to 700 bar (10,000 psi) high-pressure hydraulic generation.',
      link: 'https://www.beamex.com/calibrators/beamex-pg-calibration-pumps/',
    },
    {
      name: 'External pressure modules (EXT)',
      badge: 'Modular pressure range',
      image: '/images/Beamex External Pressure Modules.png',
      description:
        'Expand your measurement range from vacuum up to 1,000 bar using interchangeable smart external pressure modules.',
      link: 'https://www.beamex.com/calibrators/beamex-ext-modules/',
    },
    {
      name: 'Smart temperature reference sensors',
      badge: 'Reference probes',
      image: '/images/Beamex Temperature Sensors.png',
      description:
        'High-stability Pt100 reference sensors (RPRT, IPRT, SIRT) with internal sensor memory for plug-and-play traceable calibration.',
      link: 'https://www.beamex.com/calibrators/temperature-sensors/',
    },
  ];

  const capabilities = [
    'Pressure measurement (internal & external modules up to 1000 bar)',
    'Voltage measurement (±30 V) and generation (±10 V)',
    'Current measurement (±100 mA) and generation (0–25 mA)',
    'Frequency measurement (0.0028 Hz to 50 kHz) and pulse generation',
    'Switch state sensing with automated threshold detection',
    'Built-in 24 VDC loop power supply for transmitters',
    'Resistance & RTD measurement (two simultaneous channels)',
    'Resistance & RTD simulation for all standard sensor curves',
    'Thermocouple measurement and simulation (cold junction compensation)',
    'HART, FOUNDATION Fieldbus H1, and Profibus PA multi-bus communication',
    'Automated step tests, ramp tests, and leak tests',
    'Direct digital synchronization with Beamex CMX and LOGiCAL software',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/beamex"
            className="inline-flex items-center gap-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Beamex solutions</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.beamex.com/app/uploads/2024/04/header_image_field_calibration_v1-scaled.jpg"
            alt="Field Calibration Equipment"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-blue-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Beamex MC6 advanced family</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Field calibration & process instrumentation
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200 drop-shadow-md">
            Versatile, accurate, and rugged. The Beamex MC6 family meets the diverse calibration demands of process industries worldwide—even in explosive hazardous zones.
          </p>
        </div>
      </section>

      {/* VALUE ON TOP: Key Advantages */}
      <section className="py-12 md:py-16 bg-blue-50/50 dark:bg-gray-900/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Why choose the Beamex MC6 family?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Engineered to replace multiple separate tools with one rugged, highly accurate documenting calibrator.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((item, idx) => (
              <Card
                key={idx}
                className="border-2 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold tracking-wide px-2 py-0.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Calibrators: MC6, MC6-Ex, MC6-T */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Flagship field calibrators
          </h2>
          <p className="text-muted-foreground text-base">
            Select the calibrator tailored to your environment: general plant use, explosive atmospheres, or combined temperature calibration.
          </p>
        </div>

        <div className="space-y-10">
          {mc6Products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-blue-50 to-blue-100 dark:from-navy-950 dark:to-navy-900 rounded-2xl flex items-center justify-center p-6 border border-border">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block text-xs font-bold tracking-wide px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {product.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold tracking-wide text-foreground mb-2">
                      Key capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                        Explore {product.name} specs <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Capabilities Checklist */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Comprehensive measurement & generation specs
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Engineered with laboratory-grade metrological accuracy for all standard industrial instrumentation signals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-6xl mx-auto">
            {capabilities.map((cap, cIdx) => (
              <div
                key={cIdx}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-card border border-border text-xs sm:text-sm text-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pressure Generation & Accessories */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Pumps, modules & temperature accessories
          </h2>
          <p className="text-muted-foreground text-base">
            Complete your field calibration toolkit with electric & manual pressure pumps, external modules, and precision reference probes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((acc, aIdx) => (
            <Card
              key={aIdx}
              className="overflow-hidden border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col bg-card"
            >
              <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4 flex items-center justify-center">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-wide text-blue-600 dark:text-blue-400 mb-1">
                  {acc.badge}
                </span>
                <h3 className="font-bold text-base text-foreground mb-2">
                  {acc.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {acc.description}
                </p>
                <a
                  href={acc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs font-semibold">
                    View specs <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Field calibration"
        solution="field-calibration"
        model="Beamex MC6 multifunction field calibrator"
        inquiryType="quote"
        title="Upgrade your field calibration tools"
        description="Schedule a hands-on demonstration with Beamex MC6 field calibrators or consult our technical team to build the ideal kit for your plant."
        buttonText="Request official MC6 quote"
      />
    </div>
  );
};

export default FieldCalibration;
