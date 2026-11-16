import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ArrowUpRight, Clock, Building, ShieldCheck } from 'lucide-react';

const STRATEGIC_CORRIDORS = [
  {
    id: 'sola-science-city',
    name: 'Science City Road & Sola Corridor',
    zone: 'North-West Growth Belt',
    tagline: 'Premier Commercial Boulevard & Grade-A Offices',
    transitAirport: '22 mins via SP Ring Road',
    transitSG: 'Direct 2 mins arterial link',
    transitMetro: 'Thaltej Metro Station (7 mins)',
    highlights: ['Corporate headquarters & IT towers', 'High-street retail & dining promenades', 'Wide 60-meter arterial boulevard network', 'Underground utility cabling infrastructure'],
    status: 'High Appreciation Growth Node'
  },
  {
    id: 'sg-highway',
    name: 'SG Highway Commercial Arterial Axis',
    zone: 'Western Central Corridor',
    tagline: 'Financial Epicenter of Ahmedabad & Gandhinagar Link',
    transitAirport: '18 mins via S.G. Expressway',
    transitSG: 'Zero Distance (On Main Highway)',
    transitMetro: 'Direct Metro Line Connectivity',
    highlights: ['Leading banking, fintech & corporate headquarters', 'Proximity to Vaishno Devi Circle & SGVP', 'Direct multi-lane corridor linking to GIFT City Gandhinagar', 'Five-star business hospitality & convention facilities'],
    status: 'Institutional Asset Corridor'
  },
  {
    id: 'jagatpur-tragad',
    name: 'Jagatpur – Tragad Residential Enclave',
    zone: 'North-West Residential Belt',
    tagline: 'Home of Nirvana Abode & The Neemland Flagships',
    transitAirport: '15 mins via Nadiad-Gandhinagar bypass',
    transitSG: '3 mins via Godrej Garden City access',
    transitMetro: 'Khadat & Tragad Station Link (5 mins)',
    highlights: ['Flagship 2 & 3 BHK high-rise communities', 'Low-density green residential masterplan', 'Proximity to Nirma University & SGVP international campus', 'High rental yield for corporate & academic professionals'],
    status: 'Active Flagship Construction'
  },
  {
    id: 'thaltej-ambli',
    name: 'Thaltej – Ambli Sky Villa Boulevard',
    zone: 'South-West Ultra-Luxury Belt',
    tagline: 'Bespoke Penthouses & Private Plotted Enclaves',
    transitAirport: '25 mins via Ring Road Express',
    transitSG: '4 mins via Iscon-Ambli Road',
    transitMetro: 'Thaltej Terminal Station (3 mins)',
    highlights: ['Ultra-luxury 4 & 5 BHK bespoke sky penthouses', 'Exclusive gated communities with club amenities', 'Premier educational institutions & healthcare super-specialties', 'Highest capital value appreciation in Western Ahmedabad'],
    status: 'Ultra-Luxury Residential'
  },
  {
    id: 'naranpura-navrangpura',
    name: 'Navrangpura – Naranpura Core Belt',
    zone: 'Central-West Heritage & Institutional Node',
    tagline: 'Central Ahmedabad Prestige & Mature Civic Infrastructure',
    transitAirport: '20 mins via Riverfront Expressway',
    transitSG: '10 mins via 132 Feet Ring Road',
    transitMetro: 'Old High Court & Commerce Six Road Metro (4 mins)',
    highlights: ['Central city convenience & proximity to IIM Ahmedabad', 'High demand for redevelopment & boutique commercial suites', 'Established legal, educational & healthcare institutions', 'Timeless investment stability and low vacancy rates'],
    status: 'Mature Prime Center'
  }
];

export default function LocalizationMap3D() {
  const [activeCorridorId, setActiveCorridorId] = useState('sola-science-city');
  const activeCorridor = STRATEGIC_CORRIDORS.find(c => c.id === activeCorridorId) || STRATEGIC_CORRIDORS[0];

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
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B69B65]">Strategic Corridor Navigator</span>
              <span className="text-[10px] bg-white border border-[#DEDAD2] px-2 py-0.5 font-sans font-semibold text-[#171717]">Gujarat</span>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#171717]">Western Ahmedabad Growth Corridors</h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#77736C]">
          <span className="w-2 h-2 rounded-full bg-[#B69B65]" />
          <span>Interactive Corridor Selection</span>
        </div>
      </div>

      {/* 2. Interactive Corridor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left: Corridor Selector List */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-[#FAF9F6] border-b lg:border-b-0 lg:border-r border-[#DEDAD2] space-y-2.5">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#77736C] block mb-2">
            Select Prime Gujarat Sector
          </span>

          {STRATEGIC_CORRIDORS.map((corridor) => {
            const isSelected = corridor.id === activeCorridorId;
            return (
              <button
                key={corridor.id}
                onClick={() => setActiveCorridorId(corridor.id)}
                className={`w-full p-3.5 text-left border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-white border-[#B69B65] shadow-sm ring-1 ring-[#B69B65]'
                    : 'bg-white/70 border-[#DEDAD2] hover:border-[#171717] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#B69B65] text-white' : 'bg-[#FAF9F6] text-[#B69B65] border border-[#DEDAD2]'
                  }`}>
                    <Navigation className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-serif font-bold text-[#171717] block group-hover:text-[#B69B65]">
                      {corridor.name}
                    </span>
                    <span className="text-[10px] font-sans text-[#77736C] block mt-0.5">
                      {corridor.zone}
                    </span>
                  </div>
                </div>

                <span className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 border ${
                  isSelected ? 'bg-[#B69B65]/10 border-[#B69B65] text-[#B69B65]' : 'bg-[#FAF9F6] border-[#DEDAD2] text-[#77736C]'
                }`}>
                  Active
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Corridor Intelligence & Transit Specs */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          
          <div className="space-y-5">
            <div className="border-b border-[#DEDAD2] pb-4">
              <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B69B65]">
                <span>{activeCorridor.zone}</span>
                <span className="text-[#171717] bg-[#FAF9F6] border border-[#DEDAD2] px-2 py-0.5">{activeCorridor.status}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#171717] mt-1.5">
                {activeCorridor.name}
              </h4>
              <p className="text-xs text-[#5C5852] mt-1 font-light italic">
                "{activeCorridor.tagline}"
              </p>
            </div>

            {/* Transit Time Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase text-[#77736C]">
                  <Clock className="w-3.5 h-3.5 text-[#B69B65]" />
                  <span>S.G. Highway</span>
                </div>
                <span className="text-xs font-bold text-[#171717] block">{activeCorridor.transitSG}</span>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase text-[#77736C]">
                  <Clock className="w-3.5 h-3.5 text-[#B69B65]" />
                  <span>Intl. Airport</span>
                </div>
                <span className="text-xs font-bold text-[#171717] block">{activeCorridor.transitAirport}</span>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase text-[#77736C]">
                  <Clock className="w-3.5 h-3.5 text-[#B69B65]" />
                  <span>Metro Phase-2</span>
                </div>
                <span className="text-xs font-bold text-[#171717] block">{activeCorridor.transitMetro}</span>
              </div>
            </div>

            {/* Key Infrastructure Highlights */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-sans uppercase font-bold text-[#77736C] tracking-wider block">
                Infrastructure & Development Viability
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeCorridor.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 bg-[#FAF9F6] border border-[#DEDAD2] text-xs text-[#3D3A35]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B69B65] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#DEDAD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#77736C]">
              Direct physical inspections available across all Western Ahmedabad corridors.
            </span>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors shrink-0 text-center"
            >
              Consult Corridor Desk
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
