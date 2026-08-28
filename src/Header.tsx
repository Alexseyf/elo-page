import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Problema', href: '#problema' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Demonstração', href: '#demonstracao' },
    { name: 'Comparativo', href: '#comparativo' },
    { name: 'Calculadora', href: '#roi' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-100 py-3 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-black text-brand-900 tracking-tight flex items-center gap-1.5">
            <span>Elo</span>
            <span className="text-accent">Escola</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-brand-600 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5553991280129?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Elo%20Escola%20e%20como%20ele%20pode%20ajudar%20na%20minha%20gestão%20escolar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#128C7E] transition-all active:scale-[0.98] shadow-subtle"
              aria-label="Falar no WhatsApp especializado"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606-.134-.133.298-.447.448-.671.149-.224.198-.385.298-.636.099-.251.049-.471-.024-.619-.074-.149-.672-1.62-.922-2.221-.244-.588-.492-.51-.67-.52l-.568-.01c-.198 0-.521.074-.794.373-.272.298-1.04 1.018-1.04 2.484s1.07 2.885 1.218 3.085c.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar no WhatsApp
            </a>
          </nav>

          <button
            className="lg:hidden text-brand-900 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-100 p-6 shadow-elevated animate-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col space-y-1" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold text-brand-700 min-h-[44px] flex items-center hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-brand-100 my-3" />
              <a
                href="https://wa.me/5553991280129?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Elo%20Escola%20e%20como%20ele%20pode%20ajudar%20na%20minha%20gestão%20escolar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606-.134-.133.298-.447.448-.671.149-.224.198-.385.298-.636.099-.251.049-.471-.024-.619-.074-.149-.672-1.62-.922-2.221-.244-.588-.492-.51-.67-.52l-.568-.01c-.198 0-.521.074-.794.373-.272.298-1.04 1.018-1.04 2.484s1.07 2.885 1.218 3.085c.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar com Consultor
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
