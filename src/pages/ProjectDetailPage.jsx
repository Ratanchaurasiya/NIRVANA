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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#1F1F1F] text-[#B69B65] border border-[#2E2E2E] text-xs font-mono uppercase tracking-wider hover:border-[#B69B65] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Matrix</span>
        </button>
      </div>

      {/* ---------------- 1. HEADER SECTION ---------------- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#2E2E2E]">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-none bg-[#B69B65] text-[#171717] text-xs font-mono font-bold uppercase tracking-wider">
              {project.status}
            </span>
            <span className="px-3 py-1 rounded-none bg-[#1F1F1F] text-[#B69B65] border border-[#2E2E2E] text-xs font-mono uppercase tracking-wider">
              {project.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F5F1E8] tracking-tight">
            {project.name}
          </h1>
          <p className="text-sm sm:text-base text-[#B69B65] font-mono">{project.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#A39F97]">
          <MapPin className="w-4 h-4 text-[#B69B65] shrink-0" />
          <span>{project.location}</span>
        </div>
      </div>

      {/* ---------------- 2. 3D FLOOR PLAN LAYOUT VIEWER Visual ---------------- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-[#F5F1E8] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#B69B65]" />
            <span>Interactive Floor Plan Layout</span>
          </h2>
          <span className="text-xs font-mono text-[#77736C]">Drag to inspect layout</span>
        </div>

        {/* 3D Floor Plan Viewer Component */}
        <FloorPlan3DViewer unitName={project.floorPlanUnit} />
      </div>

      {/* ---------------- 3. DEVELOPMENT METRICS GRID ---------------- */}
      <div className="rounded-none bg-[#1F1F1F] p-6 sm:p-8 border border-[#2E2E2E] shadow-xl space-y-6">
        <h3 className="text-lg font-serif font-bold text-[#F5F1E8] border-b border-[#2E2E2E] pb-3">
          Development Metrics & Specifications
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#77736C] block">Valuation Status</span>
            <span className="font-bold text-[#B69B65] text-sm">{project.valuation}</span>
          </div>

          <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#77736C] block">Unit Size Range</span>
            <span className="font-bold text-[#F5F1E8] text-sm">{project.size}</span>
          </div>

          <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#77736C] block">Configurations</span>
            <span className="font-bold text-[#F5F1E8] text-sm">{project.config}</span>
          </div>

          <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#77736C] block">Estimated Possession</span>
            <span className="font-bold text-[#B69B65] text-sm">{project.completion}</span>
          </div>
        </div>

        {/* Description & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B69B65] font-bold">Project Overview</h4>
            <p className="text-xs sm:text-sm text-[#A39F97] font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B69B65] font-bold">Engineering Highlights</h4>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-none bg-[#171717] border border-[#2E2E2E] text-xs text-[#F5F1E8]">
                  <Check className="w-4 h-4 text-[#B69B65] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-6 border-t border-[#2E2E2E] flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-none bg-[#B69B65] text-[#171717] text-xs font-bold uppercase tracking-wider hover:bg-[#c4a973] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Submit Project Enquiry</span>
          </button>
        </div>
      </div>

      {/* ---------------- 4. SITE VISIT BOOKING FORM ---------------- */}
      <div className="rounded-none bg-[#1F1F1F] p-6 sm:p-10 border border-[#2E2E2E] shadow-xl space-y-6">
        <div className="border-b border-[#2E2E2E] pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">OFFICIAL SITE VISIT REGISTRATION</span>
          <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mt-1">Book Private Inspection: {project.name}</h3>
        </div>

        {!bookingSuccess ? (
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-[#A39F97] uppercase">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={bookingForm.name}
                onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-[#A39F97] uppercase">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={bookingForm.phone}
                onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-[#A39F97] uppercase">Preferred Date</label>
              <input
                type="date"
                value={bookingForm.date}
                onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
              />
            </div>

            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-none bg-[#B69B65] text-[#171717] font-bold uppercase tracking-wider hover:bg-[#c4a973] transition-all"
              >
                Confirm Site Visit Booking
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 rounded-none bg-[#171717] border border-[#2E2E2E] text-center space-y-3">
            <div className="w-12 h-12 rounded-none bg-[#1F1F1F] text-[#B69B65] flex items-center justify-center mx-auto border border-[#2E2E2E]">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="text-lg font-bold text-[#F5F1E8]">Visit Scheduled Successfully!</h4>
            <p className="text-xs text-[#A39F97]">
              Our advisor will connect with you to confirm private timing for <strong className="text-[#B69B65]">{project.name}</strong>.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
