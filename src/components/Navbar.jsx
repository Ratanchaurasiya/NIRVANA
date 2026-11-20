import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Building2, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useMotionValue(0);
  const pathLength = useSpring(scrollProgress, { stiffness: 220, damping: 30, restDelta: 0.0005 });

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.set(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      update();
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    // Lazy sections change the page height as they mount; keep progress accurate
    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);
    return () => {
      window.removeEventListener('scroll', onScroll);
      ro.disconnect();
    };
  }, [scrollProgress]);

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
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-[margin] duration-500 ease-out ${scrolled ? 'mt-2' : 'mt-4'}`}>
        <div className={`relative border transition-all duration-500 ease-out backdrop-blur-md px-6 sm:px-8 flex items-center justify-between border-[#DEDAD2] text-[#171717] ${scrolled ? 'py-2.5 bg-white/85 shadow-[0_10px_40px_-18px_rgba(23,23,23,0.25)]' : 'py-4 bg-white/95 shadow-sm'}`}>
          
          {/* Scroll progress: a gold line that walks the perimeter of this box */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          >
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              stroke="#B69B65"
              strokeWidth="2.5"
              style={{ pathLength }}
            />
          </svg>

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
                  className={`relative text-xs uppercase tracking-[0.22em] font-medium transition-colors py-1.5 cursor-pointer group/nav ${
                    isActive ? 'text-[#B69B65] font-semibold' : 'text-[#4B4842] hover:text-[#171717]'
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#B69B65]"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  ) : (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#171717] origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-500 ease-out" />
                  )}
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
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mt-2 p-5 bg-white border border-[#DEDAD2] shadow-xl space-y-3"
          >
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
          </motion.div>
        )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}
