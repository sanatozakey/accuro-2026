import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface BeamexPartnerBadgeProps {
  variant?: 'eyebrow' | 'card' | 'inline' | 'seal' | 'official-logo';
  className?: string;
  imgClassName?: string;
}

export const BeamexPartnerBadge: React.FC<BeamexPartnerBadgeProps> = ({
  variant = 'eyebrow',
  className = '',
  imgClassName = 'h-12 w-auto object-contain',
}) => {
  if (variant === 'official-logo') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/images/beamex-expert-partner-accuro.png"
          alt="Beamex Expert Partner - Accuro"
          className={imgClassName}
        />
      </div>
    );
  }

  if (variant === 'eyebrow') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 text-xs sm:text-sm font-semibold tracking-wide shadow-sm ${className}`}
      >
        <img
          src="/images/beamex-logo.png"
          alt="Beamex Logo"
          className="h-3.5 sm:h-4 w-auto object-contain"
        />
        <span className="w-1 h-1 rounded-full bg-blue-500" />
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          Beamex Expert Partner • Philippines
        </span>
      </div>
    );
  }

  if (variant === 'seal') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-600/30 dark:border-blue-500/30 shadow-lg ${className}`}
      >
        <img
          src="/images/beamex-expert-partner-accuro.png"
          alt="Beamex Expert Partner - Accuro"
          className="max-h-20 w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 shadow-xl border-2 border-blue-600/30 backdrop-blur-md ${className}`}
      >
        <img
          src="/images/beamex-expert-partner-accuro.png"
          alt="Beamex Expert Partner - Accuro"
          className="h-12 sm:h-14 w-auto object-contain flex-shrink-0"
        />
        <div className="border-l border-gray-200 dark:border-gray-700 pl-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              Sole Authorized Partner
            </span>
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
            Accuro is the ONLY Distributor of Beamex in the Philippines
          </p>
        </div>
      </div>
    );
  }

  // default inline
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-sm text-muted-foreground ${className}`}
    >
      <img
        src="/images/beamex-expert-partner-accuro.png"
        alt="Beamex Expert Partner"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default BeamexPartnerBadge;
