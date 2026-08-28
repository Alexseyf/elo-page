import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import StaggerReveal, { staggerItem } from './StaggerReveal';

const faqs = [
  {
    question: 'Como funciona o auxílio de IA no Planejamento e nos Pareceres da BNCC?',
    answer: 'A IA do Elo Escola atua como uma assistente pedagógica treinada especificamente nas diretrizes da Educação Infantil e nos 5 Campos de Experiência da BNCC. Ela sugere propostas de atividades lúdicas e rascunhos de pareceres estruturados, mas o professor sempre tem o controle total para revisar, personalizar e assinar o documento final.',
  },
  {
    question: 'Os contratos digitais e termos aditivos têm validade jurídica?',
    answer: 'Sim, plenamente. A plataforma registra data, hora, IP, dados do responsável e hash de integridade documental para cada contrato e termo aditivo emitido, em total conformidade com a legislação brasileira de documentos eletrônicos e MP 2.200-2.',
  },
  {
    question: 'O que é o registro com hash no Livro de Ocorrências?',
    answer: 'Cada ocorrência registrada (saúde, medicação, avisos de rotina) gera um código criptográfico único (hash) que garante que o texto não foi alterado após a publicação. Além disso, o sistema comprova o momento exato em que o responsável visualizou a notificação.',
  },
  {
    question: 'Como o sistema calcula a lucratividade real por turma?',
    answer: 'O Elo Escola permite registrar receitas de mensalidades e ratear custos fixos (aluguel, equipe, infraestrutura) e custos variáveis diretamente entre as turmas (Berçário, Maternal, Pré). Isso permite ao gestor saber com precisão cirúrgica a margem de contribuição de cada sala de aula.',
  },
  {
    question: 'Os dados dos alunos e da escola estão seguros perante a LGPD?',
    answer: 'Sim, com proteção máxima. Nossa arquitetura multi-tenant isola completamente o banco de dados de cada escola. Nenhuma informação de contato ou dado de menores é exposto publicamente, eliminando os graves riscos de privacidade dos grupos de WhatsApp.',
  },
  {
    question: 'Como posso testar o sistema na prática?',
    answer: 'Basta clicar no botão "Experimentar Gestão Inteligente" no topo da página. Disponibilizamos credenciais imediatas para a nossa "Escola Modelo", permitindo que você navegue em tempo real como Administrador, Professor ou Responsável em um ambiente já populado.',
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border border-brand-100 rounded-xl overflow-hidden bg-white shadow-subtle">
      <h3>
        <button
          id={buttonId}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-5 hover:bg-warm/60 transition-colors flex justify-between items-center gap-4 min-h-[48px]"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="text-sm md:text-base font-bold text-brand-900 leading-snug">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-brand-600 transition-transform duration-200 shrink-0 ${
              isOpen ? 'rotate-180 text-accent' : ''
            }`}
          />
        </button>
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 bg-white border-t border-brand-100/70">
              <p className="text-xs md:text-sm text-brand-700 font-medium leading-relaxed pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <Section id="faq" className="bg-warm">
      <SectionHeader
        title="Perguntas"
        highlight="Frequentes"
        description="Respostas diretas sobre tecnologia, validade jurídica, BNCC e segurança para gestores escolares."
      />

      <StaggerReveal className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={staggerItem}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </StaggerReveal>
    </Section>
  );
};

export default FAQSection;