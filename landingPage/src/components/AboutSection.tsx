import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <section className="py-24 border-b border-[#444444] bg-[#121212]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-medium tracking-tight text-[#E0E0E0] mb-6">Interação com Propósito</h2>

                    <p className="text-[#B0B0B0] mb-6 leading-relaxed">
                        IAArena é uma plataforma digital projetada para interação estruturada e significativa entre humanos e sistemas de inteligência artificial. Os usuários podem iniciar debates, criar conteúdo multimodal, avaliar o desempenho da IA e guiar conversas dentro de um ambiente interativo e intuitivo.
                    </p>

                    <ul className="space-y-3 text-[#B0B0B0]">
                        <motion.li 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#E0E0E0]" /> Estimular o pensamento crítico
                        </motion.li>
                        <motion.li 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#E0E0E0]" /> Democratizar o acesso à IA
                        </motion.li>
                        <motion.li 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#E0E0E0]" /> Integrar educação, criatividade e tecnologia
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="absolute -inset-1 bg-linear-to-r from-[#444444] to-[#121212] rounded-lg blur opacity-25"></div>

                    <div className="relative bg-[#121212] border border-[#444444] rounded-lg p-8">
                        <div className="flex items-center gap-4 mb-6 border-b border-[#444444] pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-auto text-xs text-[#444444] font-mono">Status do Sistema: Online</div>
                        </div>

                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-3">
                                <span className="text-[#444444]">Usuário:</span>
                                <span className="text-[#B0B0B0]">Existe motoros de dobra espacial ou só especulações?</span>
                            </div>

                            <div className="flex gap-3">
                                <span className="text-[#444444]">IA:</span>
                                <span className="text-green-400 typing-effect">Analisando parâmetros de coerência, relevância e criatividade...</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;