import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-brand-900 py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <Sparkles className="w-5 h-5 text-accent mx-auto mb-4" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] text-balance">
          Fortaleça o elo entre sua escola{' '}
          <span className="text-accent">e as famílias hoje mesmo.</span>
        </h2>

        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Se você busca transformar a comunicação e a parceria com os pais,
          o Elo Escola é a solução desenhada para sua realidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5553991280129?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20implementar%20o%20Elo%20Escola."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 px-8 rounded-lg transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Informações
          </a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 text-white/50 hover:text-white font-semibold transition-colors"
          >
            Conhecer Funcionalidades
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-12 text-xs text-white/50 font-semibold uppercase tracking-[0.2em]">
          Junte-se a escolas que já transformaram sua gestão
        </p>
      </div>
    </section>
  );
};

export default CTASection;
