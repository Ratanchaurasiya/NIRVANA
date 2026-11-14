import React from 'react';

const BrandLogo = ({ variant = "default", className = "" }) => {
  return (
    <a 
      href="#home" 
      className={`group inline-flex items-center gap-3.5 transition-all duration-300 ${className}`}
      aria-label="NIRVANA GROUP Home"
    >
      {/* Brand Icon Mark */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#111D3E] via-[#0B132B] to-[#070D1E] border border-amber-500/40 shadow-lg group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-500">
        <svg 
          viewBox="0 0 100 100" 
          className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-500"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF1B5" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997825" />
            </linearGradient>
          </defs>
          {/* Architectural Roof / Skyscraper Apex Structure */}
          <path 
            d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" 
            fill="url(#goldGrad)" 
          />
          {/* Central Structural Beam forming abstract 'A' */}
          <path 
            d="M36 60 H64 V68 H36 V60 Z" 
            fill="url(#goldGrad)" 
            opacity="0.9"
          />
          {/* Base Foundation line */}
          <rect x="22" y="82" width="56" height="5" rx="2.5" fill="url(#goldGrad)" />
        </svg>

        {/* Glow halo on hover */}
        <span className="absolute inset-0 rounded-xl bg-amber-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors duration-300 leading-tight">
          NIRVANA
        </span>
        <span className="text-[10px] md:text-[11px] font-display uppercase tracking-[0.22em] text-amber-400/90 group-hover:text-amber-200 transition-colors duration-300 font-semibold">
          PROJECTS
        </span>
      </div>
    </a>
  );
};

export default BrandLogo;
