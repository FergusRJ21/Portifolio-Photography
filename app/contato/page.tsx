// Documentação: Rota principal da página Contato (/contato)
// src/app/contato/page.tsx

// Importamos o componente de formulário que acabamos de criar
import ContactForm from "@/components/ContactForm";

export default function ContatoPage() {
    return (
        // Main ocupa a tela inteira, com padding no topo (py-20) e fundo padrão.
        <main className="min-h-screen py-20 px-6 bg-[var(--background)] flex flex-col justify-center">

            {/* Título da Página */}
            <div className="max-w-5xl mx-auto w-full mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
                    Inicie a <span className="text-[var(--neon-accent)] text-glow">Conexão</span>
                </h1>
                <div className="w-20 h-1 bg-[var(--neon-accent)] box-glow mb-8 md:mx-0 mx-auto"></div>
            </div>

            {/* Injeta o formulário animado na página */}
            <ContactForm />

        </main>
    );
}