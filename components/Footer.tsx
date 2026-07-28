// Documentação: Componente de Rodapé Global (Footer)
// src/components/Footer.tsx

// Nota: Como este é um componente estático, não usamos "use client".
// Isso garante que ele seja renderizado no servidor (Server Component), otimizando a performance e o SEO.

export default function Footer() {
    // Capturamos o ano atual de forma dinâmica para que o copyright nunca fique desatualizado
    const anoAtual = new Date().getFullYear();

    return (
        // Tag semântica <footer>. Usamos uma borda superior (border-t) discreta para separar do conteúdo.
        <footer className="w-full bg-[#050505] border-t border-gray-800/60 mt-auto">
            {/* Container limitador de largura (max-w-7xl) para manter o alinhamento com o restante do site */}
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Lado Esquerdo: Copyright e Direitos */}
                <div className="text-gray-500 text-sm tracking-wide text-center md:text-left">
                    <p>© {anoAtual} CyberFoto. Todos os direitos reservados.</p>
                </div>

                {/* Lado Direito: Créditos de Desenvolvimento */}
                <div className="text-gray-500 text-sm tracking-wide text-center md:text-right flex items-center gap-1">
                    <p>Desenvolvido por</p>
                    {/* 
            Link Seguro para o desenvolvedor.
            Efeito hover: o texto fica branco e ganha o brilho neon (text-glow) configurado no globals.css
          */}
                    <a
                        href="https://fergusonrails.netlify.app/" // Substitua este URL pelo link real do desenvolvedor
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--neon-accent)] font-semibold hover:text-white hover:text-glow transition-all duration-300"
                        aria-label="Acessar o site do desenvolvedor Fergus"
                    >
                        Fergus
                    </a>
                </div>

            </div>
        </footer>
    );
}