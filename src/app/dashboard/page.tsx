"use client";

import { DashboardAside } from "@/components/ui/dashboardAside";
import {
  BuildingOffice,
  Calendar,
  ChartPie,
  Mailbox,
} from "@phosphor-icons/react";

const dashboardLinks = [
  {
    name: "Dashboard",
    href: "/establishment",
    icon: <BuildingOffice size={24} />,
  },
  {
    name: "Estabelecimentos Favoritos",
    href: "/favorites",
    icon: <Calendar size={24} />,
  },
  {
    name: "Relatórios",
    href: "/relatorios",
    icon: <ChartPie size={24} />,
  },
  {
    name: "Contato",
    href: "/contato",
    icon: <Mailbox size={24} />,
  },
];

export default function Dashboard() {
  return (
    <main className="flex flex-row justify-between items-center h-screen w-full">
      <DashboardAside linksArray={dashboardLinks} />

      <div className="bg-brand-primary h-screen w-1/3"></div>
    </main>
  );
}
