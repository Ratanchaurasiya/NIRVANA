import React, { useState } from 'react';
import { X, FileText, Download, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export default function ConfidentialDossierModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Nirvana Abode',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onShowToast) {
        onShowToast(`Confidential Dossier for ${formData.project} prepared successfully!`, 'success');
      }
    }, 1200);
  };

  const handleDownloadSimulated = () => {
    // Simulated instant PDF download
    const blob = new Blob(
      [
        `NIRVANA GROUP - CONFIDENTIAL PROJECT DOSSIER\n\n` +
        `Project: ${formData.project}\n` +
        `Prepared For: ${formData.name}\n` +
        `Contact: ${formData.phone}\n` +
        `Location: Western Ahmedabad Corridors, Gujarat, India\n\n` +
        `SPECIFICATIONS INCLUDED:\n` +
        `- 3D Architectural Blueprint Layouts\n` +
        `- Structural RERA Compliance Documentation\n` +
        `- Material Craftsmanship & Finishing Specifications\n` +
        `- Private Concierge & Amenity Access Guide\n\n` +
        `All rights reserved © 2026 NIRVANA GROUP. Building Dreams. Creating Landmarks.`
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Nirvana_Group_Dossier_${formData.project.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel-gold rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div className="space-y-5">
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono uppercase tracking-wider">
                <Lock className="w-3 h-3 text-amber-400" />
                <span>CONFIDENTIAL PRIVILEGE ACCESS</span>
              </div>
              <h3 className="text-2xl font-serif font-black text-white">
                Download Project Dossier
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Receive the complete architectural package: high-resolution floor plans, engineering specifications, and private concierge privileges.
              </p>
            </div>

            {/* Request Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-200 block mb-1">Select Landmark Project *</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full bg-[#070D1E] border border-slate-700 focus:border-amber-400 rounded-xl p-3 text-white outline-none"
                >
                  <option value="Nirvana Abode">Nirvana Abode (Luxury 3 & 4 BHK)</option>
                  <option value="The Neemland">The Neemland (Boutique Villa Plots)</option>
                  <option value="Sankalp Nirvana">Sankalp Nirvana (Prime Corporate Hub)</option>
                  <option value="Safal Nirvana Greens">Safal Nirvana Greens (Luxury Estate)</option>
                  <option value="SP Nirvana">SP Nirvana (Modern High-Rise)</option>
                  <option value="Nirvana Arise">Nirvana Arise (Showrooms & Smart Suites)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-200 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Shah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#070D1E] border border-slate-700 focus:border-amber-400 rounded-xl p-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-200 block mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#070D1E] border border-slate-700 focus:border-amber-400 rounded-xl p-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-200 block mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="name@corporate.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#070D1E] border border-slate-700 focus:border-amber-400 rounded-xl p-3 text-white outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-black uppercase tracking-wider shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-navy-950" />
                  <span>{isSubmitting ? 'Generating Dossier...' : 'Request Private Dossier'}</span>
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict privacy guaranteed. No marketing spam.</span>
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-2xl font-serif font-black text-white">Dossier Ready</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you, <strong className="text-amber-300">{formData.name}</strong>. The confidential architectural specifications for <strong className="text-amber-300">{formData.project}</strong> have been prepared.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleDownloadSimulated}
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:opacity-95"
              >
                <Download className="w-4 h-4 text-navy-950" />
                <span>Download Executive Briefing (PDF)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
