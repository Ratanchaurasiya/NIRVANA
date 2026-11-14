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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>CORPORATE ARCHITECTURE PROFILE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          About <span className="text-gold-gradient">NIRVANA GROUP</span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
      </div>

      {/* ---------------- Exact Corporate Profile Block ---------------- */}
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-amber-500/40 shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto">
            <Award className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-snug">
            "Nirvana Group is a premier real estate development group specializing in Grade-A commercial and residential property engineering based in Gujarat."
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
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
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Structural Integrity Standard</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Seismic-Resistant Structures & Engineering
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Every NIRVANA project incorporates deep bedrock piling, hydraulic damper assemblies, high-tensile steel rebar cages, and BIS Zone 5 compliant concrete cores.
          </p>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#070D1E] border border-slate-800 text-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>BIS Zone 5 Earth Shock Isolation Engineering</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070D1E] border border-slate-800 text-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Acoustic & Thermal Double Glazed Curtain Walling</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070D1E] border border-slate-800 text-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Solar Grid Clean Energy & Water Harvesting</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Interactive Metallic Development Standards List ---------------- */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">ENGINEERING BENCHMARKS</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Development Standards (01 to 05)
          </h2>
          <p className="text-xs text-slate-400 font-light">Click on any standard below to inspect engineering specifics</p>
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
                  className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-gold-gradient text-navy-950 border-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.4)] scale-[1.02]'
                      : 'bg-[#0B132B] text-slate-200 border-slate-800 hover:border-amber-500/40 hover:bg-[#111D3E]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm font-extrabold px-3 py-1 rounded-xl ${
                      isActive ? 'bg-navy-950 text-amber-300' : 'bg-[#070D1E] text-amber-400 border border-slate-700'
                    }`}>
                      {std.id}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-serif">{std.title}</span>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-navy-950 translate-x-1' : 'text-slate-500 group-hover:text-amber-400'
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
                <div className="glass-panel rounded-3xl p-8 border border-amber-500/40 shadow-2xl space-y-6 h-full flex flex-col justify-between min-h-[300px]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                        STANDARD {active.id} DEFINITION
                      </span>
                      <Layers className="w-5 h-5 text-amber-400" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {active.title}
                    </h3>

                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-300">COMPLIANCE: BIS ISO 9001 / IGBC GOLD</span>
                    <button
                      onClick={() => onNavigate('/contact')}
                      className="px-5 py-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider hover:bg-amber-500/30 transition-colors"
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
