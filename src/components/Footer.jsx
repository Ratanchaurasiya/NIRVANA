import React from 'react';
import { Building2, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 text-slate-300 border-t border-amber-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#111D3E] via-[#0B132B] to-[#070D1E] border border-amber-500/40 p-2 shadow-lg flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-2xl tracking-wider uppercase text-white leading-tight">
                  NIRVANA <span className="text-amber-400">GROUP</span>
                </span>
                <span className="text-[10px] font-mono text-amber-300 tracking-[0.25em] uppercase font-bold mt-0.5">
                  Building Dreams. Creating Landmarks.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md">
              A premium property development group and real estate holding company. Engineering Grade-A commercial office environments and luxury residential estates across Gujarat.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>BIS Zone 5 & IGBC Compliant</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              SECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-amber-300 transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-amber-300 transition-colors">About</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/projects')} className="hover:text-amber-300 transition-colors">Projects</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-amber-300 transition-colors">Contact</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-amber-300 transition-colors">Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms-and-conditions')} className="hover:text-amber-300 transition-colors">Terms & Conditions</button>
              </li>
            </ul>
          </div>

          {/* Corporate Headquarters Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              HEADQUARTERS & PRESENCE
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white leading-relaxed">
                    Ahmedabad, Gujarat, India
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Private boardroom consultations & site visits by appointment
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:contact@nirvana.group" className="hover:text-amber-300 transition-colors font-medium">
                  contact@nirvana.group
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Request Private Consultation</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2026 NIRVANA GROUP. ALL RIGHTS RESERVED. BUILDING TRUST</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B132B] hover:bg-[#111D3E] text-amber-300 border border-slate-800 text-[11px] font-bold uppercase transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
