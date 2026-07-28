// Documentação: Rota principal da página Sobre (/sobre)
// src/app/sobre/page.tsx

// Importamos o componente com animações que acabamos de criar
import AboutContent from "@/components/AboutContent";

// Componente de Servidor (Padrão do Next.js)
export default function SobrePage() {
    return (
        // Container principal: altura mínima da tela, preenchimento (padding) adequado
        <main className="min-h-screen py-20 px-6 bg-[var(--background)]">

            {/* Cabeçalho da Página */}
            <div className="max-w-4xl mx-auto mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-glow mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    Minha <span className="text-[var(--neon-accent)]">Origem</span>
                </h1>
                <div className="w-20 h-1 bg-[var(--neon-accent)] box-glow mb-8 md:mx-0 mx-auto"></div>
            </div>

            {/* Renderiza o conteúdo animado */}
            <AboutContent />

        </main>
    );
}