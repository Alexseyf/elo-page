import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-blue-background text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center text-center">
            <img className="h-16 w-auto mb-2" src="/images/logo.png" alt="Logo Elo" />

            <p className="text-blue-200 mb-6">Conectando famílias e escolas.</p>
            <p className="text-sm text-blue-300">© {new Date().getFullYear()} Elo Escola. Todos os direitos reservados.</p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-100">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Para Escolas</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Para Pais</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-100">Políticas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-10 pt-8 border-t border-blue-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-300 mb-4 md:mb-0">
            Siga-nos nas redes sociais
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
              </svg>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.2c3.2,0,3.6,0,4.8.1,3.3.1,4.8,1.7,4.9,4.9.1,1.3.1,1.6.1,4.8s0,3.6-.1,4.8c-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.8.1s-3.6,0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-3.2,1.7-4.8,4.9-4.9,1.2-.1,1.6-.1,4.8-.1Zm0-2c-3.3,0-3.7,0-4.9.1C2.7.5.5,2.6.4,7.1c-.1,1.3-.1,1.6-.1,4.9s0,3.7.1,4.9c.1,4.5,2.3,6.7,6.8,6.8,1.3.1,1.6.1,4.9.1s3.7,0,4.9-.1c4.5-.1,6.7-2.3,6.8-6.8.1-1.3.1-1.6.1-4.9s0-3.7-.1-4.9C22.3,2.6,20.1.5,15.6.4,14.3.3,14,.3,10.7.3Zm0,5.4A5.9,5.9,0,1,0,16.6,12,5.9,5.9,0,0,0,10.7,6.1Zm0,9.8A3.9,3.9,0,1,1,14.6,12,3.9,3.9,0,0,1,10.7,15.9Z" />
              </svg>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.2,5.9a8.2,8.2,0,0,1-2.4.7,4.1,4.1,0,0,0,1.8-2.3,8.2,8.2,0,0,1-2.6,1,4.1,4.1,0,0,0-7,3.8A11.7,11.7,0,0,1,3.5,4.4,4.1,4.1,0,0,0,4.7,9.8a4.1,4.1,0,0,1-1.9-.5v0a4.1,4.1,0,0,0,3.3,4.1,4.2,4.2,0,0,1-1.9.1,4.1,4.1,0,0,0,3.9,2.9,8.3,8.3,0,0,1-5.1,1.7A11.7,11.7,0,0,0,20.3,9.7,8.4,8.4,0,0,0,22.2,5.9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;