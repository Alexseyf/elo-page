import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ShieldAlert, Sparkles, Lock, FileSignature } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import { COMPARATIVO_ITEMS } from './data/featuresData';

const ComparisonTable: React.FC = () => {
  return (
    <Section id="comparativo" className="bg-white">
      <SectionHeader
        title="Por que métodos improvisados são"
        highlight="um risco para sua escola?"
        description="Grupos de WhatsApp e fichas de papel parecem simples hoje, mas trazem insegurança jurídica, sobrecarga dos professores e falta de controle financeiro."
      />

      {/* Comparison Grid (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1: WhatsApp */}
        <div className="bg-warm border border-rose/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-rose-muted/60 rounded-xl text-rose">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-brand-900">WhatsApp / Grupos</h3>
                <p className="text-xs text-brand-500 font-medium">Informal e Caótico</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Vazamento de Contatos:</strong> Telefones pessoais expostos em grupos de pais e professores.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Sem Registro Oficial:</strong> Mensagens apagadas e recados de saúde perdidos.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Zero Pedagogia:</strong> Não possui suporte para BNCC, pareceres ou contratos.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-3.5 bg-rose-muted/30 rounded-xl border border-rose/10 text-center">
            <p className="text-xs font-bold text-rose-800">Alto Risco Jurídico</p>
          </div>
        </div>

        {/* Card 2: Papel & Planilhas Manuais */}
        <div className="bg-warm border border-brand-200/70 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-100 rounded-xl text-brand-700">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-brand-900">Pastas & Planilhas</h3>
                <p className="text-xs text-brand-500 font-medium">Lento e Burocrático</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Exaustão dos Professores:</strong> Semanas digitando pareceres manuais e procurando objetivos.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Contratos Perdidos:</strong> Arquivos físicos em gavetas e dificuldade em cobrar inadimplentes.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Cegueira Financeira:</strong> Impossível saber a margem real de cada sala de aula.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-3.5 bg-brand-100/50 rounded-xl border border-brand-200 text-center">
            <p className="text-xs font-bold text-brand-700">Horas de Retrabalho</p>
          </div>
        </div>

        {/* Card 3: Elo Escola (Premium) */}
        <div className="bg-brand-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-elevated relative overflow-hidden border border-brand-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-accent/20 rounded-xl text-accent">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Elo Escola</h3>
                  <p className="text-xs text-accent font-semibold">Ecossistema Completo</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-accent text-brand-900 px-2.5 py-1 rounded-md">
                Recomendado
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-white/90 font-medium leading-relaxed">
                  <strong>IA nos 5 Campos da BNCC:</strong> Atividades planejadas e pareceres ricos sem estresse.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <FileSignature className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-white/90 font-medium leading-relaxed">
                  <strong>Contratos & Aditivos Digitais:</strong> Assinaturas pelo celular com rastreamento integral.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-white/90 font-medium leading-relaxed">
                  <strong>Ocorrências com Hash:</strong> Validade jurídica com recibo de leitura comprovado.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-3.5 bg-white/10 rounded-xl border border-white/15 text-center">
            <p className="text-xs font-bold text-accent">Tranquilidade & Gestão 360°</p>
          </div>
        </div>
      </div>

      {/* Comparison Detail Table (Desktop Collapsible / Readable) */}
      <div className="mt-14 max-w-5xl mx-auto overflow-hidden border border-brand-100 rounded-2xl bg-white shadow-subtle hidden md:block">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-warm border-b border-brand-100 text-brand-800 uppercase tracking-wider text-[11px] font-bold">
              <th className="p-4 w-1/4">Critério Estratégico</th>
              <th className="p-4 w-1/4 text-rose-800 bg-rose-muted/20">WhatsApp</th>
              <th className="p-4 w-1/4 text-brand-700">Pastas / Planilhas</th>
              <th className="p-4 w-1/4 text-amber-900 bg-amber-50/60 font-black">Elo Escola</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100 text-brand-700 font-medium">
            {COMPARATIVO_ITEMS.map((row, i) => (
              <tr key={i} className="hover:bg-warm/30 transition-colors">
                <td className="p-4 font-bold text-brand-900">{row.criterio}</td>
                <td className="p-4 text-brand-600 bg-rose-muted/10">{row.whatsapp}</td>
                <td className="p-4 text-brand-600">{row.manual}</td>
                <td className="p-4 text-brand-950 font-semibold bg-amber-50/30">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{row.elo}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default ComparisonTable;
