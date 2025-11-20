import React from 'react';
import { motion } from 'framer-motion';

const Navigations: React.FC = () => {
    return (
        <motion.nav 
            className="fixed top-4 left-4 right-4 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="text-lg font-medium tracking-tighter text-white uppercase">IAArena</span>
                </motion.div>

                <div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
                    <motion.a 
                        href="#arena" 
                        className="hover:text-white transition-colors"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Arena
                    </motion.a>
                    <motion.a 
                        href="#creative" 
                        className="hover:text-white transition-colors"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Criativo
                    </motion.a>
                    <motion.a 
                        href="#models" 
                        className="hover:text-white transition-colors"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Modelos
                    </motion.a>
                    <motion.a 
                        href="#pricing" 
                        className="hover:text-white transition-colors"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Preços
                    </motion.a>
                </div>

                <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <a 
                        href="/Especificacao-de-Requisitos-de-Software-IAArena.pdf" 
                        download="Especificacao-de-Requisitos-de-Software-IAArena.pdf"
                        className="text-sm text-neutral-400 hover:text-white hidden sm:block transition-colors"
                    >
                        Documentação
                    </a>
                    <motion.a 
                        href="https://www.youtube.com/@IAArena-b8b" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        YouTube Canal
                    </motion.a>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navigations;