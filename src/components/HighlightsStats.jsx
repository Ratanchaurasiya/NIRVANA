import React from 'react';
import { MapPin, Home, Building2, PhoneCall } from 'lucide-react';

const STATS_DATA = [
  {
    id: 1,
    icon: MapPin,
    title: "Regional Focus",
    subtitle: "Gujarat Growth Corridors",
    countText: "100%",
    desc: "Dedicated to Gujarat's premier growth corridors and Grade-A infrastructure hubs."
  },
  {
    id: 2,
    icon: Home,
    title: "Residential Portfolio",
    subtitle: "Villas & Sky Mansions",
    countText: "3 to 5 BHK",
    desc: "Curated sky residences, bespoke penthouses, and private plotted estates."
  },
  {
    id: 3,
    icon: Building2,
    title: "Commercial Assets",
    subtitle: "Offices & Retail Suites",
    countText: "Grade-A",
    desc: "Corporate office headquarters, high-street retail, and pre-leased assets."
  },
  {
    id: 4,
    icon: PhoneCall,
    title: "Direct Advisory",
    subtitle: "Executive Concierge",
    countText: "6 Days/Wk",
    desc: "Monday through Saturday 10:00 AM – 7:00 PM private consultation access."
  }
];

const HighlightsStats = () => {
  return (
    <section className="py-20 relative bg-[#FAF9F6] border-y border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.id}
                className="p-6 bg-white border border-[#E6E2D8] text-center flex flex-col justify-between hover:border-[#B69B65]/40 transition-colors"
              >
                <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E6E2D8] text-[#B69B65] flex items-center justify-center mx-auto mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] block">
                    {stat.countText}
                  </span>
                  <h3 className="text-base font-bold text-[#171717] font-serif">{stat.title}</h3>
                  <p className="text-xs text-[#B69B65] font-mono tracking-wider">{stat.subtitle}</p>
                </div>
                <p className="text-xs text-[#5C5852] mt-4 pt-3 border-t border-[#E6E2D8] font-light">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsStats;
