// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const DemonstrationNavigation = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <nav className="fixed top-4 left-4 right-4 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md rounded-full">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button 
                        onClick={handleGoHome}
                        className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
                        aria-label="Voltar para a página inicial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <span className="text-lg font-medium tracking-tighter text-white uppercase">IAArena</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400 justify-center flex-grow">
                    <a 
                        href="#arena" 
                        className="hover:text-white transition-colors"
                    >
                        Arena
                    </a>
                    <a 
                        href="#creative" 
                        className="hover:text-white transition-colors"
                    >
                        Criativo
                    </a>
                    <a 
                        href="#models" 
                        className="hover:text-white transition-colors"
                    >
                        Modelos
                    </a>
                    <a 
                        href="#pricing" 
                        className="hover:text-white transition-colors"
                    >
                        Preços
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <a 
                        href="/Especificacao-de-Requisitos-de-Software-IAArena.pdf" 
                        download="Especificacao-de-Requisitos-de-Software-IAArena.pdf"
                        className="text-sm text-neutral-400 hover:text-white hidden sm:block transition-colors"
                    >
                        Documentação
                    </a>
                    <a 
                        href="https://www.youtube.com/@IAArena-b8b" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-200 transition-colors"
                    >
                        Canal no YouTube
                    </a>
                </div>
            </div>
        </nav>
    );
};

const Demonstration = () => {
    // Dados do carrossel (imagens da pasta public)
    const carouselItems = [
        {
            id: 1,
            type: 'image',
            src: '/chat.png',
            alt: 'Interface do IAArena - Chat'
        },
        {
            id: 2,
            type: 'image',
            src: '/models_llm.png',
            alt: 'Interface do IAArena - Modelos LLM'
        },
        {
            id: 3,
            type: 'image',
            src: '/pergunta_a_lllm.png',
            alt: 'Interface do IAArena - Pergunta aos Modelos'
        },
        {
            id: 4,
            type: 'image',
            src: '/planos1.png',
            alt: 'Interface do IAArena - Planos'
        },
        {
            id: 5,
            type: 'image',
            src: '/fomulando_tema.png',
            alt: 'Interface do IAArena - Formulação de Temas'
        },
        {
            id: 6,
            type: 'image',
            src: '/tela_login.png',
            alt: 'Interface do IAArena - Tela de Login'
        },
        {
            id: 7,
            type: 'image',
            src: '/planos2.png',
            alt: 'Interface do IAArena - Planos Detalhados'
        },
        {
            id: 8,
            type: 'image',
            src: '/models_llm1.png',
            alt: 'Interface do IAArena - Seleção de Modelos'
        },
        {
            id: 9,
            type: 'image',
            src: '/models_llm3.png',
            alt: 'Interface do IAArena - Comparação de Modelos'
        },
        {
            id: 10,
            type: 'image',
            src: '/pergunta_a_lll2m.png',
            alt: 'Interface do IAArena - Pergunta a Múltiplos Modelos'
        },
        {
            id: 11,
            type: 'image',
            src: '/logo-removebg-preview.png',
            alt: 'Logo do IAArena'
        },
        {
            id: 12,
            type: 'image',
            src: '/logo.png',
            alt: 'Logo do IAArena - Versão Alternativa'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState({ src: '', alt: '' });

    // Funções para navegar no carrossel
    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    // Transição automática a cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    // Variantes de animação para o carrossel
    const slideVariants = {
        hiddenRight: {
            x: '100%',
            opacity: 0,
        },
        hiddenLeft: {
            x: '-100%',
            opacity: 0,
        },
        visible: {
            x: '0',
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3,
            },
        },
    };

    // Determina a variante de animação com base na direção
    const getVariant = (direction: number) => {
        if (direction === 1) return 'hiddenRight';
        if (direction === -1) return 'hiddenLeft';
        return 'visible';
    };

    // Abrir modal com imagem
    const openModal = (image: { src: string; alt: string }) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    // Fechar modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Fechar modal ao pressionar ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isModalOpen]);

    return (
        <div className="text-gray-300 antialiased min-h-screen flex flex-col relative overflow-x-hidden"
            style={{
                backgroundSize: "100px 100px",
                backgroundImage: `
                     linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                     linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                 `,
                backgroundColor: "#050505"
            }}>
            <DemonstrationNavigation />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center pt-20 px-4 w-full max-w-[1400px] mx-auto">
                
                {/* Title */}
                <motion.h1 
                    className="text-5xl md:text-7xl font-medium text-center tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/60 pb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Veja as Demonstrações abaixo
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    className="text-lg md:text-xl text-gray-500 mt-6 text-center font-normal max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Ideação inicial do MVP, onde humanos e inteligências artificiais se enfrentam para criar, debater e evoluir ideias.
                </motion.p>

                {/* Frase motivacional adicionada */}
                {/* <motion.p 
                    className="text-base md:text-base text-gray-500 mt-4 text-center font-normal max-w-2xl mx-auto leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    "Ideias não surgem totalmente formadas. Elas só se tornam claras à medida que você trabalha nelas. Você só precisa começar" - Mark Zuckerberg.
                </motion.p> */}

                {/* CENTER CONTAINER (Requested Modification) */}
                <motion.div 
                    className="w-full max-w-4xl mt-16 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Parent Container: Straight borders (rounded-none or sm), Gray Tone (grayscale + border colors) */}
                    <div className="w-full aspect-21/9 border border-neutral-800 bg-[#111111] flex items-center justify-center relative group overflow-hidden">
                        
                        {/* Decorative grid inside container */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                        {/* Carrossel de Imagens e Vídeos */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Botão Anterior */}
                            <button 
                                onClick={goToPrev}
                                className="absolute left-4 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                                aria-label="Imagem anterior"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Área do Carrossel */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <AnimatePresence initial={false} custom={direction}>
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial={getVariant(direction)}
                                        animate="visible"
                                        exit="exit"
                                        className="absolute w-full h-full flex items-center justify-center"
                                        onClick={() => openModal(carouselItems[currentIndex])}
                                    >
                                        <div className="relative z-10 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer">
                                            <img
                                                src={carouselItems[currentIndex].src}
                                                alt={carouselItems[currentIndex].alt}
                                                className="w-64 h-auto object-cover shadow-2xl shadow-black/50 ring-1 ring-white/10"
                                            />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Botão Próximo */}
                            <button 
                                onClick={goToNext}
                                className="absolute right-4 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                                aria-label="Próxima imagem"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Indicadores */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                                {carouselItems.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                                        }`}
                                        aria-label={`Ir para a imagem ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Optional overlay text/hint like the input box had, kept subtle */}
                        <motion.div 
                            className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <span className="text-xs text-neutral-600 font-mono">IMG_RENDER_PREVIEW.JS</span>
                            <div className="flex gap-3">
                                <i data-lucide="command" className="w-4 h-4 text-neutral-700"></i>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            {/* Modal para visualização ampliada */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-6xl max-h-[90vh] w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                                onClick={closeModal}
                                aria-label="Fechar visualização"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img
                                src={modalImage.src}
                                alt={modalImage.alt}
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm bg-black/50 py-2 px-4 rounded">
                                {modalImage.alt}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Demonstration;