import React from 'react';
import {
  Sparkles,
  BookCheck,
  FileSignature,
  ShieldCheck,
  Wallet,
  ClipboardList,
  CheckCircle2,
  Download,
} from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import { Badge } from './ui';
import { CAMPOS_EXPERIENCIA_BNCC } from './data/featuresData';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  badgeText?: string;
  badgeVariant?: 'accent' | 'neutral' | 'rose';
  description: string;
  highlight: string;
  iconBg: string;
  children?: React.ReactNode;
}> = ({ icon, title, badgeText, badgeVariant = 'accent', description, highlight, iconBg, children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-16 first:pt-0 border-b border-brand-100 last:border-0">
    <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
          {icon}
        </div>
        {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-brand-900 tracking-tight leading-snug">
        {title}
      </h3>
      <p className="text-brand-600 font-medium leading-relaxed text-base">{description}</p>
      <div className="p-4 bg-warm rounded-xl border border-brand-100/90">
        <p className="text-sm font-semibold text-brand-800 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <span>{highlight}</span>
        </p>
      </div>
    </div>
    <div className="lg:col-span-6 order-1 lg:order-2">{children}</div>
  </div>
);

const FeaturesStream: React.FC = () => {
  return (
    <Section id="funcionalidades" className="bg-white">
      <SectionHeader
        title="O Coração do"
        highlight="Elo Escola"
        description="Diferenciais de alto impacto pedagógico, segurança jurídica e controle financeiro desenhados especificamente para a Educação Infantil."
      />

      {/* Feature 1: Planejamento de Atividades com Auxílio de IA na BNCC */}
      <FeatureCard
        icon={<Sparkles className="w-6 h-6 text-amber-700" />}
        iconBg="bg-amber-100"
        badgeText="Exclusivo BNCC"
        badgeVariant="accent"
        title="Planejamento de Atividades com Auxílio de IA"
        description="Elimine o bloqueio criativo e ganhe agilidade no planejamento pedagógico. O professor escolhe a faixa etária da turma e o Objetivo de Aprendizagem da BNCC; a IA sugere atividades práticas, lúdicas e adequadas, prontas para salvar e importar para o diário."
        highlight="Sugestões sob medida para Bebês, Crianças Bem Pequenas e Crianças Pequenas com 1 clique."
      >
        <div className="bg-white border border-brand-100 rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-100">
            <div>
              <p className="text-xs font-bold text-brand-500 uppercase">Módulo Planejamento</p>
              <p className="text-sm font-extrabold text-brand-900">Maternal 1 · Faixa: Crianças Bem Pequenas</p>
            </div>
            <span className="text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              IA Ativa
            </span>
          </div>

          <div className="p-3 bg-warm rounded-xl border border-brand-100">
            <p className="text-[11px] font-bold text-brand-500 uppercase">Objetivo Selecionado (EI02CG02)</p>
            <p className="text-xs font-semibold text-brand-800 mt-0.5">
              Deslocar seu corpo no espaço, orientando-se por noções como em frente, atrás, no alto, embaixo...
            </p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900">Proposta Sugerida pela IA</span>
              <span className="text-[11px] font-bold text-amber-700 bg-white/80 px-2 py-0.5 rounded">Pronta para Uso</span>
            </div>
            <p className="text-xs text-amber-950 font-medium leading-relaxed">
              <strong>Túnel das Descobertas:</strong> Circuito com caixas de papelão e fitas coloridas onde os pequenos engatinham por baixo, sobem em almofadas e passam por obstáculos táteis.
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <button className="text-xs font-bold bg-brand-900 text-white px-4 py-2.5 rounded-lg hover:bg-brand-800 transition-all flex items-center gap-1.5 shadow-subtle">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              Salvar no Planejamento da Turma
            </button>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 2: Pareceres Descritivos com IA & 5 Campos da BNCC */}
      <FeatureCard
        icon={<BookCheck className="w-6 h-6 text-emerald-700" />}
        iconBg="bg-emerald-100"
        badgeText="Alívio Semestral"
        badgeVariant="neutral"
        title="Pareceres Descritivos nos 5 Campos da BNCC"
        description="A redação de pareceres semestrais deixa de ser um pesadelo. O sistema estrutura o relatório nos 5 Campos de Experiência da BNCC mais Síntese do Desenvolvimento, com assistência de IA para redigir textos humanizados, geração de PDF timbrado oficial e controle de ciência dos pais."
        highlight="Economia estimada de mais de 15 horas por professor a cada encerramento de semestre."
      >
        <div className="bg-white border border-brand-100 rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-100">
            <div>
              <p className="text-xs font-bold text-brand-500 uppercase">Parecer Descritivo Semestral</p>
              <p className="text-sm font-extrabold text-brand-900">Aluno: Gabriel Silva · Pré 1</p>
            </div>
            <span className="text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2.5 py-1 rounded-lg">
              5 Campos BNCC + Síntese
            </span>
          </div>

          {/* 5 BNCC Fields Pills */}
          <div className="flex flex-wrap gap-1.5">
            {CAMPOS_EXPERIENCIA_BNCC.map((campo, idx) => (
              <span
                key={campo.codigo}
                className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
                  idx === 0
                    ? 'bg-brand-900 text-white border-brand-900'
                    : 'bg-warm text-brand-700 border-brand-200/60'
                }`}
              >
                {campo.codigo} · {campo.nome.split(':')[0]}
              </span>
            ))}
          </div>

          {/* Parecer Text Preview */}
          <div className="p-3.5 bg-warm rounded-xl border border-brand-100 text-xs text-brand-700 font-medium leading-relaxed italic">
            &ldquo;Gabriel adaptou-se com entusiasmo à rotina do Pré 1. No campo &lsquo;O eu, o outro e o nós&rsquo;, destaca-se pela facilidade em acolher colegas e negociar regras de convivência de forma harmoniosa...&rdquo;
          </div>

          {/* Document Status & PDF Export */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-brand-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-brand-800">Ciente pela Responsável em 04/07</span>
            </div>
            <button className="text-xs font-bold bg-brand-50 text-brand-800 border border-brand-200 px-3 py-2 rounded-lg hover:bg-brand-100 transition-colors flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-brand-600" />
              Baixar PDF com Hash
            </button>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 3: Contratos Digitais e Termos Aditivos */}
      <FeatureCard
        icon={<FileSignature className="w-6 h-6 text-accent" />}
        iconBg="bg-accent-muted"
        badgeText="Zero Papel"
        badgeVariant="accent"
        title="Contratos de Matrícula & Termos Aditivos Digitais"
        description="Substitua pastas e pilhas de folhas por contratos inteligentes com placeholders automáticos da escola e dos alunos. Acompanhe quem já assinou pelo celular, receba alertas de pendências e emita Termos Aditivos de vencimento ou descontos em segundos."
        highlight="Rastreamento em tempo real de assinaturas digitais e arquivo jurídico seguro."
      >
        <div className="bg-white border border-brand-100 rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-100">
            <div>
              <p className="text-xs font-bold text-brand-500 uppercase">Gestão de Matrículas 2026</p>
              <p className="text-sm font-extrabold text-brand-900">Status Geral: 84 / 89 Assinados</p>
            </div>
            <Badge variant="accent">94% Assinados</Badge>
          </div>

          {/* Student Status List */}
          <div className="space-y-2 text-xs">
            <div className="p-3 bg-warm rounded-xl border border-brand-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-brand-900">Helena Rodrigues (Berçário 2)</p>
                <p className="text-[11px] text-brand-500">Resp: Carlos Rodrigues · CPF: ***.482.910-**</p>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
                Assinado Digitalmente
              </span>
            </div>

            <div className="p-3 bg-warm rounded-xl border border-brand-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-brand-900">Lucas Mendes (Maternal 1)</p>
                <p className="text-[11px] text-brand-500">Termo Aditivo: Desconto Pontualidade Ativo</p>
              </div>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded-md">
                Aditivo Homologado
              </span>
            </div>
          </div>

          <div className="p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between text-xs font-semibold text-brand-700">
            <span>Link de Assinatura via Celular</span>
            <button className="text-xs font-bold text-brand-900 underline hover:text-accent">
              Enviar Lembrete WhatsApp
            </button>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 4: Livro de Ocorrências Formal & Segurança Jurídica */}
      <FeatureCard
        icon={<ShieldCheck className="w-6 h-6 text-rose" />}
        iconBg="bg-rose-muted/50"
        badgeText="Segurança Jurídica"
        badgeVariant="rose"
        title="Livro de Ocorrências Auditável com Hash"
        description="Comunicação de incidentes, medicamentos, febres ou recados comportamentais com validade e integridade. Cada registro gera um hash criptográfico inalterável, protocolo de notificação instantânea e comprovante de leitura pelos pais."
        highlight="Elimine desentendimentos e proteja a escola com comprovação auditável de ciência."
      >
        <div className="bg-white border border-brand-100 rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              <p className="text-xs font-bold text-brand-900 uppercase">Registro Formal de Incidente</p>
            </div>
            <span className="text-[10px] font-mono font-bold text-brand-500 bg-brand-50 px-2 py-1 rounded">
              HASH: #9cf2b810
            </span>
          </div>

          <div className="p-3.5 bg-warm rounded-xl border border-brand-100 text-xs space-y-1.5">
            <p className="font-bold text-brand-900">Relato do Professor (Maternal 2 - 10:40h):</p>
            <p className="text-brand-600 leading-relaxed font-medium">
              &ldquo;Durante a brincadeira no parque, a aluna sofreu uma pequena escoriação no joelho esquerdo. Foi realizado atendimento imediato e higienização no ambulatório.&rdquo;
            </p>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Ciência Confirmada pelos Pais
            </span>
            <span className="text-[11px] font-normal text-emerald-700">Hoje às 11:05h</span>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 5: Módulo Financeiro & Lucratividade por Turma */}
      <FeatureCard
        icon={<Wallet className="w-6 h-6 text-accent" />}
        iconBg="bg-accent-muted"
        badgeText="Gestão Estratégica"
        badgeVariant="accent"
        title="Inteligência Financeira & Lucratividade por Turma"
        description="Descubra a rentabilidade real de cada sala através de rateio inteligente de despesas fixas (aluguel, equipe, energia) e custos variáveis. Tenha controle de mensalidades, inadimplência e feche o balanço do mês com snapshot inalterável."
        highlight="Análise precisa da margem líquida do Berçário, Maternal e Pré para decisões estratégicas."
      >
        <div className="bg-white border border-brand-100 rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-100">
            <div>
              <p className="text-xs font-bold text-brand-500 uppercase">Fechamento Mensal (Snapshot)</p>
              <p className="text-sm font-extrabold text-brand-900">Balanço Consolidado · Turma Berçário 1</p>
            </div>
            <Badge variant="accent">Auditoria Pronta</Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/60">
              <p className="font-semibold text-emerald-800">Mensalidades Recebidas</p>
              <p className="text-lg font-black text-emerald-700 mt-1">R$ 22.400,00</p>
            </div>
            <div className="p-3 bg-rose-muted/50 rounded-xl border border-rose/20">
              <p className="font-semibold text-rose">Despesas & Rateio</p>
              <p className="text-lg font-black text-rose mt-1">- R$ 13.150,00</p>
            </div>
          </div>

          <div className="p-4 bg-brand-900 rounded-xl text-white flex items-center justify-between">
            <div>
              <p className="text-[11px] text-white/70 font-semibold uppercase tracking-wider">Margem Líquida da Sala</p>
              <p className="text-2xl font-black text-white mt-0.5">R$ 9.250,00</p>
            </div>
            <span className="text-xs font-bold bg-accent text-brand-900 px-3 py-1.5 rounded-lg">
              41.3% Lucratividade
            </span>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 6: Diário de Rotina & Calendário Escolar */}
      <FeatureCard
        icon={<ClipboardList className="w-6 h-6 text-brand-600" />}
        iconBg="bg-brand-100"
        badgeText="Dia a Dia Ágil"
        badgeVariant="neutral"
        title="Diário de Rotina Ágil & Calendário Integrado"
        description="Chega de perder tempo preenchendo agendas físicas. Registre refeições, sono, trocas de fralda e recados com poucos cliques. Notifique as famílias sobre eventos, reuniões e datas comemorativas em um só canal oficial."
        highlight="Economia de até 45 minutos diários por professor e satisfação total dos pais."
      >
        <div className="bg-white border border-brand-100 rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { icon: '🍲', label: 'ALIMENTAÇÃO', status: 'Excelente' },
              { icon: '💤', label: 'SONO', status: '1h 30min' },
              { icon: '🎒', label: 'ITENS/HIGIENE', status: '3 Fraldas' },
              { icon: '✨', label: 'DISPOSIÇÃO', status: 'Muito Ativo' },
            ].map((item) => (
              <div key={item.label} className="p-3.5 bg-warm rounded-xl flex flex-col items-center gap-1 border border-brand-100 text-center">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[10px] font-bold text-brand-500 uppercase">{item.label}</span>
                <span className="text-xs font-bold text-brand-900">{item.status}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-warm rounded-xl border border-brand-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-900 rounded-xl flex flex-col items-center justify-center text-white text-xs font-bold leading-none shrink-0">
              <span className="text-[10px] text-accent">OUT</span>
              <span className="text-base font-black">12</span>
            </div>
            <div>
              <p className="text-xs font-bold text-brand-900">Semana da Criança & Oficinas com as Famílias</p>
              <p className="text-[11px] text-brand-600 font-medium">Sábado letivo com exposição dos trabalhos pedagógicos da BNCC</p>
            </div>
          </div>
        </div>
      </FeatureCard>
    </Section>
  );
};

export default FeaturesStream;
