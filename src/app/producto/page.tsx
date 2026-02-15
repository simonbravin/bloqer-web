import type { Metadata } from "next";
import { ProductoContent } from "./ProductoContent";

export const metadata: Metadata = {
  title: "Producto",
  description:
    "Conocé cómo Bloqer integra presupuesto, compras, inventario y certificaciones en una sola plataforma para la construcción.",
};

export default function ProductoPage() {
  return <ProductoContent />;
}
