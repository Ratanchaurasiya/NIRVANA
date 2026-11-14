import React from 'react';
import { Building2, Navigation, ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';

const GoogleMapCard = () => {
  // Broad regional view of Ahmedabad city without any specific building or street address
  const regionalMapUrl = `https://maps.google.com/maps?q=Ahmedabad%2C%20Gujarat%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="rounded-3xl glass-panel border border-amber-500/30 p-5 sm:p-7 shadow-2xl space-y-5 bg-[#070D1E]/90 backdrop-blur-xl">
      {/* Header Bar - Pure Professional Corporate Tone */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-[#070D1E] flex items-center justify-center font-black shrink-0 shadow-lg shadow-amber-500/20">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-serif tracking-tight">
              Corporate Headquarters
            </h4>
            <p className="text-xs text-amber-400 font-mono flex items-center gap-1.5 mt-0.5">
              <span>Ahmedabad, Gujarat, India</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Prime Growth Corridor</span>
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B132B] border border-amber-500/30 text-amber-300 text-[11px] font-mono tracking-wider shrink-0 self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>By Appointment Only</span>
        </div>
      </div>

      {/* Styled Regional Map Preview Container */}
      <div className="relative rounded-2xl overflow-hidden h-[260px] border border-slate-800 shadow-inner group">
        <iframe
          title="NIRVANA GROUP Corporate Territory"
          src={regionalMapUrl}
          className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[115%] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
        />

        {/* Ambient Dark Gradient Framing */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 border border-amber-500/20 pointer-events-none rounded-2xl" />

        {/* Floating Strategic Overlay Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070D1E]/90 backdrop-blur-md border border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Navigation className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-mono">Territory: Western Ahmedabad</span>
          </div>

          <a
            href="https://maps.google.com/?q=Ahmedabad,Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 hover:text-white transition-colors"
          >
            <span>City Map</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Strategic Hub Presence Highlights */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <div className="p-2.5 rounded-xl bg-[#0B132B]/80 border border-slate-800/80">
          <span className="text-[10px] font-mono text-slate-400 uppercase block">Active Hubs</span>
          <span className="text-xs font-bold text-white mt-0.5 block">Sola & Science City</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#0B132B]/80 border border-slate-800/80">
          <span className="text-[10px] font-mono text-slate-400 uppercase block">Corporate Corridor</span>
          <span className="text-xs font-bold text-white mt-0.5 block">S.G. Highway Belt</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapCard;
