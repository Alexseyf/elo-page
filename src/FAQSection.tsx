import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-text mb-4 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-6 mt-8">
          {/* FAQ Item 1 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-text mb-3">
              Os dados do meu filho estão seguros no Elo Escola?
            </h3>
            <p className="text-gray-700">
              Sim, a segurança dos dados é nossa prioridade máxima. Utilizamos protocolos de segurança avançados,
              criptografia e seguimos rigorosamente as leis de proteção de dados (como a LGPD) para garantir que
              todas as informações estejam protegidas e acessíveis apenas por usuários autorizados (pais/responsáveis
              vinculados e equipe escolar designada).
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-text mb-3">
              Como começo a usar o Elo Escola se minha escola já o adotou?
            </h3>
            <p className="text-gray-700">
              É simples! A escola fornecerá as instruções de primeiro acesso através do seu e-mail.
              Basta baixar o aplicativo Elo na sua loja de aplicativos (App Store ou Google Play),
              e inserir as informações fornecidas pela escola para acessar o seu perfil.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-text mb-3">
              Posso acessar o Elo Escola de qualquer dispositivo?
            </h3>
            <p className="text-gray-700">
              Sim, o Elo é um aplicativo móvel disponível para smartphones e tablets (iOS e Android).
              Você pode acessá-lo de onde estiver, precisando apenas de conexão com a internet.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-text mb-3">
              O aplicativo tem algum custo para os pais?
            </h3>
            <p className="text-gray-700">
              Geralmente, o acesso dos pais ao aplicativo está incluído no serviço contratado pela escola.
              Verifique as condições diretamente com a instituição de ensino do seu filho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
