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
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary-600/8 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonios"
          title="Lo que dicen nuestros usuarios"
          description="Equipos de construcción ya gestionan sus obras con Bloqer."
          dark
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:border-white/15"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-blueprint-400/40" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-gray-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-sm font-bold text-white shadow-md shadow-primary-500/25">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">
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
