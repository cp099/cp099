import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: ContainerProps) => {
  return (
    <div className={`
      rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300
      ${hover ? 'hover:bg-white/[0.04] hover:border-cyan/30 hover:-translate-y-1' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};