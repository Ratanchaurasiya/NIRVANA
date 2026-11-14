import React from 'react';
import { CheckCircle2, Shield, Building, Compass, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Company Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            About <span className="text-gold-gradient">NIRVANA GROUP</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            We focus on practical and transparent real estate assistance, helping clients evaluate location, value, and project potential before making decisions.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Architectural Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              <img
                src="/images/about_property.jpg"
                alt="NIRVANA GROUP Ahmedabad Property Guidance"
                className="w-full h-[450px] lg:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-transparent opacity-80" />

              {/* Floating Animated Experience/Trust Visual Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel border border-amber-500/40 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient text-navy-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif">Client-First Real Estate Advisory</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Serving Sola, Science City Road & Western Ahmedabad corridors with transparent evaluation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background offset frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-amber-500/20 pointer-events-none hidden sm:block -z-10" />
          </div>

          {/* Right Column: Animated Content Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="glass-card-hover p-6 rounded-2xl bg-[#0B132B]/80 border border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    Location-focused property guidance for Ahmedabad buyers.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-light">
                    In-depth market orientation focused specifically on Science City, Sola, SG Highway, Thaltej, Gota, and Shela growth belts to ensure your investment aligns with long-term infrastructure development.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6 rounded-2xl bg-[#0B132B]/80 border border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    Practical support from site shortlisting to final decision.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-light">
                    Hands-on assistance throughout every step: site visit scheduling, layout review, developer history verification, and objective side-by-side project comparisons.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6 rounded-2xl bg-[#0B132B]/80 border border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    Clear communication for investors, families, and businesses.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-light">
                    No pressure, no confusing terms. We communicate clearly whether you are a family purchasing your dream residence or a corporate entity securing new office premises.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Location Snapshot Pill */}
            <div className="p-4 rounded-xl bg-[#111D3E]/60 border border-amber-500/20 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-slate-200">STRATEGIC PRESENCE: Western Growth Corridors, Ahmedabad, Gujarat, India</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
