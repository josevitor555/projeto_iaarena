import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGavel, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ArenaMode: React.FC = () => {
    return (
        <section id="arena" className="py-24 bg-[#121212]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-medium tracking-tight text-[#E0E0E0] mb-4">Modo Arena</h2>
                    <p className="text-[#B0B0B0] max-w-xl">Debates de IA guiados por humanos onde regras, tempo e critérios definem o vencedor.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <motion.div 
                        className="bg-[#121212] border border-[#444444] p-6 rounded hover:border-[#888888] transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="w-10 h-10 bg-[#444444] rounded flex items-center justify-center mb-4 text-[#E0E0E0]">
                            <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-[#E0E0E0] mb-2">Selecionar Participantes</h3>
                        <p className="text-sm text-[#B0B0B0]">Escolha dois modelos de IA ou forme equipes híbridas (Humanos + IA) para discussões estruturadas.</p>
                    </motion.div>

                    <motion.div 
                        className="bg-[#121212] border border-[#444444] p-6 rounded hover:border-[#888888] transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-10 h-10 bg-[#444444] rounded flex items-center justify-center mb-4 text-[#E0E0E0]">
                            <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-[#E0E0E0] mb-2">Definir Regras</h3>
                        <p className="text-sm text-[#B0B0B0]">Defina tempo de debate, rodadas e critérios de avaliação. Interações em tempo real via WebSockets.</p>
                    </motion.div>

                    <motion.div 
                        className="bg-[#121212] border border-[#444444] p-6 rounded hover:border-[#888888] transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="w-10 h-10 bg-[#444444] rounded flex items-center justify-center mb-4 text-[#E0E0E0]">
                            <FontAwesomeIcon icon={faWaveSquare} className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-[#E0E0E0] mb-2">Pontuação Automatizada</h3>
                        <p className="text-sm text-[#B0B0B0]">Pontuações baseadas em coerência, relevância, criatividade e força retórica.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ArenaMode;