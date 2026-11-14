import React from 'react';
import { MessageSquare, Layers, CheckCircle, ArrowRight, Compass } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    title: "Requirement Discussion",
    subtitle: "Understanding Purpose & Budget",
    desc: "We understand budget, location preference, and property purpose.",
    details: ["In-depth consultation", "Location parameter definition", "Budget & timeline alignment"],
    icon: MessageSquare
  },
  {
    step: "02",
    title: "Curated Property Options",
    subtitle: "Practical Shortlisting & Analysis",
    desc: "We share relevant options with practical comparisons for faster decisions.",
    details: ["Verified project shortlists", "Side-by-side layout comparison", "Infrastructure growth review"],
    icon: Layers
  },
  {
    step: "03",
    title: "Site Visit & Closure Support",
    subtitle: "Guided Visit & Final Coordination",
    desc: "We support visit planning and final coordination for the selected property.",
    details: ["Convenient appointment booking", "On-site property inspection", "Final decision coordination"],
    icon: CheckCircle
  }
];

const HowWeWork = () => {
  return (
    <section id="process" className="py-24 relative bg-[#070D1E] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Structured Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            How We <span className="text-gold-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A simple, transparent 3-step approach designed to eliminate confusion and help you select the ideal real estate opportunity in Ahmedabad.
          </p>
        </div>

        {/* 3-Step Interactive Timeline */}
        <div className="relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/10 via-amber-400/50 to-amber-500/10 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {STEPS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="group glass-panel rounded-3xl p-8 border border-amber-500/30 hover:border-amber-400 glass-card-hover flex flex-col justify-between shadow-2xl relative"
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gold-gradient text-navy-950 flex items-center justify-center font-bold text-xl shadow-lg">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="text-4xl font-serif font-extrabold text-amber-400/30 group-hover:text-amber-400 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-4">
                      {item.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                      "{item.desc}"
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Ribbon below timeline */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-navy-950 bg-gold-gradient shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Start Step 01 — Contact Us</span>
            <ArrowRight className="w-4 h-4 text-navy-950" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
