import React from 'react';
import { Share2 } from 'lucide-react';
import Reveal from './Reveal';

const SolutionSection: React.FC = () => {
  return (
    <Reveal>
    <section className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/5 rounded-full text-slate text-sm font-bold mb-6 border border-slate/10">
              <Share2 className="w-4 h-4" />
              <span>A Revolução na Comunicação Escolar</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate mb-8 tracking-tight">
              Apresentando o <span className="text-amber text-6xl block mt-2">Elo Escola</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-light font-medium leading-relaxed">
              <p>
                Trazendo uma maior conexão e tranquilidade para a gestão, apresentamos o <strong className="text-slate">Elo Escola</strong>. Mais que uma plataforma, o Elo é a ponte digital que une família e escola de forma simples, segura e profissional.
              </p>
              <p>
                Criamos um <strong className="text-slate">elo</strong> de confiança inquebrável, permitindo que o gestor tenha controle total e os pais sintam-se presentes em cada descoberta do filho, mesmo à distância.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              {['100% Seguro', 'Padrão BNCC', 'Gestão Estratégica'].map(badge => (
                <span
                  key={badge}
                  className="px-5 py-2 bg-warm border border-slate/5 rounded-xl text-[10px] font-bold text-slate/40 uppercase tracking-[0.15em] hover:border-slate/20 hover:text-slate/60 transition-all cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber to-rose rounded-3xl blur opacity-10 group-hover:opacity-30 transition-all"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border-2 border-slate/5">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop"
                  alt="Plataforma Elo Escola em uso"
                  className="w-full max-w-md rounded-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-slate text-white p-6 rounded-2xl shadow-xl border-2 border-amber/20 hidden md:block">
                <p className="text-2xl font-bold text-amber">98%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Satisfação dos Pais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default SolutionSection;
