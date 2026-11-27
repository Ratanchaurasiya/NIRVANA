import React from 'react';

const BrandLogo = ({ variant = "default", className = "" }) => {
  return (
    <a 
      href="/" 
      className={`group inline-flex items-center gap-3.5 transition-colors ${className}`}
      aria-label="NIRVANA BUILDERS Home"
    >
      {/* Brand Icon Mark */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-white border border-[#B69B65]/40 transition-colors group-hover:border-[#B69B65]">
        <svg 
          viewBox="0 0 100 100" 
          className="w-6 h-6"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Architectural Apex Monogram in Muted Champagne Gold */}
          <path 
            d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" 
            fill="#B69B65" 
          />
          <path 
            d="M36 60 H64 V68 H36 V60 Z" 
            fill="#B69B65" 
            opacity="0.9"
          />
          <rect x="22" y="82" width="56" height="4" fill="#B69B65" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span className="font-cinzel text-base sm:text-lg font-semibold tracking-[0.16em] uppercase text-[#171717] group-hover:text-[#B69B65] transition-colors leading-tight">
          NIRVANA <span className="text-[#B69B65]">BUILDERS</span>
        </span>
        <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#77736C] mt-0.5">
          BUILDING DREAMS
        </span>
      </div>
    </a>
  );
};

export default BrandLogo;
