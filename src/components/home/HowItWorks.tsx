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
    <section className="bg-white py-24 sm:py-32">
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
                <div className="absolute top-10 right-0 hidden h-px w-full translate-x-1/2 md:block">
                  <div className="h-full w-full bg-gradient-to-r from-primary-200 via-primary-200 to-primary-100" />
                  <div className="absolute top-1/2 right-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary-200" />
                </div>
              )}

              <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center">
                {/* Background ring */}
                <div className="absolute inset-0 rounded-2xl bg-primary-50 ring-1 ring-primary-100" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/25">
                  <step.icon className="h-7 w-7" />
                </div>
              </div>
              <span className="mt-4 mb-2 block text-xs font-bold tracking-wider text-primary-500 uppercase">
                Paso {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
