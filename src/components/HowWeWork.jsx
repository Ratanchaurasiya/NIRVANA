import React from 'react';
import { MessageSquare, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import TypewriterTitle from './TypewriterTitle';

const STEPS = [
  {
    step: "01",
    title: "Requirement Discovery",
    subtitle: "Understanding Purpose & Scope",
    desc: "We analyze capital parameters, preferred micro-markets, and specific spatial requirements.",
    details: ["Consultative advisory session", "Corridor parameter definition", "Spatial & timeline alignment"],
    icon: MessageSquare
  },
  {
    step: "02",
    title: "Curated Asset Portfolio",
    subtitle: "Technical Due Diligence",
    desc: "We curate verified project options with comparative analyses for informed decisions.",
    details: ["Verified developer shortlists", "Side-by-side floorplate review", "Infrastructure growth analysis"],
    icon: Layers
  },
  {
    step: "03",
    title: "On-Site Review & Closing",
    subtitle: "Guided Walkthrough & Alignment",
    desc: "We coordinate dedicated on-site reviews and assist through final contractual documentation.",
    details: ["Executive site visit booking", "Technical construction inspection", "Contractual closing oversight"],
    icon: CheckCircle
  }
];

const HowWeWork = () => {
  return (
    <section id="process" className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <TypewriterTitle
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight block"
          >
            How We <span className="text-[#B69B65]">Work</span>
          </TypewriterTitle>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            A disciplined, transparent three-stage approach designed to ensure complete clarity when acquiring premier real estate in Gujarat.
          </p>
        </div>

        {/* 3-Step Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STEPS.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="group bg-white border border-[#E6E2D8] p-8 hover:border-[#B69B65]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E6E2D8] flex items-center justify-center text-[#B69B65]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-serif font-bold text-[#77736C] group-hover:text-[#B69B65] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-[#171717] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#B69B65] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C5852] font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-[#E6E2D8]">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#4B4842]">
                      <span className="w-1.5 h-1.5 bg-[#B69B65]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Ribbon */}
        <div className="text-center pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors"
          >
            <span>Begin Step 01 — Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
