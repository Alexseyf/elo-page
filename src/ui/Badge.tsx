import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'emerald' | 'rose' | 'neutral';
  className?: string;
}

const variants = {
  accent: 'bg-blue-50 text-blue-700 border border-blue-200/70',
  emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200/70',
  rose: 'bg-rose-50 text-rose-700 border border-rose-200/70',
  neutral: 'bg-brand-100 text-brand-700 border border-brand-200/60',
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
