import React, { useState } from 'react';
import { FAQS_DATA } from '../data/propertyData';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-[#171717] border-t border-[#2E2E2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
            <HelpCircle className="w-3.5 h-3.5 text-[#B69B65]" />
            <span>Advisory Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F5F1E8] tracking-tight">
            Frequently Asked <span className="text-[#B69B65]">Questions</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#A39F97] text-sm sm:text-base font-light leading-relaxed">
            Essential information regarding NIRVANA GROUP's development standards, acquisition procedures, and advisory framework in Gujarat.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1F1F1F] border border-[#2E2E2E] overflow-hidden transition-colors hover:border-[#B69B65]/40"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#252525] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#F5F1E8] pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 bg-[#171717] border border-[#2E2E2E] flex items-center justify-center text-[#B69B65] shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#B69B65] text-[#171717]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 text-xs sm:text-sm text-[#A39F97] font-light leading-relaxed border-t border-[#2E2E2E] animate-fadeIn">
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
