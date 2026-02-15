import type { Metadata } from "next";
import { ContactoContent } from "./ContactoContent";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá al equipo de Bloqer. Escribinos por formulario o WhatsApp para resolver tus dudas.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
