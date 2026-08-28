import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-dark shadow-subtle hover:shadow-card active:bg-accent-dark',
  accent: 'bg-accent text-white hover:bg-accent-dark shadow-subtle hover:shadow-card active:bg-accent-dark',
  outline: 'border border-brand-200 bg-white text-brand-800 hover:border-brand-300 hover:bg-brand-50 shadow-subtle',
  ghost: 'text-brand-600 hover:text-brand-900 hover:bg-brand-50',
};

const sizes = {
  sm: 'px-4 py-2 text-xs gap-1.5 min-h-[38px]',
  md: 'px-6 py-3 text-sm gap-2 min-h-[44px]',
  lg: 'px-8 py-3.5 text-base gap-2.5 min-h-[48px]',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  className = '',
  children,
  ...props
}) => {
  const base = `inline-flex items-center justify-center font-bold rounded-xl transition-all active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
};

export default Button;
