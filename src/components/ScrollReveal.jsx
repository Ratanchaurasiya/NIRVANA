import React, { useEffect, useRef } from 'react';

/**
 * ScrollReveal - Luxury scroll-triggered entrance choreography.
 *
 * Wraps a whole section and automatically stages its contents:
 *   - headings rise in first
 *   - grid children (cards, tiles, stats) cascade with a soft stagger
 *   - images ease in with a slow, cinematic scale-settle
 *
 * Elements are tagged with `data-rv` only after mount (so content is never
 * hidden without JS) and the attribute is removed once the entrance finishes,
 * which hands transitions back to each component's own hover styles.
 */
const TARGETS = [
  { selector: 'h2, h3.rv-title', kind: 'head' },
  { selector: '.grid > *, .rv-block', kind: 'item' },
  { selector: 'img', kind: 'img' },
];

const STAGGER_MS = 90;
const MAX_DELAY_MS = 540;
const DURATION_MS = 1000;

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timers = new Set();
    const seen = new WeakSet();
    const pending = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          el.setAttribute('data-rv', 'in');
          const wait = parseInt(el.style.getPropertyValue('--rv-delay'), 10) || 0;
          const t = setTimeout(() => {
            el.removeAttribute('data-rv');
            el.style.removeProperty('--rv-delay');
            timers.delete(t);
          }, wait + DURATION_MS + 150);
          timers.add(t);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    const prepare = () => {
      TARGETS.forEach(({ selector, kind }) => {
        root.querySelectorAll(selector).forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);

          if (kind === 'img') {
            el.loading = 'lazy';
            el.decoding = 'async';
          }

          // Stagger relative to siblings so each row/grid cascades on its own.
          const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
          const index = Math.max(0, siblings.indexOf(el));
          const delayMs = Math.min(index * STAGGER_MS, MAX_DELAY_MS) + (kind === 'head' ? 0 : 60);

          el.setAttribute('data-rv', kind === 'img' ? 'img' : kind);
          el.style.setProperty('--rv-delay', `${delayMs}ms`);
          pending.push(el);
          io.observe(el);
        });
      });
    };

    prepare();

    // Sections frequently swap their inner content (tabs, filters, wizards);
    // pick up any new nodes so they still receive the entrance treatment.
    const mo = new MutationObserver(() => {
      // Do not animate content that was swapped in by an interaction; only
      // register nodes that have not been seen yet while the root is still
      // offscreen. Newly swapped nodes simply appear (instant feedback).
      root.querySelectorAll('img').forEach((img) => {
        img.loading = 'lazy';
        img.decoding = 'async';
      });
    });
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      timers.forEach(clearTimeout);
      pending.forEach((el) => {
        el.removeAttribute('data-rv');
        el.style.removeProperty('--rv-delay');
      });
    };
  }, []);

  return (
    <div ref={rootRef} className={className} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
