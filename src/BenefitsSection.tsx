import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, BarChart3, HeartHandshake } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import StaggerReveal, { staggerItem } from './StaggerReveal';

const benefits = [
  {
    icon: Sparkles,
    title: 'Inteligência Pedagógica BNCC com IA',
    description:
      'Planejamento de atividades dinâmico e pareceres descritivos nos 5 Campos de Experiência da BNCC sem sobrecarga. Devolva tempo precioso para seus professores.',
    iconBg: 'bg-blue-50 text-accent border border-blue-100',
    hoverBg: 'group-hover:bg-accent group-hover:text-white',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Jurídica & Contratos Digitais',
    description:
      'Matrículas sem papel, termos aditivos ágeis e livro de ocorrências com hash inalterável e comprovação formal de ciência dos pais.',
    iconBg: 'bg-rose-50 text-rose border border-rose-100',
    hoverBg: 'group-hover:bg-rose group-hover:text-white',
  },
  {
    icon: BarChart3,
    title: 'Gestão Financeira & Lucratividade por Sala',
    description:
      'Rateio de custos fixos e variáveis, controle de inadimplência e fechamento mensal em Snapshot para decisões estratégicas embasadas.',
    iconBg: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    hoverBg: 'group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    icon: HeartHandshake,
    title: 'Paz de Espírito & Conexão com as Famílias',
    description:
      'Linha do tempo da rotina, alimentação, sono e comunicados oficiais em um canal seguro e isolado, garantindo conformidade com a LGPD.',
    iconBg: 'bg-brand-50 text-brand-700 border border-brand-200',
    hoverBg: 'group-hover:bg-brand-800 group-hover:text-white',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <Section id="beneficios" className="bg-brand-50/40 border-y border-brand-100">
      <SectionHeader
        title="Benefícios que geram"
        highlight="Valor Real"
        description="Uma solução completa que atende a todos os elos da comunidade escolar com sofisticação e segurança."
      />

      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.title}
            variants={staggerItem}
            className="bg-white border border-brand-100 rounded-3xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`p-3 rounded-2xl transition-all ${benefit.iconBg} ${benefit.hoverBg}`}
              >
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-brand-900 pt-0.5">{benefit.title}</h3>
            </div>
            <p className="text-brand-600 leading-relaxed font-medium text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </StaggerReveal>
    </Section>
  );
};

export default BenefitsSection;
