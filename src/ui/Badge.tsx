import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'rose' | 'neutral';
  className?: string;
}

const variants = {
  accent: 'bg-accent-muted text-amber-700',
  rose: 'bg-rose-muted text-rose-700',
  neutral: 'bg-brand-100 text-brand-600',
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
