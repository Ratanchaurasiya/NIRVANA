import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/propertyData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import TypewriterTitle from './TypewriterTitle';

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
  const testimonialText = item.comment || item.quote || "NIRVANA GROUP delivers extraordinary build quality, architectural privacy, and transparent documentation.";

  return (
    <section className="py-24 relative bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <TypewriterTitle
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight block"
          >
            What Discerning <span className="text-[#B69B65]">Clients Say</span>
          </TypewriterTitle>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            Feedback from property owners, corporate occupiers, and private investors who experience our architectural standards.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-white border border-[#E6E2D8] p-8 sm:p-12 shadow-md">
          
          <div className="space-y-6 min-h-[220px] flex flex-col justify-between relative z-10">
            
            {/* Stars & Verified Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B69B65] text-[#B69B65]" />
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF9F6] border border-[#E6E2D8] text-[#B69B65] text-[11px] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B69B65]" />
                <span>Verified Resident / Investor</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="text-xl sm:text-2xl text-[#171717] font-serif italic leading-relaxed font-normal">
              "{testimonialText}"
            </p>

            {/* Client Info & Slide Controls */}
            <div className="pt-6 border-t border-[#E6E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-[#171717] font-serif tracking-wide">{item.name}</h4>
                <p className="text-xs font-mono text-[#77736C]">
                  {item.designation || 'Property Owner'}
                  {item.project ? ` • ${item.project}` : ''}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 bg-[#FAF9F6] border border-[#E6E2D8] text-[#5C5852] hover:text-[#B69B65] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 bg-[#FAF9F6] border border-[#E6E2D8] text-[#5C5852] hover:text-[#B69B65] transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Lines Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-0.5 transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#B69B65]' : 'w-3 bg-[#2E2E2E] hover:bg-[#77736C]'
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
