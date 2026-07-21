import { ListaFilmes } from "@/components/lista-filmes";
import { getFilmes } from "@/lib/filmes";

export default function Home() {
  const filmes = getFilmes();

  return (
    <main>
      <header className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl">Catálogo de Filmes</h1>
        <p className="mt-2 text-muted-foreground">
          Busque pelo título ou marque seus favoritos.
        </p>
      </header>

      <ListaFilmes filmes={filmes} />
    </main>
  );
}
