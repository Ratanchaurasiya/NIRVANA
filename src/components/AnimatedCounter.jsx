import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter - Smoothly increments numbers up to their target value when visible.
 * Handles prefixes/suffixes (e.g. "+", "%", "BHK").
 */
export default function AnimatedCounter({ value, duration = 1500, className = '' }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  // Extract numeric part and non-numeric prefix/suffix
  const match = String(value).match(/^([^\d]*)(\d+)([^\d]*)$/);

  useEffect(() => {
    if (!containerRef.current || hasAnimated || !match) return;

    const prefix = match[1] || '';
    const targetNumber = parseInt(match[2], 10);
    const suffix = match[3] || '';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const startTime = performance.now();
          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeOut * targetNumber);

            setDisplayValue(`${prefix}${currentNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated, match]);

  return (
    <span ref={containerRef} className={className}>
      {displayValue}
    </span>
  );
}
