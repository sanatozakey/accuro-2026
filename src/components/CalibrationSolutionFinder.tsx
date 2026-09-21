import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Shield,
  Zap,
  Gauge,
  Thermometer,
  Radio,
  FileCheck,
  Building,
  Flame,
  Pill,
  Wrench,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';

interface Recommendation {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  route: string;
  solutionParam: string;
  modelParam: string;
  keyFeatures: string[];
  bestFor: string;
}

export const CalibrationSolutionFinder: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    location: string;
    signal: string;
    environment: string;
  }>({
    location: '',
    signal: '',
    environment: '',
  });

  const handleSelect = (key: 'location' | 'signal' | 'environment', value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setAnswers({ location: '', signal: '', environment: '' });
    setStep(1);
  };

  // Compute recommendation based on selections
  const getRecommendation = (): Recommendation => {
    const { location, signal, environment } = answers;

    // Workshop
    if (location === 'workshop') {
      return {
        id: 'centrical',
        name: 'Beamex CENTRiCAL modular workshop bench',
        category: 'Workshop calibration solution',
        headline: 'Ergonomic, modular workbench standardizing workshop workflows',
        description:
          'Standardized yet fully customizable calibration benches, trolleys, and tabletop cases. Combines power supplies, precision pressure generators, and multimeters into one ESD-protected workstation.',
        image: '/images/Beamex CENTRiCAL.png',
        route: '/beamex/workshop-calibration',
        solutionParam: 'workshop-calibration',
        modelParam: 'Beamex CENTRiCAL Bench',
        keyFeatures: [
          'Customizable modular tabletop & rack units',
          'Integrated automatic pressure generators up to 25 bar',
          'ESD-safe with automated device calibration routines',
          'Compatible with Beamex MC6-WS panel calibrator',
        ],
        bestFor: 'Central maintenance shops, primary metrology labs, and QA benches.',
      };
    }

    // Software
    if (location === 'software') {
      if (environment === 'pharma') {
        return {
          id: 'cmx',
          name: 'Beamex CMX enterprise calibration software',
          category: 'Calibration management software',
          headline: 'Enterprise-grade audit readiness and 21 CFR Part 11 data integrity',
          description:
            'Deeply customizable, on-premise or private cloud calibration management system tailored for heavily audited industries with strict electronic signature requirements.',
          image: '/images/Calibration Management.webp',
          route: '/beamex/calibration-management',
          solutionParam: 'calibration-management',
          modelParam: 'Beamex CMX Software',
          keyFeatures: [
            'Full FDA 21 CFR Part 11 & EU Annex 11 compliance',
            'Pre-built bi-directional connectors to SAP PM, IBM Maximo, and ProLeiS',
            'Automated calibration certificates and historical drift analysis',
            'Automated scheduling with position & instrument hierarchies',
          ],
          bestFor: 'Pharmaceutical, nuclear, and enterprise plants requiring strict audit trails.',
        };
      }
      return {
        id: 'logical',
        name: 'Beamex LOGiCAL cloud calibration software',
        category: 'Cloud SaaS calibration management',
        headline: 'Zero IT footprint, subscription-based paperless calibration',
        description:
          'Modern web-based subscription software that turns documentation 100% digital without requiring local server infrastructure. Pairs seamlessly with MC6 calibrators and the bMobile app.',
        image: '/images/Calibration Management.webp',
        route: '/beamex/calibration-management',
        solutionParam: 'calibration-management',
        modelParam: 'Beamex LOGiCAL Software',
        keyFeatures: [
          'No IT infrastructure or server deployment needed',
          'Pay-as-you-go subscription model',
          'Generates traceable digital PDF calibration certificates in seconds',
          'Direct synchronization with Beamex bMobile tablet app',
        ],
        bestFor: 'Small-to-midsize plants and calibration service providers wanting instant cloud setup.',
      };
    }

    // Services
    if (location === 'services') {
      return {
        id: 'services',
        name: 'Beamex certified calibration & service agreements',
        category: 'Metrology & support services',
        headline: 'Accredited ISO/IEC 17025 calibration and lifecycle protection',
        description:
          'Expert support delivered by certified Filipino metrology engineers and factory-backed Beamex technicians, including recalibration, repairs, loaner equipment, and workflow training.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        route: '/beamex/services',
        solutionParam: 'beamex-services',
        modelParam: 'Beamex Service Agreement',
        keyFeatures: [
          'ISO/IEC 17025 traceable calibration certificates',
          'Beamex Care Plan with priority warranty & free calibrations',
          'Hands-on on-site training for plant technicians',
          'Fast local turnaround across Luzon, Visayas, and Mindanao',
        ],
        bestFor: 'Facilities requiring accredited re-certification and ongoing technical warranty support.',
      };
    }

    // Field Calibration
    if (environment === 'hazardous') {
      return {
        id: 'mc6-ex',
        name: 'Beamex MC6-Ex intrinsically safe calibrator',
        category: 'Hazardous zone field calibrator',
        headline: 'ATEX, IECEx, and North American certified for Zones 0, 1, and 2',
        description:
          'The world’s most versatile intrinsically safe documenting calibrator and field communicator. Calibrates pressure, temperature, and electrical signals directly in flammable process units without hot work permits.',
        image: '/images/Beamex MC6-Ex.png',
        route: '/beamex/field-calibration',
        solutionParam: 'field-calibration',
        modelParam: 'Beamex MC6-Ex Calibrator',
        keyFeatures: [
          'Certified for Zone 0 (Ex ia IIC T4 Ga)',
          'Integrated multi-bus communicator (HART, Foundation Fieldbus, Profibus PA)',
          'Internal pressure modules up to 20 bar / 300 psi',
          'Internal battery rated for full 10-hour field shifts',
        ],
        bestFor: 'Refineries, offshore rigs, gas turbine enclosures, and chemical plants.',
      };
    }

    if (signal === 'temperature') {
      return {
        id: 'mc6-t',
        name: 'Beamex MC6-T multifunction temperature calibrator',
        category: 'Field temperature calibrator',
        headline: 'Dry-block temperature bath combined with MC6 multifunction technology',
        description:
          'A revolutionary handheld temperature calibrator that integrates a dry block (-30 °C to +660 °C) with full documenting process calibrator and field communicator capabilities.',
        image: '/images/Beamex MC6-T.png',
        route: '/beamex/field-calibration',
        solutionParam: 'field-calibration',
        modelParam: 'Beamex MC6-T Temperature Calibrator',
        keyFeatures: [
          'Temperature generation up to +660 °C with ±0.05 °C stability',
          'Full MC6 documenting calibrator built into the block controller',
          'Simultaneous sensor reading, dry block heating, and certificate generation',
          'Immersion depth optimization for industrial sanitary sensors',
        ],
        bestFor: 'Sanitary food/dairy processes, pharmaceutical autoclaves, and thermal power monitoring.',
      };
    }

    // Default: MC6 flagship
    return {
      id: 'mc6',
      name: 'Beamex MC6 advanced multifunction calibrator',
      category: 'Flagship documenting process calibrator',
      headline: 'The industry benchmark for multifunction field calibration & communicators',
      description:
        'High-accuracy documenting field calibrator and communicator for pressure, temperature, and electrical process instruments with daylight-readable capacitive touchscreen.',
      image: '/images/Beamex MC6.png',
      route: '/beamex/field-calibration',
      solutionParam: 'field-calibration',
      modelParam: 'Beamex MC6 Calibrator',
      keyFeatures: [
        'Unmatched accuracy for pressure, DC current, voltage, RTDs, and thermocouples',
        'Built-in fieldbus communicator for HART, WirelessHART, FF, and Profibus',
        '100% paperless documenting with automated as-found/as-left test steps',
        'Rugged IP65 weatherproof casing built for industrial field conditions',
      ],
      bestFor: 'Industrial manufacturers, power plants, and process instrumentation engineers.',
    };
  };

  const rec = step === 4 ? getRecommendation() : null;

  return (
    <section className={`py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/40 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-bold tracking-wide mb-3">
            <Compass className="w-4 h-4 text-blue-600" />
            Interactive tool • 30 seconds
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Find your ideal Beamex calibration solution
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Answer 3 quick questions about your facility, environment, and instruments to receive a tailored equipment recommendation.
          </p>
        </div>

        {/* Quiz Progress Indicator */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-between text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 mb-2">
            <span>Step {step > 3 ? 3 : step} of 3</span>
            <span>{step === 4 ? 'Recommendation ready' : `${Math.round(((step - 1) / 3) * 100)}% completed`}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-500 rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Body */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-100 dark:border-gray-800 shadow-xl p-6 sm:p-10">
          {/* STEP 1: Calibration Scope / Location */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold tracking-wide text-blue-600 dark:text-blue-400">
                  Question 1
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                  Where will calibration primarily take place?
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Choose your primary operating setting or solution scope.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleSelect('location', 'field')}
                  className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      In the field / plant floors
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Portable handheld calibrators used out in the field, pipe racks, and processing units.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('location', 'workshop')}
                  className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Calibration workshop / bench
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Dedicated modular workbenches and test consoles for centralized instrument shops.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('location', 'software')}
                  className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Digital software system
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Cloud or on-premise calibration management software for paperless compliance.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('location', 'services')}
                  className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Metrology service & care plans
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      ISO 17025 accredited recalibration, annual service agreements, and technician training.
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Measurement Signal / Media Priority */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold tracking-wide text-blue-600 dark:text-blue-400">
                  Question 2
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                  What instruments or signals do you need to calibrate?
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Select your primary physical parameters and field protocols.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelect('signal', 'multifunction')}
                  className="flex flex-col items-center sm:items-start p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-center sm:text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Multifunction (pressure & electrical)
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Pressure transmitters, 4-20mA loops, switches, voltage, and frequency devices.
                  </p>
                </button>

                <button
                  onClick={() => handleSelect('signal', 'temperature')}
                  className="flex flex-col items-center sm:items-start p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-center sm:text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <Thermometer className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    High-accuracy temperature
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    RTD sensors, thermocouples, thermal dry block baths, and temperature transmitters.
                  </p>
                </button>

                <button
                  onClick={() => handleSelect('signal', 'fieldbus')}
                  className="flex flex-col items-center sm:items-start p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-center sm:text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <Radio className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Smart fieldbus communicator
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    HART, Foundation Fieldbus, and Profibus PA configuration and diagnostics.
                  </p>
                </button>
              </div>

              <div className="flex justify-start">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="text-gray-500">
                  ← Back to question 1
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Operating Environment / Compliance */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold tracking-wide text-blue-600 dark:text-blue-400">
                  Question 3
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                  What are your plant's environmental & regulatory requirements?
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Select your facility's safety classifications and compliance standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelect('environment', 'hazardous')}
                  className="flex flex-col items-center sm:items-start p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-amber-500 dark:hover:border-amber-500 text-center sm:text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors mb-3">
                    <Flame className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base group-hover:text-amber-600 dark:group-hover:text-amber-400">
                    Hazardous area (Ex / ATEX)
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Flammable vapors or gases requiring ATEX / IECEx Zone 0/1/2 certified intrinsically safe gear.
                  </p>
                </button>

                <button
                  onClick={() => handleSelect('environment', 'pharma')}
                  className="flex flex-col items-center sm:items-start p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-center sm:text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Pharma & biotech (21 CFR Part 11)
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Strict electronic signatures, immutable audit logs, and data integrity regulations.
                  </p>
                </button>

                <button
                  onClick={() => handleSelect('environment', 'standard')}
                  className="flex flex-col items-center sm:items-start p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 text-center sm:text-left transition-all hover:shadow-md group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Standard industrial / ISO 17025
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Standard non-hazardous process plants, power generation, food processing, or utilities.
                  </p>
                </button>
              </div>

              <div className="flex justify-start">
                <Button variant="ghost" size="sm" onClick={() => setStep(2)} className="text-gray-500">
                  ← Back to question 2
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: Recommendation Result */}
          {step === 4 && rec && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-emerald-700 dark:text-emerald-400">
                    Recommended solution • 98% match
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restart finder
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Product Image Showcase */}
                <div className="lg:col-span-5">
                  <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex items-center justify-center min-h-[260px]">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="max-h-56 max-w-full object-contain filter drop-shadow-md"
                    />
                  </div>
                  <div className="text-center mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Official Beamex hardware / software • delivered by Accuro
                  </div>
                </div>

                {/* Content & Specs */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-semibold">
                    {rec.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                    {rec.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
                    {rec.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {rec.description}
                  </p>

                  <div className="pt-2">
                    <h5 className="text-xs font-bold tracking-wide text-gray-700 dark:text-gray-300 mb-2">
                      Key capabilities matched:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rec.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200">
                    <strong className="font-semibold">Ideal application:</strong> {rec.bestFor}
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      <Link
                        to={`/contact?type=quote&solution=${encodeURIComponent(
                          rec.solutionParam
                        )}&model=${encodeURIComponent(rec.modelParam)}`}
                      >
                        Request official quote for this model
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to={rec.route}>
                        View details
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalibrationSolutionFinder;
