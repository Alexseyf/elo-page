import React from 'react';

const PricingElo: React.FC = () => {
  return (
    <section id="Pricing" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-text mb-4">
            Planos Flexíveis Pensados para sua Escola
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No Elo Escola, entendemos que cada escola é única. Por isso, oferecemos modelos de contratação adaptáveis à sua realidade, seja escolhendo módulos específicos ou pacotes por volume de alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="price-card bg-white rounded-xl shadow-lg p-8 flex flex-col transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 text-center">
              <i className="fas fa-puzzle-piece text-4xl text-blue-icon mb-4"></i>
              <h3 className="text-2xl font-semibold text-blue-text mb-2">Monte seu Plano Elo</h3>
              <p className="text-gray-600">Flexibilidade total para sua escola.</p>
            </div>
            <p className="text-gray-700 mb-6 flex-grow">
              Escolha apenas os módulos que fazem sentido para as necessidades da sua instituição. Pague somente pelo que usar e crie um pacote Elo totalmente personalizado. Ideal para escolas que buscam soluções específicas.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Comunicação Pais-Escola
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Acompanhamento da Rotina
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Agenda Digital
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Mural de Atividades
              </li>
              <li className="flex items-start">
                <i className="fas fa-plus-circle text-blue-icon mr-3 mt-1"></i> E muitos outros módulos!
              </li>
            </ul>
            <a
              href="#contato"
              className="cta-button w-full bg-blue-background hover:bg-primary-blue-dark text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300 ease-in-out hover:transform hover:-translate-y-0.5"
            >
              Consultar Módulos
            </a>
          </div>

          <div className="price-card bg-white rounded-xl shadow-lg p-8 flex flex-col border-2 border-blue-background relative transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-background text-white text-sm font-semibold px-4 py-1 rounded-full">Mais Popular</div>
            <div className="mb-6 text-center">
              <i className="fas fa-users text-4xl text-blue-icon mb-4"></i>
              <h3 className="text-2xl font-semibold text-blue-text mb-2">Pacote Elo Essencial</h3>
              <p className="text-gray-600">Ideal para escolas menores.</p>
            </div>
            <p className="text-gray-700 mb-2 text-center">Até <strong className="text-blue-icon">100 alunos</strong></p>
            <p className="text-gray-700 mb-6 flex-grow">
              Um pacote completo com as funcionalidades essenciais para otimizar a comunicação e o acompanhamento diário, pensado para escolas em crescimento.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Todas as funcionalidades do plano modular
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Suporte prioritário
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Treinamento inicial
              </li>
            </ul>
            <a
              href="#contato"
              className="cta-button w-full bg-blue-background hover:bg-primary-blue-dark text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300 ease-in-out hover:transform hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </a>
          </div>

          <div className="price-card bg-white rounded-xl shadow-lg p-8 flex flex-col transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 text-center">
              <i className="fas fa-school text-4xl text-blue-icon mb-4"></i>
              <h3 className="text-2xl font-semibold text-blue-text mb-2">Pacote Elo Completo</h3>
              <p className="text-gray-600">Para escolas com mais alunos.</p>
            </div>
            <p className="text-gray-700 mb-2 text-center">A partir de <strong className="text-blue-icon">101 alunos</strong></p>
            <p className="text-gray-700 mb-6 flex-grow">
              Solução robusta para instituições maiores, com todas as funcionalidades e suporte dedicado para garantir a melhor experiência para toda a comunidade escolar.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Todas as funcionalidades do Elo Essencial
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Módulos avançados inclusos
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent-green mr-3 mt-1"></i> Gerente de contas dedicado
              </li>
            </ul>
            <a
              href="#contato"
              className="cta-button w-full bg-blue-background hover:bg-primary-blue-dark text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300 ease-in-out hover:transform hover:-translate-y-0.5"
            >
              Falar com Especialista
            </a>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 text-md">
            <i className="fas fa-info-circle mr-2 text-blue-icon"></i> Não encontrou o plano ideal? <a href="#contato" className="text-blue-icon hover:underline font-semibold">Entre em contato</a>! Podemos criar uma solução sob medida para sua escola.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingElo;
