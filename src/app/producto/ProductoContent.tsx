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
      <section className="bg-gradient-to-b from-primary-50/50 to-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
                Producto
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Una plataforma que conecta{" "}
                <span className="text-primary-600">toda tu operación</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Bloqer integra presupuesto, compras, inventario, avances de obra y
                reportes en un solo sistema. Sin integraciones complicadas, sin
                planillas paralelas — todo fluye conectado.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href={REGISTER_URL}>
                  Empezar gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" href="/modulos">
                  Ver módulos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ScreenshotPlaceholder label="Flujo integrado: Presupuesto → Compras → Inventario" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flujo de trabajo"
            title="Todo conectado, de principio a fin"
            description="Cada módulo alimenta al siguiente. Así se ve el flujo típico de un proyecto en Bloqer."
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Connection line */}
            <div className="absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 md:block" />

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
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-sm font-bold text-primary-600">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-gray-900">
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
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Características"
            title="Diseñado para equipos de construcción reales"
            description="No es un ERP genérico adaptado — Bloqer está construido desde cero para el sector."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot section */}
      <section className="bg-white py-20">
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
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ScreenshotPlaceholder label="Interfaz del dashboard de proyecto" />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
