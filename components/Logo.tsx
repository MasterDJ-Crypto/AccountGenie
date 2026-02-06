import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="logo.png" 
    alt="AccountGenie" 
    className={`${className} object-contain`}
  />
);