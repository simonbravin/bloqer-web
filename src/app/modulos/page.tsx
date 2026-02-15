import type { Metadata } from "next";
import { ModulosContent } from "./ModulosContent";

export const metadata: Metadata = {
  title: "Módulos",
  description:
    "Explorá los módulos de Bloqer: proyectos, presupuesto, compras, inventario, certificaciones, reportes diarios y más.",
};

export default function ModulosPage() {
  return <ModulosContent />;
}
