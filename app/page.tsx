// Documentação: Arquivo principal da Rota Inicial (Home)
// src/app/page.tsx

// Importamos o componente Hero que acabamos de criar
import Hero from "@/components/Hero";

export default function Home() {
  return (
    // A tag <main> representa o conteúdo principal da página.
    // Usamos um fundo escuro padrão e garantimos que ocupe a tela toda.
    <main className="min-h-screen bg-[var(--background)] -mt-24">
      {/* 
        Nota: Adicionamos '-mt-24' (margem negativa no topo) 
        para compensar o padding-top que colocamos no layout.tsx.
        Isso faz a imagem do Hero encostar no topo absoluto da tela, ficando atrás do menu!
      */}
      <Hero />
    </main>
  );
}