import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Users,
  GraduationCap,
  HeadphonesIcon,
  Shield,
  Award,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const BeamexServices: React.FC = () => {
  // Value propositions placed ON TOP as requested by client review
  const valuePropositions = [
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Expert guidance',
      badge: 'Certified metrologists',
      description:
        'World-leading specialists and local Filipino calibration engineers with deep industry knowledge and process calibration expertise.',
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Full lifecycle support',
      badge: 'End-to-end care',
      description:
        'Comprehensive services from implementation, system design, and data migration to ongoing maintenance and process optimization.',
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Quality assurance',
      badge: 'ISO/IEC 17025 traceable',
      description:
        'Accredited calibration certificates and traceable measurement standards to satisfy the most demanding regulatory audits.',
    },
  ];

  // Expert services with people and action imagery
  const expertServices = [
    {
      title: 'System onboarding & migration',
      badge: 'Seamless adoption',
      icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      description:
        'Our technical team guides you through software architecture, data migration, and hypercare support for both Beamex CMX and LOGiCAL systems.',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Legacy database migration', 'Custom workflow mapping', 'Dedicated hypercare period'],
    },
    {
      title: 'Hands-on training & certification',
      badge: 'Technician upskilling',
      icon: <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      description:
        'Empower your team with practical calibration workshops, classroom lectures, and e-learning courses conducted by certified specialists.',
      image:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Interactive equipment drills', 'Local language support', 'Operator competency certificates'],
    },
    {
      title: 'Technical support & helpdesk',
      badge: 'Direct specialist access',
      icon: <HeadphonesIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      description:
        'Rapid response troubleshooting, firmware assistance, and application engineering support to keep your operations running uninterrupted.',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Priority ticket response', 'Remote diagnostics', 'Application advice from engineers'],
    },
    {
      title: 'Software service agreements',
      badge: 'Continuous updates',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      description:
        'Protect and maximize your software investment with scheduled upgrades, security patches, cloud backups, and compliance enhancements.',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Regular version upgrades', 'Audit compliance updates', 'Unlimited software support'],
    },
  ];

  const servicePlans = [
    {
      name: 'Beamex Care Plan',
      badge: 'Comprehensive warranty & service',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Free repairs, including accidental equipment damage',
        'Replacement of wearable components & filters',
        'Applicable firmware and software updates included',
        'Shipments to and from the Beamex accredited laboratory in Pietarsaari, Finland',
      ],
      link: 'https://www.beamex.com/services/service-plans/beamex-care-plan/',
    },
    {
      name: 'Beamex Calibration Plan',
      badge: 'Periodic recalibration service',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Designed for existing equipment and legacy models',
        'Scheduled annual or bi-annual ISO 17025 accredited calibration',
        'Complete traceable calibration certificate with measurement data',
        'Pre-scheduled recalibration slots to minimize plant downtime',
      ],
      link: 'https://www.beamex.com/services/service-plans/beamex-calibration-plan/',
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
            src="https://www.beamex.com/app/uploads/2024/04/header_image_services_v1-scaled.jpg"
            alt="Beamex Services"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-blue-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Dedicated metrology & support engineers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
            Expert services, training & support
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200 drop-shadow-md">
            Partner with Beamex-certified calibration specialists. From initial consultation and training to accredited recalibration and lifecycle maintenance, we keep your equipment operating with pinpoint accuracy.
          </p>
        </div>
      </section>

      {/* VALUE ON TOP: Key Value Propositions Section */}
      <section className="py-12 md:py-16 bg-blue-50/50 dark:bg-gray-900/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Comprehensive service value
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Beyond supplying world-class instruments, Accuro and Beamex provide the engineering expertise and human support essential for peak industrial performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {valuePropositions.map((item, idx) => (
              <Card
                key={idx}
                className="border-2 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-card text-center"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <span className="inline-block text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-3">
                    {item.badge}
                  </span>
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

      {/* Calibration Solution Services with Real People & Action Photos */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
            <Users className="w-5 h-5" />
            <span>People-powered support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Calibration solution services
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Our certified specialists work shoulder-to-shoulder with your engineering staff to ensure smooth adoption, proper training, and reliable ongoing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertServices.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col bg-card"
            >
              {/* People / Engineer Photography */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600 text-white shadow">
                  {service.badge}
                </span>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="border-t border-border pt-4 mt-auto">
                  <ul className="space-y-1.5">
                    {service.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.beamex.com/services/expert-services/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              Read more on Beamex expert services <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Equipment Services & Service Plans with Imagery */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Equipment recalibration & protection plans
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Maintain equipment measurement uncertainty, satisfy ISO 9001/ISO 17025 compliance, and protect your investments through official Beamex service agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {servicePlans.map((plan, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col bg-card"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600 text-white shadow">
                    {plan.badge}
                  </span>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button variant="outline" className="w-full gap-2 border-2 hover:bg-blue-600 hover:text-white">
                      Explore {plan.name} details <ArrowRight className="w-4 h-4" />
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
        productCategory="Beamex services"
        solution="beamex-services"
        model="Beamex service agreement & recalibration"
        inquiryType="quote"
        title="Consult our calibration specialists"
        description="Connect with Accuro's certified service engineers to discuss tailored training, accredited recalibration schedules, or service plan coverage."
        buttonText="Request service agreement proposal"
      />
    </div>
  );
};

export default BeamexServices;
