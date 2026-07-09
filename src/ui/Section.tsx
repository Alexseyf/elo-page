import React from 'react';
import Reveal from '../Reveal';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  noReveal?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false, noReveal = false }) => {
  const base = `py-section-sm md:py-section px-4 ${dark ? 'bg-brand-900 text-white' : 'bg-warm'} ${className}`;
  const Wrapper = noReveal ? React.Fragment : Reveal;

  return (
    <Wrapper>
      <section id={id} className={`${base} scroll-mt-20`}>
        <div className="container mx-auto max-w-6xl">
          {children}
        </div>
      </section>
    </Wrapper>
  );
};

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight, description, center = true }) => (
  <div className={`mb-16 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-extrabold text-balance tracking-tight leading-[1.1]">
      {title}
      {highlight && <span className="text-brand-900"> {highlight}</span>}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-brand-600 leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </div>
);

export default Section;
