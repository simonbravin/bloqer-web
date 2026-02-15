import type { Metadata } from "next";
import { NosotrosContent } from "./NosotrosContent";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé al equipo detrás de Bloqer. Nuestra misión: hacer que la construcción en Latinoamérica opere con más control y transparencia.",
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
