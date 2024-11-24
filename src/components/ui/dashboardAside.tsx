"use client";

import { ChartPie } from "@phosphor-icons/react";

type linksProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type DashboardAsideProps = {
  linksArray: Array<linksProps>;
};

export function DashboardAside({ linksArray }: DashboardAsideProps) {
  return (
    <nav className="lg:flex lg:items-center lg:flex-col lg:justify-center gap-12 h-screen max-w-[64px] w-full  border-brand-primary border-r">
      {linksArray.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="flex flex-col items-center justify-center gap-2 rounded-md  text-brand-primary "
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
}
