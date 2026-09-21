import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface Slide {
  id: number;
  pill: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  fallbackImage: string;
  imageTag: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    pill: 'Beamex CENTRiCAL solutions',
    badge: 'Modular workshop systems',
    title: 'Next-generation workshop calibration',
    description:
      'Standardized yet configurable Beamex CENTRiCAL test benches, trolleys, and tabletop cases. Ergonomic, modular, and built for precision calibration and automated testing.',
    image: 'https://www.beamex.com/app/uploads/2024/04/header_image_workshop_calibration_v1-scaled.jpg',
    fallbackImage: '/images/Workshop Calibration.jpg',
    imageTag: 'CENTRiCAL modular calibration bench',
    primaryCtaText: 'Explore workshop solutions',
    primaryCtaLink: '/beamex/workshop-calibration',
    secondaryCtaText: 'Request bench quote',
    secondaryCtaLink: '/contact?type=quote&solution=workshop-calibration&model=Beamex%20CENTRiCAL%20Bench',
  },
  {
    id: 2,
    pill: 'Beamex MC6 calibrator family',
    badge: 'Portable documenting calibrators',
    title: 'Precision in the field, trusted everywhere',
    description:
      'Advanced Beamex MC6 and MC6-Ex documenting calibrators and multi-bus communicators. Unmatched accuracy and ATEX/IECEx intrinsic safety in harsh industrial environments.',
    image: '/images/Field Calibrators.png',
    fallbackImage: 'https://www.beamex.com/app/uploads/2024/04/header_image_beamex_solution_overview_v1-scaled.jpg',
    imageTag: 'MC6 advanced field calibrator & communicator',
    primaryCtaText: 'View field calibrators',
    primaryCtaLink: '/beamex/field-calibration',
    secondaryCtaText: 'Request MC6 quote',
    secondaryCtaLink: '/contact?type=quote&solution=field-calibration&model=Beamex%20MC6%20Calibrator',
  },
  {
    id: 3,
    pill: 'Beamex CMX & LOGiCAL',
    badge: 'Cloud & on-premises CMS',
    title: '100% paperless & audit-ready calibration',
    description:
      'Eliminate manual errors and streamline asset compliance. Cloud-based LOGiCAL and enterprise on-premises CMX software create an unbroken, traceable digital audit trail for your plant.',
    image: '/images/Calibration Management.webp',
    fallbackImage: 'https://www.beamex.com/app/uploads/2022/09/cmx-calibration-software-1280-720px-v1.jpg',
    imageTag: 'Digital calibration management software',
    primaryCtaText: 'Discover software solutions',
    primaryCtaLink: '/beamex/calibration-management',
    secondaryCtaText: 'Request software quote',
    secondaryCtaLink: '/contact?type=quote&solution=calibration-management&model=Beamex%20CMX%20Software',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#081224] via-[#0c1c38] to-[#071120] text-white py-16 sm:py-20 lg:py-28 min-h-[640px] lg:min-h-[740px] flex items-center overflow-hidden border-b border-blue-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase Slider"
    >
      {/* Ambient background glow & subtle industrial grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Larger, High-Contrast Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7">
            {/* Slide Category Badge */}
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`badge-${slide.id}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-sm font-semibold tracking-wide text-blue-300 bg-blue-500/20 border border-blue-400/40 px-4 py-1.5 rounded-full backdrop-blur-sm"
                >
                  {slide.badge}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Dynamic Headline (Larger size) */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-h1-mobile md:text-h1-desktop font-bold text-white tracking-tight leading-[1.15] drop-shadow-md"
              >
                {slide.title}
              </motion.h1>
            </AnimatePresence>

            {/* Dynamic Description (Spacious text) */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-6 text-base shadow-xl shadow-blue-600/30 transition-all duration-200 rounded-xl"
              >
                <Link to={slide.primaryCtaLink} className="inline-flex items-center gap-2">
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-500 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold px-8 py-6 text-base transition-all duration-200 rounded-xl"
              >
                <Link to={slide.secondaryCtaLink}>
                  {slide.secondaryCtaText}
                </Link>
              </Button>
            </div>

            {/* Slider Controls (Dots + Nav Buttons) */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === idx
                        ? 'w-10 h-2.5 bg-blue-500'
                        : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="h-4 w-px bg-slate-700 mx-2" />

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="p-2 rounded-lg bg-slate-800/90 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="p-2 rounded-lg bg-slate-800/90 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
                  className="p-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors ml-1"
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
              </div>

              <span className="text-xs text-slate-400 font-mono ml-auto">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Right Column: Larger, Commanding Product Showcase Frame */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              {/* Outer ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-blue-500/30 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

              {/* Framed Showcase Card */}
              <div className="relative rounded-3xl bg-[#0f2444] border-2 border-blue-400/30 p-5 sm:p-7 shadow-2xl overflow-hidden">
                {/* Top header bar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-blue-400/15 text-xs">
                  <span className="inline-flex items-center gap-2 text-blue-300 font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    {slide.pill}
                  </span>
                  <span className="text-xs text-slate-400 tracking-wider font-mono">
                    Official Beamex hardware
                  </span>
                </div>

                {/* Substantial, Large Image Stage */}
                <div className="relative h-72 sm:h-96 lg:h-[430px] w-full rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900 flex items-center justify-center overflow-hidden p-6 border border-white/5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`img-${slide.id}`}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.45 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={slide.image}
                        alt={slide.imageTag}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== slide.fallbackImage) {
                            target.src = slide.fallbackImage;
                          }
                        }}
                        className="max-h-full max-w-full object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom title & link */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white truncate">
                      {slide.imageTag}
                    </p>
                    <p className="text-xs text-slate-400">
                      Standardized & configurable for process industries
                    </p>
                  </div>
                  <Link
                    to={slide.primaryCtaLink}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-400/30 hover:bg-blue-500/25 transition-colors flex-shrink-0 ml-3"
                  >
                    <span>View solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
