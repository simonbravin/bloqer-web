"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Antes manejábamos todo en Excel y WhatsApp. Con Bloqer, en dos semanas ya teníamos visibilidad real de nuestros costos.",
    name: "Carlos M.",
    role: "Gerente de Proyecto",
    company: "Constructora ejemplo",
  },
  {
    quote:
      "Lo que más me gusta es la trazabilidad: puedo ver el historial completo de cualquier compra o cambio de presupuesto.",
    name: "María L.",
    role: "Administradora de obra",
    company: "Desarrollos ejemplo",
  },
  {
    quote:
      "Nuestros reportes diarios pasaron de ser un dolor de cabeza a algo que se genera en minutos con fotos incluidas.",
    name: "Roberto S.",
    role: "Ingeniero residente",
    company: "Contratista ejemplo",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonios"
          title="Lo que dicen nuestros usuarios"
          description="Equipos de construcción en Latinoamérica ya gestionan sus obras con Bloqer."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-primary-100" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-50 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
