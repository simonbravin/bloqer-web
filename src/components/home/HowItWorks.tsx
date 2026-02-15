"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    icon: UserPlus,
    number: "01",
    title: "Creá tu cuenta",
    description:
      "Registrate en minutos. Configurá tu organización y agregá a tu equipo con los permisos adecuados.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configurá tu proyecto",
    description:
      "Cargá tu presupuesto, definí partidas, asigná responsables y activá los módulos que necesitás.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Operá con control total",
    description:
      "Registrá compras, avances, inventario y reportes. Todo queda conectado y trazable automáticamente.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Cómo funciona"
          title="En tres pasos empezás a controlar tu obra"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="absolute top-8 right-0 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-primary-200 to-primary-100 md:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="mb-2 block text-sm font-bold text-primary-600">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
