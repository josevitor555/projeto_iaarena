import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2 
                    className="text-3xl font-medium tracking-tight text-white text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Escolha seu Plano
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Basic */}
                    <motion.div 
                        className="bg-neutral-950 border border-neutral-800 rounded-lg p-8 flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-medium text-white">Plano Básico</h3>
                        <p className="text-neutral-400 text-sm mt-2 mb-6">Para estudantes e observadores casuais.</p>
                        <div className="text-4xl font-medium text-white mb-6">Grátis</div>

                        <ul className="space-y-4 text-sm text-neutral-400 mb-8 flex-1">
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Até 2 usuários por sessão
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> 100 primeiros créditos por modelo.
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Acesso a modelos básicos
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Rate limit: 10–15 mensagens por hora
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Histórico de 30 dias
                            </motion.li>
                        </ul>

                        <a href="#" className="block w-full text-center py-2.5 rounded border border-neutral-700 text-white hover:bg-neutral-800 transition-colors text-sm font-medium">
                            Começar
                        </a>
                    </motion.div>

                    {/* Pro */}
                    <motion.div 
                        className="bg-neutral-950 border border-neutral-600 rounded-lg p-8 flex flex-col relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl">PRO</div>
                        <h3 className="text-xl font-medium text-white">Plano Pro</h3>
                        <p className="text-neutral-400 text-sm mt-2 mb-6">Para pesquisadores e usuários avançados.</p>
                        <div className="text-4xl font-medium text-white mb-6">R$ 69,90<span className="text-lg text-neutral-500 font-normal">/mês</span></div>

                        <ul className="space-y-4 text-sm text-neutral-400 mb-8 flex-1">
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Até 4-6 usuários por sessão
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> 2000 créditos mensais (Com renovação semannal de 500 créditos)
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Rate limit: 50–100 mensagens por hora
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Histórico ilimitado
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Exportação avançada de dados
                            </motion.li>
                            <motion.li 
                                className="flex gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" /> Prioridade no processamento
                            </motion.li>
                        </ul>

                        <a href="#" className="block w-full text-center py-2.5 rounded bg-white text-black border border-transparent hover:bg-neutral-200 transition-colors text-sm font-medium">
                            Atualizar para Pro
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;