import React, { useEffect, useState } from 'react';

export default function GoldCustomCursor() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [trailing, setTrailing] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let hasMoved = false;

    const handleMouseMove = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        setPosition({ x: e.clientX, y: e.clientY });
        setTrailing({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
        return;
      }

      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth lerp for trailing halo ring
  useEffect(() => {
    let animId;
    const smoothTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animId = requestAnimationFrame(smoothTrailing);
    };
    animId = requestAnimationFrame(smoothTrailing);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none transition-opacity duration-300" style={{ opacity: isVisible ? 1 : 0 }}>
      {/* Central Solid Gold Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-400 pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovered ? 0 : 1})`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Trailing Luxury Halo Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-amber-400/50 pointer-events-none z-[9998] transition-all duration-200 ease-out ${
          isHovered
            ? 'w-10 h-10 bg-amber-400/10 border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.35)]'
            : 'w-6 h-6 shadow-[0_0_8px_rgba(212,175,55,0.2)]'
        }`}
        style={{
          transform: `translate3d(${trailing.x - (isHovered ? 20 : 12)}px, ${trailing.y - (isHovered ? 20 : 12)}px, 0)`,
        }}
      />
    </div>
  );
}
