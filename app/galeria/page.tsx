// Documentação: Rota da Galeria (/galeria)
// src/app/galeria/page.tsx

import GalleryGrid from "@/components/GalleryGrid";

// Este é um Server Component por padrão.
// Isso garante que a casca da página seja entregue rapidamente pelo servidor.
export default function GaleriaPage() {
    return (
        <main className="min-h-screen py-20 px-6 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-glow mb-4 uppercase">
                    Acervo <span className="text-[var(--neon-accent)]">Cyber</span>
                </h1>
                <p className="text-gray-400 max-w-2xl text-lg">
                    Exploração visual de ambientes com alta resolução. Clique nas imagens para expandir (futuramente integrado).
                </p>
            </div>

            {/* Renderiza o grid de imagens que criamos */}
            <GalleryGrid />
        </main>
    );
}