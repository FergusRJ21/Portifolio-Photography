// Documentação: Componente de Conteúdo Animado da Página Sobre (Atualizado)
// src/components/AboutContent.tsx

"use client"; // Mantemos como componente de cliente para as animações

import { motion } from "framer-motion";
import Image from "next/image"; // Importamos o componente de imagem do Next.js

export default function AboutContent() {
    // Variantes de animação: Efeito cascata para os elementos aparecerem em sequência
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    // Variantes para cada item individual deslizar de baixo para cima
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto flex flex-col gap-16"
        >
            {/* SEÇÃO 1: Foto de Perfil e Biografia lado a lado */}
            <motion.section
                variants={itemVariants}
                // Em celulares fica em coluna (flex-col), em telas maiores (md) fica lado a lado (flex-row)
                className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >

                {/* Bloco da Foto com Elementos Abstratos */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                    {/* Elemento Gráfico Abstrato 1: Brilho Ciano no fundo */}
                    <div className="absolute top-0 -left-4 w-48 h-48 bg-[var(--neon-accent)] rounded-full mix-blend-screen filter blur-[60px] opacity-40 animate-pulse"></div>
                    {/* Elemento Gráfico Abstrato 2: Brilho Roxo/Azul para contraste */}
                    <div className="absolute bottom-0 -right-4 w-48 h-48 bg-blue-600 rounded-full mix-blend-screen filter blur-[60px] opacity-30"></div>

                    {/* Container da Imagem de Perfil com borda neon */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-[var(--neon-accent)] transition-colors duration-500 box-glow z-10">
                        <Image
                            // URL temporária simulando uma foto de perfil futurista. Troque quando tiver a sua.
                            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800&auto=format&fit=crop"
                            alt="Sua foto de perfil"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            sizes="(max-width: 768px) 256px, 320px"
                        />
                    </div>
                </div>

                {/* Bloco do Texto (Biografia) */}
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider text-glow">
                        O Olhar por Trás da Lente
                    </h2>
                    <p>
                        Iniciei minha jornada na fotografia buscando algo além da simples captura de luz.
                        Minha paixão é encontrar a intersecção entre o cenário urbano, a tecnologia e a emoção humana.
                        Através de uma estética <span className="text-[var(--neon-accent)] font-semibold text-glow">cyberpunk e futurista</span>,
                        transformo paisagens comuns em dimensões extraordinárias.
                    </p>
                    <p>
                        Com anos de experiência explorando ambientes noturnos e utilizando técnicas avançadas de longa exposição,
                        meu objetivo é contar histórias visuais que transportem o observador para o amanhã. O foco não é apenas mostrar o que existe, mas revelar a energia invisível que flui através das metrópoles.
                    </p>
                </div>
            </motion.section>

            {/* SEÇÃO 2: Destaques / Estilo Fotográfico */}
            <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                    <span className="w-8 h-1 bg-[var(--neon-accent)]"></span> Foco de Atuação
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-[var(--neon-accent)] hover:box-glow transition-all duration-300">
                        <h3 className="text-[var(--neon-accent)] text-xl font-bold mb-2">Paisagens Urbanas</h3>
                        <p className="text-sm text-gray-400">Captura da essência caótica e vibrante das metrópoles sob luzes artificiais.</p>
                    </div>
                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-[var(--neon-accent)] hover:box-glow transition-all duration-300">
                        <h3 className="text-[var(--neon-accent)] text-xl font-bold mb-2">Retratos Neon</h3>
                        <p className="text-sm text-gray-400">Direção de arte focada em iluminação para criar silhuetas e contrastes marcantes.</p>
                    </div>
                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-[var(--neon-accent)] hover:box-glow transition-all duration-300">
                        <h3 className="text-[var(--neon-accent)] text-xl font-bold mb-2">Edição Cyber</h3>
                        <p className="text-sm text-gray-400">Pós-processamento avançado para realçar paletas de cores atmosféricas.</p>
                    </div>
                </div>
            </motion.section>

            {/* SEÇÃO 3: Equipamentos (Arsenal) */}
            <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                    <span className="w-8 h-1 bg-[var(--neon-accent)]"></span> Equipamento
                </h2>
                {/* Nova grade para listar os equipamentos de forma visual e estilizada */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                    {/* Cartão de Equipamento 1 */}
                    <div className="p-5 bg-[#0a0a0a] border-l-2 border-gray-700 hover:border-[var(--neon-accent)] transition-colors duration-300">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Câmera Principal</p>
                        <h4 className="text-white font-bold text-lg">Sony A7R IV</h4>
                        <p className="text-sm text-gray-400 mt-2">61 Megapixels. Essencial para captura absurda de detalhes no escuro.</p>
                    </div>

                    {/* Cartão de Equipamento 2 */}
                    <div className="p-5 bg-[#0a0a0a] border-l-2 border-gray-700 hover:border-[var(--neon-accent)] transition-colors duration-300">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Lente Primária</p>
                        <h4 className="text-white font-bold text-lg">Sigma 35mm f/1.4</h4>
                        <p className="text-sm text-gray-400 mt-2">Claridade impecável, perfeita para isolar o sujeito das luzes de fundo.</p>
                    </div>

                    {/* Cartão de Equipamento 3 */}
                    <div className="p-5 bg-[#0a0a0a] border-l-2 border-gray-700 hover:border-[var(--neon-accent)] transition-colors duration-300">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Visão Aérea</p>
                        <h4 className="text-white font-bold text-lg">DJI Mavic 3</h4>
                        <p className="text-sm text-gray-400 mt-2">Para perspectivas vertiginosas do topo dos arranha-céus.</p>
                    </div>

                    {/* Cartão de Equipamento 4 */}
                    <div className="p-5 bg-[#0a0a0a] border-l-2 border-gray-700 hover:border-[var(--neon-accent)] transition-colors duration-300">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Iluminação</p>
                        <h4 className="text-white font-bold text-lg">Bastões LED RGB</h4>
                        <p className="text-sm text-gray-400 mt-2">Luzes portáteis para criar o efeito neon em qualquer ambiente.</p>
                    </div>

                </div>
            </motion.section>

        </motion.div>
    );
}