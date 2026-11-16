import React from 'react';
import { Building2, Navigation, ShieldCheck, ArrowUpRight } from 'lucide-react';

const GoogleMapCard = () => {
  const regionalMapUrl = `https://maps.google.com/maps?q=Ahmedabad%2C%20Gujarat%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white border border-[#E6E2D8] p-5 sm:p-6 space-y-5">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E2D8] pb-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 bg-[#FAF9F6] border border-[#B69B65]/40 text-[#B69B65] flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#171717] font-serif tracking-tight">
              Corporate Headquarters
            </h4>
            <p className="text-xs text-[#77736C] font-mono flex items-center gap-1.5 mt-0.5">
              <span className="text-[#B69B65]">Ahmedabad, Gujarat, India</span>
              <span>•</span>
              <span>Prime Growth Corridors</span>
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF9F6] border border-[#E6E2D8] text-[#B69B65] text-[11px] font-mono tracking-wider shrink-0 self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B69B65]" />
          <span>By Appointment</span>
        </div>
      </div>

      {/* Styled Regional Map Preview Container */}
      <div className="relative overflow-hidden h-[250px] border border-[#E6E2D8] group">
        <iframe
          title="NIRVANA GROUP Corporate Territory"
          src={regionalMapUrl}
          className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[110%] opacity-75 group-hover:opacity-90 transition-opacity duration-500"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent pointer-events-none" />

        {/* Floating Strategic Overlay Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-3 bg-white/95 border border-[#E6E2D8] text-xs">
          <div className="flex items-center gap-2 text-[#5C5852]">
            <Navigation className="w-3.5 h-3.5 text-[#B69B65]" />
            <span className="text-[11px] font-mono">Territory: Western Ahmedabad Growth Belt</span>
          </div>

          <a
            href="https://maps.google.com/?q=Ahmedabad,Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#B69B65] hover:text-[#171717] transition-colors"
          >
            <span>City Map</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Strategic Hub Presence Highlights */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <div className="p-3 bg-[#FAF9F6] border border-[#E6E2D8]">
          <span className="text-[10px] font-mono text-[#77736C] uppercase block">Active Corridors</span>
          <span className="text-xs font-semibold text-[#171717] mt-0.5 block">Sola & Science City</span>
        </div>
        <div className="p-3 bg-[#FAF9F6] border border-[#E6E2D8]">
          <span className="text-[10px] font-mono text-[#77736C] uppercase block">Highways & Arterials</span>
          <span className="text-xs font-semibold text-[#171717] mt-0.5 block">SG Highway & SP Ring Road</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapCard;
