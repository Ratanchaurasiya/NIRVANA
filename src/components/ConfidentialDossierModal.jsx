import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  // Lock body scroll and handle Escape key while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
    const blob = new Blob(
      [
        `NIRVANA BUILDERS - CONFIDENTIAL PROJECT DOSSIER\n\n` +
        `Project: ${formData.project}\n` +
        `Prepared For: ${formData.name}\n` +
        `Contact: ${formData.phone}\n` +
        `Location: Western Ahmedabad Corridors, Gujarat, India\n\n` +
        `SPECIFICATIONS INCLUDED:\n` +
        `- Architectural Blueprint Layouts\n` +
        `- Structural RERA Compliance Documentation\n` +
        `- Material Craftsmanship & Finishing Specifications\n` +
        `- Private Concierge & Amenity Access Guide\n\n` +
        `All rights reserved © 2026 NIRVANA BUILDERS. Building Dreams. Creating Landmarks.`
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Nirvana_Builders_Dossier_${formData.project.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const modalContent = (
    <div
      className="modal-backdrop-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
    >
      <div
        className="modal-dialog-container max-w-lg bg-white p-6 sm:p-8 border border-[#E6E2D8] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 bg-[#FAF9F6] border border-[#E6E2D8] text-[#5C5852] hover:text-[#171717] hover:border-[#B69B65] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div className="space-y-5">
            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF9F6] border border-[#E6E2D8] text-[#B69B65] text-[11px] font-mono uppercase tracking-wider">
                <Lock className="w-3 h-3 text-[#B69B65]" />
                <span>CONFIDENTIAL ARCHITECTURAL ACCESS</span>
              </div>
              <h3 id="dossier-modal-title" className="text-2xl font-serif font-bold text-[#171717]">
                Download Project Dossier
              </h3>
              <p className="text-xs text-[#5C5852] font-light leading-relaxed">
                Receive the complete architectural package: high-resolution floor plans, engineering specifications, and private concierge privileges.
              </p>
            </div>

            {/* Request Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-[#4B4842] block mb-1">Select Landmark Project *</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full bg-[#FAF9F6] border border-[#E6E2D8] focus:border-[#B69B65] p-3 text-[#171717] outline-none cursor-pointer"
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
                <label className="font-semibold text-[#4B4842] block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Shah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FAF9F6] border border-[#E6E2D8] focus:border-[#B69B65] p-3 text-[#171717] outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-[#4B4842] block mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FAF9F6] border border-[#E6E2D8] focus:border-[#B69B65] p-3 text-[#171717] outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-[#4B4842] block mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="name@corporate.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF9F6] border border-[#E6E2D8] focus:border-[#B69B65] p-3 text-[#171717] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#B69B65] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#A38854] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isSubmitting ? 'Compiling Dossier...' : 'Request Private Dossier'}</span>
                </button>
              </div>

              <p className="text-[10px] text-[#77736C] text-center flex items-center justify-center gap-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B69B65]" />
                <span>Strict privacy guaranteed. No marketing spam.</span>
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center space-y-5 py-4">
            <div className="w-14 h-14 bg-[#FAF9F6] border border-[#B69B65]/40 text-[#B69B65] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 stroke-[2]" />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-2xl font-serif font-bold text-[#171717]">Dossier Ready</h4>
              <p className="text-xs text-[#5C5852] max-w-sm mx-auto">
                Thank you, <strong className="text-[#171717]">{formData.name}</strong>. The confidential architectural specifications for <strong className="text-[#B69B65]">{formData.project}</strong> have been prepared.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleDownloadSimulated}
                className="w-full py-3.5 bg-[#B69B65] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#A38854] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive Briefing (PDF)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="text-xs text-[#77736C] hover:text-[#171717] cursor-pointer uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );

  const modalRoot = typeof document !== 'undefined' ? (document.getElementById('modal-root') || document.body) : null;
  return modalRoot ? createPortal(modalContent, modalRoot) : modalContent;
}
