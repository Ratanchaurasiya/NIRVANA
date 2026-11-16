import React, { useState, useEffect, useRef } from 'react';

/**
 * Helper to recursively extract character objects with their inherited styling.
 * Supports strings, numbers, arrays, and React elements (e.g. <span className="text-[#B69B65]">).
 */
function extractCharacters(node, inheritedClass = '') {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return [];
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node).split('').map((char) => ({
      char,
      className: inheritedClass,
    }));
  }
  if (Array.isArray(node)) {
    return node.flatMap((child) => extractCharacters(child, inheritedClass));
  }
  if (React.isValidElement(node)) {
    const combinedClass = [inheritedClass, node.props.className].filter(Boolean).join(' ');
    return extractCharacters(node.props.children, combinedClass);
  }
  return [];
}

/**
 * TypewriterTitle - Applies high-end typewriter character reveal animation exclusively for thick titles.
 * Preserves full bounding dimensions to completely eliminate Layout Shift (CLS).
 */
export default function TypewriterTitle({
  as: Component = 'h2',
  children,
  className = '',
  delay = 100,
  speed,
  showCursor = true,
  once = true,
}) {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Extract character stream and plain text representation for accessibility
  const chars = React.useMemo(() => extractCharacters(children), [children]);
  const fullText = React.useMemo(() => chars.map((c) => c.char).join(''), [chars]);

  // Dynamic typing speed: Snappy cadence adapted to title length (15ms - 35ms per character)
  const typingSpeed = React.useMemo(() => {
    if (speed) return speed;
    const len = chars.length;
    if (len <= 20) return 35;
    if (len <= 45) return 25;
    return 18;
  }, [speed, chars.length]);

  // Viewport Intersection Trigger
  useEffect(() => {
    if (!containerRef.current) return;

    // Check for reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedCount(chars.length);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          if (once) observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.15,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted, once, chars.length]);

  // Typing sequence
  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId;
    let intervalId;
    let cursorTimeoutId;

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      setCursorVisible(true);

      intervalId = setInterval(() => {
        setDisplayedCount((prev) => {
          const next = prev + 1;
          if (next >= chars.length) {
            clearInterval(intervalId);
            setIsTyping(false);

            // Keep cursor briefly for a polished finish, then fade out
            cursorTimeoutId = setTimeout(() => {
              setCursorVisible(false);
            }, 800);

            return chars.length;
          }
          return next;
        });
      }, typingSpeed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      clearTimeout(cursorTimeoutId);
    };
  }, [hasStarted, chars.length, delay, typingSpeed]);

  const displayClass = className.includes('block') ? '' : 'inline-block';

  return (
    <Component
      ref={containerRef}
      className={`relative ${displayClass} ${className}`.trim()}
      aria-label={fullText}
    >
      <span aria-hidden="true" className="inline">
        {/* Render visible typed characters */}
        {chars.slice(0, displayedCount).map((item, idx) => (
          <span key={`vis-${idx}`} className={item.className || undefined}>
            {item.char}
          </span>
        ))}

        {/* Luxury Gold Blinking Typing Cursor */}
        {showCursor && cursorVisible && (
          <span
            className={`inline-block w-[2px] h-[0.85em] align-middle bg-[#B69B65] ml-0.5 transition-opacity duration-300 ${
              isTyping ? 'animate-pulse' : 'opacity-70'
            }`}
          />
        )}

        {/* Hidden remaining characters to maintain exact layout geometry and zero shift */}
        {chars.slice(displayedCount).map((item, idx) => (
          <span
            key={`hid-${idx}`}
            className={`opacity-0 select-none pointer-events-none ${item.className || ''}`}
          >
            {item.char}
          </span>
        ))}
      </span>
    </Component>
  );
}
