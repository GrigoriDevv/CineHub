"use client";

import { useState } from "react";
import { FiltrosFilmes } from "@/components/filtros-filmes";
import { GradeFilmes } from "@/components/grade-filmes";
import type { Filme } from "@/types/filme";

type Props = {
  filmes: Filme[];
};

export function ListaFilmes({ filmes }: Props) {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [ordem, setOrdem] = useState("nome-asc");

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

      <GradeFilmes filmes={filtrados} />
    </div>
  );
}
