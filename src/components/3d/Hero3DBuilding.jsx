import React, { useState, useRef } from 'react';
import { Sun, Moon, Sunset, Compass } from 'lucide-react';

export default function Hero3DBuilding() {
  const cardRef = useRef(null);
  const [lightingMode, setLightingMode] = useState('night'); // 'day', 'sunset', 'night'
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Very subtle, gentle perspective tilt (-4 to +4 degrees)
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const getLightingStyles = () => {
    switch (lightingMode) {
      case 'day':
        return {
          filter: 'brightness(1.02) contrast(1.02) saturate(1.0)',
          overlayGradient: 'from-[#171717]/80 via-transparent to-transparent',
          label: 'Natural Daylight Facade',
        };
      case 'sunset':
        return {
          filter: 'brightness(0.96) contrast(1.06) sepia(0.12) saturate(1.15)',
          overlayGradient: 'from-[#171717]/90 via-[#B69B65]/10 to-transparent',
          label: 'Golden Hour Dusk View',
        };
      case 'night':
      default:
        return {
          filter: 'brightness(0.92) contrast(1.12) saturate(1.05)',
          overlayGradient: 'from-[#171717]/90 via-[#171717]/40 to-transparent',
          label: 'Illuminated Night Perspective',
        };
    }
  };

  const currentLighting = getLightingStyles();

  return (
    <div
      className="w-full h-[360px] sm:h-[420px] lg:h-[470px] relative select-none"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Architectural Exhibition Frame */}
      <div
        ref={cardRef}
        className="w-full h-full relative overflow-hidden border border-[#E6E2D8] bg-white shadow-md transition-all duration-300 ease-out group"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background Building Architectural Photograph */}
        <img
          src="/images/hero_building.jpg"
          alt="Nirvana Abode Architectural Landmark"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
          style={{ filter: currentLighting.filter }}
        />

        {/* Ambient Dark Charcoal Fade */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${currentLighting.overlayGradient} transition-colors duration-700 pointer-events-none`}
        />

        {/* Top Header Bar: Clean Architectural Tag & Lighting Switcher */}
        <div
          className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3 z-20 pointer-events-auto"
          style={{ transform: 'translateZ(25px)' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/95 border border-[#DEDAD2] shadow-sm text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#B69B65]">
            <span className="w-1.5 h-1.5 bg-[#B69B65]" />
            <span>NIRVANA ABODE</span>
          </div>

          {/* Minimalist Lighting Tabs */}
          <div className="inline-flex items-center bg-white/95 border border-[#DEDAD2] shadow-sm p-0.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightingMode('day');
              }}
              title="Daylight View"
              className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-sans font-medium tracking-wider transition-colors cursor-pointer ${
                lightingMode === 'day'
                  ? 'bg-[#B69B65] text-white font-semibold'
                  : 'text-[#77736C] hover:text-[#171717]'
              }`}
            >
              <Sun className="w-3 h-3" />
              <span>Day</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightingMode('sunset');
              }}
              title="Dusk View"
              className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-sans font-medium tracking-wider transition-colors cursor-pointer ${
                lightingMode === 'sunset'
                  ? 'bg-[#B69B65] text-white font-semibold'
                  : 'text-[#77736C] hover:text-[#171717]'
              }`}
            >
              <Sunset className="w-3 h-3" />
              <span>Dusk</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightingMode('night');
              }}
              title="Night View"
              className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-sans font-medium tracking-wider transition-colors cursor-pointer ${
                lightingMode === 'night'
                  ? 'bg-[#B69B65] text-white font-semibold'
                  : 'text-[#77736C] hover:text-[#171717]'
              }`}
            >
              <Moon className="w-3 h-3" />
              <span>Night</span>
            </button>
          </div>
        </div>

        {/* Bottom Architectural Caption */}
        <div
          className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none p-4 bg-white/95 border border-[#DEDAD2] shadow-md flex flex-col gap-1"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="flex items-center justify-between text-[10px] font-sans font-semibold tracking-[0.2em] text-[#B69B65] uppercase">
            <span>{currentLighting.label}</span>
            <span className="text-[#77736C]">Gujarat</span>
          </div>
          <p className="text-xs text-[#171717] font-serif tracking-wide">
            Curated Architectural Residences with Double-Height Private Sky Terraces
          </p>
        </div>
      </div>
    </div>
  );
}
