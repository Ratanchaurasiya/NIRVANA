import React from 'react';

/**
 * Nirvana Builders logo (vector, stays sharp at any size).
 * Use variant="light" on dark backgrounds.
 */
const BrandLogo = ({ variant = 'default', className = 'h-12' }) => (
  <img
    src={variant === 'light' ? '/logo-light.svg' : '/logo.svg'}
    alt="Nirvana Builders"
    width="1184"
    height="310"
    decoding="async"
    className={`w-auto max-w-full ${className}`}
  />
);

export default BrandLogo;
