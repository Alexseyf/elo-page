import React from 'react';
import { Sparkles } from 'lucide-react';
import Section from './ui/Section';
import { Badge } from './ui';

const SolutionSection: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-accent rounded-full text-xs font-bold mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecossistema Integrado</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 tracking-tight leading-[1.1]">
            Apresentando o{' '}
            <span className="block mt-1 text-accent">Elo Escola</span>
          </h2>

          <div className="space-y-4 mt-6 text-base text-brand-600 font-medium leading-relaxed">
            <p>
              Trazendo uma maior conexão e tranquilidade para a gestão, apresentamos o{' '}
              <strong className="text-brand-900">Elo Escola</strong>. Mais que uma plataforma,
              o Elo é a ponte digital que une família e escola de forma simples, segura e profissional.
            </p>
            <p>
              Criamos um <strong className="text-brand-900">elo</strong> de confiança inquebrável,
              permitindo que o gestor tenha controle total e os pais sintam-se presentes em cada
              descoberta do filho, mesmo à distância.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
            <Badge variant="accent">100% Seguro & LGPD</Badge>
            <Badge variant="emerald">5 Campos da BNCC</Badge>
            <Badge variant="neutral">Gestão Estratégica 360°</Badge>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="relative">
            <div className="relative bg-white p-2.5 rounded-3xl shadow-elevated border border-brand-100">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop"
                alt="Plataforma Elo Escola em uso"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
