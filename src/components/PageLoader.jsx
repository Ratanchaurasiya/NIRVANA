import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * PageLoader - Luxury architectural placeholder for lazy loaded routes.
 */
export default function PageLoader() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center space-y-4 px-4 bg-[#FAF9F6]">
      <div className="relative">
        {/* Subtle breathing gold outer frame */}
        <div className="w-16 h-16 border border-[#B69B65]/30 flex items-center justify-center animate-pulse bg-white shadow-sm">
          <Building2 className="w-7 h-7 text-[#B69B65]" />
        </div>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#B69B65]" />
      </div>

      <div className="text-center space-y-1">
        <span className="font-cinzel text-xs font-semibold tracking-[0.25em] uppercase text-[#171717] block">
          NIRVANA BUILDERS
        </span>
        <span className="text-[11px] font-sans text-[#77736C] tracking-wider block">
          Curating Architectural Portfolio...
        </span>
      </div>
    </div>
  );
}
