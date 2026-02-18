"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Users,
  GitBranch,
  Database,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { CTABand } from "@/components/home/CTABand";
import { REGISTER_URL } from "@/lib/constants";

const FEATURES = [
  {
    icon: Layers,
    title: "Multi-tenant SaaS",
    description:
      "Cada organización opera en su propio entorno aislado. Tu información nunca se mezcla con la de otros.",
  },
  {
    icon: Users,
    title: "Roles y permisos granulares",
    description:
      "Definí exactamente qué puede ver y hacer cada usuario: por proyecto, por módulo, por acción.",
  },
  {
    icon: GitBranch,
    title: "Trazabilidad end-to-end",
    description:
      "Desde el presupuesto inicial hasta la certificación final: cada decisión, cambio y movimiento queda registrado.",
  },
  {
    icon: Database,
    title: "Datos centralizados",
    description:
      "Olvidate de buscar en correos y planillas. Todo vive en un solo lugar, siempre actualizado.",
  },
  {
    icon: Lock,
    title: "Seguridad por diseño",
    description:
      "Cifrado en tránsito, backups automáticos, y auditoría de acciones. Tu información está protegida.",
  },
  {
    icon: ShieldCheck,
    title: "Pensado para LatAm",
    description:
      "Flujos de trabajo, terminología y necesidades regulatorias adaptados a la realidad de la construcción en Latinoamérica.",
  },
];

const WORKFLOW_STEPS = [
  { label: "Presupuesto", description: "Cargá y versioná tu presupuesto base" },
  { label: "Compras", description: "Solicitá materiales con base en partidas" },
  { label: "Inventario", description: "Registrá entradas, salidas y stock" },
  { label: "Avances", description: "Medí progreso y generá certificaciones" },
  { label: "Reportes", description: "Visualizá KPIs y tomá decisiones" },
];

export function ProductoContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-blueprint-500/8 blur-[100px]" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400" />
                Producto
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Una plataforma que conecta{" "}
                <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                  toda tu operación
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Bloqer integra presupuesto, compras, inventario, avances de obra y
                reportes en un solo sistema. Sin integraciones complicadas, sin
                planillas paralelas — todo fluye conectado.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={REGISTER_URL}
                  className="bg-primary-500 shadow-lg shadow-primary-500/25 hover:bg-primary-400 hover:shadow-xl hover:shadow-primary-500/30"
                >
                  Empezar gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/modulos"
                  className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
                >
                  Ver módulos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary-500/10 blur-2xl" />
              <div className="relative">
                <ScreenshotPlaceholder label="Flujo integrado: Presupuesto → Compras → Inventario" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Workflow */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flujo de trabajo"
            title="Todo conectado, de principio a fin"
            description="Cada módulo alimenta al siguiente. Así se ve el flujo típico de un proyecto en Bloqer."
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Connection line */}
            <div className="absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 md:block">
              <div className="h-full w-full bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {WORKFLOW_STEPS.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-sm font-bold text-primary-600 shadow-md shadow-primary-100">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-gray-900">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Características"
            title="Diseñado para equipos de construcción reales"
            description="No es un ERP genérico adaptado — Bloqer está construido desde cero para el sector."
            dark
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blueprint-400/20 hover:bg-white/8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 ring-1 ring-primary-400/20 transition-all group-hover:bg-primary-500/20 group-hover:text-primary-300">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                badge="Interfaz intuitiva"
                title="Diseñado para que tu equipo lo adopte rápido"
                description="Sin curvas de aprendizaje eternas. Bloqer tiene una interfaz limpia que cualquier profesional de construcción puede usar desde el primer día."
              />
              <ul className="space-y-3">
                {[
                  "Navegación clara por proyecto y módulo",
                  "Dashboards con la información que realmente importa",
                  "Formularios simplificados para registrar datos en campo",
                  "Accesible desde cualquier dispositivo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary-500/5 blur-2xl" />
              <div className="relative">
                <ScreenshotPlaceholder label="Interfaz del dashboard de proyecto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
