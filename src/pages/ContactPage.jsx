import React, { useState } from 'react';
import LocalizationMap3D from '../components/3d/LocalizationMap3D';
import ContactSection from '../components/ContactSection';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage({ onShowToast }) {
  const [commForm, setCommForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Grade-A Commercial Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Inquiry received. Nirvana Group advisory desk will connect shortly.');
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#DEDAD2] text-[#B69B65] text-[10px] font-sans font-bold uppercase tracking-[0.25em]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B69B65]" />
          <span>Corporate Advisory & Consultations</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[#171717] tracking-tight">
          Connect With <span className="text-[#B69B65]">NIRVANA GROUP</span>
        </h1>
        <div className="w-12 h-px bg-[#B69B65]/40 mx-auto" />
        <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
          Direct consultation desk for Grade-A commercial acquisitions, residential investments, and private site inspections across Ahmedabad, Gujarat.
        </p>
      </div>

      {/* Strategic Corridor Navigator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#DEDAD2] pb-3">
          <h2 className="text-xl font-serif font-bold text-[#171717] flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#B69B65]" />
            <span>Western Ahmedabad Strategic Corridors</span>
          </h2>
          <span className="text-xs font-sans text-[#77736C]">Science City • Sola • SG Highway • Jagatpur • Thaltej</span>
        </div>

        {/* Strategic Corridor Map Navigator */}
        <LocalizationMap3D />
      </div>

      {/* Advisory Query Form & Corporate Headquarters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Official Headquarters Brief */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 border border-[#DEDAD2] shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#B69B65]">CORPORATE HEADQUARTERS</span>
              <h3 className="text-2xl font-cinzel font-bold text-[#171717] mt-1">NIRVANA GROUP</h3>
              <p className="text-xs text-[#5C5852] mt-1">Real Estate Development & Asset Management</p>
            </div>

            <div className="space-y-3.5 pt-2 text-xs">
              
              <div className="p-4 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1">
                <span className="text-[10px] font-sans font-semibold text-[#77736C] uppercase tracking-wider block">Headquarters</span>
                <p className="text-sm font-semibold text-[#171717] leading-relaxed">
                  Ahmedabad, Gujarat, India
                </p>
                <p className="text-[11px] text-[#B69B65]">
                  Private executive boardroom viewings by appointment
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1">
                <span className="text-[10px] font-sans font-semibold text-[#77736C] uppercase tracking-wider block">Advisory Desk</span>
                <a href="tel:+919081507342" className="text-sm font-semibold text-[#171717] hover:text-[#B69B65] transition-colors block">
                  +91 90815 07342
                </a>
                <p className="text-[11px] text-[#5C5852]">
                  Monday to Saturday: 10:00 AM – 7:00 PM
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#DEDAD2] space-y-1">
                <span className="text-[10px] font-sans font-semibold text-[#77736C] uppercase tracking-wider block">Corporate Correspondence</span>
                <a href="mailto:himanshuramchandani2006@gmail.com" className="text-xs font-semibold text-[#B69B65] hover:underline block truncate">
                  himanshuramchandani2006@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Advisory Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 sm:p-10 border border-[#DEDAD2] shadow-sm space-y-6">
            <div className="border-b border-[#DEDAD2] pb-4">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#B69B65]">DIRECT ADVISORY DESK</span>
              <h3 className="text-2xl font-serif font-bold text-[#171717] mt-1">Submit Your Property Inquiry</h3>
              <p className="text-xs text-[#5C5852] mt-1">Direct consultation regarding commercial acquisitions, retail investments, and sky villas.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans uppercase text-[#5C5852] text-[10px] font-bold">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={commForm.name}
                      onChange={(e) => setCommForm({ ...commForm, name: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#DEDAD2] px-4 py-3 text-[#171717] focus:outline-none focus:border-[#B69B65]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans uppercase text-[#5C5852] text-[10px] font-bold">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={commForm.phone}
                      onChange={(e) => setCommForm({ ...commForm, phone: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#DEDAD2] px-4 py-3 text-[#171717] focus:outline-none focus:border-[#B69B65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans uppercase text-[#5C5852] text-[10px] font-bold">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={commForm.email}
                      onChange={(e) => setCommForm({ ...commForm, email: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#DEDAD2] px-4 py-3 text-[#171717] focus:outline-none focus:border-[#B69B65]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans uppercase text-[#5C5852] text-[10px] font-bold">INQUIRY CATEGORY</label>
                    <select
                      value={commForm.subject}
                      onChange={(e) => setCommForm({ ...commForm, subject: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#DEDAD2] px-4 py-3 text-[#171717] focus:outline-none focus:border-[#B69B65] cursor-pointer"
                    >
                      <option value="Grade-A Commercial Query">Grade-A Commercial Office</option>
                      <option value="Residential Sky Villa">Residential Sky Villa / Apartment</option>
                      <option value="Plotted Land / Weekend Villa">Plotted Land / Weekend Villa</option>
                      <option value="Institutional Investment">Institutional Investment</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans uppercase text-[#5C5852] text-[10px] font-bold">PROJECT OR SPATIAL SPECIFICATIONS</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your property requirements, corridor preference, or site visit timeline..."
                    value={commForm.message}
                    onChange={(e) => setCommForm({ ...commForm, message: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#DEDAD2] px-4 py-3 text-[#171717] focus:outline-none focus:border-[#B69B65] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#B69B65] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38854] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Advisory Inquiry</span>
                </button>

              </form>
            ) : (
              <div className="p-8 bg-[#FAF9F6] border border-[#DEDAD2] text-center space-y-4">
                <div className="w-12 h-12 bg-white text-[#B69B65] flex items-center justify-center mx-auto border border-[#DEDAD2]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#171717]">Inquiry Registered Successfully</h4>
                <p className="text-xs text-[#5C5852]">
                  Thank you. Your consultation parameters have been received by the NIRVANA GROUP advisory desk.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
