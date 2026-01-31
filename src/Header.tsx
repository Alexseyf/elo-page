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
    { name: 'Comparativo', href: '#comparativo' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Calculadora', href: '#roi' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-forest/5 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center text-ochre shadow-lg rotate-3 group hover:rotate-0 transition-transform cursor-pointer">
              <span className="font-black text-xl">E</span>
            </div> */}
            <a href="#" className="text-2xl font-black text-forest tracking-tighter">
              Elo<span className="text-ochre">Escola</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-forest/70 hover:text-ochre transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5553991280129?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Elo%20Escola%20e%20como%20ele%20pode%20ajudar%20na%20minha%20gestão%20escolar."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-green-500/20 active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606-.134-.133.298-.447.448-.671.149-.224.198-.385.298-.636.099-.251.049-.471-.024-.619-.074-.149-.672-1.62-.922-2.221-.244-.588-.492-.51-.67-.52l-.568-.01c-.198 0-.521.074-.794.373-.272.298-1.04 1.018-1.04 2.484s1.07 2.885 1.218 3.085c.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp especializado
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-forest"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-forest/10 p-6 animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-forest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-forest/5" />
              <a
                href="https://wa.me/5553991280129?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Elo%20Escola%20e%20como%20ele%20pode%20ajudar%20na%20minha%20gestão%20escolar."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606-.134-.133.298-.447.448-.671.149-.224.198-.385.298-.636.099-.251.049-.471-.024-.619-.074-.149-.672-1.62-.922-2.221-.244-.588-.492-.51-.67-.52l-.568-.01c-.198 0-.521.074-.794.373-.272.298-1.04 1.018-1.04 2.484s1.07 2.885 1.218 3.085c.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp especializado
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
