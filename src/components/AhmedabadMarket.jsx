import React, { useState } from 'react';
import { AHMEDABAD_LOCATIONS } from '../data/propertyData';
import { MapPin, Navigation, CheckCircle2, ArrowRight, Building, Landmark } from 'lucide-react';

const AhmedabadMarket = () => {
  const [activeLocId, setActiveLocId] = useState('sola');

  const activeLoc = AHMEDABAD_LOCATIONS.find((loc) => loc.id === activeLocId) || AHMEDABAD_LOCATIONS[0];

  return (
    <section id="highlights" className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
            <span>Corridor Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Prime Corridors — <span className="text-[#B69B65]">Architectural Growth</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            Select a sector below to explore key location advantages, residential/commercial focus, and long-term infrastructural connectivity across Western Ahmedabad.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {AHMEDABAD_LOCATIONS.map((loc) => {
            const isActive = loc.id === activeLocId;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocId(loc.id)}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#B69B65] text-white border-[#B69B65] font-semibold'
                    : 'bg-white text-[#5C5852] hover:text-[#171717] border-[#E6E2D8]'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-[#171717]' : 'text-[#B69B65]'}`} />
                <span>{loc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Location Showcase Container */}
        <div className="bg-white border border-[#E6E2D8] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Corridor Frame */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#FAF9F6] border border-[#E6E2D8] p-6 min-h-[320px] flex flex-col justify-between">
                
                <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B69B65]" />
                    <span className="text-[#B69B65] uppercase tracking-wider">Active Sector</span>
                  </div>
                  <span className="text-[#77736C]">Gujarat</span>
                </div>

                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-white border border-[#E6E2D8] text-[#B69B65] flex items-center justify-center mx-auto">
                    <Navigation className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#171717]">{activeLoc.name}</h3>
                  <p className="text-xs text-[#B69B65] font-mono tracking-wider">{activeLoc.tagline}</p>
                </div>

                <div className="p-3 bg-white border border-[#E6E2D8] text-center">
                  <span className="text-[11px] text-[#77736C] uppercase font-mono block">Primary Segment</span>
                  <span className="text-xs font-semibold text-[#171717] mt-0.5 block">{activeLoc.focus}</span>
                </div>

              </div>
            </div>

            {/* Right Detailed Location Profile */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#B69B65] font-semibold block">
                  CORRIDOR PROFILE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717]">
                  {activeLoc.name} <span className="text-[#B69B65]">Outlook</span>
                </h3>
                <p className="text-[#5C5852] text-sm leading-relaxed font-light">
                  {activeLoc.description}
                </p>
              </div>

              {/* Property Focus Box */}
              <div className="p-4 bg-[#FAF9F6] border border-[#E6E2D8] flex items-center gap-4">
                <div className="w-9 h-9 bg-white border border-[#E6E2D8] flex items-center justify-center shrink-0 text-[#B69B65]">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#77736C]">Asset Class Focus</h4>
                  <p className="text-sm font-semibold text-[#171717] mt-0.5">{activeLoc.focus}</p>
                </div>
              </div>

              {/* Key Location Highlights List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#77736C]">Infrastructural Benchmarks:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeLoc.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 bg-[#FAF9F6] border border-[#E6E2D8] text-xs text-[#4B4842]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B69B65] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors"
                >
                  <span>Inquire for {activeLoc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AhmedabadMarket;
