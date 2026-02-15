"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
    <section className="bg-gray-50 py-20 sm:py-28">
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
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">
                  {t.role} — {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
