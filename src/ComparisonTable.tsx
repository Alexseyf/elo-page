import React from 'react';
import { XCircle, CheckCircle2, MessageSquareOff, Database, ShieldAlert } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';

const ComparisonTable: React.FC = () => {
  return (
    <Section id="comparativo" className="bg-white">
      <SectionHeader
        title="Por que o WhatsApp é"
        highlight="perigoso para sua escola?"
        description="O que parece ser prático hoje, pode se tornar um pesadelo jurídico e administrativo amanhã."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-warm border border-rose/20 rounded-xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-rose-muted/50 rounded-lg text-rose">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-brand-900">WhatsApp / Grupos</h3>
          </div>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MessageSquareOff className="w-4 h-4 text-rose mt-1 shrink-0" />
              <p className="text-sm text-brand-600 font-medium">
                <strong className="text-brand-700">Informação se Perde:</strong> Avisos importantes desaparecem em meio a conversas paralelas.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-rose mt-1 shrink-0" />
              <p className="text-sm text-brand-600 font-medium">
                <strong className="text-brand-700">Risco de Privacidade:</strong> Telefones de pais e professores expostos a todos do grupo.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Database className="w-4 h-4 text-rose mt-1 shrink-0" />
              <p className="text-sm text-brand-600 font-medium">
                <strong className="text-brand-700">Sem Histórico Oficial:</strong> Difícil consultar registros antigos para acompanhar a evolução do aluno.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-brand-900 border border-brand-900 rounded-xl p-8 md:p-10 text-white relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-accent/20 rounded-lg text-accent">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Elo Escola</h3>
          </div>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
              <p className="text-sm text-white/70 font-medium">
                <strong className="text-white">Centralização Total:</strong> Mural de avisos limpo, organizado e impossível de ignorar.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
              <p className="text-sm text-white/70 font-medium">
                <strong className="text-white">Privacidade de Dados:</strong> Comunicação profissional sem expor dados pessoais dos usuários.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
              <p className="text-sm text-white/70 font-medium">
                <strong className="text-white">Histórico Vitalício:</strong> Cada registro de rotina e mensagem salvo permanentemente.
              </p>
            </li>
          </ul>

          <div className="mt-10 p-5 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm font-semibold text-white text-center">
              &ldquo;O Elo Escola profissionaliza a relação entre a escola e as famílias.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ComparisonTable;
