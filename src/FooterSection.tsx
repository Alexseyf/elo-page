import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="text-2xl font-extrabold tracking-tight">
                Elo<span className="text-accent">Escola</span>
              </span>
            </div>

            <p className="text-white/50 font-medium max-w-md text-center md:text-left leading-relaxed text-sm">
              A plataforma SaaS inteligente que organiza sua escola e conecta as famílias em um só lugar. A próxima geração da gestão escolar infantil.
            </p>
            <p className="text-xs text-white/50 font-semibold uppercase tracking-widest text-center md:text-left mt-6">
              &copy; {new Date().getFullYear()} Elo Escola. Todos os direitos reservados.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Explorar</h3>
            <ul className="space-y-3">
              {['Sobre Nós', 'Para Escolas', 'Para Pais', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-accent transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Políticas</h3>
            <ul className="space-y-3">
              {['Privacidade', 'Termos de Uso', 'Cookies', 'Isolação de Dados'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-accent transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Siga-nos nas redes
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Twitter, label: 'Twitter' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent hover:text-brand-900 transition-all text-white/40"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
