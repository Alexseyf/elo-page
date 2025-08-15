import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-text mb-4 text-center">
          Reconhece esses desafios?
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            A rotina agitada deixa pouco tempo para acompanhar de perto a vida escolar do seu filho?
            A comunicação com a escola parece fragmentada, perdida em agendas de papel ou grupos de
            mensagens confusos? Você gostaria de ter mais visibilidade sobre o que seu pequeno aprende,
            come, como dorme e se diverte na creche ou pré-escola, mas sente que essa informação nem
            sempre chega até você de forma clara e organizada? Essa falta de conexão pode gerar
            insegurança e a sensação de estar perdendo momentos importantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
