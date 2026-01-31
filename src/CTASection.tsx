import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-forest py-24 px-4 relative overflow-hidden">
      {/* Geometric & Organic Motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ochre/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 border-4 border-white/5 rounded-[3rem] rotate-12 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-ochre text-sm font-black mb-8 border border-white/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span className="uppercase tracking-widest">Pronto para começar?</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
          Fortaleça o elo entre sua escola <br className="hidden md:block" />
          <span className="text-ochre">e as famílias hoje mesmo.</span>
        </h2>

        <div className="mb-10 mt-8 max-w-2xl mx-auto">
          <p className="text-xl mb-12 text-white/80 font-medium leading-relaxed">
            Se você busca transformar a comunicação e a parceria com os pais,
            o Elo Escola é a solução desenhada para sua realidade. Praticidade,
            segurança e engajamento em uma única plataforma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/5553991280129?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20implementar%20o%20Elo%20Escola."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-ochre hover:bg-[#D48F2A] text-white font-black py-5 px-10 rounded-2xl text-lg sm:text-xl transition-all shadow-xl shadow-black/20 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Informações
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center justify-center gap-2 text-white/60 hover:text-white font-bold text-sm sm:text-base transition-colors"
            >
              Conhecer Funcionalidades
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <p className="mt-12 text-sm text-white/40 font-bold uppercase tracking-[0.2em]">
          Junte-se a escolas que já transformaram sua gestão
        </p>
      </div>
    </section>
  );
};

export default CTASection;
