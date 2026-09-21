import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Cloud,
  Server,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Layers,
} from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

const CalibrationManagement: React.FC = () => {
  const valuePropositions = [
    {
      title: 'Automated scheduling & alerts',
      badge: 'Zero overdue assets',
      icon: <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Proactively tracks instrument positions, inspection schedules, and calibration due dates, preventing overdue tags and audit non-conformities.',
    },
    {
      title: '100% paperless data flow',
      badge: 'Zero transcription errors',
      icon: <FileCheck2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Synchronizes directly with Beamex documenting calibrators to upload work orders and download completed results without pen and paper.',
    },
    {
      title: 'Audit readiness & 21 CFR Part 11',
      badge: 'Regulatory compliance',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Features electronic signatures, tamper-evident audit trails, and instant PDF calibration certificates complying with FDA 21 CFR Part 11 and ISO 17025.',
    },
    {
      title: 'Cloud & on-premises options',
      badge: 'Flexible architecture',
      icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description:
        'Choose Beamex LOGiCAL for instant SaaS cloud deployment, or Beamex CMX for enterprise on-premises database with ERP integration.',
    },
  ];

  const comparisonRows = [
    { feature: 'Deployment mode', logical: '100% cloud (SaaS)', cmx: 'On-premises server or private cloud' },
    { feature: 'Target audience', logical: 'Agile plants & multi-site teams', cmx: 'Enterprise industrial & regulated plants' },
    { feature: 'IT maintenance', logical: 'Zero local server maintenance', cmx: 'Internal IT infrastructure management' },
    { feature: 'Beamex calibrator sync', logical: 'Yes (web / Beamex bMobile)', cmx: 'Yes (direct USB / network / bMobile)' },
    { feature: 'ERP / CMMS integration', logical: 'API / export capabilities', cmx: 'Direct SAP PM, IBM Maximo, Emerson AMS' },
    { feature: 'FDA 21 CFR Part 11', logical: 'Secure audit logs', cmx: 'Full compliant module & e-signatures' },
    { feature: 'Pricing model', logical: 'Usage-based annual subscription', cmx: 'Perpetual licenses with maintenance' },
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
            src="https://www.beamex.com/app/uploads/2024/04/header_image_calibration_management_v1-scaled.jpg"
            alt="Calibration Management Software"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-blue-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Digital calibration ecosystem</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Calibration management software
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200 drop-shadow-md">
            Streamline your asset lifecycle, eliminate paperwork, and automate calibration execution with Beamex LOGiCAL (Cloud) and Beamex CMX (Enterprise).
          </p>
        </div>
      </section>

      {/* VALUE ON TOP: Key Software Benefits */}
      <section className="py-12 md:py-16 bg-blue-50/50 dark:bg-gray-900/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Why digitize with Beamex software?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Manual spreadsheets and paper binders cause up to 5% transcription error rates and fail audits. A dedicated CMS guarantees automated traceability.
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
                    <span className="text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
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

      {/* Product Deep Dives: LOGiCAL vs CMX */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Beamex LOGiCAL */}
        <Card className="overflow-hidden border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-navy-950 dark:to-navy-900 rounded-2xl flex items-center justify-center p-6 border border-border">
                <img
                  src="/images/Calibration Management.webp"
                  alt="Beamex LOGiCAL Software"
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold tracking-wider">
                <Cloud className="w-3.5 h-3.5" />
                <span>Cloud-hosted SaaS platform</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Beamex LOGiCAL calibration software
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Beamex LOGiCAL is a modern, subscription-based calibration management platform. Accessible from any modern browser, LOGiCAL lets teams get up and running in minutes with zero IT infrastructure costs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Unlimited users and instruments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Automatic cloud backups and updates</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Pay-as-you-use annual subscription</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Direct sync with MC6 and bMobile</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.beamex.com/calibration-software/beamex-logical/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                    Explore LOGiCAL details <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Beamex CMX */}
        <Card className="overflow-hidden border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-5 flex justify-center lg:order-2">
              <div className="w-full max-w-sm aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-navy-950 dark:to-navy-900 rounded-2xl flex items-center justify-center p-6 border border-border">
                <img
                  src="https://www.beamex.com/app/uploads/2022/09/cmx-calibration-software-1280-720px-v1.jpg"
                  alt="Beamex CMX Enterprise Software"
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wider">
                <Server className="w-3.5 h-3.5" />
                <span>Enterprise on-premises & validated</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Beamex CMX enterprise calibration software
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Beamex CMX is an all-in-one enterprise calibration solution engineered for complex industrial plants, regulated pharmaceutical sites, and heavy manufacturing with stringent compliance and ERP integration requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Full FDA 21 CFR Part 11 compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>SAP PM & IBM Maximo bi-directional sync</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Advanced measurement uncertainty analysis</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Complete on-site data custody & audit trails</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.beamex.com/calibration-software/cmx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                    Explore CMX capabilities <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Comparing LOGiCAL vs. CMX
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Which solution fits your plant’s operational scope, regulatory needs, and IT policy?
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border-2 border-border shadow-md bg-card">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted text-foreground border-b border-border font-bold">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-blue-600 dark:text-blue-400">Beamex LOGiCAL (cloud)</th>
                  <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">Beamex CMX (enterprise)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/40 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-foreground">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-muted-foreground">{row.logical}</td>
                    <td className="p-4 sm:p-5 text-muted-foreground">{row.cmx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Beamex bMobile App Integration */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile field execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Beamex bMobile 2.0 calibration application
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Use standard mobile tablets and smartphones (iOS, Android, Windows) to execute calibrations and plant inspections offline in the field. Seamlessly upload completed checklists to LOGiCAL or CMX when reconnected to network.
            </p>
            <div className="pt-2">
              <a
                href="https://www.beamex.com/calibration-software/bmobile-calibration-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold text-sm"
              >
                <span>Read more about Beamex bMobile</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="p-6 rounded-2xl bg-muted/50 border border-border text-center space-y-3 w-full">
              <Smartphone className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto" />
              <h3 className="font-bold text-base text-foreground">Mobile & offline capable</h3>
              <p className="text-xs text-muted-foreground">
                Document non-communicating instruments, safety valves, and weighing scales directly on your phone or tablet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Calibration management"
        solution="calibration-management"
        model="Beamex CMX & LOGiCAL software"
        inquiryType="quote"
        title="Schedule a software architecture consultation"
        description="Our software engineers can help evaluate your workflows and demonstrate how Beamex LOGiCAL or CMX can transform your plant's data integrity."
        buttonText="Request software demo & pricing"
      />
    </div>
  );
};

export default CalibrationManagement;
