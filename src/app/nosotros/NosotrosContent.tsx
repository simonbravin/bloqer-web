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
      <section className="bg-gradient-to-b from-primary-50/50 to-white pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
                Nosotros
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Hacemos que la construcción opere con{" "}
                <span className="text-primary-600">más control y transparencia</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Bloqer es un equipo que entiende los desafíos reales de la
                construcción en Latinoamérica. No somos un ERP genérico adaptado —
                construimos desde cero pensando en vos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
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
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nuestra historia" />

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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-primary-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-gray-900">{item.period}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
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
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Querés conocer más? Hablemos.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
            Nos encanta hablar de construcción y tecnología. Contanos sobre tu
            operación y veamos cómo podemos ayudar.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              href="/contacto"
              className="bg-white text-primary-700 hover:bg-gray-50"
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
