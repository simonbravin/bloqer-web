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
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 sm:py-32">
      {/* Blueprint grid */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
      {/* Subtle top edge */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Módulos"
          title="Una plataforma, todos los procesos"
          description="Cada módulo resuelve un dolor real de la operación de obra. Usá solo lo que necesitás."
          dark
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blueprint-400/20 hover:bg-white/8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400 ring-1 ring-primary-400/20 transition-all group-hover:bg-primary-500/20 group-hover:text-primary-300">
                <mod.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">{mod.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            href="/modulos"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
          >
            Ver todos los módulos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
