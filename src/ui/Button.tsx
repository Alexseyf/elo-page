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
  primary: 'bg-brand-900 text-white hover:bg-brand-800 shadow-card hover:shadow-card-hover active:bg-brand-950',
  accent: 'bg-amber-600 text-white hover:bg-amber-500 shadow-card hover:shadow-card-hover active:bg-amber-700',
  outline: 'border-2 border-brand-200 text-brand-700 hover:border-brand-400 hover:bg-brand-50',
  ghost: 'text-brand-500 hover:text-brand-900 hover:bg-brand-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
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
  const base = `inline-flex items-center justify-center font-semibold rounded-lg transition-all active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

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
