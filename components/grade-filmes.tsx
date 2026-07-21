"use client";

import { FilmeCard } from "@/components/filme-card";
import { useFavoritos } from "@/components/favoritos-context";
import type { Filme } from "@/types/filme";

type Props = {
  filmes: Filme[];
  vazio?: string;
};

export function GradeFilmes({ filmes, vazio = "Nenhum filme encontrado." }: Props) {
  const { isFavorito, toggleFavorito } = useFavoritos();

  if (filmes.length === 0) {
    return <p className="text-muted-foreground">{vazio}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filmes.map((filme) => (
        <FilmeCard
          key={filme.id}
          filme={filme}
          favorito={isFavorito(filme.id)}
          onToggleFavorito={toggleFavorito}
        />
      ))}
    </div>
  );
}
