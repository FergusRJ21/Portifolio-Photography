// Documentação: Estrutura Global Base (Layout) com Footer
// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importações dos componentes globais
import Footer from "@/components/Footer"; // Importamos o novo componente
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Futurista | Fotografia",
  description: "Portfólio de fotografia em alta resolução com estética cyberpunk/neon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 
        A classe min-h-screen na tag body com flex flex-col garante que 
        o rodapé seja sempre empurrado para o final da página, 
        mesmo se a página tiver pouco conteúdo.
      */}
      <body className={`${inter.className} antialiased bg-[var(--background)] text-[var(--text-primary)] min-h-screen flex flex-col`}>

        {/* O Menu Global */}
        <Navbar />

        {/* O Conteúdo Principal das Páginas (cresce para empurrar o rodapé para baixo com flex-grow) */}
        <div className="pt-24 flex-grow">
          {children}
        </div>

        {/* O Rodapé Global (adicionado aqui) */}
        <Footer />

      </body>
    </html>
  );
}