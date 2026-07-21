import { ListaFilmes } from "@/components/lista-filmes";
import { getFilmes } from "@/lib/filmes";

export default function Home() {
  const filmes = getFilmes();

  return (
    <main>
      <p className="mb-6 text-muted-foreground">
        Filtre por nome ou ano, e marque seus favoritos.
      </p>
      <ListaFilmes filmes={filmes} />
    </main>
  );
}
