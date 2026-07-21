import { GradeFilmes } from "@/components/grade-filmes";
import { getDestaques } from "@/lib/filmes";

export default function DestaquesPage() {
  const destaques = getDestaques();

  return (
    <main>
      <h2 className="mb-2 font-display text-2xl">Destaques</h2>
      <p className="mb-6 text-muted-foreground">
        Seleção especial do catálogo.
      </p>
      <GradeFilmes filmes={destaques} />
    </main>
  );
}
