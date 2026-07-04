import React from 'react';
import { motion } from 'framer-motion';
import { Heart, PencilLine, BarChart3, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import StaggerReveal, { staggerItem } from './StaggerReveal';

const BenefitsSection: React.FC = () => {
  return (
    <Reveal>
    <section className="bg-slate/5 py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate mb-6 tracking-tight">
            Benefícios que geram <span className="text-amber">Valor Real</span>
          </h2>
          <p className="text-lg text-slate/50 max-w-2xl mx-auto font-medium">
            Uma solução completa que atende a todos os elos da comunidade escolar.
          </p>
        </div>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Item 1: Pais */}
          <motion.div variants={staggerItem} className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-slate/5 hover:border-amber/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-amber/10 p-4 rounded-2xl mr-4 group-hover:bg-amber group-hover:text-white transition-all">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate tracking-tight">Paz de Espírito para os Pais</h3>
            </div>
            <p className="text-slate-light leading-relaxed font-medium">
              Acompanhe a rotina, alimentação e sono do seu filho. Receba relatórios diários e sinta a segurança de estar presente mesmo à distância. A transparência que gera confiança na escola.
            </p>
          </motion.div>

          {/* Item 2: Professores */}
          <motion.div variants={staggerItem} className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-slate/5 hover:border-rose/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-rose/10 p-4 rounded-2xl mr-4 group-hover:bg-rose group-hover:text-white transition-all">
                <PencilLine className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate tracking-tight">Pedagogia sem Papel</h3>
            </div>
            <p className="text-slate-light leading-relaxed font-medium">
              Otimize o preenchimento de diários e planejamentos BNCC. Ganhe tempo para focar no desenvolvimento pedagógico enquanto o Elo cuida da burocracia com um fluxo de cliques inteligente.
            </p>
          </motion.div>

          {/* Item 3: Diretores */}
          <motion.div variants={staggerItem} className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-slate/5 hover:border-slate/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-slate/5 p-4 rounded-2xl mr-4 group-hover:bg-slate group-hover:text-white transition-all">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate tracking-tight">Gestão Baseada em Dados</h3>
            </div>
            <p className="text-slate-light leading-relaxed font-medium">
              Tenha snapshots financeiros, controle de inadimplência e visão geral da escola em um clique. Tome decisões estratégicas baseadas em relatórios precisos detalhados por turma.
            </p>
          </motion.div>

          {/* Item 4: Segurança */}
          <motion.div variants={staggerItem} className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-slate/5 hover:border-slate/20 transition-all group">
            <div className="flex items-center mb-6">
              <div className="bg-slate/5 p-4 rounded-2xl mr-4 group-hover:bg-slate group-hover:text-white transition-all">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate tracking-tight">Isolação e Segurança Total</h3>
            </div>
            <p className="text-slate-light leading-relaxed font-medium">
              Dados protegidos e isolados por tenant (escola). Garantimos que as informações de alunos e financeiros nunca se misturem, respeitando rigorosamente a LGPD.
            </p>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
    </Reveal>
  );
};

export default BenefitsSection;
