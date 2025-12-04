import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-6 mt-8">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Os dados do meu filho estão seguros no Elo Escola?
            </h3>
            <p className="text-blue-900">
              Sim, a segurança dos dados é nossa prioridade máxima. Utilizamos protocolos de segurança avançados,
              criptografia e seguimos rigorosamente as leis de proteção de dados (como a LGPD) para garantir que
              todas as informações estejam protegidas e acessíveis apenas por usuários autorizados (pais/responsáveis
              vinculados e equipe escolar designada).
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Como começo a usar o Elo Escola se minha escola já o adotou?
            </h3>
            <p className="text-blue-900">
              É muito simples! Após a escola ativar sua conta, você receberá um link de acesso exclusivo no seu e-mail.
              Clique no link, confirme seus dados e pronto! Você terá acesso imediato à plataforma web do Elo Escola
              para acompanhar a rotina do seu filho em qualquer dispositivo com internet.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Posso acessar o Elo Escola de qualquer dispositivo?
            </h3>
            <p className="text-blue-900">
              Sim, o Elo Escola é uma plataforma web responsiva que funciona perfeitamente em computadores,
              tablets e smartphones. Você pode acessá-la de onde estiver, precisando apenas de conexão com a internet
              e seu navegador preferido.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-xl p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              O Elo Escola tem algum custo para os pais?
            </h3>
            <p className="text-blue-900">
              Não, o acesso dos pais ao Elo Escola é completamente gratuito! Apenas a escola contrata a plataforma
              como solução de gestão e comunicação. Os pais e responsáveis recebem acesso automático sem nenhum custo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
