import React, { useState } from 'react';
import { TOP_PROJECTS_DATA } from '../data/propertyData';
import { 
  Building2, Sparkles, MapPin, Maximize2, Tag, CheckCircle2, 
  ArrowRight, MessageSquare, Phone, ShieldCheck, X, Calendar, 
  ArrowLeftRight, Check, Eye, Layers, ExternalLink, Filter
} from 'lucide-react';

const TopProjectsShowcase = ({ onShowToast }) => {
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [bookingProject, setBookingProject] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activeTabId, setActiveTabId] = useState('nb-legacy-tower');

  // Compare checkboxes (by default 2 projects selected for comparison)
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
    <section id="top-projects" className="py-24 relative bg-navy-950 overflow-hidden border-t border-amber-500/20">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Flagship Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Top 5 <span className="text-gold-gradient">Landmark Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Compare configurations, sizes, and key highlights across Science City, Sola, and SG Highway landmark developments.
          </p>
        </div>

        {/* ----------------- 1. INTERACTIVE COMPARISON MATRIX (PERMANENT & RESPONSIVE) ----------------- */}
        <div className="glass-panel-gold rounded-3xl p-4 sm:p-8 border border-amber-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 animate-pulse" />
              <div>
                <h3 className="text-lg font-serif font-bold text-white">Project Comparison Matrix</h3>
                <p className="text-xs text-amber-300 font-mono">Select checkboxes to compare side-by-side</p>
              </div>
            </div>

            <button
              onClick={() => setShowCompareModal(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowLeftRight className="w-4 h-4 text-navy-950" />
              <span>Launch Side-by-Side View ({selectedCompareIds.length})</span>
            </button>
          </div>

          {/* Desktop Table Format */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-800 bg-[#070D1E]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0B132B] text-amber-300 font-mono uppercase tracking-wider border-b border-slate-800">
                  <th className="py-4 px-4 font-bold text-center w-12">Select</th>
                  <th className="py-4 px-6 font-bold">Project Name & Location</th>
                  <th className="py-4 px-6 font-bold">Configurations</th>
                  <th className="py-4 px-6 font-bold">Size Range (Approx.)</th>
                  <th className="py-4 px-6 font-bold">Key Highlight</th>
                  <th className="py-4 px-6 font-bold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {TOP_PROJECTS_DATA.map((proj) => {
                  const isChecked = selectedCompareIds.includes(proj.id);
                  const isSpotlightActive = activeTabId === proj.id;

                  return (
                    <tr 
                      key={proj.id} 
                      className={`transition-colors group ${
                        isSpotlightActive ? 'bg-amber-500/10' : 'hover:bg-slate-800/50'
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-4 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleCompare(proj.id)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-amber-400 focus:ring-amber-400 cursor-pointer"
                        />
                      </td>

                      {/* Project Name & Location */}
                      <td className="py-4 px-6 font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                        <button
                          onClick={() => {
                            setActiveTabId(proj.id);
                            setSelectedProjectModal(proj);
                          }}
                          className="text-left hover:underline"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span>{proj.name}</span>
                          </div>
                          <span className="text-[10px] font-sans font-normal text-slate-400 block ml-4">{proj.location}</span>
                        </button>
                      </td>

                      {/* Config */}
                      <td className="py-4 px-6 font-bold text-amber-200">
                        {proj.config}
                      </td>

                      {/* Size */}
                      <td className="py-4 px-6 font-mono text-slate-300">
                        {proj.size}
                      </td>

                      {/* Highlight */}
                      <td className="py-4 px-6 font-light text-slate-300">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200">
                          <ShieldCheck className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{proj.highlight}</span>
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => setSelectedProjectModal(proj)}
                            className="px-3 py-1.5 rounded-lg bg-[#111D3E] hover:bg-[#1C2B54] border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider transition-colors"
                          >
                            Details
                          </button>

                          <button
                            onClick={() => setBookingProject(proj)}
                            className="px-3 py-1.5 rounded-lg bg-gold-gradient text-navy-950 text-[11px] font-bold uppercase tracking-wider transition-transform hover:scale-105"
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

          {/* Mobile & Tablet Interactive Matrix Cards */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOP_PROJECTS_DATA.map((proj) => {
              const isChecked = selectedCompareIds.includes(proj.id);
              return (
                <div 
                  key={proj.id}
                  className={`p-5 rounded-2xl bg-[#070D1E] border transition-all ${
                    isChecked ? 'border-amber-400 shadow-lg' : 'border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                    <label className="flex items-center gap-2 text-xs font-mono text-amber-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCompare(proj.id)}
                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-amber-400"
                      />
                      <span>Compare</span>
                    </label>
                  </div>

                  <h4 className="text-base font-serif font-bold text-white">{proj.name}</h4>
                  <p className="text-xs text-slate-400 font-mono mb-3">{proj.location}</p>

                  <div className="space-y-2 text-xs bg-[#0B132B] p-3 rounded-xl border border-slate-800 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Config:</span>
                      <span className="font-bold text-white">{proj.config}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Size:</span>
                      <span className="font-mono text-slate-200">{proj.size}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-amber-200/90 mb-4 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                    💡 <strong>Highlight:</strong> {proj.highlight}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProjectModal(proj)}
                      className="py-2 rounded-xl bg-[#111D3E] text-amber-300 text-xs font-bold uppercase tracking-wider text-center"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => setBookingProject(proj)}
                      className="py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-extrabold uppercase tracking-wider text-center"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ----------------- 2. SPOTLIGHT FEATURED SHOWCASE ----------------- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-400" />
              <span>Landmark Project Spotlight</span>
            </h3>
            <span className="text-xs font-mono text-amber-400">Select project tab below</span>
          </div>

          {/* Project Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {TOP_PROJECTS_DATA.map((proj) => {
              const isActive = proj.id === activeTabId;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveTabId(proj.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-gradient text-navy-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                      : 'bg-[#0B132B] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <Building2 className={`w-4 h-4 ${isActive ? 'text-navy-950' : 'text-amber-400'}`} />
                  <span>{proj.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Project Banner */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl backdrop-blur-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[350px] border border-slate-800 group">
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-black/30" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mt-1">{activeProject.name}</h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                  <MapPin className="w-4 h-4" />
                  <span>{activeProject.location}</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 text-xs">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">Configurations</span>
                  <span className="font-bold text-white mt-0.5 block">{activeProject.config}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                  💡 <strong>Key Highlight:</strong> {activeProject.highlight}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setBookingProject(activeProject)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Site Visit</span>
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-black text-xs uppercase tracking-wider"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel rounded-3xl max-w-4xl w-full p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowCompareModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">SIDE-BY-SIDE COMPARISON</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Landmark Projects Matrix</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCompareIds.map((id) => {
                const item = TOP_PROJECTS_DATA.find((p) => p.id === id);
                if (!item) return null;
                return (
                  <div key={item.id} className="p-5 rounded-2xl bg-[#070D1E] border border-amber-500/30 space-y-4 relative">
                    <div className="flex items-center justify-end">
                      {selectedCompareIds.length > 1 && (
                        <button
                          onClick={() => toggleCompare(item.id)}
                          className="text-xs text-slate-400 hover:text-red-400"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <h4 className="text-lg font-serif font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-amber-400 font-mono">{item.location}</p>

                    <div className="space-y-3 pt-2 text-xs border-t border-slate-800">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">Configurations</span>
                        <span className="font-bold text-white">{item.config}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">Size Range</span>
                        <span className="font-mono text-slate-300">{item.size}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">Key Advantage</span>
                        <span className="text-slate-200 leading-snug block mt-0.5">{item.highlight}</span>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="w-full py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold uppercase tracking-wider text-center block"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel rounded-3xl max-w-md w-full p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => { setBookingProject(null); setBookingSuccess(false); }}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">SCHEDULE SITE VISIT</span>
              <h3 className="text-xl font-serif font-bold text-white mt-1">{bookingProject.name}</h3>
              <p className="text-xs text-slate-300 mt-0.5">{bookingProject.location} • {bookingProject.config}</p>
            </div>

            {!bookingSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-amber-200 uppercase tracking-wider">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    className="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-amber-200 uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-amber-200 uppercase tracking-wider">Preferred Site Visit Date</label>
                  <input
                    type="date"
                    className="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                >
                  Confirm Site Visit Booking
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-[#070D1E] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-white">Visit Scheduled!</h4>
                <p className="text-xs text-slate-300">
                  Our advisor will connect with you shortly to confirm timing for <strong className="text-amber-300">{bookingProject.name}</strong>.
                </p>
                <button
                  onClick={() => { setBookingProject(null); setBookingSuccess(false); }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs text-white hover:bg-slate-700"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative rounded-2xl overflow-hidden h-60">
              <img src={selectedProjectModal.image} alt={selectedProjectModal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/40" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-serif font-bold text-white mt-1">{selectedProjectModal.name}</h3>
                <p className="text-xs text-amber-300 font-mono">{selectedProjectModal.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#070D1E] border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Configurations</span>
                <span className="font-bold text-white">{selectedProjectModal.config}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Size Range</span>
                <span className="font-bold text-white">{selectedProjectModal.size}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">Key Project Advantage</h4>
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{selectedProjectModal.highlight}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {selectedProjectModal.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  const p = selectedProjectModal;
                  setSelectedProjectModal(null);
                  setBookingProject(p);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Visit</span>
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedProjectModal(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 text-xs font-black uppercase tracking-wider"
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
