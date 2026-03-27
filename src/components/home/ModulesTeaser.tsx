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
import { EASE, StaggerContainer, StaggerItem } from "@/components/motion";

const MODULES = [
  {
    icon: FolderKanban,
    title: "Proyectos",
    description: "Configurá y controlá cada proyecto con estructura clara.",
    color: "text-blueprint-400",
    bg: "bg-blueprint-400/10",
    ring: "ring-blueprint-400/20",
  },
  {
    icon: Calculator,
    title: "Presupuesto y Costos",
    description: "Versiones, comparativos y control de desviaciones.",
    color: "text-primary-400",
    bg: "bg-primary-400/10",
    ring: "ring-primary-400/20",
  },
  {
    icon: FileCheck,
    title: "Certificaciones",
    description: "Avances de obra con medición y facturación progresiva.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    ring: "ring-green-400/20",
  },
  {
    icon: ShoppingCart,
    title: "Compras",
    description: "Solicitudes, órdenes, seguimiento de proveedores.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    ring: "ring-amber-400/20",
  },
  {
    icon: Warehouse,
    title: "Inventario",
    description: "Stock en tiempo real, entradas, salidas y traspasos.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    ring: "ring-violet-400/20",
  },
  {
    icon: ClipboardList,
    title: "Reportes diarios",
    description: "Bitácora de obra con fotos, clima e incidencias.",
    color: "text-blueprint-300",
    bg: "bg-blueprint-300/10",
    ring: "ring-blueprint-300/20",
  },
];

export function ModulesTeaser() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

      {/* Subtle breathing orb */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/6 blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Una plataforma, todos los procesos"
          description="Cada módulo resuelve un dolor real de la operación de obra. Usá solo lo que necesitás."
          dark
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.1}>
          {MODULES.map((mod) => (
            <StaggerItem key={mod.title}>
              <div className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/4 p-6 backdrop-blur-sm transition-all duration-400 hover:border-white/12 hover:bg-white/7">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${mod.bg} ${mod.color} ring-1 ${mod.ring} transition-all duration-300 group-hover:scale-105`}>
                  <mod.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{mod.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{mod.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            href="/modulos"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
          >
            Ver todos los módulos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
