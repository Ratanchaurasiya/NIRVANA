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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>OFFICIAL COMMUNICATION TERMINAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          Contact <span className="text-gold-gradient">NIRVANA GROUP</span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
        <p className="text-slate-300 text-base font-light leading-relaxed">
          Reach our corporate headquarters at The Capital, Science City Road, Sola, Ahmedabad.
        </p>
      </div>

      {/* ---------------- 3D LOCALIZATION MAP Visual ---------------- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Interactive 3D Localization Coordinates</span>
          </h2>
          <span className="text-xs font-mono text-amber-300">Naranpura • Khoraj • HQ Sola • Thaltej</span>
        </div>

        {/* 3D Localization Wireframe Map */}
        <LocalizationMap3D />
      </div>

      {/* ---------------- FUTURISTIC "COMMUNICATION LINE" FORM & ADDRESS ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Official Headquarters Address */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel-gold rounded-3xl p-8 border border-amber-500/40 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">CORPORATE HEADQUARTERS</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">NIRVANA GROUP</h3>
              <p className="text-xs text-slate-300 mt-1">Real Estate Development & Holding Group</p>
            </div>

            <div className="space-y-4 pt-2 text-xs">
              
              <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Headquarters</span>
                <p className="text-sm font-bold text-white leading-relaxed">
                  Ahmedabad, Gujarat, India
                </p>
                <p className="text-[11px] text-amber-300/80">
                  Private consultations by appointment
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Advisory Service</span>
                <p className="text-sm font-bold text-white">
                  Direct Advisory Portal Active
                </p>
                <p className="text-[11px] text-slate-400">
                  Priority scheduling via web enquiry
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Corporate Mail</span>
                <a href="mailto:contact@nirvana.group" className="text-xs font-bold text-amber-300 hover:underline block truncate">
                  contact@nirvana.group
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Sleek COMMUNICATION LINE Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">SECURE ENCRYPTED CHANNEL</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">COMMUNICATION LINE</h3>
              <p className="text-xs text-slate-300 mt-1">Send a direct advisory query to our corporate engineering group.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-amber-200 font-bold">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={commForm.name}
                      onChange={(e) => setCommForm({ ...commForm, name: e.target.value })}
                      className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-amber-200 font-bold">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={commForm.phone}
                      onChange={(e) => setCommForm({ ...commForm, phone: e.target.value })}
                      className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-amber-200 font-bold">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={commForm.email}
                      onChange={(e) => setCommForm({ ...commForm, email: e.target.value })}
                      className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono uppercase text-amber-200 font-bold">SUBJECT</label>
                    <input
                      type="text"
                      value={commForm.subject}
                      onChange={(e) => setCommForm({ ...commForm, subject: e.target.value })}
                      className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono uppercase text-amber-200 font-bold">MESSAGE / SPECIFICATIONS</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your corporate requirement or site query..."
                    value={commForm.message}
                    onChange={(e) => setCommForm({ ...commForm, message: e.target.value })}
                    className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-gradient text-navy-950 font-extrabold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-navy-950" />
                  <span>TRANSMIT COMMUNICATION</span>
                </button>

              </form>
            ) : (
              <div className="p-8 rounded-2xl bg-[#070D1E] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">TRANSMISSION CONFIRMED</h4>
                <p className="text-xs text-slate-300">
                  Thank you! Your communication has been dispatched to NIRVANA GROUP advisory group.
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
