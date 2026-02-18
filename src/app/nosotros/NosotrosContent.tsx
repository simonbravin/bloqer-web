"use client";

import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VALUES = [
  {
    icon: Target,
    title: "Enfoque en el problema real",
    description:
      "No construimos software genérico. Cada funcionalidad responde a un problema concreto que vivimos y entendemos en la operación de obra.",
  },
  {
    icon: Eye,
    title: "Transparencia como cultura",
    description:
      "Creemos que la información clara y accesible es la base de cualquier proyecto exitoso — tanto en obra como en nuestro equipo.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidad ante todo",
    description:
      "La tecnología debe simplificar, no complicar. Diseñamos para que tu equipo lo adopte rápido, sin manuales extensos.",
  },
];

const TIMELINE = [
  {
    period: "El problema",
    description:
      "Equipos de construcción en Latinoamérica operan con planillas desconectadas, correos perdidos y procesos manuales que generan errores, pérdida de tiempo y falta de visibilidad.",
  },
  {
    period: "La solución",
    description:
      "Bloqer nace como una plataforma diseñada específicamente para conectar los procesos clave de la construcción: presupuesto, compras, inventario, avances y documentos — todo en un solo lugar.",
  },
  {
    period: "El futuro",
    description:
      "Seguimos desarrollando módulos que responden a necesidades reales del sector. Nuestro objetivo es que cada equipo de construcción en LatAm tenga acceso a herramientas de gestión profesionales.",
  },
];

export function NosotrosContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400" />
                Nosotros
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Hacemos que la construcción opere con{" "}
                <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                  más control y transparencia
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Bloqer es un equipo que entiende los desafíos reales de la
                construcción en Latinoamérica. No somos un ERP genérico adaptado —
                construimos desde cero pensando en vos.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              badge="Nuestra misión"
              title="Digitalizar la operación de construcción en Latinoamérica"
              description="Creemos que cada proyecto de construcción merece ser gestionado con información clara, procesos conectados y trazabilidad completa — sin importar su tamaño."
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nuestra historia" dark />

          <div className="mx-auto max-w-3xl space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-sm font-bold text-white shadow-lg shadow-primary-500/25">
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="mt-2 h-full w-px bg-gradient-to-b from-primary-500/40 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-white">{item.period}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Nuestros valores"
            title="Lo que nos guía"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 text-primary-600 ring-1 ring-primary-100 transition-all group-hover:from-primary-100 group-hover:to-primary-200/50 group-hover:shadow-md group-hover:shadow-primary-100">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid" />
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Querés conocer más? Hablemos.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Nos encanta hablar de construcción y tecnología. Contanos sobre tu
            operación y veamos cómo podemos ayudar.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              href="/contacto"
              className="bg-white text-primary-700 shadow-lg hover:bg-gray-50 hover:shadow-xl"
            >
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
