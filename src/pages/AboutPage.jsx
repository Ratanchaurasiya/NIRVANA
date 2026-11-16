import React, { useState } from 'react';
import SeismicFoundation3D from '../components/3d/SeismicFoundation3D';
import { DEVELOPMENT_STANDARDS } from '../data/projectsData';
import AboutSection from '../components/AboutSection';
import { ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Award, Layers } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const [activeStandard, setActiveStandard] = useState("01");

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#B69B65]" />
          <span>CORPORATE ARCHITECTURE PROFILE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F5F1E8] tracking-tight">
          About <span className="text-[#B69B65]">NIRVANA GROUP</span>
        </h1>
        <div className="w-12 h-px bg-[#B69B65]/40 mx-auto" />
      </div>

      {/* ---------------- Exact Corporate Profile Block ---------------- */}
      <div className="rounded-none bg-[#1F1F1F] p-8 sm:p-12 border border-[#2E2E2E] shadow-xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-none bg-[#171717] border border-[#2E2E2E] text-[#B69B65] mx-auto">
            <Award className="w-7 h-7" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F5F1E8] leading-snug">
            "Nirvana Group is a premier real estate development group specializing in Grade-A commercial and residential property engineering based in Gujarat."
          </h2>

          <p className="text-sm sm:text-base text-[#A39F97] font-light leading-relaxed max-w-2xl mx-auto">
            Combining structural safety, double-glazed energy efficiency, and modern aesthetic elegance to shape Gujarat's skyline across Sola, Science City Road, SG Highway, Thaltej, and Khoraj.
          </p>
        </div>
      </div>

      {/* ---------------- 3D Seismic Foundation Exploded View Visual ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <SeismicFoundation3D />
        </div>

        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">
            <ShieldCheck className="w-4 h-4 text-[#B69B65]" />
            <span>Structural Integrity Standard</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F1E8]">
            Seismic-Resistant Structures & Engineering
          </h2>

          <p className="text-xs sm:text-sm text-[#A39F97] font-light leading-relaxed">
            Every NIRVANA project incorporates deep bedrock piling, hydraulic damper assemblies, high-tensile steel rebar cages, and BIS Zone 5 compliant concrete cores.
          </p>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#F5F1E8] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#B69B65] shrink-0" />
              <span>BIS Zone 5 Earth Shock Isolation Engineering</span>
            </div>
            <div className="p-3.5 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#F5F1E8] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#B69B65] shrink-0" />
              <span>Acoustic & Thermal Double Glazed Curtain Walling</span>
            </div>
            <div className="p-3.5 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#F5F1E8] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#B69B65] shrink-0" />
              <span>Solar Grid Clean Energy & Water Harvesting</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Interactive Metallic Development Standards List ---------------- */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">ENGINEERING BENCHMARKS</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F1E8]">
            Development Standards (01 to 05)
          </h2>
          <p className="text-xs text-[#77736C] font-light">Select any standard below to inspect engineering specifics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Metallic List Buttons Column */}
          <div className="lg:col-span-5 space-y-3">
            {DEVELOPMENT_STANDARDS.map((std) => {
              const isActive = activeStandard === std.id;
              return (
                <button
                  key={std.id}
                  onClick={() => setActiveStandard(std.id)}
                  className={`w-full p-4 rounded-none text-left border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#B69B65] text-[#171717] border-[#B69B65]'
                      : 'bg-[#1F1F1F] text-[#F5F1E8] border-[#2E2E2E] hover:border-[#B69B65]/40 hover:bg-[#242424]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-extrabold px-2.5 py-1 rounded-none ${
                      isActive ? 'bg-[#171717] text-[#B69B65]' : 'bg-[#171717] text-[#A39F97] border border-[#2E2E2E]'
                    }`}>
                      {std.id}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-serif">{std.title}</span>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#171717] translate-x-1' : 'text-[#77736C] group-hover:text-[#B69B65]'
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
                <div className="rounded-none bg-[#1F1F1F] p-8 border border-[#2E2E2E] shadow-xl space-y-6 h-full flex flex-col justify-between min-h-[300px]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#2E2E2E] pb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">
                        STANDARD {active.id} DEFINITION
                      </span>
                      <Layers className="w-5 h-5 text-[#B69B65]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F5F1E8]">
                      {active.title}
                    </h3>

                    <p className="text-sm text-[#A39F97] font-light leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2E2E2E] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#77736C]">COMPLIANCE: BIS ISO 9001 / IGBC GOLD</span>
                    <button
                      onClick={() => onNavigate('/contact')}
                      className="px-5 py-2.5 rounded-none bg-[#B69B65] text-[#171717] text-xs font-bold uppercase tracking-wider hover:bg-[#c4a973] transition-colors"
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

      {/* Legacy About Section */}
      <AboutSection />
    </div>
  );
}
