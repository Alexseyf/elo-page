import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-emerald-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
          Benefícios Detalhados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Benefício 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Rotina Infantil na Palma da Mão</h3>
            </div>
            <p className="text-blue-900 leading-relaxed">
              Com o Elo Escola, a tranquilidade acompanha você durante todo o dia. Acesse facilmente informações detalhadas sobre a alimentação do seu filho (o que e quanto comeu), os momentos de descanso (horários e qualidade do sono) e até mesmo sobre sua disposição e como ele interagiu nas brincadeiras. Receba um resumo diário completo e sinta a segurança de saber que seu pequeno está bem cuidado, mesmo à distância. É a informação que traz paz ao seu coração.
            </p>
          </div>

          {/* Benefício 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Acompanhamento Pedagógico Integrado</h3>
            </div>
            <p className="text-blue-900 leading-relaxed">
              Fique por dentro do planejamento escolar de forma simples e acessível. Com o Elo Escola, você acessa o cronograma de atividades, visualiza os objetivos de aprendizado da BNCC trabalhados em cada aula e acompanha os registros diários feitos pelos professores. Tudo para garantir que você esteja sempre conectado com a evolução educacional do seu filho, sem ruídos e com total transparência.
            </p>
          </div>

          {/* Benefício 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Desenvolvimento de Perto</h3>
            </div>
            <p className="text-blue-900 leading-relaxed">
              Participe ativamente da jornada de aprendizado do seu filho! Com o Elo Escola, você visualiza o calendário escolar, fica por dentro dos eventos e projetos pedagógicos desenvolvidos em sala. Tenhas acesso às atividades realizadas, acesse relatórios de desenvolvimento e acompanhe as conquistas e a evolução do seu pequeno. Celebre cada nova descoberta e aprendizado junto com ele.
            </p>
          </div>

          {/* Benefício 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Elo Escola: O Laço que Fortalece</h3>
            </div>
            <p className="text-blue-900 leading-relaxed">
              O nome <strong>Elo Escola</strong> representa nossa missão: criar uma conexão genuína e forte entre a família e o ambiente escolar. Acreditamos que essa parceria é fundamental para o desenvolvimento pleno e feliz da criança. Ao usar o Elo Escola, você não apenas acompanha a rotina, mas se torna parte ativa da comunidade escolar, construindo um laço de confiança e colaboração com os educadores. Juntos, criamos um ambiente de aprendizado mais acolhedor, seguro e estimulante para o seu filho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
