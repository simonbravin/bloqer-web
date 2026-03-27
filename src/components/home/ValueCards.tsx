"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldCheck, Users, BarChart3, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, StaggerContainer, StaggerItem } from "@/components/motion";

// Card data — icon, title, description, color token
const VALUES = [
  {
    icon: Clock,
    title: "Ahorrá tiempo",
    description: "Automatizá procesos manuales que hoy te cuestan horas en planillas y correos.",
    barColor: "from-gray-400 to-gray-500",
    ringColor: "rgba(100,116,139,0.3)",
    iconGrad: "from-gray-50 to-slate-100",
    iconText: "text-slate-500",
    iconRing: "ring-slate-200",
  },
  {
    icon: DollarSign,
    title: "Controlá costos",
    description: "Comparar presupuesto vs. real en tiempo real. Detectá desviaciones antes de que escalen.",
    barColor: "from-primary-400 to-primary-600",
    ringColor: "rgba(59,130,246,0.3)",
    iconGrad: "from-primary-50 to-blue-100",
    iconText: "text-primary-600",
    iconRing: "ring-primary-100",
  },
  {
    icon: AlertTriangle,
    title: "Menos errores",
    description: "Una sola fuente de verdad elimina duplicaciones, versiones desactualizadas y pérdidas de información.",
    barColor: "from-amber-400 to-orange-500",
    ringColor: "rgba(245,158,11,0.3)",
    iconGrad: "from-amber-50 to-yellow-100",
    iconText: "text-amber-500",
    iconRing: "ring-amber-100",
  },
  {
    icon: ShieldCheck,
    title: "Trazabilidad completa",
    description: "Cada movimiento queda registrado: quién, qué, cuándo. Auditoría en cualquier momento.",
    barColor: "from-blueprint-400 to-cyan-500",
    ringColor: "rgba(34,211,238,0.3)",
    iconGrad: "from-cyan-50 to-sky-100",
    iconText: "text-blueprint-500",
    iconRing: "ring-cyan-100",
  },
  {
    icon: Users,
    title: "Colaboración real",
    description: "Ingenieros, administrativos y directores ven lo que necesitan, con los permisos correctos.",
    barColor: "from-violet-400 to-purple-500",
    ringColor: "rgba(139,92,246,0.3)",
    iconGrad: "from-violet-50 to-purple-100",
    iconText: "text-violet-500",
    iconRing: "ring-violet-100",
  },
  {
    icon: BarChart3,
    title: "Decisiones con datos",
    description: "Dashboards y reportes que te muestran el estado real de cada proyecto al instante.",
    barColor: "from-primary-400 to-indigo-500",
    ringColor: "rgba(59,130,246,0.3)",
    iconGrad: "from-indigo-50 to-blue-100",
    iconText: "text-indigo-500",
    iconRing: "ring-indigo-100",
  },
] as const;

export function ValueCards() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Todo lo que necesitás para controlar tus obras"
          description="Dejá de perder tiempo con planillas desconectadas. Bloqer centraliza toda la operación de tus proyectos."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <StaggerItem key={v.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7">

                {/* Animated top bar — draws on scroll (via stagger delay inherited) */}
                <motion.div
                  className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r ${v.barColor} rounded-t-2xl`}
                  style={{ right: 0, originX: 0 }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: EASE, delay: 0.12 + i * 0.08 }}
                />

                {/* Icon with continuous pulse ring */}
                <div className="relative mb-5 h-11 w-11">
                  {/* Expanding ring */}
                  <motion.span
                    className="absolute inset-0 rounded-xl"
                    style={{ boxShadow: `0 0 0 0 ${v.ringColor}` }}
                    animate={{
                      boxShadow: [
                        `0 0 0 0px ${v.ringColor}`,
                        `0 0 0 10px rgba(0,0,0,0)`,
                      ],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.4,
                    }}
                  />
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${v.iconGrad} ${v.iconText} ring-1 ${v.iconRing}`}>
                    <v.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
