import React from 'react';

/**
 * Architectural Luxury Canvas Background
 * Replaces distracting 3D wireframe mesh with a pristine, timeless architectural canvas.
 * Designed according to high-end real estate and architectural publishing standards.
 */
export default function Interactive3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAF9F6]">
      {/* Subtle architectural vertical grid rules matching max-w-7xl content container */}
      <div className="max-w-7xl mx-auto h-full w-full px-4 sm:px-6 lg:px-8 grid grid-cols-12 pointer-events-none">
        <div className="border-r border-[#DEDAD2]/30 h-full hidden lg:block col-span-3" />
        <div className="border-r border-[#DEDAD2]/30 h-full hidden lg:block col-span-3" />
        <div className="border-r border-[#DEDAD2]/30 h-full hidden lg:block col-span-3" />
        <div className="h-full hidden lg:block col-span-3" />
      </div>
    </div>
  );
}
