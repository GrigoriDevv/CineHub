import filmes from "@/data/filmes.json";
import type { Filme } from "@/types/filme";

const DESTAQUE_IDS = [3, 1];

export function getFilmes(): Filme[] {
  return filmes as Filme[];
}

export function getFilmeById(id: number) {
  return getFilmes().find((f) => f.id === id);
}

export function getDestaques(): Filme[] {
  return DESTAQUE_IDS.map((id) => getFilmeById(id)).filter(
    (f): f is Filme => Boolean(f)
  );
}
