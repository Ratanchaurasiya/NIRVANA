import React, { useState, useRef } from 'react';
import { Building2, Compass, Sun, Moon, Sunset, Sparkles } from 'lucide-react';

export default function Hero3DBuilding() {
  const cardRef = useRef(null);
  const [lightingMode, setLightingMode] = useState('night'); // 'day', 'sunset', 'night'
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt rotation (-9 to +9 degrees)
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  // Lighting Mode styles and filters
  const getLightingStyles = () => {
    switch (lightingMode) {
      case 'day':
        return {
          filter: 'brightness(1.08) contrast(1.05) saturate(1.08)',
          overlayGradient: 'from-[#070D1E]/80 via-transparent to-sky-400/10',
          accentColor: '#38bdf8',
          label: 'Natural Daylight View',
        };
      case 'sunset':
        return {
          filter: 'brightness(0.98) contrast(1.15) sepia(0.25) saturate(1.3)',
          overlayGradient: 'from-[#070D1E] via-amber-900/20 to-orange-500/25',
          accentColor: '#f59e0b',
          label: 'Golden Hour Sunset',
        };
      case 'night':
      default:
        return {
          filter: 'brightness(0.92) contrast(1.22) saturate(1.15)',
          overlayGradient: 'from-[#070D1E] via-[#070D1E]/40 to-indigo-950/40',
          accentColor: '#C6A46A',
          label: 'Architectural Night Facade',
        };
    }
  };

  const currentLighting = getLightingStyles();

  return (
    <div
      className="w-full h-[360px] sm:h-[420px] lg:h-[470px] relative select-none"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Tilting Card Container */}
      <div
        ref={cardRef}
        className="w-full h-full relative rounded-3xl overflow-hidden border border-amber-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out cursor-pointer group"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background Building Image with Lighting Filter Transition */}
        <img
          src="/images/hero_building.jpg"
          alt="Nirvana Abode Architectural Landmark"
          className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
          style={{ filter: currentLighting.filter }}
        />

        {/* Ambient Dark Navy & Gold Gradients for luxury depth */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${currentLighting.overlayGradient} transition-colors duration-700 pointer-events-none`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1E]/60 via-transparent to-[#070D1E]/40 pointer-events-none" />

        {/* Night / Sunset Window Glow Emulation */}
        {lightingMode === 'night' && (
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-400/5 mix-blend-screen pointer-events-none animate-pulse" />
        )}

        {/* Dynamic Light Sheen / Cursor-Following Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(212,175,55,${glare.opacity}) 0%, transparent 60%)`,
          }}
        />

        {/* Architectural Grid Corner Accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400/80 pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400/80 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400/80 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400/80 pointer-events-none" />

        {/* Top Badges & Interactive Lighting Switcher Bar */}
        <div
          className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2.5 z-20 pointer-events-auto"
          style={{ transform: 'translateZ(35px)' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070D1E]/90 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-wider shadow-lg">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold">FLAGSHIP LANDMARK</span>
          </div>

          {/* Interactive Lighting Mode Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#070D1E]/90 backdrop-blur-md border border-slate-700 shadow-xl">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightingMode('day');
              }}
              title="Switch to Daylight"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
                lightingMode === 'day'
                  ? 'bg-amber-400 text-navy-950 shadow-md scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-3 h-3" />
              <span className="hidden sm:inline">Day</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightingMode('sunset');
              }}
              title="Switch to Golden Hour Sunset"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
                lightingMode === 'sunset'
                  ? 'bg-amber-500 text-navy-950 shadow-md scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sunset className="w-3 h-3" />
              <span className="hidden sm:inline">Sunset</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightingMode('night');
              }}
              title="Switch to Architectural Night Facade"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
                lightingMode === 'night'
                  ? 'bg-gold-gradient text-navy-950 shadow-md scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3 h-3" />
              <span className="hidden sm:inline">Night</span>
            </button>
          </div>
        </div>

        {/* Bottom Floating Information Overlay */}
        <div
          className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070D1E]/90 backdrop-blur-md border border-amber-500/30 text-white shadow-xl space-y-1.5 pointer-events-none"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
              <span>NIRVANA ABODE</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-normal">{currentLighting.label}</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">
              ● RERA REGISTERED
            </span>
          </div>

          <p className="text-sm sm:text-base font-serif font-black text-white leading-tight">
            Curated Architectural Residences
          </p>

          <p className="text-[11px] text-slate-300 leading-snug line-clamp-1">
            Contemporary facade engineering, double-height private sky terraces & biophilic balconies
          </p>
        </div>

      </div>
    </div>
  );
}
