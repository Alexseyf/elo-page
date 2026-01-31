import React, { useState } from 'react';
import { Shield, BookOpen, UserCircle, ArrowRight, X, Copy, Check } from 'lucide-react';

const CopyableCredential: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-black uppercase tracking-widest text-forest/40 ml-1">{label}</span>
      <button
        onClick={handleCopy}
        className="group flex items-center justify-between bg-cream border border-forest/5 hover:border-ochre/30 p-3 rounded-xl transition-all active:scale-[0.98]"
      >
        <code className="text-forest font-bold text-sm">{value}</code>
        {copied ? (
          <Check className="w-4 h-4 text-green-600" />
        ) : (
          <Copy className="w-4 h-4 text-forest/20 group-hover:text-ochre transition-colors" />
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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {slides.map((slide, index) => (
        <img
          key={slide}
          src={slide}
          alt={`App Screen ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}
        />
      ))}
      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-8 bg-forest' : 'w-2 bg-forest/20'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 overflow-hidden bg-cream">
      {/* Geometric Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-12 left-12 w-32 h-32 border-4 border-ochre/20 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-terracotta/30 rotate-45 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-forest mb-6 tracking-tight leading-[1.1]">
              Elo Escola: Gestão que <span className="text-terracotta">organiza</span> e <span className="text-ochre">conecta</span>.
            </h1>

            <p className="text-xl md:text-2xl text-forest-light mb-10 max-w-3xl font-medium leading-relaxed">
              A plataforma SaaS inteligente que organiza sua escola e conecta as famílias em um só lugar. Educação infantil com transparência e eficiência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full lg:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative bg-ochre hover:bg-[#D48F2A] text-white font-bold py-5 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-ochre/20 flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
              >
                Experimentar Gestão Inteligente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Role Segmentation Icons */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-forest/10 w-full lg:w-3/4">
              <div className="flex flex-col items-center lg:items-start gap-3 group">
                <div className="p-3 bg-cream border-2 border-forest/10 rounded-2xl text-forest group-hover:border-forest/50 transition-all">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest/60">Para Diretores</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 group">
                <div className="p-3 bg-cream border-2 border-forest/10 rounded-2xl text-forest group-hover:border-forest/50 transition-all">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest/60">Para Professores</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 group">
                <div className="p-3 bg-cream border-2 border-forest/10 rounded-2xl text-forest group-hover:border-forest/50 transition-all">
                  <UserCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest/60">Para Pais</span>
              </div>
            </div>
          </div>

          {/* Animated Mockup Area - With Bezel and Padding */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-[280px] mx-auto aspect-[9/18] bg-[#1A1A1A] rounded-3xl shadow-2xl border-[4px] border-[#1A1A1A] group p-1">
              {/* Internal Screen Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-white shadow-inner">
                {/* Simulated Header */}
                <div className="absolute top-0 w-full h-8 bg-forest/5 flex items-center px-4 gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-ochre/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-forest/20"></div>
                </div>

                <AppSlideshow />

                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floatings */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 py-3 px-6 bg-forest text-white rounded-xl shadow-xl flex items-center gap-3 animate-float whitespace-nowrap z-20">
              <Shield className="w-5 h-5 text-ochre" />
              <span className="text-sm font-bold">100% Seguro</span>
            </div>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-forest/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal container */}
          <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-300 z-10 my-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-3 bg-white/80 backdrop-blur-sm sm:bg-transparent hover:bg-forest/5 rounded-full text-forest/40 hover:text-forest transition-colors shadow-lg sm:shadow-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12 bg-cream text-center">
              <div className="w-20 h-20 bg-forest rounded-3xl flex items-center justify-center mx-auto mb-6 text-ochre shadow-xl">
                <Shield className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-extrabold text-forest mb-2">Bem-vindo à Escola Modelo</h2>
              <p className="text-forest/60 mb-8 font-medium">Use as credenciais abaixo para testar o ambiente já populado.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-8">
                <div className="bg-white p-6 rounded-2xl border border-forest/5 shadow-sm space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-ochre">Administrativo</p>
                  <CopyableCredential label="E-mail" value="admin@email.com" />
                  <CopyableCredential label="Senha" value="Admin@123" />
                </div>

                <div className="bg-white p-6 rounded-2xl border border-forest/5 shadow-sm space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-terracotta">Professor</p>
                  <CopyableCredential label="E-mail" value="prof@email.com" />
                  <CopyableCredential label="Senha" value="Prof@123" />
                </div>

                <div className="bg-white p-6 rounded-2xl border border-forest/5 shadow-sm space-y-4 sm:col-span-2 lg:col-span-1">
                  <p className="text-xs font-black uppercase tracking-widest text-forest">Responsável</p>
                  <CopyableCredential label="E-mail" value="resp@email.com" />
                  <CopyableCredential label="Senha" value="Resp@123" />
                </div>
              </div>

              <a
                href="https://elo-escola-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-forest text-white font-black py-5 px-12 rounded-2xl text-lg hover:shadow-xl hover:shadow-forest/20 transition-all active:scale-95 group"
              >
                Acessar Plataforma Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default HeroSection;
