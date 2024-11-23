import type { Metadata } from "next";

import { Libre_Baskerville } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "AgendeAe – Agende com facilidade, conecte-se com eficiência.",
  description:
    "O AgendeAe é a solução que transforma a forma como você gerencia sua agenda, reduzindo custos operacionais, otimizando o fluxo de trabalho e proporcionando previsibilidade para seu negócio.",
};

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-family",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${libreBaskerville.className} antialiased`}>
        {" "}
        {children}
      </body>
    </html>
  );
}
