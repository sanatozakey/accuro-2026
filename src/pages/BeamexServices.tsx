import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, Users, GraduationCap, HeadphonesIcon, Wrench, Shield, Award } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const BeamexServices: React.FC = () => {
  const expertServices = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'Onboarding',
      description: 'System introduction, design, data migration, training and hypercare, available for both CMX and LOGiCAL.',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: 'Training',
      description: 'Hands-on workshops, classroom lectures, online training and e-learning. Our international partners can offer training in your local language.',
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
      title: 'Support',
      description: 'Beamex Support Services aim to offer the best possible customer experience to Beamex customers worldwide.',
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: 'Software Service Agreements',
      description: 'Full lifecycle service that helps you maximize the return on your software investment.',
    },
  ];

  const servicePlans = [
    {
      name: 'Beamex Care Plan',
      icon: <Award className="w-12 h-12 text-primary" />,
      features: [
        'Free repairs, even with accidental damage',
        'Replacement of wearable parts',
        'Applicable updates of firmware',
        'Free shipments to and from the Beamex laboratory in Pietarsaari, Finland',
      ],
      link: 'https://www.beamex.com/services/service-plans/beamex-care-plan/',
    },
    {
      name: 'Beamex Calibration Plan',
      icon: <Wrench className="w-12 h-12 text-primary" />,
      features: [
        'Designed for products that are no longer in production',
        'For calibrators that can\'t go under a Care Plan',
        'Regular calibration services',
        'Maintain equipment accuracy and compliance',
      ],
      link: 'https://www.beamex.com/services/service-plans/beamex-calibration-plan/',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/beamex" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Beamex solutions</span>
          </Link>
        </div>
      </div>

      {/* Hero Section with Header Image */}
      <section className="relative bg-navy-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.beamex.com/app/uploads/2024/04/header_image_services_v1-scaled.jpg"
            alt="Beamex Services"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-h1-mobile md:text-h1-desktop font-bold mb-6 drop-shadow-lg">
              Services
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Learn more about Beamex expert services, training, support, laboratories, recalibration services, repairs
              and service plans.
            </p>
          </div>
        </div>
      </section>

      {/* Calibration Solution Services */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4">
            Calibration solution services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let the Beamex team of experienced, world-leading specialists guide you throughout the solution lifecycle,
            from definition to daily operation, and help you get the most out of Beamex calibration technology.
          </p>
        </div>

        <div className="mb-12">
          <Card className="border-2">
            <CardContent className="pt-6">
              <h3 className="text-h3-mobile md:text-h3-desktop font-bold mb-4">
                Support throughout the solution lifecycle
              </h3>
              <p className="text-muted-foreground mb-6">
                Beamex expert services encompass everything from initial discussion and design of your process to the
                implementation, training and support to ensure a successful adoption by the customer business.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertServices.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.beamex.com/services/expert-services/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              Read more about Beamex Expert Services <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Equipment Services */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4">
              Equipment services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide calibration services, repairs and convenient service plans to help you keep your calibration
              equipment operating at its full potential throughout its lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calibration and Repair Services */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-h3-mobile md:text-h3-desktop">
                    Calibration and repair services
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All instruments, including calibrators, need to be calibrated regularly. Keeping your calibrator up to
                  date with regular calibration is important to maintain accuracy and compliance.
                </p>
                <p className="text-muted-foreground mb-6">
                  A traceable, accredited calibration certificate is needed if your plant operates according to a quality
                  control system, such as the ISO 9001 quality control system, and/or if you must provide proof of
                  measurements and traceability to your customers.
                </p>
                <a href="https://www.beamex.com/services/recalibration-and-repairs/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 w-full">
                    Read more about Recalibration and Repair Services <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Service Plans */}
            <div className="space-y-6">
              <h3 className="text-h3-mobile md:text-h3-desktop font-bold">
                Service plans
              </h3>
              <p className="text-muted-foreground">
                Maintain and protect your equipment with the Beamex service plans. The Beamex service plans are contracts
                that cover annual recalibrations, repairs, and much more.
              </p>

              {servicePlans.map((plan, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        {plan.icon}
                      </div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={plan.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2 w-full">
                        Read more <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert guidance</h3>
                <p className="text-sm text-muted-foreground">
                  World-leading specialists with deep industry knowledge and calibration expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full lifecycle support</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive services from implementation to ongoing maintenance and optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quality assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Accredited calibration certificates and traceable measurement standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Beamex Services"
        title="Get Expert Support"
        description="Connect with our team to learn about Beamex expert services, training, support, and service plans tailored to your needs."
      />
    </div>
  );
};

export default BeamexServices;
