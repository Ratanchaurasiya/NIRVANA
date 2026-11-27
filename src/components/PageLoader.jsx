import React from 'react';
import BrandLogo from './BrandLogo';

/**
 * PageLoader - Luxury architectural placeholder for lazy loaded routes.
 */
export default function PageLoader() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center space-y-4 px-4 bg-[#FAF9F6]">
      <div className="animate-pulse">
        <BrandLogo className="h-20" />
      </div>

      <div className="text-center">
        <span className="text-[11px] font-sans text-[#77736C] tracking-wider block">
          Curating Architectural Portfolio...
        </span>
      </div>
    </div>
  );
}
