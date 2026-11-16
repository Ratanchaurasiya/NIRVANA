import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-20 right-5 lg:bottom-8 lg:right-8 z-50 group flex items-center gap-2.5 px-4 py-2.5 bg-[#1F1F1F] hover:bg-[#252525] border border-[#2E2E2E] hover:border-[#B69B65] text-[#F5F1E8] transition-colors shadow-lg cursor-pointer"
      aria-label="Direct Advisory Desk"
    >
      <div className="relative flex items-center justify-center shrink-0 text-[#B69B65]">
        <MessageCircle className="w-4 h-4" />
      </div>
      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#D5D1C8] group-hover:text-[#F5F1E8] select-none whitespace-nowrap">
        Advisory Concierge
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
