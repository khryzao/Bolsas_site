import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confiante e Graciosa | Moda e Acessórios",
  description: "Descubra bolsas, vestidos e acessórios escolhidos para valorizar seu estilo. Atendimento com Carla Graziela pelo WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}