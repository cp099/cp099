import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'muted' | 'cyan' | 'dim';
}

export const Badge = ({ children, className = "", variant = 'muted' }: BadgeProps) => {
  const variants = {
    muted: "text-white/40",
    cyan: "text-cyan-bright font-bold",
    dim: "text-white/20"
  };

  return (
    <span className={`font-mono text-[9px] uppercase tracking-[0.3em] ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};