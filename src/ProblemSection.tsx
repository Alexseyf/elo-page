import React from 'react';
import { FileSpreadsheet, MessageSquareOff, Clock } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';

const ProblemSection: React.FC = () => {
  return (
    <Section id="problema" className="bg-warm">
      <SectionHeader
        title="Sua escola ainda é refém de"
        highlight="processos manuais e WhatsApp?"
        description="Agendas físicas rasuradas, semanas exaustivas redigindo pareceres, contratos em pastas e conversas paralelas no WhatsApp drenam a energia da sua instituição."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pain 1: Direção */}
        <div className="bg-white border border-brand-100 rounded-2xl p-6 shadow-card flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-muted/50 text-rose flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-brand-900">Para a Direção Escolar</h3>
            <p className="text-xs text-brand-600 font-medium leading-relaxed">
              Falta de clareza sobre o lucro real de cada sala, dificuldade para gerenciar contratos assinados e risco de processos por ausência de comprovante formal em ocorrências.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-brand-100">
            <span className="text-[11px] font-bold text-rose uppercase tracking-wider">Insegurança & Retrabalho</span>
          </div>
        </div>

        {/* Pain 2: Professores */}
        <div className="bg-white border border-brand-100 rounded-2xl p-6 shadow-card flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-brand-900">Para os Professores</h3>
            <p className="text-xs text-brand-600 font-medium leading-relaxed">
              Semanas digitando dezenas de páginas de pareceres descritivos semestrais e tempo excessivo buscando objetivos da BNCC em vez de focar na atenção às crianças.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-brand-100">
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Sobrecarga Docente</span>
          </div>
        </div>

        {/* Pain 3: Famílias */}
        <div className="bg-white border border-brand-100 rounded-2xl p-6 shadow-card flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
              <MessageSquareOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-brand-900">Para as Famílias</h3>
            <p className="text-xs text-brand-600 font-medium leading-relaxed">
              Insegurança por não saber como foi o dia do filho em tempo hábil e constrangimento de ter telefones pessoais expostos em grupos de mensagens.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-brand-100">
            <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider">Falta de Transparência</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSection;
