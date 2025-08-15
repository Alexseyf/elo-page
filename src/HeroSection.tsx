import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-auto bg-gradient-to-r from-blue-background to-blue-background text-white py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Elo Escola: A Conexão Essencial entre Você e o Universo Escolar do Seu Filho.
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
          Acompanhe a rotina, comunique-se com a escola e participe de cada descoberta do seu pequeno na educação infantil. Tudo na palma da sua mão, fortalecendo o elo mais importante: o seu com ele.
        </p>
        <div className="mt-10 flex justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-text font-bold py-3 px-8 rounded-full text-lg transition-all">
            Conheça o Elo Escola
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
