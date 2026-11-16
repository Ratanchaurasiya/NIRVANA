import React, { useState } from 'react';
import { Search, MessageSquare, CheckCircle2, X } from 'lucide-react';

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
      onShowToast('Requirement parameters recorded.');
    }
  };

  return (
    <section id="requirement-finder" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-[#E6E2D8] p-6 sm:p-8 lg:p-10 shadow-md">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-[#E6E2D8]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B69B65] uppercase font-semibold">
              <span>Interactive Portfolio Finder</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] mt-1">
              Identify Your Property Objective
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5852] max-w-md font-light">
            Select parameters below to review curated residential or commercial asset shortlists tailored to your acquisition schedule.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Property Type Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#77736C]">
                Asset Category
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3.5 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65] focus:bg-white cursor-pointer"
              >
                <option value="Residential">Residential (Sky Villa / Apartment)</option>
                <option value="Commercial">Commercial (Office / Retail Suite)</option>
                <option value="Plot">Plotted Land (Residential / NA)</option>
                <option value="Investment">Institutional Asset</option>
              </select>
            </div>

            {/* Purpose Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#77736C]">
                Acquisition Purpose
              </label>
              <select
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3.5 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65] focus:bg-white cursor-pointer"
              >
                <option value="Buy">Personal Family Residence</option>
                <option value="Invest">Capital Investment & Yield</option>
                <option value="Business">Corporate Headquarters</option>
                <option value="Family">Generational Estate</option>
              </select>
            </div>

            {/* Preferred Location Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#77736C]">
                Target Corridor
              </label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3.5 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65] focus:bg-white cursor-pointer"
              >
                <option value="Science City">Science City Road</option>
                <option value="Sola">Sola</option>
                <option value="SG Highway">SG Highway</option>
                <option value="Bopal">Bopal - Ambli</option>
                <option value="Shela">Shela</option>
                <option value="Gota">Gota</option>
                <option value="Thaltej">Thaltej</option>
              </select>
            </div>

            {/* Full Width Submit Button */}
            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#A38854] transition-colors cursor-pointer shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Generate Curated Options</span>
              </button>
            </div>

          </form>
        ) : (
          /* Submission Success State */
          <div className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E6E2D8] text-center space-y-5 animate-fadeIn">
            <div className="w-12 h-12 bg-white border border-[#B69B65] text-[#B69B65] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-6 h-6 stroke-[2]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold font-serif text-[#171717]">
                Selection Parameters Recorded
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5852] max-w-lg mx-auto">
                Parameters: <span className="text-[#171717] font-semibold">{formData.propertyType}</span> in{' '}
                <span className="text-[#F5F1E8] font-semibold">{formData.location}</span> for{' '}
                <span className="text-[#F5F1E8] font-semibold">{formData.purpose}</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B69B65] text-[#171717] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#C4A975] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit to Advisory Concierge</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-medium text-[#77736C] hover:text-[#F5F1E8] transition-colors cursor-pointer uppercase tracking-wider"
              >
                <X className="w-4 h-4" />
                <span>Adjust Parameters</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RequirementFinder;
