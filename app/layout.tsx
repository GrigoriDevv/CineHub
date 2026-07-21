import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import { FavoritosProvider } from "@/components/favoritos-context";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Catálogo de Filmes",
  description: "Desafio técnico MyByte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <FavoritosProvider>
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <SiteHeader />
            {children}
          </div>
        </FavoritosProvider>
      </body>
    </html>
  );
}
