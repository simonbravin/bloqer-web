"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, StaggerContainer, StaggerItem } from "@/components/motion";

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
        <SectionHeading title="En tres pasos empezás a controlar tu obra" />

        <div className="relative">
          {/* ── Animated connector line (desktop only) ── */}
          <div className="absolute top-10 left-0 right-0 hidden md:block">
            <svg
              className="w-full overflow-visible"
              height="2"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="16" y1="1" x2="84" y2="1"
                stroke="url(#connectorGrad)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
              />
              <defs>
                <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0" />
                  <stop offset="20%" stopColor="#bfdbfe" stopOpacity="1" />
                  <stop offset="80%" stopColor="#bfdbfe" stopOpacity="1" />
                  <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <StaggerContainer className="grid gap-10 md:grid-cols-3" delay={0.3}>
            {STEPS.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center">
                  {/* Step icon container */}
                  <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-2xl bg-primary-50 ring-1 ring-primary-100" />

                    {/* Subtle breathing pulse on the ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-primary-100/0 ring-1 ring-primary-200/0"
                      animate={{ opacity: [0, 0.6, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/25"
                      initial={{ scale: 0, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, ease: EASE, delay: 0.4 + i * 0.15 }}
                    >
                      <step.icon className="h-7 w-7" />
                    </motion.div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
