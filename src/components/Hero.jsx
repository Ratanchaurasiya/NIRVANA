import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero3DBuilding from './3d/Hero3DBuilding';

const Hero = ({ onNavigate, onOpenDossier }) => {
  return (
    <div className="w-full bg-[#171717] overflow-hidden pt-28 sm:pt-32 pb-16">
      <section className="relative w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-12">
        
        {/* 1. Subtle Editorial Metadata Header */}
        <div className="flex items-center justify-between gap-4 w-full border-b border-[#2E2E2E] pb-3 text-xs font-mono uppercase tracking-[0.22em] text-[#77736C]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#B69B65]" />
            <span className="text-[#B69B65]">Architectural Engineering & Development</span>
          </div>

          <div className="hidden sm:block text-[#A39F97]">
            Ahmedabad • Gujarat • India
          </div>
        </div>

        {/* 2. Main Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Column: Brand Typography, Tagline, Editorial Description & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B69B65] font-semibold block">
                Official Developer Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F1E8] tracking-tight leading-[1.08]">
                NIRVANA GROUP
              </h1>
              <p className="text-sm font-serif italic text-[#A39F97] tracking-wide pt-1">
                "Building Dreams. Creating Landmarks."
              </p>
            </div>

            {/* Editorial Focus Line */}
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B69B65] flex items-center gap-2">
              <span>Architectural Excellence</span>
              <span className="text-[#77736C]">—</span>
              <span>Strategic Corridors</span>
              <span className="text-[#77736C]">—</span>
              <span>Sustainable Core</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#D5D1C8] font-light leading-relaxed max-w-xl">
              Delivering state-of-the-art corporate offices, prime commercial suites, and luxury residential estates across premier growth hubs in Gujarat.
            </p>

            {/* Action Buttons: Clean Architectural Geometry (No Rounded Bubbles) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate && onNavigate('/projects')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#B69B65] text-[#171717] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#C4A975] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                onClick={() => onOpenDossier && onOpenDossier()}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#B69B65]/40 text-[#F5F1E8] text-xs font-medium uppercase tracking-[0.18em] hover:border-[#B69B65] hover:bg-[#B69B65]/10 transition-all cursor-pointer flex items-center justify-center"
              >
                <span>Project Dossier (PDF)</span>
              </button>

              <button
                onClick={() => onNavigate && onNavigate('/contact')}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#2E2E2E] bg-[#1F1F1F] text-[#F5F1E8] text-xs font-medium uppercase tracking-[0.18em] hover:border-[#77736C] transition-all cursor-pointer"
              >
                <span>Initiate Enquiry</span>
              </button>
            </div>

          </div>

          {/* Right Column: Architectural Exhibition Landmark Frame */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <Hero3DBuilding />
          </div>

        </div>

        {/* 3. Bottom Architectural Benchmarks Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#2E2E2E] w-full">
          <div className="p-5 bg-[#1F1F1F] border border-[#2E2E2E] space-y-1.5 transition-colors hover:border-[#B69B65]/40">
            <span className="text-[11px] font-mono text-[#B69B65] uppercase tracking-[0.2em] block">01 / Sustainability</span>
            <p className="text-sm text-[#F5F1E8] font-serif font-bold tracking-tight">Zero Carbon & Solar Grids</p>
            <p className="text-xs text-[#77736C]">IGBC Certified Standards</p>
          </div>

          <div className="p-5 bg-[#1F1F1F] border border-[#2E2E2E] space-y-1.5 transition-colors hover:border-[#B69B65]/40">
            <span className="text-[11px] font-mono text-[#B69B65] uppercase tracking-[0.2em] block">02 / Engineering</span>
            <p className="text-sm text-[#F5F1E8] font-serif font-bold tracking-tight">BIS Zone 5 Seismic Core</p>
            <p className="text-xs text-[#77736C]">High Tensile Rebar Exoskeleton</p>
          </div>

          <div className="p-5 bg-[#1F1F1F] border border-[#2E2E2E] space-y-1.5 transition-colors hover:border-[#B69B65]/40">
            <span className="text-[11px] font-mono text-[#B69B65] uppercase tracking-[0.2em] block">03 / Strategic Presence</span>
            <p className="text-sm text-[#F5F1E8] font-serif font-bold tracking-tight">Prime Gujarat Corridors</p>
            <p className="text-xs text-[#77736C]">Science City, Sola & SG Highway</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Hero;
