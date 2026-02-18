"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Users,
  Database,
  Eye,
  RefreshCw,
  Server,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "Cifrado en tránsito",
    description:
      "Todas las comunicaciones entre tu navegador y nuestros servidores están protegidas con TLS/HTTPS.",
  },
  {
    icon: Database,
    title: "Aislamiento de datos",
    description:
      "Arquitectura multi-tenant con aislamiento lógico por organización. Tu información nunca se cruza con la de otros clientes.",
  },
  {
    icon: Users,
    title: "Roles y permisos granulares",
    description:
      "Definí exactamente qué puede hacer cada usuario: por proyecto, por módulo, por acción. Sin accesos innecesarios.",
  },
  {
    icon: Eye,
    title: "Auditoría de acciones",
    description:
      "Cada acción relevante queda registrada con quién la hizo y cuándo. Trazabilidad completa para tu tranquilidad.",
  },
  {
    icon: RefreshCw,
    title: "Backups automáticos",
    description:
      "Copias de seguridad automáticas y periódicas de tu información. Tus datos están protegidos ante imprevistos.",
  },
  {
    icon: Server,
    title: "Infraestructura confiable",
    description:
      "Alojado en infraestructura cloud de alta disponibilidad con monitoreo continuo y redundancia.",
  },
];

const PRINCIPLES = [
  {
    title: "Tus datos te pertenecen",
    description:
      "Nunca vendemos, compartimos o usamos tu información para fines distintos a brindarte el servicio.",
  },
  {
    title: "Transparencia",
    description:
      "Si algo cambia en nuestras prácticas de seguridad, te lo comunicamos de forma clara y directa.",
  },
  {
    title: "Mejora continua",
    description:
      "Evaluamos y mejoramos nuestras prácticas de seguridad de forma regular para mantenernos al día.",
  },
];

export function SeguridadContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Shield className="h-8 w-8 text-blueprint-400" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Tu información,{" "}
              <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                protegida
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              La seguridad no es un extra — es parte del diseño de Bloqer. Así
              protegemos la información de tu organización y tus proyectos.
            </p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Security features */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Medidas de seguridad"
            description="Protecciones técnicas y operativas que aplicamos para resguardar tu información."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-card transition-all duration-300 hover:border-primary-100 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 text-primary-600 ring-1 ring-primary-100 transition-all group-hover:from-primary-100 group-hover:to-primary-200/50 group-hover:shadow-md group-hover:shadow-primary-100">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestros principios de seguridad"
            dark
          />

          <div className="mx-auto max-w-3xl space-y-6">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-blueprint-400/20 hover:bg-white/8"
              >
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blueprint-400" />
                <div>
                  <h3 className="font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            ¿Tenés preguntas sobre seguridad?
          </h2>
          <p className="mt-4 text-gray-500">
            Estamos abiertos a responder cualquier consulta técnica o de
            cumplimiento. Contactanos y te respondemos con detalle.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Nota: No reclamamos certificaciones de seguridad que no hayamos
            obtenido formalmente. Nuestra postura es la transparencia.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/contacto">
              Preguntas de seguridad
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
