import type { Metadata } from "next";
import { ReembolsoContent } from "./ReembolsoContent";

export const metadata: Metadata = {
  title: "Política de Reembolso",
  description:
    "Política de reembolso de Bloqer. Conocé las condiciones bajo las cuales podés solicitar un reembolso.",
};

export default function ReembolsoPage() {
  return <ReembolsoContent />;
}
