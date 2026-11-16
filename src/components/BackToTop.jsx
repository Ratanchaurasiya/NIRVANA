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
      className="fixed bottom-20 left-6 lg:bottom-8 lg:left-8 z-40 p-2.5 bg-white border border-[#E6E2D8] text-[#5C5852] hover:text-[#B69B65] hover:border-[#B69B65] shadow-lg transition-colors cursor-pointer"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default BackToTop;
