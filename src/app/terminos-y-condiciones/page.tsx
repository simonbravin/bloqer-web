import type { Metadata } from "next";
import { TerminosContent } from "./TerminosContent";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de Bloqer. Conocé las reglas que rigen el uso de nuestra plataforma.",
};

export default function TerminosPage() {
  return <TerminosContent />;
}
