import React from 'react';
import { MapPin, MessageCircle, BarChart3, UserCheck, Building, CalendarCheck, FileCheck, PhoneCall, Award } from 'lucide-react';

const REASONS = [
  {
    icon: MapPin,
    title: "Ahmedabad-Focused Guidance",
    desc: "In-depth hyper-local awareness of Sola, Science City, SG Highway & surrounding micro-markets."
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    desc: "Honest feedback regarding project status, legal approvals, and realistic pricing."
  },
  {
    icon: BarChart3,
    title: "Practical Property Evaluation",
    desc: "Thorough assessment of floorplan usability, ventilation, orientation, and layout efficiency."
  },
  {
    icon: UserCheck,
    title: "Personalized Assistance",
    desc: "Custom advice tailored specifically to your family's living needs or corporate goals."
  },
  {
    icon: Building,
    title: "Residential & Commercial Expertise",
    desc: "Comprehensive capability covering luxury sky residences, corporate offices, and plots."
  },
  {
    icon: CalendarCheck,
    title: "Site Visit Coordination",
    desc: "Seamless appointment scheduling and guided on-site walkthroughs at your convenience."
  },
  {
    icon: FileCheck,
    title: "Clear Comparison Before Decisions",
    desc: "Side-by-side matrices comparing shortlisted projects on key parameters before final commitment."
  },
  {
    icon: PhoneCall,
    title: "Direct Communication",
    desc: "Direct communication with dedicated project advisors without dealing with call centers or automated bots."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>The Nirvana Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Why Clients Choose <span className="text-gold-gradient">NIRVANA GROUP</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Our client-first philosophy prioritizes clarity, local expertise, and practical evaluation over sales pitches.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-[#0B132B] border border-slate-800 p-6 hover:border-amber-500/40 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-gold-gradient group-hover:text-navy-950 transition-all duration-300 mb-5 shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-amber-400/80 font-mono">
                  <span>STANDARD 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
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
