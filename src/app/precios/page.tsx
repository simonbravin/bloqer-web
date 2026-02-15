import type { Metadata } from "next";
import { PreciosContent } from "./PreciosContent";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes y precios de Bloqer. Elegí el plan que mejor se adapte a tu operación de construcción.",
};

export default function PreciosPage() {
  return <PreciosContent />;
}
