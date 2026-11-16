import React, { useState } from 'react';
import { TOP_PROJECTS_DATA } from '../data/propertyData';
import { 
  Building2, MapPin, ShieldCheck, X, Calendar, 
  ArrowLeftRight, Check, Eye, MessageSquare 
} from 'lucide-react';

const TopProjectsShowcase = ({ onShowToast }) => {
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [bookingProject, setBookingProject] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activeTabId, setActiveTabId] = useState('nb-legacy-tower');

  // Compare checkboxes (default 2 projects selected for comparison)
  const [selectedCompareIds, setSelectedCompareIds] = useState(['nb-legacy-tower', 'harmony-harikesh']);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const activeProject = TOP_PROJECTS_DATA.find((p) => p.id === activeTabId) || TOP_PROJECTS_DATA[0];

  const toggleCompare = (id) => {
    if (selectedCompareIds.includes(id)) {
      if (selectedCompareIds.length > 1) {
        setSelectedCompareIds(selectedCompareIds.filter((item) => item !== id));
      } else {
        if (onShowToast) onShowToast('Keep at least 1 project selected for comparison.', 'error');
      }
    } else {
      if (selectedCompareIds.length < 3) {
        setSelectedCompareIds([...selectedCompareIds, id]);
      } else {
        if (onShowToast) onShowToast('You can compare up to 3 projects at once.', 'error');
      }
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    if (onShowToast) {
      onShowToast(`Site visit request submitted for ${bookingProject?.name}!`);
    }
  };

  return (
    <section id="top-projects" className="py-24 relative bg-[#171717] border-t border-[#2E2E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-[0.22em]">
            <span>Flagship Developments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F5F1E8] tracking-tight">
            Top 5 <span className="text-[#B69B65]">Landmark Projects</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#A39F97] text-sm sm:text-base font-light leading-relaxed">
            Compare configurations, sizes, and architectural benchmarks across Science City, Sola, and SG Highway developments.
          </p>
        </div>

        {/* 1. INTERACTIVE COMPARISON MATRIX */}
        <div className="bg-[#1F1F1F] border border-[#2E2E2E] p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2E2E2E]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#B69B65]" />
              <div>
                <h3 className="text-lg font-serif font-bold text-[#F5F1E8]">Project Comparison Matrix</h3>
                <p className="text-xs text-[#77736C] font-mono">Select checkboxes to compare specifications</p>
              </div>
            </div>

            <button
              onClick={() => setShowCompareModal(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B69B65] text-[#171717] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#C4A975] transition-colors cursor-pointer"
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span>Launch Comparison ({selectedCompareIds.length})</span>
            </button>
          </div>

          {/* Desktop Table Format */}
          <div className="hidden lg:block overflow-x-auto border border-[#2E2E2E] bg-[#171717]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#141414] text-[#B69B65] font-mono uppercase tracking-wider border-b border-[#2E2E2E]">
                  <th className="py-3.5 px-4 font-semibold text-center w-12">Select</th>
                  <th className="py-3.5 px-6 font-semibold">Project & Corridor</th>
                  <th className="py-3.5 px-6 font-semibold">Configurations</th>
                  <th className="py-3.5 px-6 font-semibold">Super Built-Up Area</th>
                  <th className="py-3.5 px-6 font-semibold">Key Benchmark</th>
                  <th className="py-3.5 px-6 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2E2E2E] text-[#D5D1C8]">
                {TOP_PROJECTS_DATA.map((proj) => {
                  const isChecked = selectedCompareIds.includes(proj.id);
                  const isSpotlightActive = activeTabId === proj.id;

                  return (
                    <tr 
                      key={proj.id} 
                      className={`transition-colors group ${
                        isSpotlightActive ? 'bg-[#242424]' : 'hover:bg-[#1E1E1E]'
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-4 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleCompare(proj.id)}
                          className="w-4 h-4 rounded-none border-[#2E2E2E] bg-[#171717] text-[#B69B65] accent-[#B69B65] cursor-pointer"
                        />
                      </td>

                      {/* Project Name & Location */}
                      <td className="py-4 px-6 font-serif font-bold text-sm text-[#F5F1E8] group-hover:text-[#B69B65] transition-colors">
                        <button
                          onClick={() => {
                            setActiveTabId(proj.id);
                            setSelectedProjectModal(proj);
                          }}
                          className="text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B69B65]" />
                            <span>{proj.name}</span>
                          </div>
                          <span className="text-[10px] font-sans font-normal text-[#77736C] block ml-3.5">{proj.location}</span>
                        </button>
                      </td>

                      {/* Config */}
                      <td className="py-4 px-6 font-semibold text-[#F5F1E8]">
                        {proj.config}
                      </td>

                      {/* Size */}
                      <td className="py-4 px-6 font-mono text-[#A39F97]">
                        {proj.size}
                      </td>

                      {/* Highlight */}
                      <td className="py-4 px-6 font-light text-[#D5D1C8]">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1F1F1F] border border-[#2E2E2E] text-[11px] text-[#B69B65]">
                          <ShieldCheck className="w-3 h-3 text-[#B69B65] shrink-0" />
                          <span>{proj.highlight}</span>
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => setSelectedProjectModal(proj)}
                            className="px-3 py-1.5 bg-[#1F1F1F] hover:bg-[#282828] border border-[#2E2E2E] text-[#F5F1E8] text-[11px] font-medium uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Details
                          </button>

                          <button
                            onClick={() => setBookingProject(proj)}
                            className="px-3 py-1.5 bg-[#B69B65] text-[#171717] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#C4A975] transition-colors cursor-pointer"
                          >
                            Visit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Matrix Cards */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOP_PROJECTS_DATA.map((proj) => {
              const isChecked = selectedCompareIds.includes(proj.id);
              return (
                <div 
                  key={proj.id}
                  className={`p-5 bg-[#171717] border transition-colors ${
                    isChecked ? 'border-[#B69B65]' : 'border-[#2E2E2E]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 border-b border-[#2E2E2E] pb-2">
                    <label className="flex items-center gap-2 text-xs font-mono text-[#B69B65] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCompare(proj.id)}
                        className="w-4 h-4 rounded-none border-[#2E2E2E] bg-[#1F1F1F] accent-[#B69B65]"
                      />
                      <span>Compare</span>
                    </label>
                  </div>

                  <h4 className="text-base font-serif font-bold text-[#F5F1E8]">{proj.name}</h4>
                  <p className="text-xs text-[#77736C] font-mono mb-3">{proj.location}</p>

                  <div className="space-y-1.5 text-xs bg-[#1F1F1F] p-3 border border-[#2E2E2E] mb-4">
                    <div className="flex justify-between">
                      <span className="text-[#77736C]">Config:</span>
                      <span className="font-semibold text-[#F5F1E8]">{proj.config}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#77736C]">Size:</span>
                      <span className="font-mono text-[#A39F97]">{proj.size}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#B69B65] mb-4 bg-[#1F1F1F] p-2.5 border border-[#2E2E2E]">
                    Benchmark: {proj.highlight}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProjectModal(proj)}
                      className="py-2 bg-[#1F1F1F] text-[#F5F1E8] border border-[#2E2E2E] text-xs font-medium uppercase tracking-wider text-center cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => setBookingProject(proj)}
                      className="py-2 bg-[#B69B65] text-[#171717] text-xs font-semibold uppercase tracking-wider text-center cursor-pointer"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 2. SPOTLIGHT FEATURED SHOWCASE */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#2E2E2E] pb-4">
            <h3 className="text-xl font-serif font-bold text-[#F5F1E8] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#B69B65]" />
              <span>Landmark Project Spotlight</span>
            </h3>
            <span className="text-xs font-mono text-[#77736C]">Select project</span>
          </div>

          {/* Project Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TOP_PROJECTS_DATA.map((proj) => {
              const isActive = proj.id === activeTabId;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveTabId(proj.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#B69B65] text-[#171717] border-[#B69B65] font-semibold'
                      : 'bg-[#1F1F1F] text-[#A39F97] hover:text-[#F5F1E8] border-[#2E2E2E]'
                  }`}
                >
                  <Building2 className={`w-3.5 h-3.5 ${isActive ? 'text-[#171717]' : 'text-[#B69B65]'}`} />
                  <span>{proj.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Project Banner */}
          <div className="bg-[#1F1F1F] p-6 sm:p-8 border border-[#2E2E2E]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="relative overflow-hidden h-[300px] sm:h-[350px] border border-[#2E2E2E] group">
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mt-1">{activeProject.name}</h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#B69B65]">
                  <MapPin className="w-4 h-4" />
                  <span>{activeProject.location}</span>
                </div>

                <div className="p-4 bg-[#171717] border border-[#2E2E2E] text-xs">
                  <span className="text-[#77736C] block text-[10px] font-mono uppercase tracking-wider">Configurations</span>
                  <span className="font-semibold text-[#F5F1E8] mt-0.5 block">{activeProject.config}</span>
                </div>

                <div className="p-3.5 bg-[#171717] border border-[#2E2E2E] text-xs text-[#B69B65]">
                  Benchmark: {activeProject.highlight}
                </div>

                <p className="text-xs sm:text-sm text-[#D5D1C8] font-light leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setBookingProject(activeProject)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#B69B65] text-[#171717] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#C4A975] transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Site Visit</span>
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#2E2E2E] bg-[#171717] text-[#F5F1E8] font-medium text-xs uppercase tracking-[0.18em] hover:border-[#B69B65] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ----------------- SIDE-BY-SIDE COMPARISON MODAL ----------------- */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1F1F1F] max-w-4xl w-full p-6 sm:p-8 border border-[#2E2E2E] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowCompareModal(false)}
              className="absolute top-5 right-5 p-2 bg-[#171717] border border-[#2E2E2E] text-[#A39F97] hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-[#2E2E2E] pb-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B69B65] font-semibold">SIDE-BY-SIDE COMPARISON</span>
              <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mt-1">Landmark Projects Matrix</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCompareIds.map((id) => {
                const item = TOP_PROJECTS_DATA.find((p) => p.id === id);
                if (!item) return null;
                return (
                  <div key={item.id} className="p-5 bg-[#171717] border border-[#2E2E2E] space-y-4 relative">
                    <div className="flex items-center justify-end">
                      {selectedCompareIds.length > 1 && (
                        <button
                          onClick={() => toggleCompare(item.id)}
                          className="text-xs text-[#77736C] hover:text-red-400 cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <h4 className="text-lg font-serif font-bold text-[#F5F1E8]">{item.name}</h4>
                    <p className="text-xs text-[#B69B65] font-mono">{item.location}</p>

                    <div className="space-y-3 pt-2 text-xs border-t border-[#2E2E2E]">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#77736C] block">Configurations</span>
                        <span className="font-semibold text-[#F5F1E8]">{item.config}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#77736C] block">Super Built-Up Area</span>
                        <span className="font-mono text-[#A39F97]">{item.size}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#77736C] block">Key Benchmark</span>
                        <span className="text-[#D5D1C8] leading-snug block mt-0.5">{item.highlight}</span>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="w-full py-2.5 bg-[#B69B65] text-[#171717] text-xs font-semibold uppercase tracking-[0.18em] text-center block hover:bg-[#C4A975] transition-colors"
                    >
                      Enquire for {item.name}
                    </a>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      )}

      {/* ----------------- SITE VISIT BOOKING MODAL ----------------- */}
      {bookingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1F1F1F] max-w-md w-full p-6 sm:p-8 border border-[#2E2E2E] shadow-2xl relative space-y-6">
            
            <button
              onClick={() => { setBookingProject(null); setBookingSuccess(false); }}
              className="absolute top-5 right-5 p-2 bg-[#171717] border border-[#2E2E2E] text-[#A39F97] hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-[#2E2E2E] pb-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B69B65] font-semibold">SCHEDULE SITE VISIT</span>
              <h3 className="text-xl font-serif font-bold text-[#F5F1E8] mt-1">{bookingProject.name}</h3>
              <p className="text-xs text-[#A39F97] mt-0.5">{bookingProject.location} • {bookingProject.config}</p>
            </div>

            {!bookingSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-medium text-[#D5D1C8] uppercase tracking-wider">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    className="w-full bg-[#171717] border border-[#2E2E2E] px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-[#D5D1C8] uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#171717] border border-[#2E2E2E] px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-[#D5D1C8] uppercase tracking-wider">Preferred Site Visit Date</label>
                  <input
                    type="date"
                    className="w-full bg-[#171717] border border-[#2E2E2E] px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#B69B65] text-[#171717] font-semibold uppercase tracking-[0.18em] hover:bg-[#C4A975] transition-colors cursor-pointer"
                >
                  Confirm Site Visit Booking
                </button>
              </form>
            ) : (
              <div className="p-6 bg-[#171717] border border-[#2E2E2E] text-center space-y-4">
                <div className="w-12 h-12 bg-[#1F1F1F] border border-[#B69B65]/40 text-[#B69B65] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[2]" />
                </div>
                <h4 className="text-lg font-bold text-[#F5F1E8]">Visit Scheduled</h4>
                <p className="text-xs text-[#A39F97]">
                  Our corporate representative will connect with you to confirm appointment details for <strong className="text-[#B69B65]">{bookingProject.name}</strong>.
                </p>
                <button
                  onClick={() => { setBookingProject(null); setBookingSuccess(false); }}
                  className="px-6 py-2.5 bg-[#2E2E2E] text-xs text-[#F5F1E8] hover:bg-[#3E3E3E] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ----------------- PROJECT DETAIL MODAL ----------------- */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1F1F1F] max-w-2xl w-full p-6 sm:p-8 border border-[#2E2E2E] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-5 right-5 p-2 bg-[#171717] border border-[#2E2E2E] text-[#A39F97] hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative overflow-hidden h-60 border border-[#2E2E2E]">
              <img src={selectedProjectModal.image} alt={selectedProjectModal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mt-1">{selectedProjectModal.name}</h3>
                <p className="text-xs text-[#B69B65] font-mono">{selectedProjectModal.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 bg-[#171717] border border-[#2E2E2E] text-xs">
              <div>
                <span className="text-[#77736C] block text-[10px] uppercase font-mono">Configurations</span>
                <span className="font-semibold text-[#F5F1E8]">{selectedProjectModal.config}</span>
              </div>
              <div>
                <span className="text-[#77736C] block text-[10px] uppercase font-mono">Size Range</span>
                <span className="font-semibold text-[#F5F1E8]">{selectedProjectModal.size}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B69B65] font-semibold">Key Advantage</h4>
              <div className="p-3.5 bg-[#171717] border border-[#2E2E2E] text-xs text-[#B69B65] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B69B65] shrink-0" />
                <span>{selectedProjectModal.highlight}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#D5D1C8] font-light leading-relaxed">
                {selectedProjectModal.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#2E2E2E] flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  const p = selectedProjectModal;
                  setSelectedProjectModal(null);
                  setBookingProject(p);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#B69B65]/40 text-[#F5F1E8] hover:border-[#B69B65] text-xs font-medium uppercase tracking-[0.18em] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Visit</span>
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedProjectModal(null)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B69B65] text-[#171717] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#C4A975] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Query</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default TopProjectsShowcase;
