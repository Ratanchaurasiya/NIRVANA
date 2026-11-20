import React, { useState, useEffect, useRef, Suspense } from 'react';

// Background mounting queue: after the first screen is interactive, remaining
// sections are mounted one at a time while the browser is idle. This keeps the
// initial load fast, but the full page height becomes known (and stable) within
// a couple of seconds, so the scroll progress line never jumps backwards.
const queue = [];
let draining = false;
const idle = (cb) => (window.requestIdleCallback ? window.requestIdleCallback(cb, { timeout: 600 }) : setTimeout(cb, 120));

function drain() {
  if (draining) return;
  draining = true;
  const step = () => {
    const next = queue.shift();
    if (!next) {
      draining = false;
      return;
    }
    next();
    setTimeout(() => idle(step), 160);
  };
  setTimeout(() => idle(step), 1200);
}

/**
 * LazySection - Intersection-driven lazy loader for page sections.
 * Mounts content as the reader approaches, showing an architectural shimmer
 * skeleton in the meantime so the page never feels empty or jumpy.
 */
export default function LazySection({
  children,
  minHeight = '320px',
  rootMargin = '400px 0px',
  className = '',
  placeholderText = 'Loading Section...',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  // Warm up in the background so the total page length is known early
  useEffect(() => {
    if (isVisible) return;
    const mount = () => setIsVisible(true);
    queue.push(mount);
    drain();
    return () => {
      const i = queue.indexOf(mount);
      if (i !== -1) queue.splice(i, 1);
    };
  }, [isVisible]);

  const skeleton = (ref) => (
    <div
      ref={ref}
      style={{ minHeight }}
      aria-busy="true"
      aria-label={placeholderText}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}
    >
      <div className="space-y-5">
        <div className="skeleton h-2.5 w-28" />
        <div className="skeleton h-8 w-2/3 max-w-md" />
        <div className="skeleton h-3 w-full max-w-xl" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
        <div className="skeleton h-40" />
        <div className="skeleton h-40 hidden sm:block" />
        <div className="skeleton h-40 hidden sm:block" />
      </div>
    </div>
  );

  if (!isVisible) return skeleton(containerRef);

  return (
    <Suspense fallback={skeleton(null)}>
      <div className={`section-enter ${className}`}>{children}</div>
    </Suspense>
  );
}
