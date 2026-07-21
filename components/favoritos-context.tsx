"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type FavoritosContextValue = {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
  isFavorito: (id: number) => boolean;
};

const FavoritosContext = createContext<FavoritosContextValue | null>(null);

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function toggleFavorito(id: number) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function isFavorito(id: number) {
    return favoritos.includes(id);
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, toggleFavorito, isFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const ctx = useContext(FavoritosContext);
  if (!ctx) {
    throw new Error("useFavoritos precisa do FavoritosProvider");
  }
  return ctx;
}
