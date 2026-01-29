import React from 'react';

const SchoolManagerFeatures: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 font-display">
                        Gestão Inteligente e Prática para sua Escola
                    </h2>
                    <p className="text-xl text-blue-800 max-w-3xl mx-auto leading-relaxed">
                        Simplifique a administração escolar e tome decisões estratégicas com ferramentas pensadas para o dia a dia do gestor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Cronograma */}
                    <div className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-md border border-blue-100">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">Cronograma Simplificado</h3>
                        <p className="text-blue-800 leading-relaxed">
                            Esqueça os avisos em papel. Publique o cronograma escolar e eventos importantes digitalmente, garantindo que 100% dos pais estejam informados instantaneamente sobre datas e atividades.
                        </p>
                    </div>

                    {/* Feature 2: Diários */}
                    <div className="bg-orange-50 hover:bg-orange-100 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-md border border-orange-100">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-500 mb-6 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">Rotina Fácil</h3>
                        <p className="text-blue-800 leading-relaxed">
                            Otimize o tempo dos professores com diários digitais de preenchimento rápido e intuitivo. Nutrição, sono e atividades registrados em segundos, melhorando a comunicação diária com as famílias.
                        </p>
                    </div>

                    {/* Feature 3: Financeiro */}
                    <div className="bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-md border border-emerald-100">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">Visão Estratégica</h3>
                        <p className="text-blue-800 leading-relaxed">
                            Tenha o controle na palma da mão com relatórios financeiros detalhados por turma. Identifique inadimplência, analise a saúde financeira e tome decisões baseadas em dados reais para o crescimento da sua escola.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolManagerFeatures;
