import React, { useState } from 'react';
import { Layers, Check } from 'lucide-react';

const AMENITY_LEVELS = [
  {
    id: 'ground',
    level: 'LEVEL 01 / GROUND',
    title: 'Grand Arrival & Private Concierge',
    tagline: 'An arrival experience curated to rival the world’s finest boutique hotels.',
    image: '/images/hero_building.jpg',
    features: [
      { name: 'Double-Height Grand Italian Marble Lobby', desc: 'Finished in Statuario marble with customized bronze accents.' },
      { name: '24/7 High-Security Concierge Desk', desc: 'Visitor screening, private package logistics, and resident assistance.' },
      { name: 'Private Chauffeur Lounge & Rest Suites', desc: 'Dedicated air-conditioned facility with direct intercom dispatch.' },
      { name: 'Dual Automated Ramp Basement Parking', desc: 'Wide ingress/egress corridors with designated high-speed EV bays.' },
    ],
  },
  {
    id: 'podium',
    level: 'LEVEL 02 / PODIUM',
    title: 'Club Nirvana: Wellness & Vitality',
    tagline: 'An integrated lifestyle sanctuary designed for physical vitality and private rejuvenation.',
    image: '/images/hero_building.jpg',
    features: [
      { name: 'Temperature-Controlled Infinity Lap Pool', desc: 'Overlooking landscaped green gardens with heated jacuzzi lounges.' },
      { name: 'Technogym Fitness & Conditioning Suite', desc: 'Equipped cardio stations, Olympic free weights, and private pilates studio.' },
      { name: 'Holistic Spa with Steam & Cedar Sauna', desc: 'Gender-separated restorative hydrotherapy and wellness treatment rooms.' },
      { name: 'Indoor Badminton & Squash Arena', desc: 'Maple wood shock-absorbent flooring with professional tournament lighting.' },
    ],
  },
  {
    id: 'rooftop',
    level: 'LEVEL 14 / SKY DECK',
    title: 'The Sky Horizon Lounge & Stargazing',
    tagline: 'Elevated leisure 150 feet above the city with uninterrupted 360° skyline vistas.',
    image: '/images/hero_building.jpg',
    features: [
      { name: '360° Panoramic Skyline Observation Terrace', desc: 'Unobstructed views across Western Ahmedabad’s architectural horizon.' },
      { name: 'Private Star-Gazing Gazebos & Firepits', desc: 'Intimate landscaped alcoves designed for serene evening gatherings.' },
      { name: 'Open-Air Sky Amphitheater', desc: 'Acoustically tuned outdoor screening zone with luxury lounge recliners.' },
      { name: 'Perimeter Reflexology Path & Herb Garden', desc: 'Aromatic sensory flora with reflexology stones for morning walks.' },
    ],
  },
];

export default function AmenityMatrix() {
  const [activeTab, setActiveTab] = useState('ground');

  const currentLevel = AMENITY_LEVELS.find((l) => l.id === activeTab) || AMENITY_LEVELS[0];

  return (
    <section className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
            <span>Spatial Zoning & Blueprints</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Floor-by-Floor <span className="text-[#B69B65]">Lifestyle Blueprints</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />

          <p className="text-sm sm:text-base text-[#5C5852] font-light leading-relaxed">
            Every square foot is engineered for privacy, tranquility, and refined hospitality, separating resident quiet zones from active wellness facilities.
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex bg-white border border-[#E6E2D8] p-1 gap-1">
            {AMENITY_LEVELS.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setActiveTab(lvl.id)}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  activeTab === lvl.id
                    ? 'bg-[#B69B65] text-white font-semibold'
                    : 'text-[#5C5852] hover:text-[#171717]'
                }`}
              >
                {lvl.level}
              </button>
            ))}
          </div>
        </div>

        {/* Level Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 bg-white border border-[#E6E2D8]">
          
          {/* Left: Detail Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#B69B65] font-semibold block">
                {currentLevel.level} SPECIFICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717]">
                {currentLevel.title}
              </h3>
              <p className="text-sm text-[#5C5852] font-light leading-relaxed">
                {currentLevel.tagline}
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {currentLevel.features.map((feat, idx) => (
                <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#E6E2D8] space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B69B65] shrink-0" />
                    <h4 className="text-xs font-semibold text-[#171717] font-mono">{feat.name}</h4>
                  </div>
                  <p className="text-[11px] text-[#77736C] leading-relaxed pl-5 font-light">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Inquire CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors"
              >
                <span>Schedule Private Amenities Tour</span>
              </a>
            </div>
          </div>

          {/* Right: Architectural Image Presentation */}
          <div className="lg:col-span-5 h-[340px] sm:h-[400px] relative overflow-hidden border border-[#E6E2D8] bg-[#FAF9F6] group">
            <img
              src={currentLevel.image}
              alt={currentLevel.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 border border-[#E6E2D8] text-xs">
              <span className="font-mono text-[#B69B65] text-[10px] uppercase block">NIRVANA ABODE</span>
              <p className="font-serif font-bold text-[#171717] mt-0.5">{currentLevel.title}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
