import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-20 right-5 lg:bottom-8 lg:right-8 z-50 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.5)] border border-emerald-400/30 transition-all duration-300 hover:scale-105 cursor-pointer"
      aria-label="Quick Advisory Chat with NIRVANA GROUP"
    >
      <div className="relative flex items-center justify-center shrink-0">
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping" />
      </div>
      <span className="text-xs font-black uppercase tracking-wider text-white select-none whitespace-nowrap">
        Chat with Advisor
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
