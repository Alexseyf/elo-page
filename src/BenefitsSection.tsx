import React from 'react';
import { motion } from 'framer-motion';
import { Heart, PencilLine, BarChart3, ShieldCheck } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import StaggerReveal, { staggerItem } from './StaggerReveal';

const benefits = [
  {
    icon: Heart,
    title: 'Paz de Espírito para os Pais',
    description:
      'Acompanhe a rotina, alimentação e sono do seu filho. Receba relatórios diários e sinta a segurança de estar presente mesmo à distância.',
    iconBg: 'bg-accent-muted text-accent',
    hoverBg: 'group-hover:bg-amber-700 group-hover:text-white',
  },
  {
    icon: PencilLine,
    title: 'Pedagogia sem Papel',
    description:
      'Otimize o preenchimento de diários e planejamentos BNCC. Ganhe tempo para focar no desenvolvimento pedagógico.',
    iconBg: 'bg-rose-muted/50 text-rose',
    hoverBg: 'group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    icon: BarChart3,
    title: 'Gestão Baseada em Dados',
    description:
      'Tenha snapshots financeiros, controle de inadimplência e visão geral da escola em um clique. Decisões estratégicas com relatórios precisos.',
    iconBg: 'bg-brand-100 text-brand-600',
    hoverBg: 'group-hover:bg-brand-900 group-hover:text-white',
  },
  {
    icon: ShieldCheck,
    title: 'Isolação e Segurança Total',
    description:
      'Dados protegidos e isolados por tenant (escola). Garantimos que as informações de alunos e financeiros nunca se misturem, respeitando a LGPD.',
    iconBg: 'bg-brand-100 text-brand-600',
    hoverBg: 'group-hover:bg-brand-900 group-hover:text-white',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <Section id="beneficios" className="bg-warm">
      <SectionHeader
        title="Benefícios que geram"
        highlight="Valor Real"
        description="Uma solução completa que atende a todos os elos da comunidade escolar."
      />

      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.title}
            variants={staggerItem}
            className="bg-white border border-brand-100 rounded-xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`p-3 rounded-lg transition-all ${benefit.iconBg} ${benefit.hoverBg}`}
              >
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-900 pt-1">{benefit.title}</h3>
            </div>
            <p className="text-brand-600 leading-relaxed font-medium">{benefit.description}</p>
          </motion.div>
        ))}
      </StaggerReveal>
    </Section>
  );
};

export default BenefitsSection;
