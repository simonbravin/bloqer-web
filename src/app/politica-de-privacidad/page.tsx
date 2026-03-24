import type { Metadata } from "next";
import { PrivacidadContent } from "./PrivacidadContent";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Bloqer. Conocé cómo recopilamos, usamos y protegemos tu información personal.",
};

export default function PrivacidadPage() {
  return <PrivacidadContent />;
}
