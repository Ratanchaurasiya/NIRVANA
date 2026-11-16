import React, { useState } from 'react';
import SeismicFoundation3D from '../components/3d/SeismicFoundation3D';
import { DEVELOPMENT_STANDARDS } from '../data/projectsData';
import AboutSection from '../components/AboutSection';
import { ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Award, Layers } from 'lucide-react';
import TypewriterTitle from '../components/TypewriterTitle';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage({ onNavigate }) {
  const [activeStandard, setActiveStandard] = useState("01");

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <TypewriterTitle
          as="h1"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight block"
        >
          About <span className="text-[#B69B65]">NIRVANA GROUP</span>
        </TypewriterTitle>
        <div className="w-12 h-px bg-[#B69B65]/40 mx-auto" />
      </div>

      {/* ---------------- Exact Corporate Profile Block ---------------- */}
      <ScrollReveal>
        <div className="bg-white p-8 sm:p-12 border border-[#DEDAD2] shadow-sm relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FAF9F6] border border-[#DEDAD2] text-[#B69B65] mx-auto">
              <Award className="w-7 h-7" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171717] leading-snug">
              "Nirvana Group is a premier real estate development group specializing in Grade-A commercial and residential property engineering based in Gujarat."
            </h2>

            <p className="text-sm sm:text-base text-[#5C5852] font-light leading-relaxed max-w-2xl mx-auto">
              Combining structural safety, double-glazed energy efficiency, and modern aesthetic elegance to shape Gujarat's skyline across Sola, Science City Road, SG Highway, Thaltej, and Khoraj.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ---------------- Seismic Foundation & Core Engineering ---------------- */}
      <ScrollReveal>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#DEDAD2] pb-3">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#B69B65] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#B69B65]" />
              <span>Structural Integrity Standards • BIS Zone 5</span>
            </div>
            <span className="text-xs text-[#77736C]">Deep Piling to Monolithic Core</span>
          </div>

          <SeismicFoundation3D />
        </div>
      </ScrollReveal>

      {/* ---------------- Development Standards List ---------------- */}
      <ScrollReveal>
        <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#B69B65] font-bold">ENGINEERING BENCHMARKS</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717]">
            Development Standards (01 to 05)
          </h2>
          <p className="text-xs text-[#77736C] font-light">Select any benchmark below to inspect engineering specifics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* List Buttons Column */}
          <div className="lg:col-span-5 space-y-3">
            {DEVELOPMENT_STANDARDS.map((std) => {
              const isActive = activeStandard === std.id;
              return (
                <button
                  key={std.id}
                  onClick={() => setActiveStandard(std.id)}
                  className={`w-full p-4 text-left border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-[#B69B65] text-white border-[#B69B65] shadow-sm'
                      : 'bg-white text-[#171717] border-[#DEDAD2] hover:border-[#171717] hover:bg-[#FAF9F6]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-sans font-bold px-2.5 py-1 ${
                      isActive ? 'bg-white text-[#B69B65]' : 'bg-[#FAF9F6] text-[#5C5852] border border-[#DEDAD2]'
                    }`}>
                      {std.id}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-serif">{std.title}</span>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-white translate-x-1' : 'text-[#77736C] group-hover:text-[#171717]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Standard Display Card */}
          <div className="lg:col-span-7">
            {(() => {
              const active = DEVELOPMENT_STANDARDS.find(s => s.id === activeStandard) || DEVELOPMENT_STANDARDS[0];
              return (
                <div className="bg-white p-8 border border-[#DEDAD2] shadow-sm space-y-6 h-full flex flex-col justify-between min-h-[300px]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#DEDAD2] pb-4">
                      <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#B69B65] font-bold">
                        STANDARD {active.id} SPECIFICATION
                      </span>
                      <Layers className="w-5 h-5 text-[#B69B65]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#171717]">
                      {active.title}
                    </h3>

                    <p className="text-sm text-[#5C5852] font-light leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DEDAD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[11px] font-sans text-[#77736C]">COMPLIANCE: BIS ISO 9001 / IGBC GOLD</span>
                    <button
                      onClick={() => onNavigate('/contact')}
                      className="px-5 py-2.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors cursor-pointer"
                    >
                      Enquire Specifications
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </div>
      </ScrollReveal>

      {/* Legacy About Section */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
    </div>
  );
}
