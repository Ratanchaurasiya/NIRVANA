import React, { useState } from 'react';
import { Building2, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  const handleLinkClick = (path) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <div className="border transition-all duration-300 backdrop-blur-md px-6 py-3.5 flex items-center justify-between bg-white/95 border-[#DEDAD2] shadow-sm text-[#171717]">
          
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 border border-[#DEDAD2] bg-[#F5F1E8] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#B69B65]">
              <Building2 className="w-4 h-4 text-[#B69B65]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-wider uppercase text-[#171717] leading-tight">
                NIRVANA <span className="text-[#B69B65]">GROUP</span>
              </span>
              <span className="text-[10px] font-sans font-semibold text-[#77736C] tracking-[0.25em] block uppercase mt-0.5">
                EST. 2026 • GUJARAT
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all py-1 border-b-2 cursor-pointer ${
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
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors cursor-pointer"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#171717] hover:text-[#B69B65] transition-colors border border-[#E6E2D8]"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 bg-white border border-[#E6E2D8] shadow-xl space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full p-2.5 text-left text-xs uppercase tracking-[0.2em] font-medium transition-colors block ${
                    isActive
                      ? 'text-[#B69B65] bg-[#F5F3EE] font-semibold'
                      : 'text-[#4B4842] hover:text-[#171717] hover:bg-[#F5F3EE]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            
            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full mt-3 py-3 bg-[#B69B65] text-white font-semibold text-xs uppercase tracking-[0.2em] text-center flex items-center justify-center gap-2 hover:bg-[#A38854]"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
