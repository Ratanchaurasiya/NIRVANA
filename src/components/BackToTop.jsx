import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 left-6 lg:bottom-8 lg:left-8 z-40 p-3 rounded-full bg-[#111D3E] border border-amber-500/40 text-amber-300 hover:bg-gold-gradient hover:text-navy-950 shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
