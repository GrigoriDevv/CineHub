"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  nome: string;
  onNomeChange: (valor: string) => void;
  ano: string;
  onAnoChange: (valor: string) => void;
  ordem: string;
  onOrdemChange: (valor: string) => void;
  anos: number[];
};

const selectClass =
  "flex h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function FiltrosFilmes({
  nome,
  onNomeChange,
  ano,
  onAnoChange,
  ordem,
  onOrdemChange,
  anos,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <div className="relative min-w-[200px] flex-1 sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Filtrar por nome..."
          value={nome}
          onChange={(e) => onNomeChange(e.target.value)}
          className="pl-9"
        />
      </div>

      <select
        value={ano}
        onChange={(e) => onAnoChange(e.target.value)}
        className={selectClass}
        aria-label="Filtrar por ano"
      >
        <option value="">Todos os anos</option>
        {anos.map((a) => (
          <option key={a} value={String(a)}>
            {a}
          </option>
        ))}
      </select>

      <select
        value={ordem}
        onChange={(e) => onOrdemChange(e.target.value)}
        className={selectClass}
        aria-label="Ordenar"
      >
        <option value="nome-asc">Nome (A–Z)</option>
        <option value="nome-desc">Nome (Z–A)</option>
        <option value="ano-desc">Lançamento (mais recente)</option>
        <option value="ano-asc">Lançamento (mais antigo)</option>
      </select>
    </div>
  );
}
