import React from 'react';
import { HelpCircle, AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-cream py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta mb-8">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-forest mb-8 tracking-tight">
            Sua escola ainda vive no <span className="text-terracotta">passado?</span>
          </h2>

          <div className="relative w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-forest/5 rounded-[3rem] -rotate-1 pointer-events-none"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border-2 border-forest/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-left">
                  <p className="text-xl text-forest-light leading-relaxed font-medium">
                    Agendas de papel que se perdem, grupos de WhatsApp barulhentos e falta de controle financeiro real.
                  </p>
                  <p className="text-lg text-forest/60 leading-relaxed font-medium">
                    Para o <strong className="text-forest">Diretor</strong>, é a falta de dados. Para o <strong className="text-forest">Professor</strong>, é o tempo perdido. Para os <strong className="text-forest">Pais</strong>, é a insegurança de não saber como o filho está.
                  </p>
                </div>
                <div className="bg-forest/5 p-6 rounded-3xl border border-forest/10 flex items-center gap-4">
                  <div className="p-3 bg-terracotta rounded-xl shadow-lg shadow-terracotta/20 shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-bold text-forest">
                    A comunicação fragmentada gera insegurança e perda de produtividade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
