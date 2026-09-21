import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, Settings, Laptop, Package, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const WorkshopCalibration: React.FC = () => {
  // Value propositions moved to top as recommended by Beamex marketing review
  const valuePropositions = [
    {
      title: 'Modular design',
      badge: 'Future-proof & scalable',
      icon: <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Easily configure and expand your workshop solution with modular components that grow with your calibration needs over time.',
    },
    {
      title: 'Digital integration',
      badge: '100% paperless workflow',
      icon: <Laptop className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Seamlessly connect with Beamex calibration management software (CMX & LOGiCAL) for paperless, automated workflows and traceable compliance.',
    },
    {
      title: 'Flexible configurations',
      badge: 'Ergonomic & adaptable',
      icon: <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Choose from bench, trolley, or tabletop configurations to fit your exact workshop footprint, laboratory space, and workflow requirements.',
    },
  ];

  // Configurations with pictures instead of generic icons
  const configurations = [
    {
      name: 'CENTRiCAL bench',
      badge: 'Fixed calibration station',
      image: 'https://www.beamex.com/app/uploads/2020/05/CENTRiCAL-straight-bench-1.jpg',
      fallbackImage: '/images/Beamex CENTRiCAL.png',
      description:
        'The Beamex CENTRiCAL calibration and test bench is available as a straight bench and as a corner bench version with motorized height adjustment and ESD protection.',
      highlights: ['Straight & corner layouts', 'Motorized height adjustment', 'Integrated AC/DC power & calibration modules'],
    },
    {
      name: 'CENTRiCAL trolley',
      badge: 'Mobile workshop solution',
      image: 'https://www.beamex.com/app/uploads/2020/05/CENTRiCAL-trolley.jpg',
      fallbackImage: '/images/Workshop Calibration.jpg',
      description:
        'The Beamex CENTRiCAL trolley is equipped with heavy-duty wheels, an adjustable shelf, and a lockable drawer unit for secure mobile workshop calibration.',
      highlights: ['Heavy-duty lockable casters', 'Customizable storage drawers', 'On-the-go calibration versatility'],
    },
    {
      name: 'CENTRiCAL tabletop',
      badge: 'Compact & portable case',
      image: 'https://www.beamex.com/app/uploads/2020/05/CENTRiCAL-tabletop.jpg',
      fallbackImage: '/images/Beamex MC6-WS.png',
      description:
        'The Beamex CENTRiCAL tabletop case is a convenient solution if you already have tables in your workshop, providing full module capability in a compact footprint.',
      highlights: ['Space-saving tabletop design', 'Plugs into existing workbenches', 'Easily relocate between departments'],
    },
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

      {/* Hero Section with Header Image */}
      <section className="relative bg-navy-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.beamex.com/app/uploads/2024/04/header_image_workshop_calibration_v1-scaled.jpg"
            alt="Workshop Calibration"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-blue-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Standardized yet configurable</span>
          </div>
          <h1 className="text-h1-mobile md:text-h1-desktop font-bold mb-6 drop-shadow-lg tracking-tight">
            Beamex CENTRiCAL workshop calibration
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200 drop-shadow-md">
            The central place for all your workshop calibrations. Standardized yet configurable, easy to use, versatile, and ergonomic.
          </p>
        </div>
      </section>

      {/* VALUE ON TOP: Key Value Propositions Section */}
      <section className="py-12 md:py-16 bg-blue-50/50 dark:bg-gray-900/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-foreground mb-3">
              Why choose Beamex CENTRiCAL?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Built on decades of Nordic engineering and calibration expertise to maximize efficiency, safety, and compliance in your workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
                    <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction & Main Showcase */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>Decades of proven expertise</span>
            </div>
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-foreground">
              A central station for all your workshop calibrations
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              The Beamex CENTRiCAL workshop calibration solution reflects the result of decades of experience providing world-class solutions for the process industries.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              The modular architecture makes CENTRiCAL exceptionally versatile: configure it according to your exact needs, with the flexibility to add, upgrade, or interchange modules as your process expands.
            </p>
            <div className="pt-2">
              <a
                href="https://www.beamex.com/calibrators/beamex-centrical-calibration-bench/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold text-base"
              >
                Learn more on Beamex.com <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden border-2 shadow-xl bg-card">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-navy-950 dark:to-navy-900 flex items-center justify-center p-6 sm:p-8">
                <img
                  src="/images/Beamex CENTRiCAL.png"
                  alt="Beamex CENTRiCAL workshop calibration solution"
                  className="max-w-full max-h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* PICTURES INSTEAD OF ICONS: CENTRiCAL Configurations */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-foreground mb-3">
              Available CENTRiCAL configurations
            </h2>
            <p className="text-muted-foreground text-base">
              Tailored to your workspace: choose the form factor that best fits your calibration volume, floor layout, and operational mobility requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {configurations.map((config, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col bg-card"
              >
                {/* Product Picture Container */}
                <div className="relative h-56 sm:h-60 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={config.image}
                    alt={config.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== config.fallbackImage) {
                        target.src = config.fallbackImage;
                      }
                    }}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-navy-900/85 text-white backdrop-blur-sm border border-white/20">
                    {config.badge}
                  </span>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {config.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {config.description}
                  </p>

                  <div className="border-t border-border pt-4 mt-auto">
                    <h4 className="text-xs font-semibold text-foreground tracking-wide mb-2">
                      Key highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {config.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Workflow Section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-foreground mb-4">
            Benefit from a fully digital workflow
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Eliminate error-prone manual paper entry with automated data communication between workshop calibrators and calibration software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Connect with calibration management software
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The MC6-WS Advanced Workshop Calibrator and Communicator is the heart of the CENTRiCAL workshop solution. It is a documenting calibrator that communicates directly with Beamex calibration management software (LOGiCAL or CMX), creating an unbroken digital thread of calibration records.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Manage what, how, and when
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Use Beamex calibration software to schedule calibrations, store historical trends, assign tolerances, and automatically execute calibration procedures with the MC6-WS without human transcription errors.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://www.beamex.com/calibrators/beamex-centrical-calibration-bench/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                  Read more about CENTRiCAL <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden border-2 shadow-xl bg-card">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 dark:from-navy-950 dark:to-navy-900 flex items-center justify-center p-8">
                <img
                  src="/images/Beamex MC6-WS.png"
                  alt="Beamex MC6-WS workshop calibrator"
                  className="max-w-full max-h-full object-contain drop-shadow-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Workshop calibration"
        solution="workshop-calibration"
        model="Beamex CENTRiCAL modular bench"
        inquiryType="quote"
        title="Transform your workshop calibration"
        description="Discover how the Beamex CENTRiCAL solution can streamline your workshop operations with modular, professional calibration capabilities."
        buttonText="Request official bench quotation"
      />
    </div>
  );
};

export default WorkshopCalibration;
