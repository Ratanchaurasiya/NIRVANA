import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll - Responsive inertial scrolling (Lenis).
 * Tuned to feel quick: a high lerp keeps the glide short and the wheel responsive.
 * Touch devices keep their native momentum scrolling, and users who prefer
 * reduced motion get the browser default.
 *
 * Exposes the instance on window.__lenis so route changes and "back to top"
 * can scroll through it. Scrollable overlays should carry `data-lenis-prevent`.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.14,
      wheelMultiplier: 1,
      smoothWheel: true,
      anchors: true,
      autoRaf: true,
    });
    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
