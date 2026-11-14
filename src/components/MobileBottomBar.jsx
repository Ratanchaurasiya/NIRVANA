import React from 'react';
import { Home, Layers, MessageSquare, Phone, Mail } from 'lucide-react';

const MobileBottomBar = () => {
  const prefilledMessage = encodeURIComponent(
    "Hello NIRVANA GROUP, I would like to discuss a property requirement in Ahmedabad."
  );

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070D1E]/95 backdrop-blur-xl border-t border-amber-500/30 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-5 gap-1 text-center">
        
        {/* Home */}
        <a
          href="#home"
          className="flex flex-col items-center justify-center py-1.5 text-slate-400 hover:text-amber-400 active:text-amber-400 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-1">Home</span>
        </a>

        {/* Services */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center py-1.5 text-slate-400 hover:text-amber-400 active:text-amber-400 transition-colors"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-1">Services</span>
        </a>

        {/* Enquiry */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-1.5 text-amber-400 hover:text-amber-300 font-bold"
        >
          <div className="w-7 h-7 rounded-full bg-gold-gradient text-navy-950 flex items-center justify-center shadow-md">
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] mt-0.5">Enquire</span>
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-1.5 text-slate-400 hover:text-amber-400 active:text-amber-400 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-1">Contact</span>
        </a>

      </div>
    </div>
  );
};

export default MobileBottomBar;
