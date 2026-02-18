"use client";

import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  ShieldCheck,
  Users,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VALUES = [
  {
    icon: Clock,
    title: "Ahorrá tiempo",
    description:
      "Automatizá procesos manuales que hoy te cuestan horas en planillas y correos.",
  },
  {
    icon: DollarSign,
    title: "Controlá costos",
    description:
      "Comparar presupuesto vs. real en tiempo real. Detectá desviaciones antes de que escalen.",
  },
  {
    icon: AlertTriangle,
    title: "Menos errores",
    description:
      "Una sola fuente de verdad elimina duplicaciones, versiones desactualizadas y pérdidas de información.",
  },
  {
    icon: ShieldCheck,
    title: "Trazabilidad completa",
    description:
      "Cada movimiento queda registrado: quién, qué, cuándo. Auditoría en cualquier momento.",
  },
  {
    icon: Users,
    title: "Colaboración real",
    description:
      "Ingenieros, administrativos y directores ven lo que necesitan, con los permisos correctos.",
  },
  {
    icon: BarChart3,
    title: "Decisiones con datos",
    description:
      "Dashboards y reportes que te muestran el estado real de cada proyecto al instante.",
  },
];

export function ValueCards() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="¿Por qué Bloqer?"
          title="Todo lo que necesitás para controlar tus obras"
          description="Dejá de perder tiempo con planillas desconectadas. Bloqer centraliza toda la operación de tus proyectos."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-card transition-all duration-300 hover:border-primary-100 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 text-primary-600 ring-1 ring-primary-100 transition-all group-hover:from-primary-100 group-hover:to-primary-200/50 group-hover:shadow-md group-hover:shadow-primary-100">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
