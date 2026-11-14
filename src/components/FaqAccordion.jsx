import React, { useState } from 'react';
import { FAQS_DATA } from '../data/propertyData';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-[#070D1E] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Everything you need to know about working with NIRVANA GROUP for residential and commercial real estate in Ahmedabad.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0B132B] border border-slate-800 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-gradient text-navy-950' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqAccordion;
