import React, { useState } from 'react';
import { PROPERTIES_DATA } from '../data/propertyData';
import { MapPin, X, Phone, MessageSquare, Check } from 'lucide-react';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Plots', 'Investment'];

const FeaturedOpportunities = ({ onShowToast }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProp, setSelectedProp] = useState(null);

  const filteredProperties = activeFilter === 'All'
    ? PROPERTIES_DATA
    : PROPERTIES_DATA.filter((item) => item.type === activeFilter);

  return (
    <section className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Curated <span className="text-[#B69B65]">Opportunities</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            Verified residential, commercial, and plotted opportunities across Sola, Science City Road, and SG Highway growth corridors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.18em] transition-all cursor-pointer border ${
                activeFilter === cat
                  ? 'bg-[#B69B65] text-white border-[#B69B65] font-semibold'
                  : 'bg-white text-[#5C5852] hover:text-[#171717] border-[#E6E2D8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-[#E6E2D8] hover:border-[#B69B65]/40 transition-colors flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden border-b border-[#E6E2D8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-[#B69B65] font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-lg font-bold font-serif text-[#171717] line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[#5C5852] font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Specs Bar */}
                <div className="pt-3 border-t border-[#E6E2D8] grid grid-cols-2 gap-2 text-[11px] text-[#5C5852]">
                  <div>
                    <span className="text-[#77736C] block text-[10px] font-mono uppercase">CONFIGURATION</span>
                    <span className="font-semibold text-[#171717]">{item.specs.beds || item.specs.type || item.specs.frontage}</span>
                  </div>
                  {item.specs.area && (
                    <div>
                      <span className="text-[#77736C] block text-[10px] font-mono uppercase">SUPER BUILT-UP</span>
                      <span className="font-semibold text-[#B69B65] font-mono">{item.specs.area}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProp(item)}
                  className="flex-1 py-2.5 bg-[#FAF9F6] hover:bg-[#F0EEEA] border border-[#E6E2D8] hover:border-[#B69B65] text-[#171717] text-xs font-medium uppercase tracking-[0.18em] transition-colors cursor-pointer text-center"
                >
                  View Details
                </button>

                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors flex items-center justify-center"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-2xl w-full p-6 sm:p-8 border border-[#E6E2D8] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProp(null)}
              className="absolute top-5 right-5 p-2 bg-[#FAF9F6] border border-[#E6E2D8] text-[#5C5852] hover:text-[#171717] transition-colors cursor-pointer"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative overflow-hidden h-56 border border-[#E6E2D8]">
              <img src={selectedProp.image} alt={selectedProp.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#171717] mt-1">{selectedProp.title}</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#B69B65] font-mono">
                <MapPin className="w-4 h-4" />
                <span>Location: {selectedProp.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#4B4842] leading-relaxed font-light">
                {selectedProp.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B69B65] font-semibold">Key Highlights:</h4>
                <div className="space-y-2">
                  {selectedProp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 bg-[#FAF9F6] border border-[#E6E2D8] text-xs text-[#5C5852]">
                      <Check className="w-4 h-4 text-[#B69B65] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedProp(null)}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#B69B65]/40 text-[#171717] hover:border-[#B69B65] text-xs font-medium uppercase tracking-[0.18em]"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Advisory</span>
              </a>

              <a
                href="#contact"
                onClick={() => setSelectedProp(null)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Consultation</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedOpportunities;
