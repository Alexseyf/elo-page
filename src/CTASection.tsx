import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50/40 to-brand-50/80 py-24 px-4 relative overflow-hidden border-t border-brand-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-accent rounded-full text-xs font-bold mb-6 border border-blue-200/60 shadow-subtle">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transformação Digital Imediata</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 mb-6 tracking-tight leading-[1.15] text-balance">
          Fortaleça o elo entre sua escola{' '}
          <span className="text-accent">e as famílias hoje mesmo.</span>
        </h2>

        <p className="text-base md:text-lg text-brand-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Se você busca transformar a rotina da sua equipe docente, proteger sua escola juridicamente e encantar os pais, o Elo Escola foi desenhado para sua realidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5553991280129?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20implementar%20o%20Elo%20Escola."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-[0.98] shadow-elevated text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Informações no WhatsApp
          </a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 text-brand-700 hover:text-accent font-bold transition-colors py-3 px-6 rounded-xl hover:bg-white/80"
          >
            Voltar ao Topo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-12 text-xs text-brand-500 font-bold uppercase tracking-[0.2em]">
          Ambiente pronto para demonstração com dados reais
        </p>
      </div>
    </section>
  );
};

export default CTASection;
