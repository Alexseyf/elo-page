import React from 'react';
import { Heart, PencilLine, BarChart3, ShieldCheck } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-forest/5 py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-forest mb-6 tracking-tight">
            Benefícios que geram <span className="text-ochre">Valor Real</span>
          </h2>
          <p className="text-xl text-forest/50 max-w-2xl mx-auto font-medium">
            Uma solução completa que atende a todos os elos da comunidade escolar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Item 1: Pais */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-forest/5 hover:border-ochre/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-ochre/10 p-4 rounded-2xl mr-4 group-hover:bg-ochre group-hover:text-white transition-all">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-forest tracking-tight">Paz de Espírito para os Pais</h3>
            </div>
            <p className="text-forest-light leading-relaxed font-medium">
              Acompanhe a rotina, alimentação e sono do seu filho. Receba relatórios diários e sinta a segurança de estar presente mesmo à distância. A transparência que gera confiança na escola.
            </p>
          </div>

          {/* Item 2: Professores */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-forest/5 hover:border-terracotta/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-terracotta/10 p-4 rounded-2xl mr-4 group-hover:bg-terracotta group-hover:text-white transition-all">
                <PencilLine className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-forest tracking-tight">Pedagogia sem Papel</h3>
            </div>
            <p className="text-forest-light leading-relaxed font-medium">
              Otimize o preenchimento de diários e planejamentos BNCC. Ganhe tempo para focar no desenvolvimento pedagógico enquanto o Elo cuida da burocracia com um fluxo de cliques inteligente.
            </p>
          </div>

          {/* Item 3: Diretores */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-forest/5 hover:border-forest/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-forest/5 p-4 rounded-2xl mr-4 group-hover:bg-forest group-hover:text-white transition-all">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-forest tracking-tight">Gestão Baseada em Dados</h3>
            </div>
            <p className="text-forest-light leading-relaxed font-medium">
              Tenha snapshots financeiros, controle de inadimplência e visão geral da escola em um clique. Tome decisões estratégicas baseadas em relatórios precisos detalhados por turma.
            </p>
          </div>

          {/* Item 4: Segurança */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-forest/5 hover:border-forest/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-forest/5 p-4 rounded-2xl mr-4 group-hover:bg-forest group-hover:text-white transition-all">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-forest tracking-tight">Isolação e Segurança Total</h3>
            </div>
            <p className="text-forest-light leading-relaxed font-medium">
              Dados protegidos e isolados por tenant (escola). Garantimos que as informações de alunos e financeiros nunca se misturem, respeitando rigorosamente a LGPD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
