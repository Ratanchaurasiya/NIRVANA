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
      onShowToast('Communication line open! Message received by NIRVANA GROUP.');
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#B69B65]" />
          <span>OFFICIAL COMMUNICATION TERMINAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F5F1E8] tracking-tight">
          Contact <span className="text-[#B69B65]">NIRVANA GROUP</span>
        </h1>
        <div className="w-12 h-px bg-[#B69B65]/40 mx-auto" />
        <p className="text-[#A39F97] text-base font-light leading-relaxed">
          Reach our corporate headquarters in Ahmedabad, Gujarat, India.
        </p>
      </div>

      {/* ---------------- 3D LOCALIZATION MAP Visual ---------------- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-[#F5F1E8] flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#B69B65]" />
            <span>Interactive Localization Coordinates</span>
          </h2>
          <span className="text-xs font-mono text-[#77736C]">Naranpura • Khoraj • Sola • Thaltej</span>
        </div>

        {/* 3D Localization Wireframe Map */}
        <LocalizationMap3D />
      </div>

      {/* ---------------- FUTURISTIC "COMMUNICATION LINE" FORM & ADDRESS ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Official Headquarters Address */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-none bg-[#1F1F1F] p-8 border border-[#2E2E2E] shadow-xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">CORPORATE HEADQUARTERS</span>
              <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mt-1">NIRVANA GROUP</h3>
              <p className="text-xs text-[#A39F97] mt-1">Real Estate Development & Holding Group</p>
            </div>

            <div className="space-y-4 pt-2 text-xs">
              
              <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] space-y-1">
                <span className="text-[10px] font-mono text-[#77736C] uppercase tracking-wider block">Headquarters</span>
                <p className="text-sm font-bold text-[#F5F1E8] leading-relaxed">
                  Ahmedabad, Gujarat, India
                </p>
                <p className="text-[11px] text-[#B69B65]">
                  Private consultations by appointment
                </p>
              </div>

              <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] space-y-1">
                <span className="text-[10px] font-mono text-[#77736C] uppercase tracking-wider block">Advisory Service</span>
                <p className="text-sm font-bold text-[#F5F1E8]">
                  Direct Advisory Portal Active
                </p>
                <p className="text-[11px] text-[#A39F97]">
                  Priority scheduling via web enquiry
                </p>
              </div>

              <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] space-y-1">
                <span className="text-[10px] font-mono text-[#77736C] uppercase tracking-wider block">Corporate Mail</span>
                <a href="mailto:contact@nirvana.group" className="text-xs font-bold text-[#B69B65] hover:underline block truncate">
                  contact@nirvana.group
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Sleek COMMUNICATION LINE Form */}
        <div className="lg:col-span-7">
          <div className="rounded-none bg-[#1F1F1F] p-8 sm:p-10 border border-[#2E2E2E] shadow-xl space-y-6">
            <div className="border-b border-[#2E2E2E] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">SECURE ENCRYPTED CHANNEL</span>
              <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mt-1">COMMUNICATION LINE</h3>
              <p className="text-xs text-[#A39F97] mt-1">Send a direct advisory query to our corporate engineering group.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-[#A39F97] text-[11px] font-bold">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={commForm.name}
                      onChange={(e) => setCommForm({ ...commForm, name: e.target.value })}
                      className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-[#A39F97] text-[11px] font-bold">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={commForm.phone}
                      onChange={(e) => setCommForm({ ...commForm, phone: e.target.value })}
                      className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-[#A39F97] text-[11px] font-bold">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={commForm.email}
                      onChange={(e) => setCommForm({ ...commForm, email: e.target.value })}
                      className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-[#A39F97] text-[11px] font-bold">SUBJECT</label>
                    <input
                      type="text"
                      value={commForm.subject}
                      onChange={(e) => setCommForm({ ...commForm, subject: e.target.value })}
                      className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono uppercase text-[#A39F97] text-[11px] font-bold">MESSAGE / SPECIFICATIONS</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your corporate requirement or site query..."
                    value={commForm.message}
                    onChange={(e) => setCommForm({ ...commForm, message: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2E2E2E] rounded-none px-4 py-3 text-[#F5F1E8] focus:outline-none focus:border-[#B69B65] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-none bg-[#B69B65] text-[#171717] font-bold uppercase tracking-wider hover:bg-[#c4a973] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#171717]" />
                  <span>TRANSMIT COMMUNICATION</span>
                </button>

              </form>
            ) : (
              <div className="p-8 rounded-none bg-[#171717] border border-[#2E2E2E] text-center space-y-4">
                <div className="w-14 h-14 rounded-none bg-[#1F1F1F] text-[#B69B65] flex items-center justify-center mx-auto border border-[#2E2E2E]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#F5F1E8]">TRANSMISSION CONFIRMED</h4>
                <p className="text-xs text-[#A39F97]">
                  Thank you. Your communication has been received by the NIRVANA GROUP advisory desk.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Embedded Map & Full Section */}
      <ContactSection onShowToast={onShowToast} />
    </div>
  );
}
