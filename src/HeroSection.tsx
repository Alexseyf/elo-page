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
    <section className="h-auto bg-white text-blue-900 py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl mt-24 md:mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Elo Escola: A Conexão Essencial entre Você e o Universo Escolar do Seu Filho.
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
          Acompanhe a rotina, comunique-se com a escola e participe de cada descoberta do seu pequeno na educação infantil. Tudo na palma da sua mão, fortalecendo o elo mais importante: o seu com ele.
        </p>
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-900  hover:bg-blue-800  text-blue-text font-bold py-3 px-8 rounded-full text-lg transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            Conheça o Elo Escola
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video">
              <video 
                src="/src/images/elo-video.mp4" 
                className="w-full h-full object-contain"
                controls
                autoPlay
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
