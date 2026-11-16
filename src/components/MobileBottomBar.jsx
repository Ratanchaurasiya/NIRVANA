import React from 'react';
import { Home, Layers, MessageSquare, Phone, Mail } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141414]/95 backdrop-blur-md border-t border-[#2E2E2E] px-3 py-2 shadow-lg">
      <div className="grid grid-cols-5 gap-1 text-center">
        
        {/* Home */}
        <a
          href="/"
          className="flex flex-col items-center justify-center py-1 text-[#77736C] hover:text-[#B69B65] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase mt-1">Home</span>
        </a>

        {/* Services */}
        <a
          href="/#services"
          className="flex flex-col items-center justify-center py-1 text-[#77736C] hover:text-[#B69B65] transition-colors"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase mt-1">Services</span>
        </a>

        {/* Enquiry */}
        <a
          href="/#contact"
          className="flex flex-col items-center justify-center py-0.5 text-[#B69B65]"
        >
          <div className="w-7 h-7 bg-[#B69B65] text-[#171717] flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-mono uppercase font-semibold mt-0.5">Enquire</span>
        </a>

        {/* Contact */}
        <a
          href="/contact"
          className="flex flex-col items-center justify-center py-1 text-[#77736C] hover:text-[#B69B65] transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase mt-1">Contact</span>
        </a>

        {/* Call */}
        <a
          href="tel:+919081507342"
          className="flex flex-col items-center justify-center py-1 text-[#77736C] hover:text-[#B69B65] transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase mt-1">Call</span>
        </a>

      </div>
    </div>
  );
};

export default MobileBottomBar;
