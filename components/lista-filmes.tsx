"use client";

import { useState } from "react";
import { FiltrosFilmes } from "@/components/filtros-filmes";
import { FilmeCard } from "@/components/filme-card";
import type { Filme } from "@/types/filme";

type Props = {
  filmes: Filme[];
};

export function ListaFilmes({ filmes }: Props) {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [ordem, setOrdem] = useState("nome-asc");
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const anos = Array.from(new Set(filmes.map((f) => f.ano))).sort(
    (a, b) => b - a
  );

  const termo = nome.trim().toLowerCase();
  let filtrados = filmes.filter((f) => {
    const bateNome = !termo || f.titulo.toLowerCase().includes(termo);
    const bateAno = !ano || f.ano === Number(ano);
    return bateNome && bateAno;
  });

  filtrados = [...filtrados].sort((a, b) => {
    if (ordem === "nome-desc") return b.titulo.localeCompare(a.titulo, "pt-BR");
    if (ordem === "ano-asc") return a.ano - b.ano;
    if (ordem === "ano-desc") return b.ano - a.ano;
    return a.titulo.localeCompare(b.titulo, "pt-BR");
  });

  function toggleFavorito(id: number) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="space-y-6">
      <FiltrosFilmes
        nome={nome}
        onNomeChange={setNome}
        ano={ano}
        onAnoChange={setAno}
        ordem={ordem}
        onOrdemChange={setOrdem}
        anos={anos}
      />

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
