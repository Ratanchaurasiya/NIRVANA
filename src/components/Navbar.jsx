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
        <div className="rounded-2xl border transition-all duration-300 backdrop-blur-xl px-5 py-3.5 flex items-center justify-between bg-navy-950/90 border-amber-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-white">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gold-gradient p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <span className="font-serif font-extrabold text-base sm:text-lg tracking-wider uppercase text-amber-300 block text-sharp">
                NIRVANA
              </span>
              <span className="text-[9px] font-mono text-amber-400 tracking-widest block uppercase text-sharp">
                GROUP • EST. 2026
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-gold-gradient text-navy-950 shadow-md scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Right Action: Luxury Gold CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(198,164,106,0.6)] hover:-translate-y-0.5 transition-all"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-navy-950/95 border border-amber-500/40 backdrop-blur-2xl shadow-2xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full p-3 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-gold-gradient text-navy-950'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            
            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-slate-950 font-black text-xs uppercase tracking-wider text-center shadow-lg flex items-center justify-center gap-2"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
