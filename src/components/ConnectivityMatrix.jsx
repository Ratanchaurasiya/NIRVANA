import React, { useState } from 'react';
import { Compass, Car, Plane, Train, Building, GraduationCap, HeartPulse, Navigation, Clock } from 'lucide-react';
import TypewriterTitle from './TypewriterTitle';

const CONNECTIVITY_HUBS = [
  {
    id: 1,
    name: "S.G. Highway Corporate Corridor",
    category: "Business",
    time: "4 Mins",
    distance: "2.1 km",
    icon: Building,
    desc: "Direct connectivity to corporate headquarters, high-end retail, and luxury hospitality destinations.",
  },
  {
    id: 2,
    name: "Science City Innovation Campus",
    category: "Culture",
    time: "3 Mins",
    distance: "1.4 km",
    icon: Compass,
    desc: "Expansive scientific research pavilions, immersive planetariums, and lush green civic spaces.",
  },
  {
    id: 3,
    name: "Zydus Super-Speciality Hospital",
    category: "Healthcare",
    time: "7 Mins",
    distance: "3.8 km",
    icon: HeartPulse,
    desc: "Tertiary-care medical infrastructure, trauma facilities, and accredited diagnostics.",
  },
  {
    id: 4,
    name: "International Baccalaureate Academies",
    category: "Education",
    time: "8 Mins",
    distance: "4.2 km",
    icon: GraduationCap,
    desc: "Premier international schools, CBSE academies, and higher education campuses.",
  },
  {
    id: 5,
    name: "Sardar Vallabhbhai Patel International Airport",
    category: "Transit",
    time: "25 Mins",
    distance: "18.5 km",
    icon: Plane,
    desc: "Signal-free expressway transit connecting to domestic and international flight terminals.",
  },
  {
    id: 6,
    name: "Sabarmati High-Speed Rail Terminal",
    category: "Transit",
    time: "18 Mins",
    distance: "11.2 km",
    icon: Train,
    desc: "Direct arterial access to the Mumbai-Ahmedabad High-Speed Bullet Train junction.",
  },
];

export default function ConnectivityMatrix() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Business', 'Transit', 'Healthcare', 'Education'];

  const filteredHubs = activeCategory === 'All'
    ? CONNECTIVITY_HUBS
    : CONNECTIVITY_HUBS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2D8] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
              <Navigation className="w-3.5 h-3.5 text-[#B69B65]" />
              <span>Transit & Location Index</span>
            </div>
            
            <TypewriterTitle
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight leading-tight"
            >
              Strategic Proximity. <span className="text-[#B69B65]">Minutes From Every Essential Hub.</span>
            </TypewriterTitle>

            <p className="text-sm sm:text-base text-[#5C5852] font-light leading-relaxed">
              Positioned along Western Ahmedabad’s highest-velocity growth corridors, balancing residential privacy with instant access to arterial transit.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] transition-colors cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-[#B69B65] text-white border-[#B69B65] font-semibold'
                    : 'bg-white text-[#5C5852] hover:text-[#171717] border-[#E6E2D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Connectivity Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <div
                key={hub.id}
                className="p-6 bg-white border border-[#E6E2D8] hover:border-[#B69B65]/40 transition-colors space-y-4"
              >
                {/* Top Card Bar */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E6E2D8] flex items-center justify-center text-[#B69B65]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF9F6] border border-[#E6E2D8] text-[#B69B65] font-mono text-xs font-semibold">
                      <Clock className="w-3 h-3" />
                      <span>{hub.time}</span>
                    </div>
                    <span className="block text-[10px] font-mono text-[#77736C] mt-1">{hub.distance}</span>
                  </div>
                </div>

                {/* Hub Information */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69B65] font-semibold block">
                    {hub.category} Corridor
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#171717] font-serif">
                    {hub.name}
                  </h3>
                  <p className="text-xs text-[#5C5852] font-light leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                {/* Bottom Route Indicator */}
                <div className="pt-3 border-t border-[#E6E2D8] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                  <span className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#B69B65]" />
                    <span>Direct Arterial Access</span>
                  </span>
                  <span className="text-[#4B4842]">Signal-Free</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
