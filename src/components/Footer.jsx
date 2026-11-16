import React from 'react';
import { Building2, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#141414] text-[#A39F97] border-t border-[#2E2E2E] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 bg-[#1F1F1F] border border-[#B69B65]/40 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#B69B65]" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-xl sm:text-2xl tracking-[0.06em] uppercase text-[#F5F1E8] leading-tight">
                  NIRVANA <span className="text-[#B69B65]">GROUP</span>
                </span>
                <span className="text-[11px] font-editorial italic text-[#A39F97] tracking-wider mt-0.5">
                  Building Dreams. Creating Landmarks.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A39F97] font-light leading-relaxed max-w-md">
              A premier property development group and real estate holding company. Engineering Grade-A commercial office environments and luxury residential estates across Gujarat.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] text-[11px] font-mono uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B69B65]" />
                <span>BIS Zone 5 & IGBC Compliant</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-[#B69B65] font-semibold">
              SECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs font-medium uppercase tracking-[0.18em]">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-[#F5F1E8] transition-colors cursor-pointer">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-[#F5F1E8] transition-colors cursor-pointer">About</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/projects')} className="hover:text-[#F5F1E8] transition-colors cursor-pointer">Projects</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-[#F5F1E8] transition-colors cursor-pointer">Contact</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-[#F5F1E8] transition-colors cursor-pointer">Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms-and-conditions')} className="hover:text-[#F5F1E8] transition-colors cursor-pointer">Terms & Conditions</button>
              </li>
            </ul>
          </div>

          {/* Corporate Headquarters Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-[#B69B65] font-semibold">
              HEADQUARTERS & PRESENCE
            </h4>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-3 text-[#A39F97]">
                <MapPin className="w-4 h-4 text-[#B69B65] shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>

              <div className="flex items-center gap-3 text-[#A39F97]">
                <Phone className="w-4 h-4 text-[#B69B65] shrink-0" />
                <a href="tel:+917940007890" className="hover:text-[#F5F1E8] transition-colors">
                  +91 79 4000 7890
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#A39F97]">
                <Mail className="w-4 h-4 text-[#B69B65] shrink-0" />
                <a href="mailto:contact@nirvana.group" className="hover:text-[#F5F1E8] transition-colors truncate">
                  contact@nirvana.group
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/nirvana.group._/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-2 bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#B69B65] text-xs font-mono uppercase tracking-[0.14em] text-[#F5F1E8] hover:text-[#B69B65] transition-all group"
              >
                <InstagramIcon className="w-4 h-4 text-[#B69B65] group-hover:scale-110 transition-transform" />
                <span>@nirvana.group._</span>
                <span className="text-[#B69B65]">↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-8 border-t border-[#2E2E2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77736C]">
          <p>© 2026 NIRVANA GROUP. All rights reserved. RERA Gujarat Compliant.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#A39F97] hover:text-[#B69B65] transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
