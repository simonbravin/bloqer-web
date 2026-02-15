"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  Calculator,
  FileCheck,
  ShoppingCart,
  Warehouse,
  ClipboardList,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const MODULES = [
  {
    icon: FolderKanban,
    title: "Proyectos",
    description: "Configurá y controlá cada proyecto con estructura clara.",
  },
  {
    icon: Calculator,
    title: "Presupuesto y Costos",
    description: "Versiones, comparativos y control de desviaciones.",
  },
  {
    icon: FileCheck,
    title: "Certificaciones",
    description: "Avances de obra con medición y facturación progresiva.",
  },
  {
    icon: ShoppingCart,
    title: "Compras",
    description: "Solicitudes, órdenes, seguimiento de proveedores.",
  },
  {
    icon: Warehouse,
    title: "Inventario",
    description: "Stock en tiempo real, entradas, salidas y traspasos.",
  },
  {
    icon: ClipboardList,
    title: "Reportes diarios",
    description: "Bitácora de obra con fotos, clima e incidencias.",
  },
];

export function ModulesTeaser() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Módulos"
          title="Una plataforma, todos los procesos"
          description="Cada módulo resuelve un dolor real de la operación de obra. Usá solo lo que necesitás."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <mod.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{mod.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/modulos">
            Ver todos los módulos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
