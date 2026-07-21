import { ListaFavoritos } from "@/components/lista-favoritos";
import { getFilmes } from "@/lib/filmes";

export default function FavoritosPage() {
  const filmes = getFilmes();

  return (
    <main>
      <h2 className="mb-2 font-display text-2xl">Favoritos</h2>
      <p className="mb-6 text-muted-foreground">
        Filmes que você marcou com o coração (só nesta sessão).
      </p>
      <ListaFavoritos filmes={filmes} />
    </main>
  );
}
