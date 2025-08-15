import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-background to-blue-background text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Pronto para fortalecer o elo entre sua escola e as famílias?
        </h2>

        <div className="mb-10 mt-8">
          <p className="text-lg mb-8">
            Se você é gestor escolar ou educador e deseja transformar a comunicação,
            o acompanhamento e a parceria com os pais, o Elo é a solução ideal.
            Leve mais praticidade, segurança e engajamento para a sua comunidade escolar.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-text font-bold py-3 px-8 rounded-full text-lg transition-all">
            Solicite uma Demonstração Gratuita
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white">
          <h3 className="text-xl font-semibold mb-4">É pai ou responsável?</h3>
          <p className="mb-6">
            Se sua escola ainda não utiliza o Elo, indique nossa solução!
            E se o aplicativo já estiver disponível para download individual na sua região:
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-blue-text font-bold py-3 px-8 rounded-full text-lg transition-all flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3Z" />
              </svg>
              Baixe na App Store
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-text font-bold py-3 px-8 rounded-full text-lg transition-all flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Baixe no Google Play
            </button>
          </div>

          <p className="mt-8 italic">
            Conecte-se hoje mesmo ao universo escolar do seu filho com o Elo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
