import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDesktop,
  faServer,
  faDatabase,
  faShieldAlt,
  faBullseye,
  faGraduationCap,
  faMicroscope,
  faMicrochip,
  faUsers,
  faPen,
  faFlask
} from '@fortawesome/free-solid-svg-icons';

const TechnicalAudienceGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212] border-y border-[#444444]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-medium text-[#E0E0E0] mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} className="w-5 h-5" /> Arquitetura Técnica
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              className="p-4 border border-[#444444] rounded bg-[#121212] flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FontAwesomeIcon icon={faDesktop} className="w-5 h-5 text-[#444444] mt-0.5" />
              <div>
                <div className="text-xs font-mono text-[#ffffff] mb-1">Front-end</div>
                <div className="text-sm text-[#B0B0B0]">React, TypeScript, Tailwind</div>
              </div>
            </motion.div>

            <motion.div
              className="p-4 border border-[#444444] rounded bg-[#121212] flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faServer} className="w-5 h-5 text-[#444444] mt-0.5" />
              <div>
                <div className="text-xs font-mono text-[#ffffff] mb-1">Back-end</div>
                <div className="text-sm text-[#B0B0B0]">Node.js, Socket.IO</div>
              </div>
            </motion.div>

            <motion.div
              className="p-4 border border-[#444444] rounded bg-[#121212] flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FontAwesomeIcon icon={faDatabase} className="w-5 h-5 text-[#444444] mt-0.5" />
              <div>
                <div className="text-xs font-mono text-[#ffffff] mb-1">Banco de Dados</div>
                <div className="text-sm text-[#B0B0B0]">Supabase + PostgreSQL</div>
              </div>
            </motion.div>

            <motion.div
              className="p-4 border border-[#444444] rounded bg-[#121212] flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 text-[#444444] mt-0.5" />
              <div>
                <div className="text-xs font-mono text-[#ffffff] mb-1">Segurança</div>
                <div className="text-sm text-[#B0B0B0]">AES-256, TLS 1.3, RLS</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-medium text-[#E0E0E0] mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={faBullseye} className="w-5 h-5" /> Projetado Para
          </h3>

          <div className="flex flex-wrap gap-2">
            <motion.span
              className="px-3 py-1.5 rounded border border-[#444444] bg-[#121212]/50 text-sm text-[#B0B0B0] flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />
              Universidades
            </motion.span>
            <motion.span
              className="px-3 py-1.5 rounded border border-[#444444] bg-[#121212]/50 text-sm text-[#B0B0B0] flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FontAwesomeIcon icon={faMicroscope} className="w-4 h-4" />
              Pesquisadores
            </motion.span>
            <motion.span
              className="px-3 py-1.5 rounded border border-[#444444] bg-[#121212]/50 text-sm text-[#B0B0B0] flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FontAwesomeIcon icon={faMicrochip} className="w-4 h-4" />
              Entusiastas de IA
            </motion.span>
            <motion.span
              className="px-3 py-1.5 rounded border border-[#444444] bg-[#121212]/50 text-sm text-[#B0B0B0] flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
              Equipes de Debate
            </motion.span>
            <motion.span
              className="px-3 py-1.5 rounded border border-[#444444] bg-[#121212]/50 text-sm text-[#B0B0B0] flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
              Criadores de Conteúdo
            </motion.span>
            <motion.span
              className="px-3 py-1.5 rounded border border-[#444444] bg-[#121212]/50 text-sm text-[#B0B0B0] flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <FontAwesomeIcon icon={faFlask} className="w-4 h-4" />
              Laboratórios de Inovação
            </motion.span>
          </div>

          <motion.div
            className="mt-8 p-4 border border-[#444444] rounded-lg bg-[#121212]/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h4 className="text-base font-medium text-[#E0E0E0] mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
              Comunidade e Aprendizado
            </h4>
            <p className="text-base text-[#B0B0B0]">Participe de competições mensais de argumentação, veja debates públicos ranqueados e explore criações multimodais em destaque.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalAudienceGrid;
