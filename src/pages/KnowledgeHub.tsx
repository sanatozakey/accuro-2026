import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  BookOpen,
  Cloud,
  FileCheck2,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
} from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import { BeamexVideoSection } from '../components/BeamexVideoSection';

interface Guide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  icon: React.ReactNode;
  summary: string;
  content: {
    introduction: string;
    keyPoints: { title: string; desc: string }[];
    beamexContext: string;
    takeaway: string;
  };
}

const educationalGuides: Guide[] = [
  {
    id: 'what-is-cms',
    title: 'What is Calibration Management Software (CMS)?',
    category: 'Software & digitalization',
    readTime: '5 min read',
    icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    summary:
      'Discover how specialized calibration management software replaces error-prone spreadsheets, automates scheduling, and ensures total measurement traceability.',
    content: {
      introduction:
        'Calibration Management Software (CMS) is a specialized application engineered to organize, execute, analyze, and document all plant instrument calibrations. While many industrial plants traditionally relied on manual paper binders or generic Microsoft Excel spreadsheets, modern process industries demand strict traceability, automated calculations, and unbroken digital audit trails that manual tools simply cannot guarantee.',
      keyPoints: [
        {
          title: 'Centralized asset & instrument hierarchy',
          desc: 'Maintains a complete historical record of every instrument position, manufacturer model, serial number, calibration interval, and past calibration history.',
        },
        {
          title: 'Automated scheduling & calibration alerts',
          desc: 'Prevents overdue calibrations through proactive calendar alerts, workload balancing, and work order generation before audits occur.',
        },
        {
          title: 'Direct documenting calibrator integration',
          desc: 'Communicates digitally with smart field calibrators (like the Beamex MC6 family), automatically uploading test instructions and downloading as-found/as-left results without manual typing.',
        },
        {
          title: 'Error calculation & tolerance validation',
          desc: 'Instantly computes measurement error curves, uncertainty margins, and pass/fail statuses against predefined process tolerances.',
        },
      ],
      beamexContext:
        'Beamex provides two industry-standard CMS solutions: Beamex LOGiCAL (an agile, subscription-based cloud software) and Beamex CMX (an enterprise-grade calibration database engineered for heavy industries and FDA-regulated environments).',
      takeaway:
        'A dedicated CMS slashes calibration administrative overhead by up to 50-70% while virtually eliminating manual transcription mistakes.',
    },
  },
  {
    id: 'cloud-vs-onpremise',
    title: 'Cloud vs. On-Premises Calibration Systems',
    category: 'Architecture & infrastructure',
    readTime: '6 min read',
    icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    summary:
      'Compare modern SaaS cloud calibration platforms against enterprise on-premises installations to determine the right fit for your facility.',
    content: {
      introduction:
        'When modernizing calibration workflows, engineering and IT leaders face a critical decision: should they implement a cloud-hosted software-as-a-service (SaaS) platform or deploy an on-premises enterprise database? Both architectures have distinct advantages depending on your IT governance, regulatory stringency, and facility scale.',
      keyPoints: [
        {
          title: 'Cloud SaaS: fast setup & low IT overhead',
          desc: 'Cloud platforms (such as Beamex LOGiCAL) require zero local server hardware, eliminate software installation barriers, and provide automatic security patches with multi-site mobile access from anywhere.',
        },
        {
          title: 'On-premises: maximum control & deep validation',
          desc: 'On-premises systems (such as Beamex CMX Enterprise) reside behind corporate firewalls on company servers, enabling full database custody, deep ERP/CMMS integration (e.g. SAP PM, IBM Maximo), and rigorous validation for FDA 21 CFR Part 11.',
        },
        {
          title: 'Total cost of ownership (TCO) comparison',
          desc: 'Cloud systems utilize an operational expense (OpEx) subscription model based on calibration volume, whereas on-premises models involve capital investment (CapEx) for licenses and server infrastructure with lower ongoing recurring usage fees.',
        },
        {
          title: 'Scalability & remote workforce',
          desc: 'Cloud architectures excel for distributed teams, field contractors, and multi-facility companies seeking instant collaboration without complex VPNs.',
        },
      ],
      beamexContext:
        'Accuro helps Philippine enterprises assess their IT and compliance profiles to select between Beamex LOGiCAL (cloud) and Beamex CMX (on-premise/hybrid), ensuring seamless communication with your existing instrumentation.',
      takeaway:
        'Choose Cloud for agile deployment and zero server maintenance; choose On-Premises when internal corporate policies or tight ERP integrations require total on-site data custody.',
    },
  },
  {
    id: 'digital-certificates',
    title: 'Digital Calibration Certificates & Paperless Flow',
    category: 'Metrology & data integrity',
    readTime: '5 min read',
    icon: <FileCheck2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    summary:
      'Understand how end-to-end digital calibration eliminates handwriting errors, protects certificate authenticity, and enables instant audit retrieval.',
    content: {
      introduction:
        'In traditional calibration, a technician reads a display, jots numbers on a clipboard, returns to the workshop, and re-types values into an Excel template or ERP. Research shows that human transcription errors occur in up to 3-5% of manual entries. A digital calibration certificate replaces paper slips with cryptographically traceable, tamper-evident digital records generated directly by calibrators.',
    keyPoints: [
        {
          title: 'Unbroken digital thread',
          desc: 'Calibration data flows from the reference sensor to the documenting calibrator (MC6), then directly to the software database without any human manual re-typing.',
        },
        {
          title: 'Tamper-evident electronic signatures',
          desc: 'Digital certificates are protected with electronic signatures, timestamp validation, and user role authentication compliant with international metrology protocols.',
        },
        {
          title: 'Instant search & audit retrieval',
          desc: 'Retrieve any certificate from 1 day or 10 years ago in seconds by searching the instrument tag, location, or serial number—ending the nightmare of lost paper filing cabinets.',
        },
        {
          title: 'Traceability to national measurement standards',
          desc: 'Every digital certificate records the reference standard used, its own calibration expiry date, and its unbroken chain of traceability back to SI units and accredited laboratories.',
        },
      ],
      beamexContext:
        'The Beamex ecosystem was pioneer-engineered for 100% paperless data flow: Beamex calibrators and software generate standardized, traceable digital calibration certificates recognized worldwide.',
      takeaway:
        'Digital certificates transform audit preparation from weeks of paper collation into an instant, one-click PDF export.',
    },
  },
  {
    id: 'audit-readiness',
    title: 'Calibration Audit Readiness & Compliance',
    category: 'Regulatory compliance',
    readTime: '6 min read',
    icon: <ShieldAlert className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    summary:
      'A practical preparation roadmap for ISO/IEC 17025, ISO 9001, and FDA 21 CFR Part 11 calibration audits with zero stress and zero findings.',
    content: {
      introduction:
        'Whether preparing for an ISO 9001 surveillance audit, an ISO/IEC 17025 laboratory accreditation assessment, or a regulatory FDA/cGMP inspection, calibration records are among the first documents auditors inspect. Being audit-ready means having continuous, proactive proof that all measurement devices are calibrated on schedule, with proven uncertainty budgets and documented historical traceability.',
      keyPoints: [
        {
          title: 'Pillar 1: zero overdue instruments',
          desc: 'Auditors look for out-of-date calibration tags. Automated calibration software ensures all critical instruments are recalibrated within their defined intervals.',
        },
        {
          title: 'Pillar 2: documented out-of-tolerance (OOT) procedures',
          desc: 'When an instrument is found out-of-tolerance, the system must trigger an investigation into the affected production batch. Automated software flags OOT events immediately.',
        },
        {
          title: 'Pillar 3: immutable audit trails',
          desc: 'Under standards like FDA 21 CFR Part 11, any change to calibration data must record who made the change, when, and the reason why, without overwriting historical measurements.',
        },
        {
          title: 'Pillar 4: proof of metrological traceability',
          desc: 'Every certificate must demonstrate a complete calibration chain linking field instruments back to accredited calibration laboratories with stated measurement uncertainties.',
        },
      ],
      beamexContext:
        'Beamex CMX is pre-configured with regulatory compliance modules, including 21 CFR Part 11 compliance, electronic signatures, and automated audit trails trusted by the world’s top pharmaceutical and industrial plants.',
      takeaway:
        'True audit readiness is not a panic drill before inspection; with automated software, your plant is continuously audit-ready 365 days a year.',
    },
  },
];

export const KnowledgeHub: React.FC = () => {
  const [activeGuideId, setActiveGuideId] = useState<string>(educationalGuides[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const activeGuide = educationalGuides.find((g) => g.id === activeGuideId) || educationalGuides[0];

  const filteredGuides = educationalGuides.filter(
    (g) =>
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-blue-950 opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Industrial calibration knowledge center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Educational guides & technical insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Expert resources on calibration management software, cloud architectures, paperless digital certification, and regulatory audit compliance.
          </p>

          {/* Quick Search */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search educational calibration topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </section>

      {/* Main Educational Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Navigation Topic Tabs / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {filteredGuides.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setActiveGuideId(guide.id)}
              className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${
                activeGuideId === guide.id
                  ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-500/20'
                  : 'border-border bg-card hover:border-blue-400 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                    {guide.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground">
                    {guide.readTime}
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-blue-600 dark:text-blue-400">
                  {guide.category}
                </span>
                <h3 className="font-bold text-base text-foreground mt-1 line-clamp-2">
                  {guide.title}
                </h3>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-4 inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          ))}
        </div>

        {/* Selected Guide Deep-Dive Article */}
        <Card className="border-2 border-border bg-card shadow-lg overflow-hidden">
          <CardContent className="p-6 sm:p-10 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Header */}
              <div className="border-b border-border pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {activeGuide.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    • {activeGuide.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
                  {activeGuide.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {activeGuide.summary}
                </p>
              </div>

              {/* Introduction */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Overview & background
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {activeGuide.content.introduction}
                </p>
              </div>

              {/* Key Pillars */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Key technical principles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeGuide.content.keyPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-5 rounded-xl bg-muted/40 border border-border"
                    >
                      <h4 className="font-bold text-sm sm:text-base text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>{point.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Beamex Solutions Address This */}
              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
                <h3 className="text-base font-bold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>The Beamex engineering advantage</span>
                </h3>
                <p className="text-sm text-blue-900/80 dark:text-blue-300 leading-relaxed mb-4">
                  {activeGuide.content.beamexContext}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/beamex/calibration-management">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-1.5">
                      Explore Beamex software <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                  <Link to="/beamex/field-calibration">
                    <Button size="sm" variant="outline" className="border-blue-400/40">
                      Explore calibrators
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="border-t border-border pt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-muted-foreground mb-1">
                    Key takeaway
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-foreground">
                    {activeGuide.content.takeaway}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Official Beamex Video Demonstrations */}
      <BeamexVideoSection />

      {/* Contact CTA Section */}
      <ContactCTA
        productCategory="Educational resources"
        solution="knowledge-hub"
        inquiryType="quote"
        title="Have specific technical or regulatory questions?"
        description="Our instrumentation and calibration specialists in the Philippines are available for technical consultations, system architecture planning, and on-site product demonstrations."
        buttonText="Consult an application specialist"
      />
    </div>
  );
};

export default KnowledgeHub;
