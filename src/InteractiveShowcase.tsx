import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
  FileText,
  Clock,
} from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import { Badge } from './ui';
import { SHOWCASE_PERFIS } from './data/featuresData';

const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diretor' | 'professor' | 'responsaveis'>('diretor');

  const currentProfile = SHOWCASE_PERFIS.find((p) => p.id === activeTab) || SHOWCASE_PERFIS[0];

  return (
    <Section id="demonstracao" className="bg-brand-50/40 border-y border-brand-100">
      <SectionHeader
        title="Uma Plataforma Unificada para"
        highlight="Cada Elo da Escola"
        description="Ambientes sob medida para diretores, professores e famílias. Cada usuário acessa exatamente o que precisa com máxima produtividade e privacidade."
      />

      <div className="max-w-6xl mx-auto">
        {/* Tab Selector */}
        <div
          role="tablist"
          aria-label="Selecione o perfil de usuário"
          className="flex flex-wrap sm:flex-nowrap gap-2 p-1.5 bg-brand-100/80 rounded-2xl max-w-2xl mx-auto mb-10 border border-brand-200"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'diretor'}
            onClick={() => setActiveTab('diretor')}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[48px] ${
              activeTab === 'diretor'
                ? 'bg-white text-accent shadow-subtle border border-brand-200/60'
                : 'text-brand-600 hover:text-brand-900 hover:bg-white/50'
            }`}
          >
            <Building2 className={`w-4 h-4 shrink-0 ${activeTab === 'diretor' ? 'text-accent' : 'text-brand-500'}`} />
            <span className="whitespace-nowrap">Direção & Gestão</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'professor'}
            onClick={() => setActiveTab('professor')}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[48px] ${
              activeTab === 'professor'
                ? 'bg-white text-accent shadow-subtle border border-brand-200/60'
                : 'text-brand-600 hover:text-brand-900 hover:bg-white/50'
            }`}
          >
            <GraduationCap className={`w-4 h-4 shrink-0 ${activeTab === 'professor' ? 'text-accent' : 'text-brand-500'}`} />
            <span className="whitespace-nowrap">Professores</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'responsaveis'}
            onClick={() => setActiveTab('responsaveis')}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[48px] ${
              activeTab === 'responsaveis'
                ? 'bg-white text-accent shadow-subtle border border-brand-200/60'
                : 'text-brand-600 hover:text-brand-900 hover:bg-white/50'
            }`}
          >
            <HeartHandshake className={`w-4 h-4 shrink-0 ${activeTab === 'responsaveis' ? 'text-accent' : 'text-brand-500'}`} />
            <span className="whitespace-nowrap">Famílias & Pais</span>
          </button>
        </div>

        {/* Dynamic Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-brand-100 rounded-3xl p-5 sm:p-8 md:p-10 shadow-card"
          >
            {/* Left Column: Context and Points */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
                  <span>{currentProfile.roleName}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-900 tracking-tight leading-snug">
                  {currentProfile.label}
                </h3>
                <p className="text-brand-600 font-medium text-base mt-2 leading-relaxed">
                  {currentProfile.tagline}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-brand-100">
                {currentProfile.metrics.map((metric, i) => (
                  <div key={i} className="text-center p-2 sm:p-2.5 rounded-xl bg-brand-50 border border-brand-100">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-brand-500 uppercase tracking-wider">{metric.label}</p>
                    <p className="text-xs sm:text-sm md:text-base font-extrabold text-brand-900 mt-0.5 whitespace-nowrap">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {currentProfile.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 bg-blue-50 rounded-full text-accent mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-brand-700 leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Live UI Interactive Mockup */}
            <div className="lg:col-span-7 bg-brand-50/70 rounded-2xl p-4 sm:p-6 border border-brand-100">
              {activeTab === 'diretor' && (
                <div className="space-y-4">
                  {/* Mockup Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-200/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent flex items-center justify-center border border-blue-100 shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-900">Painel Executivo da Direção</p>
                        <p className="text-[11px] text-brand-500 font-medium">Escola Modelo · Ano Letivo Vigente</p>
                      </div>
                    </div>
                    <div className="self-start sm:self-auto shrink-0">
                      <Badge variant="accent">Snapshot Ativo</Badge>
                    </div>
                  </div>

                  {/* Financial & Contract Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-subtle">
                      <p className="text-[11px] font-bold text-brand-500 uppercase">Lucratividade Berçário</p>
                      <p className="text-xl font-black text-brand-900 mt-1">R$ 14.850,00</p>
                      <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>Margem líquida de 41,2%</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-subtle">
                      <p className="text-[11px] font-bold text-brand-500 uppercase">Assinaturas de Contratos</p>
                      <p className="text-xl font-black text-brand-900 mt-1">94% Concluídas</p>
                      <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-brand-600">
                        <FileCheck2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>84 de 89 assinados digitalmente</span>
                      </div>
                    </div>
                  </div>

                  {/* Incident / Occurrences Log Preview */}
                  <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-subtle space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <span className="text-xs font-bold text-brand-800 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                        Livro de Ocorrências com Hash Jurídico
                      </span>
                      <span className="self-start sm:self-auto text-[10px] font-mono text-brand-500 bg-brand-50 px-2 py-0.5 rounded border border-brand-100 shrink-0 whitespace-nowrap">
                        #doc-hash-8f4b9a
                      </span>
                    </div>
                    <p className="text-xs text-brand-600 font-medium">
                      Ocorrência de saúde registrada pelo professor · Notificação enviada aos responsáveis · 
                      <strong className="text-emerald-700 font-semibold ml-1">Ciência confirmada às 14:22</strong>
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'professor' && (
                <div className="space-y-4">
                  {/* Mockup Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-200/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent flex items-center justify-center border border-blue-100 shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-900">Planejamento & Pareceres com IA</p>
                        <p className="text-[11px] text-brand-500 font-medium">Turma: Maternal 2 · 5 Campos da BNCC</p>
                      </div>
                    </div>
                    <div className="self-start sm:self-auto shrink-0">
                      <Badge variant="emerald">BNCC Nativa</Badge>
                    </div>
                  </div>

                  {/* AI Activity Suggestion Box */}
                  <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-subtle space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <span className="self-start sm:self-auto text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                        <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                        Sugestão de Atividade Gerada por IA
                      </span>
                      <span className="self-start sm:self-auto text-[11px] font-semibold text-brand-500 shrink-0 whitespace-nowrap">Código EI02EO03</span>
                    </div>
                    <p className="text-xs text-brand-700 font-medium leading-relaxed">
                      <strong>Circuito dos Sentimentos:</strong> Atividade em roda com espelhos e cartões ilustrados onde as crianças identificam e expressam emoções em grupo, promovendo cooperação e empatia.
                    </p>
                  </div>

                  {/* Descriptive Parecer Preview */}
                  <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-subtle space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <p className="text-xs font-bold text-brand-900 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-brand-600 shrink-0" />
                        <span>Parecer Semestral: &ldquo;O eu, o outro e o nós&rdquo;</span>
                      </p>
                      <span className="self-start sm:self-auto text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded font-bold shrink-0 whitespace-nowrap">
                        PDF Timbrado Gerado
                      </span>
                    </div>
                    <p className="text-xs text-brand-600 line-clamp-2 italic">
                      &ldquo;O aluno demonstrou excelente avanço na interação com os colegas, compartilhando brinquedos espontaneamente e expressando suas preferências com clareza...&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'responsaveis' && (
                <div className="space-y-4">
                  {/* Mockup Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-200/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent flex items-center justify-center border border-blue-100 shrink-0">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-900">Portal da Família</p>
                        <p className="text-[11px] text-brand-500 font-medium">Acompanhamento do Aluno em Tempo Real</p>
                      </div>
                    </div>
                    <div className="self-start sm:self-auto shrink-0">
                      <Badge variant="accent">Canal Seguro</Badge>
                    </div>
                  </div>

                  {/* Daily Routine Summary */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white p-3 rounded-xl border border-brand-100 text-center shadow-subtle">
                      <p className="text-lg">🍲</p>
                      <p className="text-[10px] font-bold text-brand-500 uppercase mt-1">Almoço</p>
                      <p className="text-xs font-bold text-emerald-700">Comeu Tudo</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-brand-100 text-center shadow-subtle">
                      <p className="text-lg">💤</p>
                      <p className="text-[10px] font-bold text-brand-500 uppercase mt-1">Soneca</p>
                      <p className="text-xs font-bold text-brand-800">1h45min</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-brand-100 text-center shadow-subtle">
                      <p className="text-lg">✨</p>
                      <p className="text-[10px] font-bold text-brand-500 uppercase mt-1">Humor</p>
                      <p className="text-xs font-bold text-accent font-black">Muito Feliz</p>
                    </div>
                  </div>

                  {/* Official Notice / Document Confirmation */}
                  <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-brand-900">Parecer Descritivo do 1º Semestre</p>
                      <p className="text-[11px] text-brand-500 font-medium flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-accent shrink-0" /> Disponível para leitura e confirmação de ciência
                      </p>
                    </div>
                    <button className="self-start sm:self-auto text-xs font-bold bg-accent text-white px-3.5 py-2 rounded-lg hover:bg-accent-dark transition-colors shrink-0 shadow-subtle">
                      Visualizar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default InteractiveShowcase;
