"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Sparkles, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useFavoritos } from "@/components/favoritos-context";
import { useState } from "react";

const links = [
  { href: "/", label: "Início", icon: Film },
  { href: "/destaques", label: "Destaques", icon: Sparkles },
  { href: "/favoritos", label: "Favoritos", icon: Heart },
];

export function MenuHamburguer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { favoritos } = useFavoritos();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="font-display text-left text-xl">
            Menu
          </SheetTitle>
        </SheetHeader>

        <Separator className="my-4" />

        <nav className="flex flex-col gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const ativo = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                  ativo
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/90 hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1">{label}</span>
                {href === "/favoritos" && favoritos.length > 0 && (
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                    {favoritos.length}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
