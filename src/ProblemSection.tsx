import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import Card from './ui/Card';

const ProblemSection: React.FC = () => {
  return (
    <Section id="problema" className="bg-warm">
      <SectionHeader
        title="Sua escola merece mais do que"
        highlight="papel e WhatsApp"
        description="Agendas de papel que se perdem, grupos de WhatsApp barulhentos e falta de controle financeiro real."
      />

      <div className="max-w-4xl mx-auto">
        <Card padding="lg" hover={false} className="border-brand-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="text-lg text-brand-600 leading-relaxed font-medium space-y-2">
                <p>
                  Para o <strong className="text-brand-900">Diretor</strong>, é a falta de dados.
                </p>
                <p>
                  Para o <strong className="text-brand-900">Professor</strong>, é o tempo perdido.
                </p>
                <p>
                  Para os <strong className="text-brand-900">Pais</strong>, é a insegurança de não saber como o filho está.
                </p>
              </div>
            </div>
            <div className="bg-rose-muted/50 p-5 rounded-lg flex items-start gap-4 border border-rose/10">
              <div className="p-2.5 bg-rose rounded-lg shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-semibold text-brand-700">
                A comunicação fragmentada gera insegurança e perda de produtividade.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ProblemSection;
