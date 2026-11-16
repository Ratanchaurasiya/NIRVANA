import React from 'react';
import { MapPin, MessageCircle, BarChart3, UserCheck, Building, CalendarCheck, FileCheck, PhoneCall, Award } from 'lucide-react';

const REASONS = [
  {
    icon: MapPin,
    title: "Gujarat-Focused Mastery",
    desc: "In-depth hyper-local awareness of Sola, Science City, SG Highway & surrounding micro-markets."
  },
  {
    icon: MessageCircle,
    title: "Uncompromising Transparency",
    desc: "Rigorous due diligence regarding project milestones, statutory approvals, and clear valuation."
  },
  {
    icon: BarChart3,
    title: "Structural Due Diligence",
    desc: "Thorough assessment of floorplan usability, core ventilation, solar pathing, and spatial efficiency."
  },
  {
    icon: UserCheck,
    title: "Tailored Asset Strategy",
    desc: "Consultative approach tailored specifically to your family's lifestyle or institutional capital goals."
  },
  {
    icon: Building,
    title: "Grade-A Developer Capability",
    desc: "Comprehensive capability spanning bespoke luxury sky residences, corporate offices, and master layouts."
  },
  {
    icon: CalendarCheck,
    title: "Coordinated Private Walkthroughs",
    desc: "Seamless appointment scheduling and technical on-site accompaniment at your convenience."
  },
  {
    icon: FileCheck,
    title: "Objective Comparison Models",
    desc: "Side-by-side matrices comparing shortlisted projects on key metrics prior to final commitment."
  },
  {
    icon: PhoneCall,
    title: "Dedicated Advisory Principal",
    desc: "Direct communication with experienced development managers without call-center intermediaries."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Why Discerning Clients Choose <span className="text-[#B69B65]">NIRVANA GROUP</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            Our client-first philosophy prioritizes clarity, structural integrity, and long-term asset value over sales rhetoric.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E6E2D8] hover:border-[#B69B65]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E6E2D8] text-[#B69B65] flex items-center justify-center mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-[#171717] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C5852] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#E6E2D8] flex items-center justify-between text-[10px] text-[#77736C] font-mono">
                  <span>STANDARD 0{idx + 1}</span>
                  <span className="w-1 h-1 bg-[#B69B65]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
