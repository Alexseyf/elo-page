import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
          Como Funciona
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
          <div className="flex-1">
            <p className="text-lg text-blue-900 mb-8">
              Começar a usar o Elo é muito simples e rápido, criando a ponte entre você e a escola em poucos passos:
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Faça seu Cadastro</h3>
                  <p className="text-blue-900">
                    Preencha seus dados de forma simples e segura. Você só precisa de um email válido para começar a conectar-se com a escola.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Receba o Link por Email</h3>
                  <p className="text-blue-900">
                    Após o cadastro, você receberá um link de acesso exclusivo no seu email. Clique nele para confirmar sua conta e acessar a plataforma.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Acesse a Plataforma</h3>
                  <p className="text-blue-900">
                    Pronto! Agora você tem acesso total à plataforma web do Elo. Todas as informações sobre a rotina, atividades, comunicados e o desenvolvimento do seu filho estão disponíveis. Fortaleça o <strong>elo</strong> com o universo escolar do seu pequeno.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="/images/telas.png"
              alt="Telas do aplicativo Elo"
              className="w-full max-w-2xl rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
