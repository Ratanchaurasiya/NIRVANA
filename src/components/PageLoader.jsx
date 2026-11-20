import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * PageLoader - Luxury architectural placeholder for lazy loaded routes.
 */
export default function PageLoader() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-6 px-4">
      <div className="relative">
        <div className="w-16 h-16 border border-[#B69B65]/40 flex items-center justify-center bg-white shadow-sm loader-frame">
          <Building2 className="w-7 h-7 text-[#B69B65]" />
        </div>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#B69B65]" />
      </div>

      <div className="text-center space-y-3">
        <span className="font-cinzel text-xs font-semibold tracking-[0.3em] uppercase text-[#171717] block">
          NIRVANA GROUP
        </span>
        <div className="mx-auto h-px w-28 bg-[#DEDAD2] overflow-hidden">
          <div className="h-full w-1/2 bg-[#B69B65] loader-sweep" />
        </div>
      </div>
    </div>
  );
}
