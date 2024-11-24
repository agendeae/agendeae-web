"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/images/calendar2.jpg";
import Logo from "../../public/logo.png";
import { BuildingOffice, SignIn, List, X } from "@phosphor-icons/react";
import calendarFoto from "../../public/imageCalendar3.jpg";

function useDevice() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useDevice();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-neutral-primary">
      <div className="flex flex-col  max-w-[1920px] m-auto p-6 lg:p-16 gap-4 h-auto pt-12">
        {/* Header */}
        <header
          className={`flex items-center justify-between w-full m-auto ${
            scrollPosition > 0 ? "bg-white lg:bg-neutral-primary" : "none"
          }`}
        >
          <div
            className={`flex justify-between items-center z-10 w-full h-20 fixed lg:relative top-0 left-0 p-6 lg:p-16 ${
              scrollPosition > 50 && !isMenuOpen
                ? "bg-neutral-deep sm:bg-opacity-50 sm:backdrop-blur-lg lg:bg-neutral-primary"
                : "none"
            }`}
          >
            <img
              src={Logo.src}
              alt="Logo AgendaAe"
              className="max-w-[30px] top-6 left-4 z-10"
            />

            <button
              className={`lg:hidden p-2 z-[51] fixed top-4 right-4  ${
                isMenuOpen ? "text-white" : "text-brand-primary"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                {isMenuOpen ? <X size={32} /> : <List size={32} />}
              </div>
            </button>
          </div>

          <button
            className={`lg:hidden p-2 z-[51] fixed top-4 right-4 ${
              !isMenuOpen ? "text-black" : "text-white"
            }`}
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

        <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between gap-8 mt-10 ">
          <div className="text-center lg:text-center gap-8 flex flex-col">
            <h1 className="text-brand-primary font-bold text-4xl lg:text-5xl leading-relaxed">
              Agende com facilidade.
            </h1>
            <h2 className="">
              Com nosso aplicativo, você pode localizar horários disponíveis em
              seus serviços preferidos, agendar de forma prática e aproveitar
              seu tempo sem preocupações.
            </h2>
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
            ></Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between gap-8 mt-10">
          <div className={`text-right lg:text-left ${!isMobile ? 'hidden' : 'block'}`}>
            <h1 className="text-brand-primary font-bold text-1xl lg:text-4xl">
              Conheça nossa solução que conecta você aos melhores horários em
              comércios e serviços da sua cidade, sem atrasos e sem filas.
            </h1>
          </div>

          <div className="rounded-md lg:max-w-[880px] w-full h-full overflow-hidden relative">
            <Image
              className="object-cover h-full rounded-md"
              src={calendarFoto}
              alt="Imagem de um calendário"
            />

            <Link
              href="https://unsplash.com/photos/a-calendar-with-the-word-jan-on-it-tGGTatQB4N8"
              target="_blank"
              className="absolute text-xs right-2 bottom-2 text-brand-primary"
            ></Link>
          </div>

          <div className={`text-right lg:text-left ${isMobile ? 'hidden' : 'block'}`}>
            <h1 className="text-brand-primary font-bold text-1xl lg:text-3xl">
              Conheça nossa solução que conecta você aos melhores horários em
              comércios e serviços da sua cidade, sem atrasos e sem filas.
            </h1>
          </div>

          
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center">
          <nav className="w-full h-full flex flex-col justify-center items-center gap-12 text-white text-xl">
            <Link href="/establishment" onClick={() => setIsMenuOpen(false)}>
              Para empresa
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
