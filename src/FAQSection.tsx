import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Os dados da minha escola e alunos estão seguros?",
      answer: "Sim, a segurança é prioridade. Cada escola opera em um ambiente multi-tenant isolado, garantindo que dados financeiros e pedagógicos nunca se misturem. Seguimos rigorosamente a LGPD e utilizamos criptografia de ponta."
    },
    {
      question: "O sistema já vem com a BNCC configurada?",
      answer: "Sim! O Elo Escola já traz todos os Objetivos de Aprendizagem e Campos de Experiência da BNCC pré-carregados. O professor só precisa selecionar os códigos durante o planejamento, economizando horas de digitação."
    },
    {
      question: "Como funciona o ambiente de teste?",
      answer: "Ao clicar em 'Experimentar', forneceremos acesso a uma Escola Modelo já populada com alunos e turmas fictícias. Você poderá navegar como Administrador ou Professor para sentir o valor real do produto imediatamente."
    },
    {
      question: "Os pais pagam para usar o aplicativo?",
      answer: "Não. O acesso para pais e responsáveis é totalmente gratuito. A escola contrata a licença de uso e libera os acessos para sua comunidade sem custos adicionais para as famílias."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-ochre/5 rounded-full blur-3xl"></div>

        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-forest tracking-tight">
            Dúvidas <span className="text-ochre">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 md:p-8 rounded-3xl transition-all border-2 ${isOpen ? 'bg-forest border-forest text-white' : 'bg-cream border-forest/5 text-forest hover:border-forest/20'
          }`}
      >
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-xl font-bold tracking-tight">{question}</h3>
          <div className={`${isOpen ? 'text-ochre' : 'text-forest/40'}`}>
            {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
            <p className={`${isOpen ? 'text-white/80' : 'text-forest-light'} font-medium leading-relaxed`}>
              {answer}
            </p>
          </div>
        )}
      </button>
    </div>
  );
};

export default FAQSection;
