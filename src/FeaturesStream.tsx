import React from 'react';
import { Wallet, BookCheck, ClipboardList, CalendarDays } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import { Badge } from './ui';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
  iconBg: string;
  children?: React.ReactNode;
}> = ({ icon, title, description, highlight, iconBg, children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 first:pt-0 border-b border-brand-100 last:border-0">
    <div className={`order-2 lg:order-1 ${children ? '' : 'lg:order-2'}`}>
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-brand-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-brand-600 font-medium leading-relaxed mb-6">{description}</p>
      <div className="p-4 bg-warm rounded-lg border border-brand-100">
        <p className="text-sm font-semibold text-brand-700">{highlight}</p>
      </div>
    </div>
    <div className={`order-1 lg:order-2 ${children ? '' : 'lg:order-1'}`}>{children}</div>
  </div>
);

const FeaturesStream: React.FC = () => {
  return (
    <Section id="funcionalidades" className="bg-white">
      <SectionHeader
        title="O Coração do"
        highlight="Elo Escola"
        description="Ferramentas poderosas desenhadas especificamente para os desafios da educação infantil moderna."
      />

      {/* Feature 1: Financeiro */}
      <FeatureCard
        icon={<Wallet className="w-6 h-6 text-accent" />}
        iconBg="bg-accent-muted"
        title="Módulo Financeiro de Alto Impacto"
        description="Gestão financeira estratégica com foco em resultados. Registre entradas de mensalidades e despesas por turma, com rateio inteligente de custos gerais da escola."
        highlight="Relatórios automáticos por turma, rateio de custos fixos e variáveis, análise de lucratividade real."
      >
        <div className="bg-white border border-brand-100 rounded-xl p-6 md:p-8 shadow-card">
          <div className="flex items-center justify-between p-4 bg-warm rounded-lg border border-brand-100 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-900 rounded-lg flex items-center justify-center text-accent">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">Relatório Consolidado</p>
                <p className="font-bold text-brand-900 text-base">Berçário 1</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="p-4 bg-accent-muted/50 rounded-lg flex justify-between items-center border border-accent/10">
              <p className="font-semibold text-brand-700 text-sm">Total Entradas</p>
              <p className="text-lg font-bold text-accent">R$ 14.200</p>
            </div>
            <div className="p-4 bg-rose-muted/50 rounded-lg flex justify-between items-center border border-rose/10">
              <p className="font-semibold text-brand-700 text-sm">Total Despesas</p>
              <p className="text-lg font-bold text-rose">- R$ 8.450</p>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-brand-100 flex justify-between items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">Margem por Turma</p>
              <p className="text-2xl font-bold text-brand-900">R$ 5.750</p>
            </div>
            <Badge variant="accent">Performance Alta</Badge>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 2: BNCC */}
      <FeatureCard
        icon={<BookCheck className="w-6 h-6 text-rose" />}
        iconBg="bg-rose-muted/50"
        title="Diferencial BNCC Nativo"
        description="Elimine a burocracia do planejamento pedagógico. O Elo Escola já vem pré-configurado com os Objetivos de Aprendizagem e Campos de Experiência da BNCC."
        highlight="Campos de Experiência: Eu, o outro, o nós · Corpo, gestos, mov. · Traços, sons, cores"
      >
        <div className="bg-white border border-brand-100 rounded-xl p-6 md:p-8 shadow-card">
          <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">Planejamento do Dia</p>
          <div className="p-4 bg-warm rounded-lg border border-brand-100 mb-3">
            <p className="font-semibold text-brand-800 mb-1">Campo de Experiência:</p>
            <p className="text-sm text-brand-600 font-medium">&ldquo;O eu, o outro e o n&oacute;s&rdquo;</p>
          </div>
          <div className="p-4 bg-brand-900 rounded-lg">
            <p className="text-xs font-semibold text-accent uppercase mb-1">Objetivo (EI01EO01)</p>
            <p className="text-xs text-white/80 leading-relaxed">Perceber que suas ações têm efeitos nas outras crianças e nos adultos.</p>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 3: Diário de Rotina */}
      <FeatureCard
        icon={<ClipboardList className="w-6 h-6 text-brand-600" />}
        iconBg="bg-brand-100"
        title="Diário de Rotina em Segundos"
        description="Não perca tempo com agendas físicas. Registre alimentação, sono, itens pessoais e disposição com poucos cliques. O Elo Escola otimiza o fluxo do professor."
        highlight="Economia diária de até 45 minutos por professor."
      >
        <div className="bg-white border border-brand-100 rounded-xl p-6 md:p-8 shadow-card grid grid-cols-2 gap-3">
          {[{ icon: '🍲', label: 'ALIMENTAÇÃO' }, { icon: '💤', label: 'SONO' }, { icon: '🎒', label: 'ITENS PESSOAIS' }, { icon: '✨', label: 'DISPOSIÇÃO' }].map((item) => (
            <div key={item.label} className="p-5 bg-warm rounded-lg flex flex-col items-center gap-2 border border-brand-100 hover:border-brand-300 transition-all cursor-pointer">
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-semibold text-brand-600 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </FeatureCard>

      {/* Feature 4: Cronograma */}
      <FeatureCard
        icon={<CalendarDays className="w-6 h-6 text-accent" />}
        iconBg="bg-accent-muted"
        title="Eventos e Calendário Escolar"
        description="Organize o cronograma da escola e feiras culturais em um só lugar. Notifique os pais sobre feriados e reuniões instantaneamente."
        highlight="Festa da Família · 24 de Junho · Sábado, às 09:00h"
      >
        <div className="bg-white border border-brand-100 rounded-xl p-6 md:p-8 shadow-card">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex flex-col items-center justify-center text-white text-xs font-bold leading-none">
              <span>JUN</span>
              <span className="text-lg">24</span>
            </div>
            <div>
              <p className="font-bold text-brand-900">Festa da Família</p>
              <p className="text-xs text-brand-600 font-medium">Sábado, &agrave;s 09:00h</p>
            </div>
          </div>
          <div className="h-px bg-brand-100 w-full mb-4" />
          <div className="flex items-center gap-4 opacity-40">
            <div className="w-12 h-12 bg-brand-200 rounded-xl flex flex-col items-center justify-center text-brand-500 text-xs font-bold leading-none">
              <span>JUL</span>
              <span className="text-lg">01</span>
            </div>
            <div>
              <p className="font-bold text-brand-500">Início do Recesso</p>
              <p className="text-xs text-brand-500 font-medium">Férias escolares</p>
            </div>
          </div>
        </div>
      </FeatureCard>
    </Section>
  );
};

export default FeaturesStream;
