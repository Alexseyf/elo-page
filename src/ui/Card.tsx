import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = {
  sm: 'p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-12',
};

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, padding = 'md' }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-brand-100 shadow-card ${hover ? 'hover:shadow-card-hover hover:-translate-y-0.5' : ''} transition-all ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
