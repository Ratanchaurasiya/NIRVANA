import React, { useState } from 'react';
import { Compass, Car, Plane, Train, Building, GraduationCap, HeartPulse, Navigation, Clock } from 'lucide-react';

const CONNECTIVITY_HUBS = [
  {
    id: 1,
    name: "S.G. Highway Corporate Corridor",
    category: "Business",
    time: "4 Mins",
    distance: "2.1 km",
    icon: Building,
    desc: "Seamless connectivity to prime corporate headquarters, high-end retail, and luxury dining.",
  },
  {
    id: 2,
    name: "Science City Innovation Campus",
    category: "Culture",
    time: "3 Mins",
    distance: "1.4 km",
    icon: Compass,
    desc: "Expansive scientific research pavilions, immersive planetariums, and lush green public gardens.",
  },
  {
    id: 3,
    name: "Zydus Super-Speciality Hospital",
    category: "Healthcare",
    time: "7 Mins",
    distance: "3.8 km",
    icon: HeartPulse,
    desc: "World-class tertiary care medical facility, trauma centers, and diagnostic excellence.",
  },
  {
    id: 4,
    name: "Leading International Schools & IB Campuses",
    category: "Education",
    time: "8 Mins",
    distance: "4.2 km",
    icon: GraduationCap,
    desc: "Renowned international academies, CBSE schools, and premier academic institutions.",
  },
  {
    id: 5,
    name: "Sardar Vallabhbhai Patel International Airport (AMD)",
    category: "Transit",
    time: "25 Mins",
    distance: "18.5 km",
    icon: Plane,
    desc: "Rapid signal-free expressway access to domestic and international departure terminals.",
  },
  {
    id: 6,
    name: "Sabarmati High-Speed Rail & Railway Terminal",
    category: "Transit",
    time: "18 Mins",
    distance: "11.2 km",
    icon: Train,
    desc: "Direct arterial transit connection to the Mumbai-Ahmedabad High-Speed Bullet Train corridor.",
  },
];

export default function ConnectivityMatrix() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Business', 'Transit', 'Healthcare', 'Education'];

  const filteredHubs = activeCategory === 'All'
    ? CONNECTIVITY_HUBS
    : CONNECTIVITY_HUBS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 relative bg-[#070D1E] overflow-hidden border-t border-amber-500/20">
      {/* Ambient Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-widest shadow-md">
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>STRATEGIC PROXIMITY & TRANSIT INDEX</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight">
              Unrivaled Connectivity. <br />
              <span className="text-gold-gradient">Minutes from Everywhere That Matters.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Strategically positioned along Western Ahmedabad’s highest-velocity growth corridors, balancing serene residential seclusion with instant access to key civic, medical, and transit arteries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-navy-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-[#0B132B] text-slate-400 hover:text-white border border-slate-800'
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
                className="group p-6 rounded-3xl bg-[#0B132B]/85 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative space-y-4"
              >
                {/* Top Card Bar */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#111D3E] to-[#1C2B54] border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                      <Clock className="w-3 h-3" />
                      <span>{hub.time}</span>
                    </div>
                    <span className="block text-[10px] font-mono text-slate-400 mt-1">Approx. {hub.distance}</span>
                  </div>
                </div>

                {/* Hub Information */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 font-bold block">
                    {hub.category} Corridor
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                    {hub.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                {/* Bottom Route Indicator */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Car className="w-3 h-3 text-emerald-400" />
                    <span>Direct Arterial Access</span>
                  </span>
                  <span className="text-amber-300 font-bold">Signal-Free</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
