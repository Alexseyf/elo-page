import React, { useState } from 'react';
import { Calculator, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const ROICalculator: React.FC = () => {
    const [students, setStudents] = useState(50);

    // Logic: 
    // Manual diary takes ~8 mins/student/day (finding bag, filling, storing)
    // Elo takes ~2 mins/student/day (centralized flow)
    // Saving = 6 mins per student per day
    const dailySavingMinutes = students * 6;
    const monthlySavingHours = Math.round((dailySavingMinutes * 22) / 60);

    return (
        <Reveal>
        <section id="roi" className="py-24 bg-warm">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-white border-2 border-slate/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber/10 rounded-full text-amber text-sm font-black mb-6 uppercase tracking-wider">
                                <Calculator className="w-4 h-4" />
                                <span>Calculadora de Ganho Real</span>
                            </div>
                    <h2 className="text-4xl font-bold text-slate mb-6 tracking-tight">
                        Quanto tempo sua escola <span className="text-rose">está perdendo?</span>
                    </h2>
                            <p className="text-lg text-slate/60 mb-8 font-medium">
                                Preencher agendas físicas consome horas valiosas da sua equipe. Com o fluxo otimizado do Elo, você recupera esse tempo para o desenvolvimento das crianças.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="font-bold text-slate">Número de Alunos</label>
                                        <span className="text-amber font-black text-xl">{students} alunos</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="500"
                                        step="10"
                                        value={students}
                                        onChange={(e) => setStudents(Number(e.target.value))}
                                        className="w-full h-3 bg-slate/10 rounded-lg appearance-none cursor-pointer accent-amber"
                                    />
                                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate/30 uppercase tracking-widest">
                                        <span>10 Alunos</span>
                                        <span>500 Alunos</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber/20">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-1">Economia Mensal Total</p>
                                                        <p className="text-5xl font-bold text-white">{monthlySavingHours} <span className="text-2xl text-amber">horas</span></p>
                                    </div>
                                </div>

                                <div className="h-px bg-white/10 w-full"></div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-amber" />
                                        <p className="font-bold text-sm">Registro de rotina 4x mais rápido</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-amber" />
                                        <p className="font-bold text-sm">Informação em tempo real para os pais</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-amber" />
                                        <p className="font-bold text-sm">Zero custo com agendas físicas de papel</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open('https://wa.me/5553991280129?text=Olá!%20Fiz%20o%20cálculo%20de%20ROI%20no%20site%20e%20gostaria%20de%20saber%20como%20economizar%20tempo%20na%20minha%20escola.', '_blank')}
                                    className="w-full bg-amber text-white font-black py-5 rounded-xl text-base sm:text-lg hover:bg-[#D48F2A] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Solicitar Informações
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Reveal>
    );
};

export default ROICalculator;
