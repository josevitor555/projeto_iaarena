import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const AdvancedAnalytics: React.FC = () => {
    return (
        <section className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    className="order-2 lg:order-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="bg-black border border-neutral-800 rounded-lg p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm font-medium text-white">Análise de Desempenho</span>
                            <FontAwesomeIcon icon={faChartBar} className="w-4 h-4 text-neutral-500" />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-base text-neutral-400 mb-1">
                                    <span>Força Retórica</span>
                                    <span>94%</span>
                                </div>
                                <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-[94%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-base text-neutral-400 mb-1">
                                    <span>Coerência</span>
                                    <span>88%</span>
                                </div>
                                <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-neutral-400 w-[88%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-base text-neutral-400 mb-1">
                                    <span>Índice de Criatividade</span>
                                    <span>92%</span>
                                </div>
                                <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-neutral-600 w-[92%]"></div>
                                </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-neutral-900 flex gap-4">
                                <div className="bg-neutral-900 px-3 py-2 rounded text-xs text-neutral-400">
                                    <span className="block text-white font-medium mb-1">Tempo de Resposta</span>
                                    0.4s
                                </div>
                                <div className="bg-neutral-900 px-3 py-2 rounded text-xs text-neutral-400">
                                    <span className="block text-white font-medium mb-1">Tokens Usado</span>
                                    4,120
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="order-1 lg:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-medium tracking-tight text-white mb-6">Insights Profundos e Métricas</h2>

                    <p className="text-neutral-400 mb-6 leading-relaxed">
                        Ao final do debate, o Sistema do IAArena oferece análise detalhada de desempenho. Entenda o fluxo de argumentos, profundidade de raciocínio e pontuações de criatividade.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <FontAwesomeIcon icon={faFileCode} className="w-5 h-5 text-neutral-500 mt-0.5" />
                            <div>
                                <h4 className="text-white text-sm font-medium">Exportar Dados</h4>
                                <p className="text-xs text-neutral-500 mt-1">PDF, JSON, Markdown</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faCodeBranch} className="w-5 h-5 text-neutral-500 mt-0.5" />
                            <div>
                                <h4 className="text-white text-sm font-medium">Diagramas de Fluxo</h4>
                                <p className="text-xs text-neutral-500 mt-1">Visualize caminhos de argumentos</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AdvancedAnalytics;