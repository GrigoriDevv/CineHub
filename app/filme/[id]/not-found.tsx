import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="py-20 text-center">
      <h1 className="font-display text-2xl">Filme não encontrado</h1>
      <p className="mt-2 text-muted-foreground">Esse id não existe.</p>
      <Button asChild className="mt-4">
        <Link href="/">Voltar</Link>
      </Button>
    </main>
  );
}
