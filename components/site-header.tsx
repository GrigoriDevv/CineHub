"use client";

import Link from "next/link";
import { MenuHamburguer } from "@/components/menu-hamburguer";

export function SiteHeader() {
  return (
    <header className="mb-8 flex items-center justify-between gap-4">
      <Link href="/" className="font-display text-2xl sm:text-3xl">
        Catálogo de Filmes
      </Link>
      <MenuHamburguer />
    </header>
  );
}
