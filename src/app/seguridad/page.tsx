import type { Metadata } from "next";
import { SeguridadContent } from "./SeguridadContent";

export const metadata: Metadata = {
  title: "Seguridad",
  description:
    "Conocé cómo Bloqer protege tu información: aislamiento de datos, cifrado, permisos granulares y auditoría.",
};

export default function SeguridadPage() {
  return <SeguridadContent />;
}
