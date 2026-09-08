import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  hideTagline?: boolean;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "h-16",
  light = false,
}) => {
  const src = light ? '/logo.jpg' : '/logo.png';

  return (
    <img
      src={src}
      alt="VC LOW – Faster Than You Think"
      className={`object-contain transition-all duration-300 ${className}`}
    />
  );
};

export default Logo;
