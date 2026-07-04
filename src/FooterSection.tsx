import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Reveal from './Reveal';

const FooterSection: React.FC = () => {
  return (
    <Reveal>
    <footer className="bg-slate text-white py-20 px-4 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate shadow-lg rotate-3 group hover:rotate-0 transition-transform cursor-pointer">
                <span className="font-black text-xl">E</span>
              </div>
              <span className="text-3xl font-bold tracking-tighter">
                Elo<span className="text-amber">Escola</span>
              </span>
            </div>

            <p className="text-white/60 mb-8 font-medium max-w-md text-center md:text-left leading-relaxed">
              A plataforma SaaS inteligente que organiza sua escola e conecta as famílias em um só lugar. A próxima geração da gestão escolar infantil.
            </p>
            <p className="text-xs text-white/30 font-bold uppercase tracking-widest text-center md:text-left">
              © {new Date().getFullYear()} Elo Escola. Todos os direitos reservados.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber mb-6">Explorar</h3>
            <ul className="space-y-4">
              {['Sobre Nós', 'Para Escolas', 'Para Pais', 'Contato'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-amber transition-colors font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Políticas */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber mb-6">Políticas</h3>
            <ul className="space-y-4">
              {['Privacidade', 'Termos de Uso', 'Cookies', 'Isolação de Dados'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-amber transition-colors font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold uppercase tracking-widest text-white/40">
            Siga-nos nas redes
          </p>
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber hover:text-slate transition-all text-white/60">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber hover:text-slate transition-all text-white/60">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber hover:text-slate transition-all text-white/60">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </Reveal>
  );
};

export default FooterSection;