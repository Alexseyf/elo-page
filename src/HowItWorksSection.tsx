import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
          Como Funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6 shadow-md">
              1
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Escola se Cadastra</h3>
            <p className="text-blue-900">
              A escola faz seu cadastro junto à plataforma Elo Escola, configurando seu ambiente digital personalizado.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6 shadow-md">
              2
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Cadastro dos Responsáveis</h3>
            <p className="text-blue-900">
              A secretaria da escola realiza o cadastro dos dados dos pais e responsáveis no sistema.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6 shadow-md">
              3
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Acesso por E-mail</h3>
            <p className="text-blue-900">
              Os responsáveis recebem por e-mail as instruções de primeiro acesso e o link para definir sua senha.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6 shadow-md">
              4
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Tudo Pronto!</h3>
            <p className="text-blue-900">
              Pronto! Tudo configurado para você acompanhar a rotina escolar, atividades, cronograma e comunicados do seu filho.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="/images/telas.png"
            alt="Telas do aplicativo Elo Escola"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
