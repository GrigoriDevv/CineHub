"use client";

import { GradeFilmes } from "@/components/grade-filmes";
import { useFavoritos } from "@/components/favoritos-context";
import type { Filme } from "@/types/filme";

type Props = {
  filmes: Filme[];
};

export function ListaFavoritos({ filmes }: Props) {
  const { favoritos } = useFavoritos();
  const lista = filmes.filter((f) => favoritos.includes(f.id));

  return (
    <GradeFilmes
      filmes={lista}
      vazio="Nenhum favorito ainda. Marque o coração nos cards."
    />
  );
}
