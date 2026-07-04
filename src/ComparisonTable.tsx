import React from 'react';
import { XCircle, CheckCircle2, MessageSquareOff, Database, ShieldAlert, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import StaggerReveal, { staggerItem } from './StaggerReveal';

const ComparisonTable: React.FC = () => {
    return (
        <Reveal>
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate mb-6 tracking-tight">
                        Por que o WhatsApp é <span className="text-rose">perigoso</span> para sua escola?
                    </h2>
                    <p className="text-xl text-slate/60 max-w-2xl mx-auto font-medium">
                        O que parece ser prático hoje, pode se tornar um pesadelo jurídico e administrativo amanhã.
                    </p>
                </div>

                <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* WhatsApp Column */}
                    <motion.div variants={staggerItem} className="bg-warm border-2 border-rose/10 rounded-[2.5rem] p-8 md:p-12 relative grayscale hover:grayscale-0 transition-all">
                        <div className="absolute top-8 right-8 text-rose opacity-20">
                            <ShieldAlert className="w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 bg-rose/10 rounded-xl flex items-center justify-center text-rose">
                                <XCircle className="w-6 h-6" />
                            </div>
                            WhatsApp / Grupos
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <MessageSquareOff className="w-5 h-5 text-rose" />
                                </div>
                                <p className="text-slate/70 font-medium">
                                    <strong className="text-slate">Informação se Perde:</strong> Avisos importantes desaparecem em meio a conversas paralelas e "bom dia".
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <ShieldAlert className="w-5 h-5 text-rose" />
                                </div>
                                <p className="text-slate/70 font-medium">
                                    <strong className="text-slate">Risco de Privacidade:</strong> Telefones de pais e professores expostos a todos do grupo.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <Database className="w-5 h-5 text-rose" />
                                </div>
                                <p className="text-slate/70 font-medium">
                                    <strong className="text-slate">Sem Histórico Oficial:</strong> Difícil encontrar registros de meses atrás para provas em caso de conflitos.
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Elo Escola Column */}
                    <motion.div variants={staggerItem} className="bg-slate border-2 border-slate rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative">
                        <div className="absolute top-8 right-8 text-amber opacity-20">
                            <Lock className="w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber rounded-xl flex items-center justify-center text-slate">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            Elo Escola
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-amber" />
                                </div>
                                <p className="text-white/80 font-medium">
                                    <strong className="text-white">Centralização Total:</strong> Mural de avisos limpo, organizado e impossível de ignorar.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-amber" />
                                </div>
                                <p className="text-white/80 font-medium">
                                    <strong className="text-white">Privacidade de Dados:</strong> Comunicação profissional sem expor dados pessoais dos usuários.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-amber" />
                                </div>
                                <p className="text-white/80 font-medium">
                                    <strong className="text-white">Histórico Vitalício:</strong> Cada registro de rotina e mensagem salvo permanentemente na conta da escola.
                                </p>
                            </li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-sm font-semibold text-amber italic text-center">
                                "O Elo Escola profissionaliza a relação entre a escola e as famílias."
                            </p>
                        </div>
                    </motion.div>
                </StaggerReveal>
            </div>
        </section>
        </Reveal>
    );
};

export default ComparisonTable;
