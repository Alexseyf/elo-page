import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Shield, BookOpen, UserCircle, ArrowRight, X, Copy, Check, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import { Button } from './ui';

const CopyableCredential: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-bold uppercase tracking-widest text-brand-600 ml-1">{label}</span>
      <button
        onClick={handleCopy}
        className="group flex items-center justify-between bg-warm border border-brand-100 hover:border-accent/50 p-3 rounded-xl transition-all min-h-[44px]"
        aria-label={`Copiar ${label.toLowerCase()}`}
      >
        <code className="text-brand-900 font-bold text-xs">{value}</code>
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600" />
        ) : (
          <Copy className="w-4 h-4 text-brand-300 group-hover:text-accent transition-colors" />
        )}
      </button>
    </div>
  );
};

const AppSlideshow: React.FC = () => {
  const slides = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
    '/images/slide5.png'
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-white rounded-lg"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Capturas de tela do aplicativo"
    >
      {slides.map((slide, index) => (
        <img
          key={slide}
          src={slide}
          alt={`Tela do aplicativo: demonstração ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-8 scale-95'
          }`}
          aria-hidden={index !== currentSlide}
        />
      ))}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20"
        role="tablist"
        aria-label="Navegação dos slides"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 border-0 p-0 cursor-pointer ${
              index === currentSlide ? 'w-6 bg-brand-900' : 'w-1.5 bg-brand-200'
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setPaused(!paused)}
        className="absolute top-2 right-2 z-20 bg-white/90 text-brand-800 text-[10px] font-bold px-2 py-1 rounded shadow-subtle"
        aria-label={paused ? 'Continuar rotação' : 'Pausar rotação'}
      >
        {paused ? '▶' : '⏸'}
      </button>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  const openModal = useCallback(() => {
    previousActiveElement.current = document.activeElement;
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, a, input, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements?.[0];
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = '';
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
      previousActiveElement.current = null;
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal]);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 overflow-hidden bg-gradient-to-br from-warm via-white to-warm">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200/70 text-amber-900 rounded-full text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Educação Infantil Inteligente · BNCC Nativa com IA</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-900 mb-6 tracking-tight leading-[1.1] text-balance">
              Gestão escolar que conecta, organiza e protege sua instituição.
            </h1>

            <p className="text-base md:text-lg text-brand-600 mb-8 max-w-xl font-medium leading-relaxed">
              O ecossistema completo para Educação Infantil: planejamento e pareceres nos 5 Campos da BNCC com IA, contratos digitais, livro de ocorrências auditável e lucratividade real por turma.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                variant="accent"
                size="lg"
                onClick={openModal}
                className="w-full sm:w-auto shadow-elevated"
              >
                Experimentar Gestão Inteligente
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="#demonstracao"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-brand-800 bg-white border border-brand-200 hover:bg-warm transition-colors"
              >
                Ver Demonstração dos Perfis
              </a>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-brand-100 w-full lg:w-4/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border border-brand-100 rounded-xl text-brand-700 shadow-subtle">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Direção</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border border-brand-100 rounded-xl text-brand-700 shadow-subtle">
                  <BookOpen className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Professores</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border border-brand-100 rounded-xl text-brand-700 shadow-subtle">
                  <UserCircle className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Famílias</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[280px] mx-auto aspect-[9/19] bg-brand-900 rounded-[2rem] shadow-elevated border-[4px] border-brand-800 p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-white">
                <div className="absolute top-0 w-full h-7 bg-brand-50/80 flex items-center px-3 gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-300" />
                </div>
                <AppSlideshow />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          ref={modalRef}
        >
          <div
            className="fixed inset-0 bg-brand-900/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-modal animate-in zoom-in-95 duration-200 z-10 my-8 border border-brand-100">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-3 hover:bg-brand-50 rounded-xl text-brand-400 hover:text-brand-700 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-10">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-accent bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50">
                  Acesso Instantâneo
                </span>
                <h2 id="modal-title" className="text-2xl md:text-3xl font-extrabold text-brand-900 mt-2">
                  Bem-vindo à Escola Modelo
                </h2>
                <p className="text-brand-600 mt-1 text-sm font-medium">
                  Use as credenciais abaixo para testar o ambiente real já populado com turmas e alunos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <div className="bg-warm p-4 rounded-xl border border-brand-100 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Administrativo / Direção</p>
                  <CopyableCredential label="E-mail" value="admin@email.com" />
                  <CopyableCredential label="Senha" value="Admin@123" />
                </div>
                <div className="bg-warm p-4 rounded-xl border border-brand-100 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Professor (BNCC & IA)</p>
                  <CopyableCredential label="E-mail" value="prof@email.com" />
                  <CopyableCredential label="Senha" value="Prof@123" />
                </div>
                <div className="bg-warm p-4 rounded-xl border border-brand-100 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Responsável / Pais</p>
                  <CopyableCredential label="E-mail" value="resp@email.com" />
                  <CopyableCredential label="Senha" value="Resp@123" />
                </div>
                <div className="bg-warm p-4 rounded-xl border border-brand-100 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Auxiliar de Sala</p>
                  <CopyableCredential label="E-mail" value="aux@email.com" />
                  <CopyableCredential label="Senha" value="Aux@123" />
                </div>
              </div>

              <a
                href="https://meueloescola.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-800 transition-all active:scale-[0.98] shadow-elevated"
              >
                Acessar Plataforma Agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;