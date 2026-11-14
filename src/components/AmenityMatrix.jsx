import React, { useState } from 'react';
import { Sparkles, Layers, Shield, Droplets, Dumbbell, Coffee, Trees, Eye, Check } from 'lucide-react';

const AMENITY_LEVELS = [
  {
    id: 'ground',
    level: 'LEVEL 01 / GROUND',
    title: 'Grand Arrival & Private Concierge',
    tagline: 'An arrival experience curated to rival the world’s finest boutique hotels.',
    image: '/images/hero_building.jpg',
    features: [
      { name: 'Double-Height Grand Italian Marble Lobby', desc: 'Finished in Statuario marble with customized bronze chandelier accents.' },
      { name: '24/7 High-Security Concierge Desk', desc: 'Visitor screening, private package management, and resident assistance.' },
      { name: 'Private Chauffeur Lounge & Rest Suites', desc: 'Dedicated air-conditioned facility with live intercom dispatch.' },
      { name: 'Dual Automated Ramp Basement Parking', desc: 'Wide ingress/egress corridors with designated high-speed EV charging bays.' },
    ],
  },
  {
    id: 'podium',
    level: 'LEVEL 02 / PODIUM',
    title: 'Club Nirvana: Wellness & Recreation',
    tagline: 'An integrated lifestyle haven designed for physical vitality and private rejuvenation.',
    image: '/images/hero_building.jpg',
    features: [
      { name: 'Temperature-Controlled Infinity Lap Pool', desc: 'Overlooking landscaped green gardens with heated jacuzzi lounges.' },
      { name: 'State-of-the-Art Technogym Fitness Suite', desc: 'Fully equipped cardio stations, free weights, and private pilates studio.' },
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
      { name: '360° Panoramic Skyline Observation Terrace', desc: 'Unobstructed skyline views across Western Ahmedabad’s architectural horizon.' },
      { name: 'Private Star-Gazing Gazebos & Firepits', desc: 'Intimate landscaped alcoves designed for serene evening gatherings.' },
      { name: 'Open-Air Sky Amphitheater & Cinema', desc: 'Acoustically tuned outdoor screening zone with luxury lounge recliners.' },
      { name: 'Perimeter Reflexology Path & Herb Garden', desc: 'Aromatic sensory flora with reflexology stones for meditative sunrise walks.' },
    ],
  },
];

export default function AmenityMatrix() {
  const [activeTab, setActiveTab] = useState('ground');

  const currentLevel = AMENITY_LEVELS.find((l) => l.id === activeTab) || AMENITY_LEVELS[0];

  return (
    <section className="py-24 relative bg-[#070D1E] overflow-hidden border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-widest shadow-md">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>ARCHITECTURAL AMENITY MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight">
            Floor-by-Floor <span className="text-gold-gradient">Lifestyle Blueprints</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Every square foot is engineered for privacy, tranquility, and refined hospitality, separating resident quiet zones from active wellness facilities.
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0B132B] border border-slate-800 shadow-xl gap-2">
            {AMENITY_LEVELS.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setActiveTab(lvl.id)}
                className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === lvl.id
                    ? 'bg-gold-gradient text-navy-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {lvl.level}
              </button>
            ))}
          </div>
        </div>

        {/* Level Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-[#0B132B]/90 border border-amber-500/30 shadow-2xl backdrop-blur-xl">
          
          {/* Left: Detail Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
                {currentLevel.level} SPECIFICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                {currentLevel.title}
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {currentLevel.tagline}
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {currentLevel.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <h4 className="text-xs font-bold text-white font-mono">{feat.name}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-7">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Inquire CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-navy-950 text-xs font-extrabold uppercase tracking-wider shadow-lg hover:opacity-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-navy-950" />
                <span>Schedule Private Amenities Tour</span>
              </a>
            </div>
          </div>

          {/* Right: Architectural Image Presentation */}
          <div className="lg:col-span-5 h-[340px] sm:h-[400px] relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl group">
            <img
              src={currentLevel.image}
              alt={currentLevel.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#070D1E]/90 backdrop-blur-md border border-slate-800 text-xs text-slate-200">
              <span className="font-mono text-amber-400 text-[10px] uppercase block font-bold">NIRVANA ABODE</span>
              <p className="font-serif font-bold text-white mt-0.5">{currentLevel.title}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
