import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

/**
 * ═══════════════════════════════════════════════════════════════
 * 🎀 INVITACIÓN XV AÑOS - LAYOUT PRINCIPAL
 * Configuración de fuentes elegantes y metadata
 * ═══════════════════════════════════════════════════════════════
 */

// Fuente principal - Elegante y legible para textos
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Fuente cursiva - Para títulos especiales y nombres
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

// Fuente sans-serif - Para textos pequeños y botones
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// Metadata para SEO y compartir en redes
export const metadata: Metadata = {
  title: "Mis XV Años | Invitación Digital",
  description: "Estás cordialmente invitado/a a celebrar mis XV años. Una noche mágica que quedará en nuestros corazones para siempre.",
  keywords: ["XV años", "quinceañera", "invitación", "fiesta", "celebración"],
  openGraph: {
    title: "Mis XV Años | Invitación Digital",
    description: "Estás cordialmente invitado/a a celebrar mis XV años",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`
          ${cormorant.variable} 
          ${greatVibes.variable} 
          ${montserrat.variable}
          antialiased
          min-h-screen
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}
