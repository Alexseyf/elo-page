import React, { useState } from 'react';
import { Clock, CheckCircle2, ArrowRight, Sparkles, FileSignature } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';

const ROICalculator: React.FC = () => {
  const [students, setStudents] = useState(60);

  // Estimativas reais baseadas nos fluxos do Elo Escola:
  // - 5 min/aluno/dia de rotina economizados vs agenda física
  // - 1.5 horas economizadas por aluno por semestre em pareceres com IA
  // - 20 min economizados por aluno em matrícula/contrato
  const dailySavingHours = Math.round((students * 5 * 22) / 60);
  const semesterParecerHours = Math.round(students * 1.2);
  const totalMonthlyHours = Math.round(dailySavingHours + (semesterParecerHours / 6));

  return (
    <Section id="roi" className="bg-warm">
      <SectionHeader
        title="Calcule o impacto real na"
        highlight="produtividade da sua escola"
        description="Elimine a sobrecarga docente e burocrática. Veja quantas horas de trabalho manual o Elo Escola devolve para sua equipe."
      />

      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-brand-100 rounded-2xl p-6 md:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Slider Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="roi-slider" className="font-bold text-brand-900 text-base">
                    Quantidade de Alunos Matriculados:
                  </label>
                  <span className="text-accent font-black text-2xl bg-warm px-3 py-1 rounded-xl border border-brand-100">
                    {students} alunos
                  </span>
                </div>
                <input
                  id="roi-slider"
                  type="range"
                  min="15"
                  max="350"
                  step="5"
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2.5 bg-brand-100 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between mt-2 text-[11px] font-bold text-brand-400 uppercase tracking-widest">
                  <span>15 Alunos</span>
                  <span>150 Alunos</span>
                  <span>350 Alunos</span>
                </div>
              </div>

              {/* Specific Savings Breakdown */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-warm rounded-xl border border-brand-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-bold text-brand-800">Pareceres & Planejamento BNCC</span>
                  </div>
                  <span className="text-xs font-extrabold text-brand-900">~{semesterParecerHours}h / semestre</span>
                </div>

                <div className="p-3.5 bg-warm rounded-xl border border-brand-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-brand-600" />
                    <span className="text-xs font-bold text-brand-800">Rotina Diária & Chamadas</span>
                  </div>
                  <span className="text-xs font-extrabold text-brand-900">~{dailySavingHours}h / mês</span>
                </div>

                <div className="p-3.5 bg-warm rounded-xl border border-brand-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileSignature className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold text-brand-800">Contratos & Matrículas Digitais</span>
                  </div>
                  <span className="text-xs font-extrabold text-brand-900">Zero Papel</span>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 bg-brand-900 rounded-2xl p-6 md:p-8 text-white shadow-elevated relative overflow-hidden border border-brand-800">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 font-bold uppercase tracking-widest text-[11px] mb-1">
                      Tempo Total Recuperado
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-white leading-none">
                      {totalMonthlyHours}{' '}
                      <span className="text-xl text-accent font-bold">horas / mês</span>
                    </p>
                    <p className="text-xs text-white/70 mt-1">
                      Equivalente a mais de {Math.round(totalMonthlyHours / 8)} dias úteis de trabalho pedagógico livre.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div className="space-y-2.5">
                  {[
                    'Professores focados nas crianças, não na burocracia',
                    'Pareceres BNCC entregues no prazo sem exaustão',
                    'Contratos assinados sem fila na secretaria',
                    'Redução de atritos com comprovação de ciência',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <p className="font-medium text-xs text-white/90">{item}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5553991280129?text=Olá!%20Fiz%20o%20cálculo%20de%20produtividade%20no%20site%20e%20gostaria%20de%20conhecer%20o%20Elo%20Escola%20para%20minha%20instituição."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent text-brand-900 font-extrabold py-4 px-6 rounded-xl hover:bg-accent-light transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm shadow-subtle"
                >
                  Agendar Demonstração Personalizada
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ROICalculator;
