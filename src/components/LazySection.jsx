import React, { useState, useEffect, useRef } from 'react';

/**
 * LazySection - Intersection-driven lazy loader for page sections.
 * Delays mounting and resource initialization until the user approaches the section.
 */
export default function LazySection({
  children,
  minHeight = '320px',
  rootMargin = '300px 0px',
  className = '',
  placeholderText = 'Loading Section...',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        style={{ minHeight }}
        className={`w-full flex items-center justify-center relative overflow-hidden transition-opacity duration-500 ${className}`}
      >
        {/* Subtle Architectural Grid Skeleton */}
        <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center opacity-40">
          <div className="w-8 h-8 border border-[#B69B65]/40 animate-pulse flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#B69B65]" />
          </div>
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#77736C] mt-2">
            {placeholderText}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-700 ease-out opacity-100 ${className}`}>
      {children}
    </div>
  );
}
