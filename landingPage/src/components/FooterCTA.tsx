import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA: React.FC = () => {
  return (
    <>
      {/* Footer CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-900/40 via-transparent to-transparent"></div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pronto para entrar na arena?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-neutral-400 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Desafie modelos avançados, refine seu pensamento e crie experiências multimodais inovadoras.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="w-full sm:w-auto bg-white text-black text-base font-medium px-8 py-3 rounded border border-neutral-300 hover:bg-neutral-200 transition-colors">
              Começar Agora (Grátis)
            </a>
            <a href="#" className="w-full sm:w-auto text-neutral-400 hover:text-white text-base font-medium px-8 py-3 transition-colors">
              Ver Demonstração
            </a>
          </motion.div>
        </div>
      </section>

      <motion.footer 
        className="border-t border-neutral-900 bg-black py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-neutral-500">
            © 2025 IAArena. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default FooterCTA;