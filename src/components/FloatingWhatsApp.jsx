import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-20 right-5 lg:bottom-8 lg:right-8 z-50 group flex items-center gap-2.5 px-4 py-2.5 bg-white hover:bg-[#F0EEEA] border border-[#E6E2D8] hover:border-[#B69B65] text-[#171717] transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg cursor-pointer"
      aria-label="Direct Advisory Desk"
    >
      <div className="relative flex items-center justify-center shrink-0 text-[#B69B65] group-hover:scale-110 transition-transform">
        <MessageCircle className="w-4 h-4" />
      </div>
      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#4B4842] group-hover:text-[#171717] select-none whitespace-nowrap">
        Advisory Concierge
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
