import React, { useState } from 'react';
import { ShieldCheck, Layers, Award, CheckCircle2, ChevronRight, Activity, Zap } from 'lucide-react';

const STRUCTURAL_LAYERS = [
  {
    id: 'layer-5',
    tier: 'TIER 05',
    title: 'Monolithic Shear Wall Exoskeleton',
    depth: 'Above Plinth to Level 14',
    specs: 'M50 Grade Self-Compacting Concrete • 300mm Core Shear Walls',
    description: 'High-density monolithic vertical concrete cores with reinforced ductile link beams designed to absorb and redistribute extreme horizontal wind forces and ground tremors.',
    resilience: 'Resists lateral seismic shear equivalent to Zone 5 ground acceleration.',
    certification: 'BIS 1893 (Part 1) & BIS 13920 Ductile Detailing Certified'
  },
  {
    id: 'layer-4',
    tier: 'TIER 04',
    title: 'Fe550D High-Tensile Steel Rebar Matrix',
    depth: 'Integrated Superstructure Cage',
    specs: 'Primary 32mm & 25mm Fe550D TMT Rebar with Fusion-Bonded Epoxy',
    description: 'Specialized \'D\' grade thermo-mechanically treated rebar providing superior elongation (>14.5%) to bend without brittle fracture under intense seismic cyclic reversals.',
    resilience: 'Ultimate tensile strength exceeding 585 N/mm².',
    certification: 'IS 1786 Metallurgical Purity Standard'
  },
  {
    id: 'layer-3',
    tier: 'TIER 03',
    title: 'Reinforced Concrete Raft Foundation',
    depth: '-3.5m to -6.5m Sub-Grade',
    specs: '3,200mm Depth Solid Raft Slab • Micro-Silica Waterproofed',
    description: 'Continuous heavy-mass concrete raft foundation acting as an unsinkable structural mat, eliminating differential settlement across heterogeneous soil strata.',
    resilience: 'Bearing pressure capacity exceeding 450 kN/m².',
    certification: 'BIS 2950 Structural Foundation Standard'
  },
  {
    id: 'layer-2',
    tier: 'TIER 02',
    title: 'Hydraulic Lead-Rubber Seismic Dampers',
    depth: '-6.5m Sub-Structure Isolation Plane',
    specs: 'Heavy-Duty Elastomeric Bearings with Lead Core Yield Nodes',
    description: 'Base-isolation mechanical dampers that uncouple the building superstructure from ground movements, attenuating seismic energy transmission by up to 75%.',
    resilience: 'Dampens up to 8.5 Richter scale simulation stress waves.',
    certification: 'ASTM D4014 Elastomeric Bearings Standard'
  },
  {
    id: 'layer-1',
    tier: 'TIER 01',
    title: 'Deep Bedrock Bored Cast-in-Situ Piling',
    depth: '-18m to -28m Bedrock Socketing',
    specs: '1,000mm Diameter Friction & End-Bearing Bored Piles',
    description: 'Heavy hydraulic piling rigs drill through weathered clay and sand lenses to permanently socket concrete piles deep into dense basalt bedrock anchors.',
    resilience: 'Single pile vertical compressive capacity up to 3,500 kN.',
    certification: 'BIS 2911 (Part 1/Sec 2) Deep Foundation Standard'
  }
];

export default function SeismicFoundation3D() {
  const [activeLayerId, setActiveLayerId] = useState('layer-5');
  const [simulationMode, setSimulationMode] = useState('normal'); // 'normal' | 'seismic'

  const activeLayer = STRUCTURAL_LAYERS.find((l) => l.id === activeLayerId) || STRUCTURAL_LAYERS[0];

  return (
    <div className="w-full bg-white border border-[#DEDAD2] shadow-sm overflow-hidden">
      
      {/* 1. Header Toolbar */}
      <div className="p-4 sm:p-5 bg-[#FAF9F6] border-b border-[#DEDAD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white border border-[#DEDAD2] flex items-center justify-center text-[#B69B65] shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B69B65]">Structural Engineering Blueprint</span>
              <span className="text-[10px] bg-white border border-[#DEDAD2] px-2 py-0.5 font-sans font-semibold text-[#171717]">BIS Zone 5</span>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#171717]">Seismic Core & Foundation Cross-Section</h3>
          </div>
        </div>

        {/* Stress Mode Simulation Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSimulationMode('normal')}
            className={`px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
              simulationMode === 'normal'
                ? 'bg-[#171717] text-white border-[#171717]'
                : 'bg-white text-[#5C5852] border-[#DEDAD2] hover:text-[#171717]'
            }`}
          >
            Static Load
          </button>
          <button
            onClick={() => setSimulationMode('seismic')}
            className={`px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer border flex items-center gap-1.5 ${
              simulationMode === 'seismic'
                ? 'bg-[#B69B65] text-white border-[#B69B65]'
                : 'bg-white text-[#5C5852] border-[#DEDAD2] hover:text-[#171717]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Seismic Shear Simulation</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Diagram & Specifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left: Engineering Cross-Section Tier Selector */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-[#FAF9F6] border-b lg:border-b-0 lg:border-r border-[#DEDAD2] space-y-2.5">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#77736C] block mb-2">
            Foundation & Core Elevation Tiers
          </span>

          {STRUCTURAL_LAYERS.map((layer) => {
            const isSelected = layer.id === activeLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`w-full p-3.5 text-left border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-white border-[#B69B65] shadow-sm ring-1 ring-[#B69B65]'
                    : 'bg-white/70 border-[#DEDAD2] hover:border-[#171717] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 flex items-center justify-center text-[10px] font-sans font-bold ${
                    isSelected ? 'bg-[#B69B65] text-white' : 'bg-[#FAF9F6] text-[#77736C] border border-[#DEDAD2]'
                  }`}>
                    {layer.tier.replace('TIER ', '')}
                  </div>
                  <div>
                    <span className="text-xs font-serif font-bold text-[#171717] block group-hover:text-[#B69B65]">
                      {layer.title}
                    </span>
                    <span className="text-[10px] font-sans text-[#77736C] block">
                      Elevation: {layer.depth}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${
                  isSelected ? 'text-[#B69B65] translate-x-1' : 'text-[#DEDAD2] group-hover:text-[#171717]'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Engineering Specifications Display */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          
          <div className="space-y-5">
            <div className="border-b border-[#DEDAD2] pb-4">
              <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B69B65]">
                <span>{activeLayer.tier} • TECHNICAL SPECIFICATION</span>
                <span className="text-[#171717] bg-[#FAF9F6] border border-[#DEDAD2] px-2 py-0.5">{activeLayer.depth}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#171717] mt-1.5">
                {activeLayer.title}
              </h4>
            </div>

            {/* Material & Engineering Grade Card */}
            <div className="p-4 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1.5">
              <span className="text-[10px] font-sans uppercase font-bold text-[#77736C] tracking-wider block">
                Material Formulation & Chemistry
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#171717]">
                {activeLayer.specs}
              </p>
            </div>

            {/* Engineering Description */}
            <p className="text-xs sm:text-sm text-[#4B4842] leading-relaxed font-light">
              {activeLayer.description}
            </p>

            {/* Seismic Simulation Stress Metric */}
            <div className={`p-4 border transition-colors ${
              simulationMode === 'seismic'
                ? 'bg-[#B69B65]/10 border-[#B69B65]'
                : 'bg-[#FAF9F6] border-[#DEDAD2]'
            }`}>
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#171717]">
                <Activity className="w-4 h-4 text-[#B69B65]" />
                <span>Structural Dynamic Performance:</span>
              </div>
              <p className="text-xs text-[#5C5852] mt-1">
                {activeLayer.resilience}
              </p>
            </div>

            {/* Statutory Compliance Badge */}
            <div className="flex items-center gap-2.5 text-xs text-[#77736C]">
              <Award className="w-4 h-4 text-[#B69B65] shrink-0" />
              <span className="font-sans font-medium">{activeLayer.certification}</span>
            </div>
          </div>

          {/* Bottom Action Note */}
          <div className="pt-4 border-t border-[#DEDAD2] flex items-center justify-between text-xs">
            <span className="text-[#77736C]">Verified by Gujarat State Disaster Management Authority (GSDMA) Standards</span>
          </div>

        </div>

      </div>

    </div>
  );
}
