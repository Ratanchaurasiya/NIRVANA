import React, { useState } from 'react';
import { AHMEDABAD_LOCATIONS } from '../data/propertyData';
import { MapPin, Navigation, CheckCircle2, ArrowRight, Building, Landmark } from 'lucide-react';

const AhmedabadMarket = () => {
  const [activeLocId, setActiveLocId] = useState('sola');

  const activeLoc = AHMEDABAD_LOCATIONS.find((loc) => loc.id === activeLocId) || AHMEDABAD_LOCATIONS[0];

  return (
    <section id="highlights" className="py-24 relative bg-navy-950 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            <span>Local Market Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Ahmedabad — <span className="text-gold-gradient">A Market Built for Growth</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Select an area below to explore key location advantages, residential/commercial focus, and growth corridor overview across Western Ahmedabad.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {AHMEDABAD_LOCATIONS.map((loc) => {
            const isActive = loc.id === activeLocId;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocId(loc.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gold-gradient text-navy-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[#0B132B] text-slate-300 hover:text-white hover:bg-[#111D3E] border border-slate-800'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-navy-950' : 'text-amber-400'}`} />
                <span>{loc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Location Showcase Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Interactive Map Visual Simulation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-[#070D1E] border border-slate-800 p-6 overflow-hidden min-h-[340px] flex flex-col justify-between">
                
                {/* Decorative Map Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                
                {/* Simulated Radar / Hotspot Nodes */}
                <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">CORRIDOR MAP ACTIVE</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-300">WEST AHMEDABAD</span>
                </div>

                <div className="relative z-10 py-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
                    <Navigation className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">{activeLoc.name} Sector</h3>
                  <p className="text-xs text-amber-300 font-mono tracking-wider">{activeLoc.tagline}</p>
                </div>

                <div className="relative z-10 p-3 rounded-xl bg-[#0B132B]/80 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400">Primary Focus: </span>
                  <span className="text-xs font-bold text-white">{activeLoc.focus}</span>
                </div>

              </div>
            </div>

            {/* Right Detailed Location Profile */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-block text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  LOCALITY INSIGHT
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">
                  {activeLoc.name} <span className="text-gold-gradient">Growth Profile</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {activeLoc.description}
                </p>
              </div>

              {/* Property Focus Pill */}
              <div className="p-4 rounded-2xl bg-[#070D1E] border border-amber-500/30 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300">Property Segment Focus</h4>
                  <p className="text-sm font-bold text-white mt-0.5">{activeLoc.focus}</p>
                </div>
              </div>

              {/* Key Location Highlights List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Infrastructure Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeLoc.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#0B132B] border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Inquire About {activeLoc.name} Properties</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
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
