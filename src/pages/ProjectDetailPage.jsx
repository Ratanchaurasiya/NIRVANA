import React, { useState } from 'react';
import { PROJECTS_LIST } from '../data/projectsData';
import FloorPlan3DViewer from '../components/3d/FloorPlan3DViewer';
import { 
  Building2, MapPin, Calendar, ArrowLeft, Check, Sparkles, 
  MessageSquare, Phone, ShieldCheck, Layers, Maximize2, Compass
} from 'lucide-react';

export default function ProjectDetailPage({ projectId, onNavigate, onShowToast }) {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', date: '' });

  // Find target project or fallback to first project
  const project = PROJECTS_LIST.find((p) => p.id === projectId) || PROJECTS_LIST[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    if (onShowToast) {
      onShowToast(`Site visit request submitted for ${project.name}!`);
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Top Navigation Back Link */}
      <div>
        <button
          onClick={() => onNavigate('/projects')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B132B] text-amber-300 border border-slate-800 text-xs font-bold uppercase tracking-wider hover:border-amber-400 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Matrix</span>
        </button>
      </div>

      {/* ---------------- 1. HEADER SECTION ---------------- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-amber-500/20">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-navy-950 text-xs font-mono font-bold uppercase tracking-wider">
              {project.status}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              {project.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {project.name}
          </h1>
          <p className="text-sm sm:text-base text-amber-400 font-mono">{project.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{project.location}</span>
        </div>
      </div>

      {/* ---------------- 2. 3D FLOOR PLAN LAYOUT VIEWER Visual ---------------- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span>Interactive 3D Floor Plan Layout</span>
          </h2>
          <span className="text-xs font-mono text-amber-300">Drag to rotate 360°</span>
        </div>

        {/* 3D Floor Plan Viewer Component */}
        <FloorPlan3DViewer unitName={project.floorPlanUnit} />
      </div>

      {/* ---------------- 3. DEVELOPMENT METRICS GRID ---------------- */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl space-y-6">
        <h3 className="text-lg font-serif font-bold text-white border-b border-slate-800 pb-3">
          Development Metrics & Specifications
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Valuation Status</span>
            <span className="font-bold text-amber-300 text-sm">{project.valuation}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Unit Size Range</span>
            <span className="font-bold text-white text-sm">{project.size}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Configurations</span>
            <span className="font-bold text-white text-sm">{project.config}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Estimated Possession</span>
            <span className="font-bold text-amber-400 text-sm">{project.completion}</span>
          </div>
        </div>

        {/* Description & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">Project Overview</h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">Engineering Highlights</h4>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#070D1E] border border-slate-800 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
          <Link
            to="/#contact"
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gold-gradient text-navy-950 text-xs font-black uppercase tracking-wider shadow-lg hover:opacity-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Submit Project Enquiry</span>
          </Link>
        </div>
      </div>

      {/* ---------------- 4. SITE VISIT BOOKING FORM ---------------- */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">OFFICIAL SITE VISIT REGISTRATION</span>
          <h3 className="text-2xl font-serif font-bold text-white mt-1">Book Private Inspection: {project.name}</h3>
        </div>

        {!bookingSuccess ? (
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-amber-200 uppercase">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={bookingForm.name}
                onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                className="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-amber-200 uppercase">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={bookingForm.phone}
                onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                className="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-amber-200 uppercase">Preferred Date</label>
              <input
                type="date"
                value={bookingForm.date}
                onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                className="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gold-gradient text-navy-950 font-extrabold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
              >
                Confirm Site Visit Booking
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-[#070D1E] text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="text-lg font-bold text-white">Visit Scheduled Successfully!</h4>
            <p className="text-xs text-slate-300">
              Our advisor will connect with you to confirm private timing for <strong className="text-amber-300">{project.name}</strong>.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
