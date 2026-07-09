import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section, { SectionHeader } from './ui/Section';
import StaggerReveal, { staggerItem } from './StaggerReveal';

const faqs = [
  {
    question: 'Os dados da minha escola e alunos estão seguros?',
    answer: 'Sim, a segurança é prioridade. Cada escola opera em um ambiente multi-tenant isolado, garantindo que dados financeiros e pedagógicos nunca se misturem. Seguimos rigorosamente a LGPD e utilizamos criptografia de ponta.',
  },
  {
    question: 'O sistema já vem com a BNCC configurada?',
    answer: 'Sim! O Elo Escola já traz todos os Objetivos de Aprendizagem e Campos de Experiência da BNCC pré-carregados. O professor só precisa selecionar os códigos durante o planejamento, economizando horas de digitação.',
  },
  {
    question: 'Como funciona o ambiente de teste?',
    answer: 'Ao clicar em "Experimentar", forneceremos acesso a uma Escola Modelo já populada com alunos e turmas fictícias. Você poderá navegar como Administrador ou Professor para sentir o valor real do produto imediatamente.',
  },
  {
    question: 'Os pais pagam para usar o aplicativo?',
    answer: 'Não. O acesso para pais e responsáveis é totalmente gratuito. A escola contrata a licença de uso e libera os acessos para sua comunidade sem custos adicionais para as famílias.',
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border border-brand-100 rounded-lg overflow-hidden">
      <h3>
        <button
          id={buttonId}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-5 bg-white hover:bg-warm transition-colors flex justify-between items-center gap-4 min-h-[44px]"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="text-base font-bold text-brand-900">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-brand-600 transition-transform duration-200 shrink-0 ${
              isOpen ? 'rotate-180' : ''
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
            <div className="px-5 pb-5 bg-white border-t border-brand-100">
              <p className="text-sm text-brand-700 font-medium leading-relaxed pt-4">
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
        title="Dúvidas"
        highlight="Frequentes"
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