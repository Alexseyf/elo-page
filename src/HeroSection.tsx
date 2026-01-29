import React from 'react';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="h-auto bg-gradient-to-br from-blue-600 to-teal-400 text-white py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto max-w-6xl mt-24 md:mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white drop-shadow-sm">
          Elo Escola: A Conexão Essencial entre Você e o Universo Escolar do Seu Filho.
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-blue-50 font-medium">
          Acompanhe a rotina, fique por dentro das novidades da escola e participe de cada descoberta do seu pequeno na educação infantil. Tudo na palma da sua mão, fortalecendo o elo mais importante: o seu com ele.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-blue-900 font-bold py-4 px-12 rounded-full text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 transform hover:-translate-y-1 flex items-center justify-center"
          >
            Acessar Ambiente de Teste
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl p-8" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">Dados de Acesso</h2>
            <p className="text-center text-blue-600 mb-8">Utilize as credenciais abaixo para testar a plataforma.</p>

            <div className="space-y-6">
              {/* Link de Acesso */}
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                <p className="text-sm text-blue-600 font-semibold mb-1">URL de Acesso</p>
                <a
                  href="https://elo-escola-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-700 font-bold hover:underline"
                >
                  elo-escola-frontend.vercel.app
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Admin Card */}
                <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h3 className="font-bold text-slate-800">Administrador</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <CopyableCredential label="Email" value="admin@email.com" />
                    <CopyableCredential label="Senha" value="Admin@123" />
                  </div>
                </div>

                {/* Professor Card */}
                <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <h3 className="font-bold text-slate-800">Professor</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <CopyableCredential label="Email" value="prof@email.com" />
                    <CopyableCredential label="Senha" value="Prof@123" />
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <a
                  href="https://elo-escola-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
                >
                  Ir para Plataforma
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CopyableCredential: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <span className="text-slate-500 block text-xs mb-1">{label}</span>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 px-3 py-2 rounded transition-all group"
        title="Clique para copiar"
      >
        <code className="text-slate-700 font-mono text-sm">{value}</code>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
          {copied ? (
            <span className="flex items-center text-green-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Copiado
            </span>
          ) : (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              Copiar
            </span>
          )}
        </span>
      </button>
    </div>
  );
};

export default HeroSection;
