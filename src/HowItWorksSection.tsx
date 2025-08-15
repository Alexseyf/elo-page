import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-text mb-4 text-center">
          Como Funciona
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-8">
              Começar a usar o Elo é muito simples e rápido, criando a ponte entre você e a escola em poucos passos:
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-background text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-text mb-2">A Escola Adota</h3>
                  <p className="text-gray-700">
                    A instituição de ensino do seu filho implementa o Elo como sua plataforma oficial de comunicação e acompanhamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-background text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-text mb-2">Você Baixa o App</h3>
                  <p className="text-gray-700">
                    Assim que a escola liberar o acesso, pais e responsáveis fazem o download gratuito do aplicativo Elo na App Store ou Google Play.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-background text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-text mb-2">A Conexão Acontece</h3>
                  <p className="text-gray-700">
                    Faça seu login seguro e pronto! Todas as informações importantes sobre a rotina, atividades, comunicados e o desenvolvimento do seu filho começam a fluir diretamente para a palma da sua mão, fortalecendo o <strong>elo</strong> com o universo escolar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="/images/telas.png"
              alt="Telas do aplicativo Elo"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
