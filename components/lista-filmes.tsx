"use client";

import { useState } from "react";
import { BuscaFilmes } from "@/components/busca-filmes";
import { FilmeCard } from "@/components/filme-card";
import type { Filme } from "@/types/filme";

type Props = {
  filmes: Filme[];
};

export function ListaFilmes({ filmes }: Props) {
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const termo = busca.trim().toLowerCase();
  const filtrados = termo
    ? filmes.filter((f) => f.titulo.toLowerCase().includes(termo))
    : filmes;

  function toggleFavorito(id: number) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="space-y-6">
      <BuscaFilmes valor={busca} onChange={setBusca} />

      {filtrados.length === 0 ? (
        <p className="text-muted-foreground">Nenhum filme encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtrados.map((filme) => (
            <FilmeCard
              key={filme.id}
              filme={filme}
              favorito={favoritos.includes(filme.id)}
              onToggleFavorito={toggleFavorito}
            />
          ))}
        </div>
      )}
    </div>
  );
}
