import React from 'react';
import { Card, CardContent } from './ui/card';
import { ShieldCheck, Award, CheckCircle2, MapPin, Building2, Zap, FlaskConical, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TrustSignals: React.FC = () => {
  const certifications = [
    {
      title: 'ISO/IEC 17025',
      subtitle: 'Accredited calibration standards',
      desc: 'Traceable measurements and accredited calibration certificates compliant with international testing standards.',
      icon: <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'ISO 9001:2015',
      subtitle: 'Quality management certified',
      desc: 'Rigorous quality procedures ensuring consistent accuracy, traceability, and customer satisfaction.',
      icon: <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'ATEX & IECEx',
      subtitle: 'Intrinsically safe compliance',
      desc: 'Certified intrinsically safe calibrators engineered for hazardous Zone 0, 1, and 2 environments.',
      icon: <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'FDA 21 CFR Part 11',
      subtitle: 'Pharma data integrity',
      desc: 'Tamper-proof audit trails, electronic signatures, and secure calibration data management for regulated plants.',
      icon: <FlaskConical className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    },
  ];

  const clientSectors = [
    { name: 'Power generation', icon: <Zap className="w-6 h-6" />, count: '25+ plants' },
    { name: 'Oil, gas & petrochem', icon: <Factory className="w-6 h-6" />, count: '15+ refineries' },
    { name: 'Pharma & biotech', icon: <FlaskConical className="w-6 h-6" />, count: '30+ facilities' },
    { name: 'Food & beverage', icon: <Building2 className="w-6 h-6" />, count: '40+ manufacturers' },
  ];

  const caseStudies = [
    {
      title: 'Major power generation utility',
      category: 'Power generation',
      result: '55% reduction in calibration time',
      metric: '55% faster',
      summary:
        'Replaced disconnected manual gauges with Beamex MC6 documenting calibrators and integrated CMX software, slashing outage turnaround times.',
    },
    {
      title: 'Leading multinational pharmaceutical lab',
      category: 'Pharmaceutical',
      result: '100% audit readiness & paperless compliance',
      metric: 'Zero audit findings',
      summary:
        'Eliminated manual paper certificates with Beamex automated digital workflows, achieving total FDA 21 CFR Part 11 data integrity compliance.',
    },
    {
      title: 'Petrochemical refining complex',
      category: 'Oil & gas',
      result: 'Zero incidents in hazardous zone calibrations',
      metric: '100% ATEX certified',
      summary:
        'Standardized plant-wide on Beamex MC6-Ex intrinsically safe calibrators, ensuring technician safety without sacrificing precision.',
    },
  ];

  const serviceHubs = [
    {
      region: 'NCR & Central Luzon',
      city: 'Metro Manila (Quezon City HQ)',
      role: 'Main technical hub & calibration laboratory',
      coverage: 'Metro Manila, Bataan, Subic, Clark, Pampanga, Bulacan',
    },
    {
      region: 'Southern Luzon',
      city: 'Calabarzon Field Operations',
      role: 'On-site industrial engineering support',
      coverage: 'Batangas, Laguna, Cavite, Quezon industrial corridors',
    },
    {
      region: 'Visayas operations',
      city: 'Cebu City Regional Hub',
      role: 'Regional service & equipment dispatch',
      coverage: 'Cebu, Iloilo, Bacolod, Leyte manufacturing & energy plants',
    },
    {
      region: 'Mindanao hub',
      city: 'Davao & Cagayan de Oro',
      role: 'Field service & preventive recalibration',
      coverage: 'Agri-processing, mining, power generation facilities',
    },
  ];

  return (
    <div className="w-full space-y-16 py-12 md:py-20 bg-background text-foreground">
      {/* 1. Official Certifications & Compliance Strip */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Industrial proof & compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Accredited quality & industry certifications
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Industrial buyers require proven compliance. Our equipment, laboratories, and procedures adhere to the most stringent global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-extrabold text-xl text-foreground mb-1">{cert.title}</h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide mb-2">
                  {cert.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {cert.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 2. Client Industry Trust Strip */}
      <div className="bg-muted/40 border-y border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Trusted across critical industrial sectors
            </h3>
            <p className="text-sm text-muted-foreground">
              Powering accuracy and safety in hundreds of process and manufacturing plants nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {clientSectors.map((sector, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-card border border-border hover:border-blue-500 shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  {sector.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{sector.name}</h4>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {sector.count} served
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Featured Case Studies */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
              <Award className="w-4 h-4" />
              <span>Proven results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Industrial case studies & ROI
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Request customized case studies for your industry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, idx) => (
            <Card
              key={idx}
              className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col bg-card"
            >
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold tracking-wide px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {study.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {study.metric}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {study.title}
                </h3>
                <div className="p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 mb-3">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-200">
                    Impact: {study.result}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                  {study.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 4. Service Coverage Map */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-2 border-blue-500/30 bg-gradient-to-br from-navy-950 via-navy-900 to-blue-950 text-white shadow-xl">
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Nationwide technical reach</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                    Philippine service coverage & rapid field support
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Accuro delivers comprehensive calibration support across Luzon, Visayas, and Mindanao. Our certified metrology engineers and rapid logistics ensure your operations never experience unnecessary downtime.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {serviceHubs.map((hub, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <h4 className="font-bold text-sm text-white">{hub.region}</h4>
                      </div>
                      <p className="text-xs text-blue-300 font-semibold mb-1">{hub.city}</p>
                      <p className="text-[11px] text-gray-400 leading-snug">{hub.coverage}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Local calibration lab in QC</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>On-site plant recalibration</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Finland factory link</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Map Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold tracking-wider text-blue-300">
                      Regional coverage map
                    </span>
                    <h4 className="text-lg font-bold text-white">Republic of the Philippines</h4>
                  </div>

                  {/* Stylized Island Groups Visual Representation */}
                  <div className="space-y-3 py-2">
                    <div className="p-3 rounded-lg bg-blue-600/20 border border-blue-400/30 text-left">
                      <div className="flex items-center justify-between text-xs font-bold text-blue-200">
                        <span>Luzon (NCR / North / South)</span>
                        <span className="px-2 py-0.5 rounded bg-blue-500/30 text-[10px]">Active hub</span>
                      </div>
                      <p className="text-[11px] text-gray-300 mt-1">
                        Headquarters, primary calibration lab, fast-dispatch technicians.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-600/20 border border-blue-400/30 text-left">
                      <div className="flex items-center justify-between text-xs font-bold text-blue-200">
                        <span>Visayas (Cebu / Iloilo)</span>
                        <span className="px-2 py-0.5 rounded bg-blue-500/30 text-[10px]">Active hub</span>
                      </div>
                      <p className="text-[11px] text-gray-300 mt-1">
                        Regional service center serving central industrial corridors.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-600/20 border border-blue-400/30 text-left">
                      <div className="flex items-center justify-between text-xs font-bold text-blue-200">
                        <span>Mindanao (Davao / CDO)</span>
                        <span className="px-2 py-0.5 rounded bg-blue-500/30 text-[10px]">Active hub</span>
                      </div>
                      <p className="text-[11px] text-gray-300 mt-1">
                        Dedicated service support for heavy industry, mining, and agro-refining.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Link to="/contact">
                      <button className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2">
                        <span>Request service in your region</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TrustSignals;
