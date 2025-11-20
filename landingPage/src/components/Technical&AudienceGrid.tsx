import React from 'react';
import { motion } from 'framer-motion';

const TechnicalAudienceGrid: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
            <i data-lucide="code-2" className="w-5 h-5"></i> Arquitetura Técnica
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div 
              className="p-4 border border-neutral-800 rounded bg-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-xs font-mono text-neutral-500 mb-1">Front-end</div>
              <div className="text-sm text-neutral-300">React, TypeScript, Tailwind</div>
            </motion.div>
            
            <motion.div 
              className="p-4 border border-neutral-800 rounded bg-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-xs font-mono text-neutral-500 mb-1">Back-end</div>
              <div className="text-sm text-neutral-300">Node.js, Socket.IO</div>
            </motion.div>
            
            <motion.div 
              className="p-4 border border-neutral-800 rounded bg-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-xs font-mono text-neutral-500 mb-1">Banco de Dados</div>
              <div className="text-sm text-neutral-300">Supabase + PostgreSQL</div>
            </motion.div>
            
            <motion.div 
              className="p-4 border border-neutral-800 rounded bg-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-xs font-mono text-neutral-500 mb-1">Segurança</div>
              <div className="text-sm text-neutral-300">AES-256, TLS 1.3, RLS</div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
            <i data-lucide="target" className="w-5 h-5"></i> Projetado Para
          </h3>
          
          <div className="flex flex-wrap gap-2">
            <motion.span 
              className="px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Universidades
            </motion.span>
            <motion.span 
              className="px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Pesquisadores
            </motion.span>
            <motion.span 
              className="px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Entusiastas de IA
            </motion.span>
            <motion.span 
              className="px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Equipes de Debate
            </motion.span>
            <motion.span 
              className="px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Criadores de Conteúdo
            </motion.span>
            <motion.span 
              className="px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Laboratórios de Inovação
            </motion.span>
          </div>
          
          <motion.div 
            className="mt-8 p-4 border border-neutral-800 rounded-lg bg-black/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h4 className="text-sm font-medium text-white mb-2">Comunidade e Aprendizado</h4>
            <p className="text-xs text-neutral-500">Participe de competições mensais de argumentação, veja debates públicos ranqueados e explore criações multimodais em destaque.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalAudienceGrid;