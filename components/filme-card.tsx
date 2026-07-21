"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Filme } from "@/types/filme";

type Props = {
  filme: Filme;
  favorito: boolean;
  onToggleFavorito: (id: number) => void;
};

export function FilmeCard({ filme, favorito, onToggleFavorito }: Props) {
  return (
    <Card className="overflow-hidden bg-card transition hover:-translate-y-0.5">
      <div className="relative aspect-[2/3] bg-muted">
        <Image
          src={filme.imagem}
          alt={filme.titulo}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-cover"
        />
        <button
          type="button"
          onClick={() => onToggleFavorito(filme.id)}
          className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white"
          aria-label="Favoritar"
        >
          <Heart
            className={`h-5 w-5 ${
              favorito ? "fill-primary text-primary" : ""
            }`}
          />
        </button>
      </div>

      <CardContent className="space-y-1 p-4">
        <h2 className="font-display text-lg">{filme.titulo}</h2>
        <p className="text-sm text-muted-foreground">
          {filme.ano} · {filme.genero}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild variant="secondary" className="w-full">
          <Link href={`/filme/${filme.id}`}>Saiba Mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
