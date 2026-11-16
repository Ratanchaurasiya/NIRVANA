import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, RotateCcw, MessageSquare, ShieldAlert } from 'lucide-react';

const PropertyDecisionTool = ({ onShowToast }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    purpose: '',
    type: '',
    location: '',
    timeline: ''
  });

  const handleSelect = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (step < 4) {
      setStep(step + 1);
    } else {
      setStep(5); // Show result
      if (onShowToast) {
        onShowToast('Personalized guidance brief generated.');
      }
    }
  };

  const handleReset = () => {
    setAnswers({ purpose: '', type: '', location: '', timeline: '' });
    setStep(1);
  };

  const getRecommendation = () => {
    return (
      `Based on your parameters for ${answers.purpose || 'property acquisition'} (${answers.type || 'property'}) ` +
      `across the ${answers.location || 'Ahmedabad'} corridor, prioritizing ${answers.timeline === 'Immediate Move-In' ? 'ready-to-occupy' : 'strategic under-construction'} assets ` +
      `aligns with current infrastructural development. ` +
      `We recommend conducting a location evaluation and shortlisting verified developments with clear handover timelines.`
    );
  };

  return (
    <section className="py-24 relative bg-[#171717] border-t border-[#2E2E2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tool Outer Card Container */}
        <div className="bg-[#1F1F1F] border border-[#2E2E2E] p-6 sm:p-10 relative">
          
          <div className="text-center space-y-3 pb-8 border-b border-[#2E2E2E] mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#171717] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
              <HelpCircle className="w-3.5 h-3.5 text-[#B69B65]" />
              <span>Interactive Decision Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F1E8]">
              Which Asset Class Fits Your Requirement?
            </h2>
            <p className="text-xs sm:text-sm text-[#A39F97] font-light">
              Answer 4 questions to generate a tailored preliminary direction for Gujarat property acquisitions.
            </p>
          </div>

          {step <= 4 ? (
            <div className="space-y-6 animate-fadeIn">
              {/* Step Counter Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-[#B69B65] uppercase">
                <span>Stage 0{step} of 04</span>
                <span className="text-[#77736C]">{Math.round((step / 4) * 100)}% Completed</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-[#171717] overflow-hidden">
                <div 
                  className="h-full bg-[#B69B65] transition-all duration-500" 
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              {/* Question 1: Purpose */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#F5F1E8]">1. Primary Acquisition Objective</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Personal Family Residence', 'Corporate / Commercial Suite', 'Capital Growth & Yield'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('purpose', opt)}
                        className="p-4 bg-[#171717] hover:bg-[#252525] border border-[#2E2E2E] hover:border-[#B69B65] text-left text-xs font-medium text-[#F5F1E8] transition-colors cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 2: Type */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#F5F1E8]">2. Asset Category</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Residential (Apartment / Villa)', 'Commercial (Office / Retail)', 'Plotted Land (Residential / NA)'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('type', opt)}
                        className="p-4 bg-[#171717] hover:bg-[#252525] border border-[#2E2E2E] hover:border-[#B69B65] text-left text-xs font-medium text-[#F5F1E8] transition-colors cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 3: Location */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#F5F1E8]">3. Target Corridor</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Sola & Science City Road', 'SG Highway Corporate Corridor', 'Bopal - Ambli & Shela', 'Gota & Thaltej Extension'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('location', opt)}
                        className="p-4 bg-[#171717] hover:bg-[#252525] border border-[#2E2E2E] hover:border-[#B69B65] text-left text-xs font-medium text-[#F5F1E8] transition-colors cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 4: Timeline */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#F5F1E8]">4. Target Acquisition Timeline</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Immediate Move-In', 'Under Construction (1-2 Yrs)', 'Long-Term Horizon'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('timeline', opt)}
                        className="p-4 bg-[#171717] hover:bg-[#252525] border border-[#2E2E2E] hover:border-[#B69B65] text-left text-xs font-medium text-[#F5F1E8] transition-colors cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Result Output */
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="p-6 bg-[#171717] border border-[#2E2E2E] space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-[#2E2E2E] pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-semibold">Preliminary Advisory Direction</span>
                  <span className="text-[10px] font-mono text-[#77736C] uppercase">NIRVANA INSIGHT</span>
                </div>
                
                <p className="text-xs sm:text-sm text-[#D5D1C8] leading-relaxed font-light">
                  {getRecommendation()}
                </p>

                <div className="p-3 bg-[#1F1F1F] border border-[#2E2E2E] flex items-start gap-2.5 text-[11px] text-[#A39F97]">
                  <ShieldAlert className="w-4 h-4 text-[#B69B65] shrink-0 mt-0.5" />
                  <span>
                    <strong>Disclaimer:</strong> This assessment provides general guidance based on your inputs and does not constitute formal valuation or contractual commitment.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B69B65] text-[#171717] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#C4A975] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Submit to Advisory Desk</span>
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-medium text-[#77736C] hover:text-[#F5F1E8] transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Wizard</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default PropertyDecisionTool;
