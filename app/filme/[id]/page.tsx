import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFilmeById } from "@/lib/filmes";

type Props = {
  params: { id: string };
};

export default function FilmePage({ params }: Props) {
  const id = Number(params.id);
  if (Number.isNaN(id)) notFound();

  const filme = getFilmeById(id);
  if (!filme) notFound();

  return (
    <main>
      <Button asChild variant="ghost" className="mb-6 gap-2 px-0">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
      </Button>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative mx-auto h-[420px] w-[280px] shrink-0 overflow-hidden rounded-md bg-muted">
          <Image
            src={filme.imagem}
            alt={filme.titulo}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="mb-1 text-sm text-primary">
            {filme.ano} · {filme.genero}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl">{filme.titulo}</h1>

          <h2 className="mb-2 mt-6 text-sm font-medium text-muted-foreground">
            Sinopse
          </h2>
          <p className="max-w-xl leading-relaxed">{filme.sinopse}</p>
        </div>
      </div>
    </main>
  );
}
