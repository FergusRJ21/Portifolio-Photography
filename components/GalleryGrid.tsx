// Documentação: Componente de Grade da Galeria com Modal (Lightbox)
// src/components/GalleryGrid.tsx

"use client"; // Habilita a interatividade (estados e eventos de clique) no navegador

import { AnimatePresence, motion, Variants } from "framer-motion";
import { X } from "lucide-react"; // Ícone de "Fechar"
import Image from "next/image";
import { useState } from "react";

// Definimos uma "Interface" (TypeScript). 
// Isso garante que nosso código saiba exatamente qual é o formato de uma Imagem, prevenindo erros.
interface Photo {
    id: number;
    url: string;
    title: string;
}

// Array temporário de imagens
const tempImages: Photo[] = [
    { id: 1, url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop", title: "Neon City" },
    { id: 2, url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop", title: "Cyber Setup" },
    { id: 3, url: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop", title: "Neon Sign" },
    { id: 4, url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1000&auto=format&fit=crop", title: "Street Light" },
    { id: 5, url: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?q=80&w=1000&auto=format&fit=crop", title: "Urban Cyber" },
    { id: 6, url: "https://images.unsplash.com/photo-1563089145-599997674dc9?q=80&w=1000&auto=format&fit=crop", title: "Abstract Neon" },
];

// Variantes de animação para a grade principal (efeito cascata)
const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function GalleryGrid() {
    // ESTADO DO MODAL: Guarda a imagem clicada. Começa vazio (null).
    const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

    // Função para fechar o modal limpando o estado
    const closeModal = () => setSelectedImage(null);

    return (
        <>
            {/* 1. GRADE DE IMAGENS */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto"
            >
                {tempImages.map((img) => (
                    <motion.div
                        key={img.id}
                        variants={itemVariants}
                        // Ao clicar na miniatura, atualizamos o estado com a imagem correspondente
                        onClick={() => setSelectedImage(img)}
                        className="group relative aspect-[4/5] overflow-hidden rounded-md bg-gray-900 border border-gray-800 transition-all hover:border-[var(--neon-accent)] hover:box-glow cursor-pointer"
                    >
                        <Image
                            src={img.url}
                            alt={img.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white text-lg font-semibold tracking-wider text-glow">{img.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* 2. JANELA MODAL (LIGHTBOX) */}
            {/* AnimatePresence permite animar a saída do modal quando selectedImage volta a ser null */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        // Animação do fundo escuro (fade in/out)
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        // onClick no fundo fecha o modal
                        onClick={closeModal}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
                    >
                        {/* Botão de Fechar no canto superior direito */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-gray-400 hover:text-[var(--neon-accent)] transition-colors z-50 focus:outline-none"
                            aria-label="Fechar foto"
                        >
                            <X size={36} />
                        </button>

                        {/* Container da Imagem Expandida */}
                        <motion.div
                            // Animação da foto: cresce (scale) e aparece de baixo para cima (y)
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            // e.stopPropagation() previne que o clique na foto ative o fechamento do modal
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl aspect-auto max-h-full flex flex-col items-center"
                        >
                            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden border border-gray-800 box-glow">
                                {/* 
                  Usamos 'object-contain' no modal. 
                  Isso garante que a foto inteira caiba na tela sem ser cortada,
                  respeitando a proporção original da fotografia.
                */}
                                <Image
                                    src={selectedImage.url}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    quality={100} // Prioriza qualidade máxima ao expandir
                                />
                            </div>
                            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-glow">
                                {selectedImage.title}
                            </h2>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}