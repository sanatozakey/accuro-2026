import React from 'react';
import { Building2, Zap, Flame, Droplets, Utensils, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ClientTrustGridProps {
  title?: string;
  subtitle?: string;
  showMetrics?: boolean;
  className?: string;
}

interface ClientSector {
  name: string;
  icon: React.ReactNode;
  clients: {
    name: string;
    subtext: string;
    location: string;
  }[];
}

export const ClientTrustGrid: React.FC<ClientTrustGridProps> = ({
  title = "Trusted by leading Philippine process facilities",
  subtitle = "Power plants, refineries, pharmaceutical labs, and manufacturing facilities across Luzon, Visayas, and Mindanao rely on Beamex calibration technology and Accuro support.",
  showMetrics = true,
  className = "",
}) => {
  const sectors: ClientSector[] = [
    {
      name: "Power generation & utilities",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      clients: [
        { name: "First Gen Corporation", subtext: "Clean energy & natural gas plants", location: "Batangas / Bicol" },
        { name: "Energy Development Corp (EDC)", subtext: "Geothermal & renewable energy", location: "Leyte / Negros" },
        { name: "Aboitiz Power", subtext: "Thermal & hydroelectric facilities", location: "Luzon / Mindanao" },
        { name: "San Miguel Global Power", subtext: "Combined cycle & power assets", location: "Nationwide" },
      ],
    },
    {
      name: "Petrochemical & refining",
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      clients: [
        { name: "Petron Corporation", subtext: "Bataan refinery & distribution terminals", location: "Limay, Bataan" },
        { name: "Shell Pilipinas", subtext: "Import terminals & energy depots", location: "Batangas / CDO" },
      ],
    },
    {
      name: "Food, beverage & brewing",
      icon: <Utensils className="w-5 h-5 text-emerald-500" />,
      clients: [
        { name: "San Miguel Brewery", subtext: "Commercial breweries & bottling", location: "Luzon / Visayas" },
        { name: "Universal Robina Corp (URC)", subtext: "Food processing & milling", location: "Laguna / Cebu" },
        { name: "Nestlé Philippines", subtext: "Nutrition & dairy processing facilities", location: "Bulacan / Cagayan de Oro" },
      ],
    },
    {
      name: "Water & municipal utilities",
      icon: <Droplets className="w-5 h-5 text-blue-500" />,
      clients: [
        { name: "Maynilad Water Services", subtext: "Water treatment plants & distribution", location: "West Zone NCR" },
        { name: "Manila Water Company", subtext: "East zone water infrastructure", location: "East Zone NCR" },
      ],
    },
  ];

  return (
    <section className={`py-14 sm:py-20 bg-gray-50/70 dark:bg-gray-900/50 border-y border-gray-200/80 dark:border-gray-800 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold tracking-wide mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Proven Philippine track record
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Sectors & Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3.5 border-b border-gray-100 dark:border-gray-800 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                    {sector.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100">
                    {sector.name}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {sector.clients.map((client, cIdx) => (
                    <div key={cIdx} className="group">
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {client.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {client.subtext}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500 mt-1">
                        <Building2 className="w-3 h-3" />
                        <span>{client.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-blue-700 dark:text-blue-400 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Active Beamex user
                </span>
                <span className="text-gray-400 dark:text-gray-500">ISO 17025 ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Strip */}
        {showMetrics && (
          <div className="mt-12 bg-navy-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-navy-800">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="border-r border-white/10 last:border-0 pr-4">
                <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  Calibrators deployed in PH
                </div>
              </div>
              <div className="border-r border-white/10 last:border-0 pr-4">
                <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 mb-1">
                  50+ years
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  Beamex Nordic heritage
                </div>
              </div>
              <div className="border-r border-white/10 last:border-0 pr-4">
                <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  Paperless & audit-ready
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 mb-1">
                  24 hrs
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  Official quote turnaround
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientTrustGrid;
