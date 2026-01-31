import React from 'react';
import { Share2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-ochre/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest/5 rounded-full text-forest text-sm font-black mb-6 border border-forest/10">
              <Share2 className="w-4 h-4" />
              <span>A Revolução na Comunicação Escolar</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-forest mb-8 tracking-tight">
              Apresentando o <span className="text-ochre text-6xl block mt-2">Elo Escola</span>
            </h2>

            <div className="space-y-6 text-lg text-forest-light font-medium leading-relaxed">
              <p>
                Para resolver essa desconexão e trazer mais tranquilidade para a gestão, apresentamos o <strong className="text-forest">Elo Escola</strong>. Mais que uma plataforma, o Elo é a ponte digital que une família e escola de forma simples, segura e profissional.
              </p>
              <p>
                Criamos um <strong className="text-forest">elo</strong> de confiança inquebrável, permitindo que o gestor tenha controle total e os pais sintam-se presentes em cada descoberta do filho, mesmo à distância.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {['Segurança MGMT', 'Pedagogia BNCC', 'Financeiro Turbo'].map(badge => (
                <span key={badge} className="px-4 py-1.5 bg-cream border border-forest/10 rounded-lg text-xs font-black text-forest/60 uppercase tracking-widest">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="absolute inset-0 bg-ochre/10 rounded-full blur-3xl scale-75 animate-pulse"></div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-ochre to-terracotta rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border-2 border-forest/5">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop"
                  alt="Plataforma Elo Escola em uso"
                  className="w-full max-w-md rounded-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-forest text-white p-6 rounded-2xl shadow-xl border-2 border-ochre/20 hidden md:block">
                <p className="text-2xl font-black text-ochre">98%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Satisfação dos Pais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
