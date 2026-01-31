import React from 'react';
import { Wallet, BookCheck, ClipboardList, CalendarDays, ArrowRight } from 'lucide-react';

const FeaturesStream: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-forest mb-6 tracking-tight">
                        O Coração do <span className="text-ochre">Elo Escola</span>
                    </h2>
                    <p className="text-xl text-forest/60 max-w-2xl mx-auto font-medium">
                        Ferramentas poderosas desenhadas especificamente para os desafios da educação infantil moderna.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Feature 1: Financeiro */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-ochre/5 rounded-[3rem] -rotate-3 pointer-events-none"></div>
                            <div className="relative bg-white border-2 border-forest/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl">
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center justify-between p-4 md:p-5 bg-cream rounded-3xl border-2 border-forest/5 shadow-sm group hover:border-forest/20 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-forest rounded-2xl flex items-center justify-center text-ochre shadow-lg group-hover:scale-105 transition-transform">
                                                <Wallet className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-forest/40">Relatório Consolidado</p>
                                                <p className="font-black text-forest text-base md:text-lg">Berçário 1</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                                        <div className="p-4 md:p-5 bg-ochre/5 rounded-3xl border-2 border-ochre/20 flex justify-between items-center group hover:bg-ochre/10 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-ochre animate-pulse"></div>
                                                <p className="font-bold text-forest text-sm md:text-base">Total Entradas</p>
                                            </div>
                                            <p className="text-lg md:text-xl font-black text-ochre">R$ 14.200</p>
                                        </div>
                                        <div className="p-4 md:p-5 bg-terracotta/5 rounded-3xl border-2 border-terracotta/20 flex justify-between items-center group hover:bg-terracotta/10 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-terracotta"></div>
                                                <p className="font-bold text-forest text-sm md:text-base">Total Despesas</p>
                                            </div>
                                            <p className="text-lg md:text-xl font-black text-terracotta">- R$ 8.450</p>
                                        </div>
                                    </div>

                                    <div className="pt-4 mt-2 border-t border-forest/5 flex justify-between items-end">
                                        <div>
                                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-forest/40">Margem por Turma</p>
                                            <p className="text-2xl md:text-3xl font-black text-forest">R$ 5.750</p>
                                        </div>
                                        <div className="px-3 py-1 bg-forest text-ochre text-[9px] md:text-[10px] font-black rounded-full uppercase tracking-tighter">
                                            Performance Alta
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-16 h-16 bg-ochre/10 rounded-2xl flex items-center justify-center text-ochre mb-8">
                                <Wallet className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-forest mb-6 tracking-tight">Módulo Financeiro <br />de Alto Impacto</h3>
                            <p className="text-lg text-forest-light mb-8 leading-relaxed font-medium">
                                Gestão financeira estratégica com foco em resultados. Registre entradas de mensalidades e despesas por turma, com <strong>rateio inteligente de custos gerais</strong> da escola, garantindo relatórios de lucratividade precisos para decisões seguras.
                            </p>
                            <ul className="space-y-4">
                                {['Relatórios automáticos por turma', 'Rateio de custos fixos e variáveis', 'Análise de lucratividade real'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-forest font-bold">
                                        <div className="w-5 h-5 bg-ochre/20 rounded-full flex items-center justify-center text-ochre">
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: BNCC */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta mb-8">
                                <BookCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-forest mb-6 tracking-tight">Diferencial BNCC <br />Nativo</h3>
                            <p className="text-lg text-forest-light mb-8 leading-relaxed font-medium">
                                Elimine a burocracia do planejamento pedagógico. O Elo Escola já vem <strong>pré-configurado com os Objetivos de Aprendizagem</strong> e Campos de Experiência da BNCC, facilitando o trabalho do professor.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                {['Eu, o outro, o nós', 'Corpo, gestos, mov.', 'Traços, sons, cores'].map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-terracotta/5 border border-terracotta/20 rounded-full text-sm font-bold text-terracotta">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-terracotta/10 rounded-[3rem] rotate-3 pointer-events-none"></div>
                            <div className="relative bg-white border-2 border-forest/5 rounded-[2.5rem] p-8 shadow-xl">
                                <div className="space-y-4">
                                    <p className="text-sm font-black text-forest/40 uppercase tracking-widest">Planejamento do Dia</p>
                                    <div className="p-4 bg-cream rounded-2xl border-2 border-forest/5">
                                        <p className="font-bold text-forest mb-2">Campo de Experiência:</p>
                                        <p className="text-sm text-forest-light font-medium italic">"O eu, o outro e o nós"</p>
                                    </div>
                                    <div className="p-4 bg-forest rounded-2xl">
                                        <p className="text-xs font-bold text-ochre uppercase mb-1">Objetivo (EI01EO01)</p>
                                        <p className="text-xs text-white leading-relaxed">Perceber que suas ações têm efeitos nas outras crianças e nos adultos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Diário de Rotina */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-forest/5 rounded-[3rem] -rotate-2 pointer-events-none"></div>
                            <div className="relative bg-white border-2 border-forest/5 rounded-[2.5rem] p-8 shadow-xl grid grid-cols-2 gap-4">
                                <div className="p-6 bg-cream rounded-3xl flex flex-col items-center gap-2 border-2 border-forest/10 hover:border-forest/40 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-ochre/20 rounded-full flex items-center justify-center text-ochre">🍲</div>
                                    <span className="text-xs font-black text-forest">ALIMENTAÇÃO</span>
                                </div>
                                <div className="p-6 bg-cream rounded-3xl flex flex-col items-center gap-2 border-2 border-forest/10 hover:border-forest/40 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-ochre/20 rounded-full flex items-center justify-center text-ochre">💤</div>
                                    <span className="text-xs font-black text-forest">SONO</span>
                                </div>
                                <div className="p-6 bg-cream rounded-3xl flex flex-col items-center gap-2 border-2 border-forest/10 hover:border-forest/40 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-ochre/20 rounded-full flex items-center justify-center text-ochre">🎒</div>
                                    <span className="text-[10px] font-black text-forest text-center">ITENS PESSOAIS</span>
                                </div>
                                <div className="p-6 bg-cream rounded-3xl flex flex-col items-center gap-2 border-2 border-forest/10 hover:border-forest/40 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-ochre/20 rounded-full flex items-center justify-center text-ochre">✨</div>
                                    <span className="text-[10px] font-black text-forest text-center">DISPOSIÇÃO</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center text-forest mb-8">
                                <ClipboardList className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-forest mb-6 tracking-tight">Diário de Rotina <br />em Segundos</h3>
                            <p className="text-lg text-forest-light mb-8 leading-relaxed font-medium">
                                Não perca tempo com agendas físicas. Registre <strong>alimentação, sono, itens pessoais e disposição</strong> com poucos cliques. O Elo Escola otimiza o fluxo do professor para que o foco seja sempre na criança.
                            </p>
                            <div className="p-4 bg-ochre/10 rounded-2xl border-l-4 border-ochre inline-block">
                                <p className="text-sm font-bold text-forest">Economia diária de até 45 minutos por professor.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4: Cronograma */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-16 h-16 bg-ochre/10 rounded-2xl flex items-center justify-center text-ochre mb-8">
                                <CalendarDays className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-forest mb-6 tracking-tight">Eventos e <br />Calendário Escolar</h3>
                            <p className="text-lg text-forest-light mb-8 leading-relaxed font-medium">
                                Organize o cronograma da escola e feiras culturais em um só lugar. Notifique os pais sobre feriados e reuniões instantaneamente, garantindo alta participação das famílias.
                            </p>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-forest font-black flex items-center gap-2 group"
                            >
                                Conhecer mais funcionalidades
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-forest/5 rounded-[3rem] rotate-2 pointer-events-none"></div>
                            <div className="relative bg-white border-2 border-forest/5 rounded-[2.5rem] p-8 shadow-xl">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-ochre rounded-2xl flex flex-col items-center justify-center text-white text-[10px] font-black leading-none">
                                            <span>JUN</span>
                                            <span className="text-lg">24</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-forest">Festa da Família</p>
                                            <p className="text-xs text-forest/40 font-medium italic">Sábado, às 09:00h</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-forest/10 w-full"></div>
                                    <div className="flex items-center gap-4 opacity-50">
                                        <div className="w-12 h-12 bg-forest/20 rounded-2xl flex flex-col items-center justify-center text-forest text-[10px] font-black leading-none">
                                            <span>JUL</span>
                                            <span className="text-lg">01</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-forest">Início do Recesso</p>
                                            <p className="text-xs text-forest/40 font-medium italic">Férias escolares</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesStream;
