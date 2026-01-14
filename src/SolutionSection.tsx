import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Apresentando o Elo Escola
            </h2>
            <div className="text-lg text-blue-900 leading-relaxed mt-8">
              <p className="mb-6">
                Para resolver essa desconexão e trazer mais tranquilidade e participação para o seu dia a dia,
                apresentamos o <strong className="text-blue-900">Elo Escola</strong>. Mais que uma plataforma, o Elo Escola é a ponte digital
                que une família e escola de forma simples, segura e eficiente.
              </p>
              <p>
                Criamos um <strong className="text-blue-900">elo</strong> de comunicação e confiança, permitindo que você
                acompanhe de perto cada passo do desenvolvimento do seu filho na educação infantil, fortalecendo
                a parceria essencial para um crescimento feliz e saudável.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/app-tela-login.png"
              alt="Plataforma Elo Escola em um dispositivo"
              className="w-full max-w-xs rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
