import React from 'react';
import { motion } from 'framer-motion';

const AIModelCatalog: React.FC = () => {
    return (
        <section id="models" className="py-20 border-y border-neutral-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.p 
                    className="text-sm font-medium text-neutral-500 mb-8 uppercase tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Impulsionado por Modelos de Fronteira
                </motion.p>

                <motion.div 
                    className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <motion.div 
                        className="flex items-center gap-2 text-xl font-semibold text-white tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        OpenAI <span className="text-xs font-normal text-neutral-500 ml-1">GPT-5 / 4o</span>
                    </motion.div>

                    <motion.div 
                        className="flex items-center gap-2 text-xl font-semibold text-white tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Google <span className="text-xs font-normal text-neutral-500 ml-1">Gemini 3 Pro</span>
                    </motion.div>

                    <motion.div 
                        className="flex items-center gap-2 text-xl font-semibold text-white tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Anthropic <span className="text-xs font-normal text-neutral-500 ml-1">Claude 4.1 Opus</span>
                    </motion.div>

                    <motion.div 
                        className="flex items-center gap-2 text-xl font-semibold text-white tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        xAI <span className="text-xs font-normal text-neutral-500 ml-1">Grok 4</span>
                    </motion.div>

                    <motion.div 
                        className="flex items-center gap-2 text-xl font-semibold text-white tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Sora 2 <span className="text-xs font-normal text-neutral-500 ml-1">OpenAI</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIModelCatalog;