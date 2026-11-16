import React, { useState } from 'react';
import { Maximize2, Compass, Layers, Check, Download, Info, ShieldCheck } from 'lucide-react';

const FLOOR_PLAN_ZONES = [
  {
    id: 'master-suite',
    name: 'Master Bedroom Suite',
    dimensions: "18' 0\" × 15' 0\"",
    carpetArea: '270 Sq. Ft.',
    flooring: 'Imported Italian Statuario Marble',
    features: ['Walk-in Dressing Wardrobe', 'Ensuite 5-Fixture Bath', 'Private Sunset Deck Access', 'Acoustically Insulated Glazing'],
    pos: { top: '18%', left: '12%', width: '38%', height: '36%' },
    color: '#B69B65'
  },
  {
    id: 'sky-living',
    name: 'Sky Living Salon & Dining',
    dimensions: "28' 0\" × 16' 0\"",
    carpetArea: '448 Sq. Ft.',
    flooring: 'Seamless Large-Format Marble Tiles',
    features: ['11\' 6" Finished Ceiling Height', 'Double-Height Panoramic Glazing', 'Direct Sky Terrace Promenade', 'Smart Ambient Lighting Controls'],
    pos: { top: '18%', left: '52%', width: '42%', height: '46%' },
    color: '#171717'
  },
  {
    id: 'terrace',
    name: 'Private Sky Terrace',
    dimensions: "20' 0\" × 8' 6\"",
    carpetArea: '170 Sq. Ft.',
    flooring: 'Anti-Skid Vitrified Timber Finish',
    features: ['Frameless Toughened Glass Railings', 'Drip-Irrigated Planter Beds', 'Open Sky Corridors', 'Western Sunset Exposure'],
    pos: { top: '66%', left: '52%', width: '42%', height: '26%' },
    color: '#B69B65'
  },
  {
    id: 'kitchen',
    name: 'Modular Chef\'s Kitchen & Utility',
    dimensions: "14' 0\" × 11' 0\"",
    carpetArea: '154 Sq. Ft.',
    flooring: 'Heavy-Duty Anti-Stain Quartzite',
    features: ['Separate Dry & Wet Kitchen Zones', 'Attached Utility Balcony & Service Entry', 'Piped Gas Line Infrastructure', 'Exhaust & Hood Ducting Provision'],
    pos: { top: '56%', left: '12%', width: '38%', height: '36%' },
    color: '#3D3A35'
  }
];

export default function FloorPlan3DViewer({ unitName = "TYPICAL 3 BHK RESIDENCE - TOWER A" }) {
  const [activeZone, setActiveZone] = useState(FLOOR_PLAN_ZONES[0]);
  const [viewMode, setViewMode] = useState('blueprint'); // 'blueprint' | 'specs'

  return (
    <div className="w-full bg-white border border-[#DEDAD2] shadow-sm overflow-hidden">
      
      {/* 1. Header Toolbar */}
      <div className="p-4 sm:p-5 bg-[#FAF9F6] border-b border-[#DEDAD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white border border-[#DEDAD2] flex items-center justify-center text-[#B69B65] shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B69B65]">Architectural CAD Blueprint</span>
              <span className="text-[10px] bg-white border border-[#DEDAD2] px-2 py-0.5 font-sans font-semibold text-[#171717]">Vastu Aligned</span>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#171717]">{unitName}</h3>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('blueprint')}
            className={`px-3.5 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
              viewMode === 'blueprint'
                ? 'bg-[#B69B65] text-white border-[#B69B65]'
                : 'bg-white text-[#5C5852] border-[#DEDAD2] hover:text-[#171717]'
            }`}
          >
            CAD Blueprint
          </button>
          <button
            onClick={() => setViewMode('specs')}
            className={`px-3.5 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
              viewMode === 'specs'
                ? 'bg-[#B69B65] text-white border-[#B69B65]'
                : 'bg-white text-[#5C5852] border-[#DEDAD2] hover:text-[#171717]'
            }`}
          >
            Area Schedule
          </button>
        </div>
      </div>

      {/* 2. Main Studio Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Interactive Architectural Blueprint Canvas */}
        <div className="lg:col-span-8 p-6 sm:p-10 bg-[#FAF9F6] border-b lg:border-b-0 lg:border-r border-[#DEDAD2] flex flex-col justify-between relative min-h-[460px] sm:min-h-[520px]">
          
          {/* Subtle CAD Drafting Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Compass & Scale Indicators */}
          <div className="flex items-center justify-between text-[11px] font-sans font-semibold tracking-wider text-[#77736C] relative z-10 pb-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B69B65]" />
              SCALE 1:50 METRIC • ORIENTATION: NORTH-EAST
            </span>
            <span className="hidden sm:inline">RERA APPROVED SANCTION PLAN</span>
          </div>

          {/* Architectural Blueprint Diagram */}
          <div className="relative w-full h-[340px] sm:h-[380px] bg-white border-2 border-[#171717] p-3 shadow-sm my-auto">
            
            {/* Outer Perimeter Wall Double-Line */}
            <div className="absolute inset-1 border border-[#DEDAD2] pointer-events-none" />

            {/* Interactive Room Zones */}
            {FLOOR_PLAN_ZONES.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              return (
                <div
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  style={zone.pos}
                  className={`absolute border transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? 'border-[#B69B65] bg-[#B69B65]/10 shadow-md ring-2 ring-[#B69B65]/30'
                      : 'border-[#DEDAD2] bg-[#FAF9F6]/80 hover:border-[#171717] hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#171717] group-hover:text-[#B69B65]">
                      {zone.name}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#B69B65] shrink-0 mt-1" />
                    )}
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-xs sm:text-sm font-serif font-bold text-[#171717] block">
                      {zone.dimensions}
                    </span>
                    <span className="text-[10px] font-sans text-[#77736C] block">
                      {zone.carpetArea}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Entrance Foyer Marker */}
            <div className="absolute bottom-2 left-6 bg-[#171717] text-white px-2.5 py-1 text-[9px] font-sans font-bold uppercase tracking-widest">
              Private Foyer Entry
            </div>
          </div>

          {/* Helper caption */}
          <div className="pt-4 text-center text-xs text-[#77736C] font-sans relative z-10">
            Click on any room block above to inspect detailed dimensions, spatial finishes, and engineering specifications.
          </div>
        </div>

        {/* Right Column: Active Zone Architectural Specification Sheet */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          
          <div className="space-y-5">
            <div className="border-b border-[#DEDAD2] pb-4">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#B69B65] block">
                Selected Zone Specifications
              </span>
              <h4 className="text-xl font-serif font-bold text-[#171717] mt-1">
                {activeZone.name}
              </h4>
            </div>

            {/* Spatial Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-[#FAF9F6] border border-[#DEDAD2]">
                <span className="text-[10px] font-sans uppercase font-semibold text-[#77736C] block">Dimensions</span>
                <span className="text-sm font-bold text-[#171717] font-serif block mt-0.5">{activeZone.dimensions}</span>
              </div>
              <div className="p-3.5 bg-[#FAF9F6] border border-[#DEDAD2]">
                <span className="text-[10px] font-sans uppercase font-semibold text-[#77736C] block">Carpet Area</span>
                <span className="text-sm font-bold text-[#B69B65] font-serif block mt-0.5">{activeZone.carpetArea}</span>
              </div>
            </div>

            {/* Flooring Finish */}
            <div className="p-3.5 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1">
              <span className="text-[10px] font-sans uppercase font-semibold text-[#77736C] block">Architectural Flooring</span>
              <p className="text-xs font-semibold text-[#171717]">{activeZone.flooring}</p>
            </div>

            {/* Key Features List */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-sans uppercase font-bold text-[#77736C] tracking-wider block">
                Structural & Spatial Highlights
              </span>
              <div className="space-y-2">
                {activeZone.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#3D3A35]">
                    <Check className="w-3.5 h-3.5 text-[#B69B65] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Unit Summary Footer */}
          <div className="pt-4 border-t border-[#DEDAD2] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#5C5852]">
              <span>Total Super Built-Up:</span>
              <span className="font-bold text-[#171717] font-serif">1,872 Sq. Ft.</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#5C5852]">
              <span>RERA Approved Carpet:</span>
              <span className="font-bold text-[#B69B65] font-serif">1,240 Sq. Ft.</span>
            </div>
            
            <a
              href="#contact"
              className="w-full py-3 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#A38854] transition-all cursor-pointer shadow-sm text-center block"
            >
              <span>Request CAD Floorplan PDF</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
