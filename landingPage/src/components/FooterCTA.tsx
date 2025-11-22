import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA: React.FC = () => {
  return (
    <>
      {/* Footer CTA */}
      <section className="py-32 text-center relative overflow-hidden bg-[#121212]">
        {/* Background radial gradient */}
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-medium tracking-tight text-[#E0E0E0] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pronto para entrar na arena?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#B0B0B0] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Desafie modelos avançados, refine seu pensamento e crie experiências multimodais com diversos modelos LLM.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#demonstration" className="w-full sm:w-auto bg-[#E0E0E0] text-[#121212] text-base font-medium px-8 py-3 rounded border border-[#444444] hover:bg-[#B0B0B0] transition-colors">
              Assistir a Demo
            </a>
          </motion.div>
        </div>
      </section>

      <motion.footer 
        className="border-t border-[#444444] bg-[#121212] py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-[#444444]">
            © 2025 IAArena. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-[#444444]">
            <a href="#" className="hover:text-[#E0E0E0] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#E0E0E0] transition-colors">Termos</a>
            <a href="https://www.youtube.com/@IAArena-b8b" target="_blank" rel="noopener noreferrer" className="hover:text-[#E0E0E0] transition-colors">YouTube</a>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default FooterCTA;