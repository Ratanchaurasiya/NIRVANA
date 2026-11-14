import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, RotateCcw, MessageSquare, Phone, ShieldAlert } from 'lucide-react';

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
        onShowToast('Personalized guidance recommendation generated!');
      }
    }
  };

  const handleReset = () => {
    setAnswers({ purpose: '', type: '', location: '', timeline: '' });
    setStep(1);
  };

  const getRecommendation = () => {
    return (
      `Based on your selection of ${answers.purpose || 'property search'} for a ${answers.type || 'property'} ` +
      `around ${answers.location || 'Ahmedabad'}, exploring ${answers.timeline === 'Immediate Move-In' ? 'ready-to-move' : 'upcoming strategic'} options ` +
      `appears to align well with your criteria. ` +
      `We recommend conducting a location evaluation and shortlisting verified developments with clear timelines.`
    );
  };

  const whatsappText = encodeURIComponent(
    `Hello NIRVANA GROUP, I completed your Property Decision Tool:\n` +
    `• Purpose: ${answers.purpose}\n` +
    `• Type: ${answers.type}\n` +
    `• Location: ${answers.location}\n` +
    `• Timeline: ${answers.timeline}\n` +
    `Please share suitable guidance and shortlisted project options.`
  );

  return (
    <section className="py-24 relative bg-navy-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tool Outer Card Container */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative">
          
          <div className="text-center space-y-3 pb-8 border-b border-amber-500/20 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Decision Wizard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Which Property Type Fits Your Requirement?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Answer 4 quick questions to get an instant tailored evaluation of suitable Ahmedabad property directions.
            </p>
          </div>

          {step <= 4 ? (
            <div className="space-y-6 animate-fadeIn">
              {/* Step Counter Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-amber-300 uppercase">
                <span>Question {step} of 4</span>
                <span>{Math.round((step / 4) * 100)}% Completed</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold-gradient transition-all duration-500" 
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              {/* Question 1: Purpose */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold font-serif text-white">1. What is your primary purpose?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Personal Family Residence', 'Business / Office Space', 'Investment & Capital Growth'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('purpose', opt)}
                        className="p-4 rounded-2xl bg-[#070D1E] hover:bg-[#111D3E] border border-slate-700/80 hover:border-amber-400 text-left text-xs font-semibold text-white transition-all hover:scale-[1.02]"
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
                  <h3 className="text-lg font-bold font-serif text-white">2. Residential or Commercial property?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Residential (Apartment / Villa)', 'Commercial (Office / Showroom)', 'Plots (Residential / NA)'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('type', opt)}
                        className="p-4 rounded-2xl bg-[#070D1E] hover:bg-[#111D3E] border border-slate-700/80 hover:border-amber-400 text-left text-xs font-semibold text-white transition-all hover:scale-[1.02]"
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
                  <h3 className="text-lg font-bold font-serif text-white">3. What is your preferred location belt?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Sola & Science City Road', 'SG Highway Corridor', 'Bopal & Shela Extension', 'Gota & Thaltej Belt'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('location', opt)}
                        className="p-4 rounded-2xl bg-[#070D1E] hover:bg-[#111D3E] border border-slate-700/80 hover:border-amber-400 text-left text-xs font-semibold text-white transition-all hover:scale-[1.02]"
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
                  <h3 className="text-lg font-bold font-serif text-white">4. Timeline requirement?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Immediate Move-In', 'Under Construction (1-2 Yrs)', 'Long-Term Horizon'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect('timeline', opt)}
                        className="p-4 rounded-2xl bg-[#070D1E] hover:bg-[#111D3E] border border-slate-700/80 hover:border-amber-400 text-left text-xs font-semibold text-white transition-all hover:scale-[1.02]"
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
              <div className="p-6 rounded-2xl bg-[#070D1E] border border-amber-500/40 space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">Personalized Guidance Result</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">NIRVANA INSIGHT</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {getRecommendation()}
                </p>

                {/* Important Mandatory Disclaimer */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-[11px] text-amber-200/90">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Note:</strong> This assessment provides general guidance based on your inputs and does not constitute financial advice or guarantee specific investment returns.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gold-gradient text-navy-950 text-xs font-black uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Submit Requirement to Advisory</span>
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
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
