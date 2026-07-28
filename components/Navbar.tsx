// Documentação: Componente de Navegação Global (Navbar)
// src/components/Navbar.tsx

"use client"; // Esta linha é obrigatória. Indica que o componente usa estados (interatividade) no navegador.

import { AnimatePresence, motion } from "framer-motion"; // Biblioteca para animações suaves
import { Menu, X } from "lucide-react"; // Ícones para o menu mobile (Hambúrguer e Fechar)
import Link from "next/link"; // Componente oficial do Next.js para navegação rápida sem recarregar a página
import { useState } from "react";

// Definimos as páginas do nosso portfólio para facilitar a criação dos links
const navLinks = [
    { name: "Início", path: "/" },
    { name: "Galeria", path: "/galeria" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
];

export default function Navbar() {
    // Estado que controla se o menu do celular está aberto (true) ou fechado (false)
    const [isOpen, setIsOpen] = useState(false);

    // Função para abrir/fechar o menu mobile
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        // Tag <nav> representa a área de navegação. Fixamos ela no topo (fixed top-0).
        // O fundo preto semi-transparente (bg-black/80) com desfoque (backdrop-blur) cria um visual futurista.
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO: Com efeito Neon que criamos no globals.css */}
                <Link href="/" className="text-2xl font-bold text-white hover:text-glow transition-all duration-300">
                    CYBER<span className="text-[var(--neon-accent)]">FOTO</span>
                </Link>

                {/* MENU DESKTOP: Escondido em telas pequenas (hidden) e visível a partir do tamanho 'md' (md:flex) */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            // O efeito hover faz o texto ficar com a cor neon e brilhar suavemente
                            className="text-gray-300 hover:text-[var(--neon-accent)] transition-colors duration-300 text-sm tracking-widest uppercase hover:text-glow"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* BOTÃO MOBILE: Aparece apenas em celulares (md:hidden) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Abrir menu"
                >
                    {isOpen ? <X size={28} className="text-[var(--neon-accent)]" /> : <Menu size={28} />}
                </button>
            </div>

            {/* MENU MOBILE: Animado com Framer Motion */}
            {/* AnimatePresence permite animar elementos que entram e saem da tela */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        // Configurações de animação: desliza de cima para baixo e altera opacidade
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-gray-800 flex flex-col items-center py-6 space-y-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={toggleMenu} // Fecha o menu ao clicar no link
                                className="text-gray-300 hover:text-[var(--neon-accent)] transition-colors text-lg tracking-widest uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}