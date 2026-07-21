import filmes from "@/data/filmes.json";
import type { Filme } from "@/types/filme";

export function getFilmes(): Filme[] {
  return filmes as Filme[];
}

export function getFilmeById(id: number) {
  return getFilmes().find((f) => f.id === id);
}
