import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faImage, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const CrreativeMode: React.FC = () => {
    return (
        <section id="creative" className="py-24 border-t border-neutral-900 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <h2 className="text-3xl font-medium tracking-tight text-white mb-4">Modo Criativo</h2>
                        <p className="text-neutral-400 max-w-xl">Gere conteúdo multimodal além de debates. Colaboração, edição e síntese.</p>
                    </div>
                    <a href="#" className="text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors">Explorar Biblioteca</a>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <motion.div 
                        className="bg-black border border-neutral-800 p-6 rounded flex flex-col items-center justify-center text-center aspect-square hover:bg-neutral-900 transition-colors group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <FontAwesomeIcon icon={faFileAlt} className="w-8 h-8 text-neutral-500 group-hover:text-white mb-4 transition-colors" />
                        <span className="text-white font-medium">Geração de Texto</span>
                    </motion.div>
                    <motion.div 
                        className="bg-black border border-neutral-800 p-6 rounded flex flex-col items-center justify-center text-center aspect-square hover:bg-neutral-900 transition-colors group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FontAwesomeIcon icon={faImage} className="w-8 h-8 text-neutral-500 group-hover:text-white mb-4 transition-colors" />
                        <span className="text-white font-medium">Criação de Imagem</span>
                    </motion.div>
                    <motion.div 
                        className="bg-black border border-neutral-800 p-6 rounded flex flex-col items-center justify-center text-center aspect-square hover:bg-neutral-900 transition-colors group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <FontAwesomeIcon icon={faMusic} className="w-8 h-8 text-neutral-500 group-hover:text-white mb-4 transition-colors" />
                        <span className="text-white font-medium">Geração de Áudio</span>
                    </motion.div>
                    <motion.div 
                        className="bg-black border border-neutral-800 p-6 rounded flex flex-col items-center justify-center text-center aspect-square hover:bg-neutral-900 transition-colors group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <FontAwesomeIcon icon={faVideo} className="w-8 h-8 text-neutral-500 group-hover:text-white mb-4 transition-colors" />
                        <span className="text-white font-medium">Síntese de Vídeo</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CrreativeMode;