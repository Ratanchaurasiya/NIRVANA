import React, { useState } from 'react';
import { Building2, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Executive Primary Navigation (Legal links belong in the footer)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="border transition-all duration-300 backdrop-blur-md px-6 sm:px-8 py-4 flex items-center justify-between bg-white/95 border-[#DEDAD2] shadow-sm text-[#171717]">
          
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 border border-[#DEDAD2] bg-[#FAF9F6] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#B69B65]">
              <Building2 className="w-5 h-5 text-[#B69B65]" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-semibold text-base sm:text-lg tracking-[0.16em] uppercase text-[#171717] leading-tight group-hover:text-[#B69B65] transition-colors">
                NIRVANA <span className="text-[#B69B65]">GROUP</span>
              </span>
              <span className="text-[9px] font-sans font-semibold text-[#77736C] tracking-[0.25em] block uppercase mt-0.5">
                EST. 2026 • GUJARAT
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-xs uppercase tracking-[0.22em] font-medium transition-all py-1 border-b-2 cursor-pointer ${
                    isActive
                      ? 'text-[#B69B65] border-[#B69B65] font-semibold'
                      : 'text-[#4B4842] border-transparent hover:text-[#171717] hover:border-[#171717]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Right Action: Clean Champagne CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#A38854] transition-colors cursor-pointer shadow-sm"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#171717] hover:text-[#B69B65] transition-colors border border-[#DEDAD2]"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 bg-white border border-[#DEDAD2] shadow-xl space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full p-2.5 text-left text-xs uppercase tracking-[0.2em] font-medium transition-colors block ${
                    isActive
                      ? 'text-[#B69B65] bg-[#FAF9F6] font-semibold'
                      : 'text-[#4B4842] hover:text-[#171717] hover:bg-[#FAF9F6]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            
            <div className="pt-2 border-t border-[#DEDAD2] flex justify-between text-[11px] text-[#77736C]">
              <button onClick={() => handleLinkClick('/privacy-policy')} className="hover:text-[#171717]">Privacy Policy</button>
              <button onClick={() => handleLinkClick('/terms-and-conditions')} className="hover:text-[#171717]">Terms & Conditions</button>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
