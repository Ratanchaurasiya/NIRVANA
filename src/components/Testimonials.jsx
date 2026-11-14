import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/propertyData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const item = TESTIMONIALS_DATA[currentIndex] || TESTIMONIALS_DATA[0];
  const testimonialText = item.comment || item.quote || "Nirvana Group delivers extraordinary build quality, architectural privacy, and transparent documentation.";

  return (
    <section className="py-24 relative bg-navy-950 overflow-hidden border-t border-amber-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5 text-amber-400" />
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
            Real feedback from property buyers, commercial occupiers, and investors who experienced our transparent approach.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative glass-panel-gold rounded-3xl p-8 sm:p-12 border border-amber-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl bg-[#0B132B]/90">
          
          <Quote className="w-16 h-16 text-amber-500/15 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6 min-h-[220px] flex flex-col justify-between relative z-10">
            
            {/* Stars & Verified Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Resident / Investor</span>
              </div>
            </div>

            {/* Testimonial Quote - Fully Visible, Sharp, Solid High-Contrast Typography */}
            <p className="text-xl sm:text-2xl text-white font-serif italic leading-relaxed text-sharp font-normal">
              "{testimonialText}"
            </p>

            {/* Client Info & Slide Controls */}
            <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white font-serif tracking-wide">{item.name}</h4>
                <p className="text-xs font-mono text-amber-300">
                  {item.designation || 'Property Owner'}
                  {item.project ? ` • ${item.project}` : ''}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2.5 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-[#070D1E] border border-amber-500/30 text-amber-300 hover:bg-gold-gradient hover:text-navy-950 transition-all cursor-pointer shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 rounded-full bg-[#070D1E] border border-amber-500/30 text-amber-300 hover:bg-gold-gradient hover:text-navy-950 transition-all cursor-pointer shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
