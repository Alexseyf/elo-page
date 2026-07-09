import React, { useState } from 'react';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';

const ROICalculator: React.FC = () => {
  const [students, setStudents] = useState(50);

  const dailySavingMinutes = students * 6;
  const monthlySavingHours = Math.round((dailySavingMinutes * 22) / 60);

  return (
    <Section id="roi" className="bg-warm">
      <SectionHeader
        title="Quanto tempo sua escola"
        highlight="está perdendo?"
        description="Preencher agendas físicas consome horas valiosas da sua equipe. Com o fluxo otimizado do Elo, você recupera esse tempo."
      />

      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-brand-100 rounded-xl p-8 md:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  <label htmlFor="roi-slider" className="font-semibold text-brand-900">Número de Alunos</label>
                  <span className="text-accent font-bold text-xl">{students} alunos</span>
                </div>
                <input
                  id="roi-slider"
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2 bg-brand-100 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between mt-1 text-xs font-semibold text-brand-300 uppercase tracking-widest">
                  <span>10 Alunos</span>
                  <span>500 Alunos</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-900 rounded-xl p-8 md:p-10 text-white">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 font-semibold uppercase tracking-widest text-xs mb-1">
                      Economia Mensal Total
                    </p>
                    <p className="text-4xl font-bold text-white">
                      {monthlySavingHours}{' '}
                      <span className="text-xl text-accent">horas</span>
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div className="space-y-3">
                  {[
                    'Registro de rotina 4x mais rápido',
                    'Informação em tempo real para os pais',
                    'Zero custo com agendas físicas de papel',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <p className="font-medium text-sm text-white/80">{item}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    window.open(
                      'https://wa.me/5553991280129?text=Olá!%20Fiz%20o%20cálculo%20de%20ROI%20no%20site%20e%20gostaria%20de%20saber%20como%20economizar%20tempo%20na%20minha%20escola.',
                      '_blank'
                    )
                  }
                  className="w-full bg-amber-600 text-white font-semibold py-4 rounded-lg hover:bg-amber-500 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Solicitar Informações
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ROICalculator;
