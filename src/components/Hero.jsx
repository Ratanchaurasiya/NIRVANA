import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Hero3DBuilding from './3d/Hero3DBuilding';

const Hero = ({ onNavigate, onOpenDossier }) => {
  return (
    <div className="w-full bg-[#070D1E] overflow-hidden">
      <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[700px] lg:max-h-[1080px] flex flex-col justify-between pt-24 sm:pt-28 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-transparent z-10">
      
      {/* 1. Top Badges Header Bar */}
      <div className="flex items-center justify-between gap-4 w-full relative z-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B132B]/90 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-widest shadow-md text-sharp">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Architectural Engineering Excellence</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B132B]/90 border border-amber-500/40 text-amber-300 text-xs font-mono tracking-wider shadow-md text-sharp">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span>FLAGSHIP RESIDENCES: NIRVANA ABODE</span>
        </div>
      </div>

      {/* 2. Main Hero Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4 sm:py-6 w-full relative z-20">
        
        {/* Left Column: Brand, Tagline, Description & CTAs */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-5 text-left">
          
          {/* Main Title: Sharp, Clear Solid White Typography with High Contrast */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-[1.08] text-sharp drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            NIRVANA GROUP
          </h1>

          {/* Sub-headline: Bracketed Gold Accent Tagline with Consistent Spacing */}
          <div className="text-amber-400 font-mono text-xs sm:text-sm lg:text-base font-extrabold uppercase tracking-wider text-sharp leading-relaxed">
            <span className="text-amber-500 font-bold">[</span> ARCHITECTURAL EXCELLENCE <span className="text-amber-300 mx-1.5">•</span> STRATEGIC LOCATIONS <span className="text-amber-300 mx-1.5">•</span> SUSTAINABLE ENGINEERING <span className="text-amber-500 font-bold">]</span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl text-sharp drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Delivering state-of-the-art corporate offices, premium commercial suites, and luxury villas across prime locations in Gujarat.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={() => onNavigate && onNavigate('/projects')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#070D1E] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 text-[#070D1E]" />
            </button>

            <button
              onClick={() => onOpenDossier && onOpenDossier()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-[#0B132B]/90 hover:bg-amber-500/20 border border-amber-500/50 hover:border-amber-400 transition-all duration-300 cursor-pointer text-sharp flex items-center justify-center gap-2"
            >
              <span>PROJECT DOSSIER (PDF)</span>
            </button>

            <button
              onClick={() => onNavigate && onNavigate('/contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0B132B]/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 cursor-pointer text-sharp"
            >
              INITIATE ENQUIRY
            </button>
          </div>

        </div>

        {/* Right Column: 3D Interactive Building Visual */}
        <div className="lg:col-span-6 xl:col-span-5 w-full relative z-20">
          <Hero3DBuilding />
        </div>

      </div>

      {/* 3. Bottom Feature Metrics Cards Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-amber-500/20 w-full relative z-20">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B132B]/95 border border-amber-500/30 glass-card-hover space-y-1 shadow-lg text-sharp">
          <span className="text-xs font-mono text-amber-400 font-bold block">01 / Sustainability</span>
          <p className="text-xs sm:text-sm text-white font-bold tracking-tight">Zero Carbon & Solar Grids</p>
          <p className="text-[11px] sm:text-xs text-slate-400">Green Building Certified</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B132B]/95 border border-amber-500/30 glass-card-hover space-y-1 shadow-lg text-sharp">
          <span className="text-xs font-mono text-amber-400 font-bold block">02 / Engineering</span>
          <p className="text-xs sm:text-sm text-white font-bold tracking-tight">BIS Zone 5 Seismic Core</p>
          <p className="text-[11px] sm:text-xs text-slate-400">Tensile Rebar Exoskeleton</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B132B]/95 border border-amber-500/30 glass-card-hover space-y-1 shadow-lg text-sharp">
          <span className="text-xs font-mono text-amber-400 font-bold block">03 / Prime Locations</span>
          <p className="text-xs sm:text-sm text-white font-bold tracking-tight">Gujarat Growth Corridors</p>
          <p className="text-[11px] sm:text-xs text-slate-400">Science City, Sola & SG Highway</p>
        </div>
      </div>

    </section>
  </div>
  );
};

export default Hero;
