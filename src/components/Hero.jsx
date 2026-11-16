import React from 'react';
import { ArrowRight, Compass, Shield, Award } from 'lucide-react';
import Hero3DBuilding from './3d/Hero3DBuilding';

const Hero = ({ onNavigate, onOpenDossier }) => {
  return (
    <div className="w-full bg-[#FAF9F6] overflow-hidden pt-28 sm:pt-36 pb-16">
      <section className="relative w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-12">
        
        {/* 1. Subtle Architectural Monogram Header */}
        <div className="flex items-center justify-between gap-4 w-full border-b border-[#DEDAD2] pb-3.5 text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#77736C]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-[#B69B65]" />
            <span className="text-[#171717]">Architectural Engineering & Property Holdings</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[#77736C]">
            <span>Ahmedabad</span>
            <span className="text-[#DEDAD2]">•</span>
            <span>Gujarat</span>
            <span className="text-[#DEDAD2]">•</span>
            <span>India</span>
          </div>
        </div>

        {/* 2. Main Hero Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Column: Brand Typography, Tagline, Editorial Description & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DEDAD2] text-[#B69B65] text-[10px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
                <span>Developer Portfolio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-[#171717] tracking-[0.04em] leading-[1.06]">
                NIRVANA GROUP
              </h1>
              <p className="text-xl sm:text-2xl font-editorial italic text-[#B69B65] tracking-wide pt-0.5">
                "Building Dreams. Creating Landmarks."
              </p>
            </div>

            {/* Architectural Sub-Manifesto */}
            <p className="text-sm sm:text-base text-[#3D3A35] font-light leading-relaxed max-w-xl">
              Curating landmark corporate environments, high-street retail suites, and bespoke residential sanctuaries across Western Ahmedabad’s highest-velocity growth corridors.
            </p>

            {/* Action Buttons: Clean Architectural Geometry */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate && onNavigate('/projects')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#A38854] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
              >
                <span>Explore Developments</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                onClick={() => onOpenDossier && onOpenDossier()}
                className="w-full sm:w-auto px-7 py-3.5 border border-[#171717] text-[#171717] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#171717] hover:text-white transition-all cursor-pointer flex items-center justify-center bg-white shadow-sm"
              >
                <span>Project Dossier (PDF)</span>
              </button>
            </div>

            {/* Architectural Trust Pillars */}
            <div className="flex items-center gap-6 pt-2 text-[11px] font-sans uppercase tracking-[0.18em] text-[#77736C]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69B65]" />
                100% RERA Registered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69B65]" />
                BIS Zone 5 Engineered
              </span>
            </div>

          </div>

          {/* Right Column: Architectural Exhibition Landmark Frame */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <Hero3DBuilding />
          </div>

        </div>

        {/* 3. Bottom Architectural Benchmarks Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-[#DEDAD2] w-full">
          <div className="p-6 bg-white border border-[#DEDAD2] shadow-sm space-y-2 transition-all hover:border-[#B69B65]">
            <span className="text-[10px] font-sans font-bold text-[#B69B65] uppercase tracking-[0.22em] block">Pillar I • Sustainability</span>
            <p className="text-base text-[#171717] font-serif font-bold tracking-tight">Zero Carbon & Solar Micro-Grids</p>
            <p className="text-xs text-[#5C5852] font-light leading-relaxed">Integrated rainwater harvesting and IGBC gold-standard environmental envelopes.</p>
          </div>

          <div className="p-6 bg-white border border-[#DEDAD2] shadow-sm space-y-2 transition-all hover:border-[#B69B65]">
            <span className="text-[10px] font-sans font-bold text-[#B69B65] uppercase tracking-[0.22em] block">Pillar II • Structural Core</span>
            <p className="text-base text-[#171717] font-serif font-bold tracking-tight">BIS Zone 5 Seismic Exoskeleton</p>
            <p className="text-xs text-[#5C5852] font-light leading-relaxed">Monolithic high-tensile steel rebar foundation engineered for multi-generational longevity.</p>
          </div>

          <div className="p-6 bg-white border border-[#DEDAD2] shadow-sm space-y-2 transition-all hover:border-[#B69B65]">
            <span className="text-[10px] font-sans font-bold text-[#B69B65] uppercase tracking-[0.22em] block">Pillar III • Strategic Belts</span>
            <p className="text-base text-[#171717] font-serif font-bold tracking-tight">Gujarat Arterial Corridors</p>
            <p className="text-xs text-[#5C5852] font-light leading-relaxed">Prime positions spanning Science City Road, Sola, and SG Highway arterial expressways.</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Hero;
