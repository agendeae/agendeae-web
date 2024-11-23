"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/images/Hero.jpg";
import { BuildingOffice, SignIn, List, X } from "@phosphor-icons/react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-neutral-primary">
      <div className="flex flex-col h-screen max-w-[1920px] m-auto p-6 lg:p-16 gap-4">
        {/* Header */}
        <header className="flex items-center justify-between w-full m-auto">
          <span className="text-brand-primary italic text-center text-3xl">
            AgendeAe
          </span>

          <button
            className="lg:hidden p-2 text-brand-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              {isMenuOpen ? <X size={32} /> : <List size={32} />}
            </div>
          </button>

          <nav className="hidden lg:flex lg:items-center gap-12">
            <Button variant="link" asChild>
              <Link href="/establishment">
                <BuildingOffice />
                Para empresa
              </Link>
            </Button>

            <Button variant="link" asChild>
              <Link href="/login">
                <SignIn />
                Login
              </Link>
            </Button>

            <Button size="lg" variant="default" asChild>
              <Link href="/signup">Cadastrar</Link>
            </Button>
          </nav>
        </header>

        <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-brand-primary font-bold text-3xl lg:text-5xl">
              Agende com facilidade, conecte-se com eficiência.
            </h1>
          </div>

          <div className="rounded-md lg:max-w-[620px] w-full h-full overflow-hidden relative">
            <Image
              className="object-cover h-full rounded-md"
              src={HeroImage}
              alt="Imagem de um calendário"
            />

            <Link
              href="https://unsplash.com/photos/a-calendar-with-the-word-jan-on-it-tGGTatQB4N8"
              target="_blank"
              className="absolute text-xs right-2 bottom-2 text-brand-primary"
            >
              Imagem por: Unsplash
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center">
          <nav className="w-full h-full flex flex-col justify-center items-center gap-12 text-white text-xl">
            <Link href="/establishment" onClick={() => setIsMenuOpen(false)}>
              2 Para empresa
            </Link>
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
              Cadastrar
            </Link>
          </nav>
        </div>
      )}
    </main>
  );
}
