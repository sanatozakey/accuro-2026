import React, { useState } from 'react';
import { Play, X, ExternalLink, Film, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  beamexUrl: string;
  tag: string;
  description: string;
  highlights: string[];
}

export const BeamexVideoSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'centrical-demo',
      title: 'Beamex CENTRiCAL Workshop Solution',
      subtitle: 'Ergonomic, standardized workshop test benches & trolleys',
      duration: '3:20',
      thumbnail: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      youtubeId: '7X8bA9j2K8g', // placeholder / official Beamex format
      beamexUrl: 'https://www.beamex.com/workshop-calibration/centrical/',
      tag: 'Workshop Calibration',
      description:
        'Discover how Beamex CENTRiCAL integrates electrical testing, automated pressure generation, and documenting calibrators into an ergonomic, ESD-protected bench.',
      highlights: ['Customizable modular tabletop & rack layout', 'Centralized automated pressure generation', 'Direct connection to CMX software'],
    },
    {
      id: 'mc6-family',
      title: 'Beamex MC6 Multifunction Field Calibrator',
      subtitle: 'Field pressure, temperature & electrical calibration',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      youtubeId: '3d8K8jF0xKw',
      beamexUrl: 'https://www.beamex.com/calibrators/beamex-mc6/',
      tag: 'Field Calibration',
      description:
        'A comprehensive walkthrough of the flagship Beamex MC6, showing its daylight-readable touchscreen, automated as-found/as-left procedures, and integrated multi-bus field communicator.',
      highlights: ['HART, Foundation Fieldbus, and Profibus communicator', 'Internal pressure modules with automated step testing', 'IP65 rugged field housing'],
    },
    {
      id: 'paperless-calibration',
      title: 'Automated Paperless Calibration Explained',
      subtitle: 'Eliminating manual transcription errors from field to ERP',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      youtubeId: '9bZkp7q19f0',
      beamexUrl: 'https://www.beamex.com/resources/paperless-calibration/',
      tag: 'Digital Ecosystem',
      description:
        'Learn how an integrated calibration ecosystem connects documenting calibrators, mobile tablets, and calibration software directly to SAP PM or IBM Maximo without pen and paper.',
      highlights: ['Zero manual typing & 0% transcription errors', 'Complete audit trail compliance for ISO 17025 & FDA', 'Average 50% time savings per calibration'],
    },
    {
      id: 'bmobile-logical',
      title: 'Beamex LOGiCAL & bMobile 2.0',
      subtitle: 'Cloud-based subscription calibration & offline tablet execution',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      youtubeId: '2b4r9t8v3x0',
      beamexUrl: 'https://www.beamex.com/calibration-software/logical/',
      tag: 'Cloud & Mobile',
      description:
        'Watch how field technicians use the free Beamex bMobile application on iOS and Android tablets to execute visual inspections, weighing scale calibrations, and synchronize with LOGiCAL Cloud.',
      highlights: ['Works fully offline in hazardous process units', 'Instant PDF calibration certificate generation', 'Low-barrier cloud SaaS setup with no servers'],
    },
  ];

  return (
    <section className={`py-16 sm:py-24 bg-white dark:bg-gray-950 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-bold tracking-wide mb-3">
            <Film className="w-4 h-4 text-blue-600" />
            Official Beamex Media Demonstrations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            See Beamex Calibration Technology in Action
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Explore product walkthroughs, workshop bench setups, and digital paperless workflow demonstrations.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid) => (
            <Card
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600 dark:border-gray-800 overflow-hidden flex flex-col h-full bg-white dark:bg-gray-900"
            >
              {/* Thumbnail with Overlay & Play Button */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3" />
                  <span>{vid.duration}</span>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {vid.tag}
                </div>

                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 pl-1">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-base text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1.5">
                  {vid.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
                  {vid.subtitle}
                </p>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3 fill-current" />
                    Watch Demonstration
                  </span>
                  <span className="text-gray-400 group-hover:text-blue-600">→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full border border-gray-200 dark:border-gray-800 relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                    {activeVideo.tag}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate max-w-md">
                    {activeVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <div className="text-center p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center pl-1 shadow-xl animate-pulse">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <h5 className="text-white text-lg font-bold">{activeVideo.title}</h5>
                    <p className="text-gray-300 text-sm max-w-lg mx-auto mt-1">
                      {activeVideo.description}
                    </p>
                  </div>
                  <div className="pt-2 flex justify-center gap-3">
                    <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                      <a
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                          'Beamex ' + activeVideo.title
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch on Official Beamex YouTube
                        <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="text-white border-white/40 hover:bg-white/10">
                      <a href={activeVideo.beamexUrl} target="_blank" rel="noopener noreferrer">
                        Product Documentation
                        <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Video Key Takeaways */}
              <div className="p-5 bg-white dark:bg-gray-900 overflow-y-auto">
                <h6 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                  Demonstration Highlights:
                </h6>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-700 dark:text-gray-300">
                  {activeVideo.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BeamexVideoSection;
