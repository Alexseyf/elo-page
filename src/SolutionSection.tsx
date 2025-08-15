import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-text mb-4 text-center">
          Apresentando o Elo Escola
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed mt-8">
          <p className="mb-6">
            Para resolver essa desconexão e trazer mais tranquilidade e participação para o seu dia a dia,
            apresentamos o <strong className="text-blue-text">Elo Escola</strong>. Mais que um aplicativo, o Elo Escola é a ponte digital
            que une família e escola de forma simples, segura e eficiente.
          </p>
          <p>
            Criamos um <strong className="text-blue-text">elo</strong> de comunicação e confiança, permitindo que você
            acompanhe de perto cada passo do desenvolvimento do seu filho na educação infantil, fortalecendo
            a parceria essencial para um crescimento feliz e saudável.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            src="/images/app-tela-login.png"
            alt="Aplicativo Elo em um smartphone"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
