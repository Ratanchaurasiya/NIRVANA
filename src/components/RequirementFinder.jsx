import React, { useState } from 'react';
import { Search, Send, CheckCircle2, MessageSquare, Phone, Sparkles, X } from 'lucide-react';

const RequirementFinder = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    propertyType: 'Residential',
    purpose: 'Buy',
    location: 'Science City',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Requirement received! Opening options for you...');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello NIRVANA GROUP, I am looking for a ${formData.propertyType} property in Ahmedabad.\n` +
    `• Purpose: ${formData.purpose}\n` +
    `• Preferred Location: ${formData.location}\n` +
    `Please assist me with suitable project options.`
  );

  return (
    <section id="requirement-finder" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden">
        
        {/* Subtle Decorative Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-amber-500/20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Assistance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Find the Right Property Direction
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light">
            Select your preferences below to receive curated property shortlists tailored to your specific locality requirement in Ahmedabad.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Property Type Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                Property Type
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer shadow-inner"
              >
                <option value="Residential">Residential (Apartment / Villa)</option>
                <option value="Commercial">Commercial (Office / Retail)</option>
                <option value="Plot">Plot (Residential / NA)</option>
                <option value="Investment">Investment Opportunity</option>
              </select>
            </div>

            {/* Purpose Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                Purpose
              </label>
              <select
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer shadow-inner"
              >
                <option value="Buy">Buy for Personal Use</option>
                <option value="Invest">Invest for Capital Growth</option>
                <option value="Business">Business / Office Space</option>
                <option value="Family">Family Residence</option>
              </select>
            </div>

            {/* Preferred Location Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                Preferred Location
              </label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer shadow-inner"
              >
                <option value="Sola">Sola</option>
                <option value="Science City">Science City</option>
                <option value="SG Highway">SG Highway</option>
                <option value="Bopal">Bopal</option>
                <option value="Shela">Shela</option>
                <option value="Gota">Gota</option>
                <option value="Thaltej">Thaltej</option>
                <option value="Other">Other Ahmedabad Area</option>
              </select>
            </div>

            {/* Full Width Submit Button */}
            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-navy-950 bg-gold-gradient shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Search className="w-4 h-4 text-navy-950" />
                <span>Get Property Guidance</span>
              </button>
            </div>

          </form>
        ) : (
          /* Submission Success State */
          <div className="p-6 sm:p-8 rounded-2xl bg-[#070D1E]/90 border border-emerald-500/40 text-center space-y-5 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold font-serif text-white">
                Requirement Summary Ready!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                You selected: <span className="text-amber-300 font-semibold">{formData.propertyType}</span> in{' '}
                <span className="text-amber-300 font-semibold">{formData.location}</span> for{' '}
                <span className="text-amber-300 font-semibold">{formData.purpose}</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Detailed Requirement</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Modify Search</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RequirementFinder;
