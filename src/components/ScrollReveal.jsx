import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal - Smooth luxury entrance animation for sections, cards, and text blocks.
 * Employs subtle vertical translate and opacity fade with luxury architectural easing.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
