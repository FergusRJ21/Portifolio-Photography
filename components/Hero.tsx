// Documentação: Componente da Seção Principal (Hero) da Página Início
// src/components/Hero.tsx

"use client"; // Necessário porque vamos usar animações (interatividade)

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        // Container principal: Ocupa a altura total da tela e não deixa o conteúdo vazar (overflow-hidden)
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">

            {/* 
        IMAGEM DE FUNDO: 
        Por enquanto, estou usando uma imagem temporária do Unsplash (tema cyberpunk/neon).
        Depois, trocaremos essa URL pela imagem do seu Firebase.
      */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop')" }}
            />

            {/* 
        MÁSCARA (OVERLAY) ESCURA: 
        Garante que o fundo fique escurecido para o texto brilhar e ter contraste. 
      */}
            <div className="absolute inset-0 z-10 bg-black/60 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

            {/* 
        CONTEÚDO ANIMADO:
        O z-20 garante que o texto fique por cima da imagem e da máscara escura.
      */}
            <div className="relative z-20 text-center px-6 max-w-4xl flex flex-col items-center">

                {/* Animação do Título: Vem de baixo (y: 30) e fica opaco (opacity: 1) */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-glow"
                >
                    CAPTURANDO O FUTURO
                </motion.h1>

                {/* Animação do Subtítulo: Tem um pequeno atraso (delay: 0.3) para entrar logo após o título */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl"
                >
                    Fotografia de alta resolução com uma estética única. Explore dimensões além da luz tradicional.
                </motion.p>

                {/* Animação dos Botões: Atraso de 0.6 segundos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    {/* Botão Principal com efeito Neon (box-glow que criamos no globals.css) */}
                    <Link
                        href="/galeria"
                        className="px-8 py-3 bg-transparent border-2 border-[var(--neon-accent)] text-[var(--neon-accent)] font-semibold tracking-widest hover:bg-[var(--neon-accent)] hover:text-black transition-all duration-300 box-glow"
                    >
                        VER GALERIA
                    </Link>

                    {/* Botão Secundário, mais discreto */}
                    <Link
                        href="/contato"
                        className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        CONTATO
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}