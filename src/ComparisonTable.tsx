import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ShieldAlert, Sparkles, Lock, FileSignature } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import { COMPARATIVO_ITEMS } from './data/featuresData';

const ComparisonTable: React.FC = () => {
  return (
    <Section id="comparativo" className="bg-brand-50/40 border-y border-brand-100">
      <SectionHeader
        title="Por que métodos improvisados são"
        highlight="um risco para sua escola?"
        description="Grupos de WhatsApp e fichas de papel parecem simples hoje, mas trazem insegurança jurídica, sobrecarga dos professores e falta de controle financeiro."
      />

      {/* Comparison Grid (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1: WhatsApp */}
        <div className="bg-white border border-rose-200/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-card">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-rose-50 rounded-2xl text-rose border border-rose-100">
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

          <div className="mt-8 p-3 bg-rose-50 rounded-xl border border-rose-200/60 text-center">
            <p className="text-xs font-bold text-rose-700">Alto Risco Jurídico</p>
          </div>
        </div>

        {/* Card 2: Papel & Planilhas Manuais */}
        <div className="bg-white border border-brand-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-card">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-50 rounded-2xl text-brand-700 border border-brand-200">
                <AlertTriangle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-brand-900">Pastas & Planilhas</h3>
                <p className="text-xs text-brand-500 font-medium">Lento e Burocrático</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Exaustão dos Professores:</strong> Semanas digitando pareceres manuais e procurando objetivos.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Contratos Perdidos:</strong> Arquivos físicos em gavetas e dificuldade em cobrar inadimplentes.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-xs text-brand-700 font-medium leading-relaxed">
                  <strong>Cegueira Financeira:</strong> Impossível saber a margem real de cada sala de aula.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-3 bg-brand-50 rounded-xl border border-brand-200 text-center">
            <p className="text-xs font-bold text-brand-700">Horas de Retrabalho</p>
          </div>
        </div>

        {/* Card 3: Elo Escola (Clean Premium Light) */}
        <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-elevated relative overflow-hidden border-2 border-accent ring-4 ring-blue-500/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 rounded-2xl text-accent border border-blue-200">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-brand-900">Elo Escola</h3>
                  <p className="text-xs text-accent font-bold">Ecossistema Completo</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-accent text-white px-2.5 py-1 rounded-md shadow-subtle">
                Recomendado
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-brand-800 font-medium leading-relaxed">
                  <strong>IA nos 5 Campos da BNCC:</strong> Atividades planejadas e pareceres ricos sem estresse.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <FileSignature className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-brand-800 font-medium leading-relaxed">
                  <strong>Contratos & Aditivos Digitais:</strong> Assinaturas pelo celular com rastreamento integral.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-brand-800 font-medium leading-relaxed">
                  <strong>Ocorrências com Hash:</strong> Validade jurídica com recibo de leitura comprovado.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-3 bg-blue-50 rounded-xl border border-blue-200 text-center">
            <p className="text-xs font-bold text-accent">Tranquilidade & Gestão 360°</p>
          </div>
        </div>
      </div>

      {/* Comparison Detail Table (Desktop Collapsible / Readable) */}
      <div className="mt-14 max-w-5xl mx-auto overflow-hidden border border-brand-200 rounded-3xl bg-white shadow-card hidden md:block">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-brand-50 border-b border-brand-200 text-brand-800 uppercase tracking-wider text-[11px] font-bold">
              <th className="p-4 w-1/4">Critério Estratégico</th>
              <th className="p-4 w-1/4 text-rose-700 bg-rose-50/50">WhatsApp</th>
              <th className="p-4 w-1/4 text-brand-600">Pastas / Planilhas</th>
              <th className="p-4 w-1/4 text-accent bg-blue-50/70 font-black">Elo Escola</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100 text-brand-700 font-medium">
            {COMPARATIVO_ITEMS.map((row, i) => (
              <tr key={i} className="hover:bg-brand-50/40 transition-colors">
                <td className="p-4 font-bold text-brand-900">{row.criterio}</td>
                <td className="p-4 text-brand-600 bg-rose-50/20">{row.whatsapp}</td>
                <td className="p-4 text-brand-600">{row.manual}</td>
                <td className="p-4 text-brand-950 font-semibold bg-blue-50/30">
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
