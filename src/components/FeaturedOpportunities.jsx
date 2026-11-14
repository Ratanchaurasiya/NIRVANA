import React, { useState } from 'react';
import { PROPERTIES_DATA } from '../data/propertyData';
import { Building2, MapPin, ArrowRight, X, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Plots', 'Investment'];

const FeaturedOpportunities = ({ onShowToast }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProp, setSelectedProp] = useState(null);

  const filteredProperties = activeFilter === 'All'
    ? PROPERTIES_DATA
    : PROPERTIES_DATA.filter((item) => item.type === activeFilter);

  return (
    <section className="py-24 relative bg-[#070D1E] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Ahmedabad Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Featured <span className="text-gold-gradient">Opportunities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Explore sample verified residential, commercial, and plot opportunities across Sola, Science City Road, and SG Highway corridors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gold-gradient text-navy-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-[#0B132B] text-slate-300 hover:text-white border border-slate-800 hover:border-amber-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-[#0B132B] border border-slate-800 hover:border-amber-500/40 glass-card-hover overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/30" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Specs Bar */}
                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[10px]">CONFIG / TYPE</span>
                    <span className="font-semibold text-white">{item.specs.beds || item.specs.type || item.specs.frontage}</span>
                  </div>
                  {item.specs.area && (
                    <div>
                      <span className="text-slate-400 block text-[10px]">AREA</span>
                      <span className="font-semibold text-amber-300">{item.specs.area}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProp(item)}
                  className="flex-1 py-2.5 rounded-xl bg-[#111D3E] hover:bg-[#1C2B54] border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider transition-colors text-center"
                >
                  View Details
                </button>

                <a
                  href="#contact"
                  className="px-4 py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  Enquire
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Property Details Modal */}
      {selectedProp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProp(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative rounded-2xl overflow-hidden h-56">
              <img src={selectedProp.image} alt={selectedProp.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/40" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">{selectedProp.title}</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Location: {selectedProp.location}</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {selectedProp.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">Key Opportunity Highlights:</h4>
                <div className="space-y-2">
                  {selectedProp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#070D1E] border border-slate-800 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setSelectedProp(null)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Advisory</span>
              </a>

              <a
                href="#contact"
                onClick={() => setSelectedProp(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 font-black text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Private Consultation</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedOpportunities;
