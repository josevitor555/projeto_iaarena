import StyledButton from './uiverse/StyledButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faLayerGroup, faMicrochip, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 border-b border-neutral-900 overflow-hidden">
      {/* Spline Animation */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Spline
          scene="https://prod.spline.design/E2anXrKvWs2otvhA/scene.splinecode" 
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          O Novo Modelo Gemini 3 Pro Chegou!
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Debata, Crie e <br className="hidden md:block" />Evolua com IA.
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Uma plataforma gamificada onde humanos e IA colaboram, competem e criam experiências multimodais em um ambiente único e unificado.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#demonstration" onMouseDown={(e) => e.preventDefault()}>
            <StyledButton>Assistir a Demo</StyledButton>
          </a>
          <a href="#arena" className="w-full sm:w-auto bg-transparent text-white text-base font-semibold px-8 py-3 rounded border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-colors flex items-center justify-center gap-2">
            Explorar Recursos <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Hero Highlights */}
        <motion.div 
          className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap justify-center gap-8 md:gap-16 text-neutral-500 text-sm font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMicrophone} className="w-4 h-4" /> Debates Ao Vivo</div>
          <div className="flex items-center gap-2"><FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4" /> Criação Multimodal</div>
          <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMicrochip} className="w-4 h-4" /> Modelos Avançados</div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;