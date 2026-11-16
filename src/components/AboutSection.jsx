import React from 'react';
import { CheckCircle2, Shield, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
            <span>Corporate Identity & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            About <span className="text-[#B69B65]">NIRVANA GROUP</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            We focus on principled real estate development and transparent advisory, guiding clients across location viability, asset appreciation, and architectural potential.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Architectural Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#E6E2D8] bg-white group">
              <img
                src="/images/about_property.jpg"
                alt="NIRVANA GROUP Ahmedabad Property Guidance"
                className="w-full h-[450px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-transparent to-transparent" />

              {/* Trust & Advisory Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 border border-[#E6E2D8] backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-[#B69B65]/40 text-[#B69B65] flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717] font-serif">Client-First Real Estate Advisory</h4>
                    <p className="text-xs text-[#77736C] mt-0.5">Serving Sola, Science City Road & Western Ahmedabad corridors with rigorous due diligence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Content Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-6 bg-white border border-[#E6E2D8] hover:border-[#B69B65]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FAF9F6] border border-[#E6E2D8] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B69B65]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171717] font-serif">
                    Location-focused property guidance for Gujarat's prime corridors.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5852] mt-1.5 leading-relaxed font-light">
                    In-depth market orientation focused on Science City, Sola, SG Highway, Thaltej, Gota, and Shela growth belts to ensure your investment aligns with infrastructure development.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E2D8] hover:border-[#B69B65]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FAF9F6] border border-[#E6E2D8] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B69B65]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171717] font-serif">
                    Practical support from site shortlisting to final handover.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5852] mt-1.5 leading-relaxed font-light">
                    Hands-on assistance throughout every milestone: site scheduling, floor plan analysis, developer credential verification, and structured side-by-side asset comparison.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E2D8] hover:border-[#B69B65]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FAF9F6] border border-[#E6E2D8] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B69B65]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171717] font-serif">
                    Clear communication for investors, families, and businesses.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5852] mt-1.5 leading-relaxed font-light">
                    Uncompromising transparency without high-pressure sales tactics. We communicate with clarity whether securing high-yielding commercial premises or bespoke residences.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Presence Bar */}
            <div className="p-4 bg-[#F5F3EE] border border-[#E6E2D8] flex items-center justify-between text-xs text-[#77736C]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#B69B65] shrink-0" />
                <span className="font-mono uppercase tracking-wider text-[#5C5852]">Presence: Western Growth Corridors, Ahmedabad, Gujarat, India</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
