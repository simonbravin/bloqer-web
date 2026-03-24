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
import { EASE, MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "Cifrado en tránsito",
    description:
      "Todas las comunicaciones entre tu navegador y nuestros servidores están protegidas con TLS/HTTPS.",
    barColor: "from-primary-400 to-primary-600",
    ringColor: "rgba(59,130,246,0.3)",
  },
  {
    icon: Database,
    title: "Aislamiento de datos",
    description:
      "Arquitectura multi-tenant con aislamiento lógico por organización. Tu información nunca se cruza con la de otros clientes.",
    barColor: "from-blueprint-400 to-cyan-500",
    ringColor: "rgba(34,211,238,0.3)",
  },
  {
    icon: Users,
    title: "Roles y permisos granulares",
    description:
      "Definí exactamente qué puede hacer cada usuario: por proyecto, por módulo, por acción. Sin accesos innecesarios.",
    barColor: "from-violet-400 to-purple-500",
    ringColor: "rgba(139,92,246,0.3)",
  },
  {
    icon: Eye,
    title: "Auditoría de acciones",
    description:
      "Cada acción relevante queda registrada con quién la hizo y cuándo. Trazabilidad completa para tu tranquilidad.",
    barColor: "from-amber-400 to-orange-500",
    ringColor: "rgba(245,158,11,0.3)",
  },
  {
    icon: RefreshCw,
    title: "Backups automáticos",
    description:
      "Copias de seguridad automáticas y periódicas de tu información. Tus datos están protegidos ante imprevistos.",
    barColor: "from-green-400 to-emerald-500",
    ringColor: "rgba(34,197,94,0.3)",
  },
  {
    icon: Server,
    title: "Infraestructura confiable",
    description:
      "Alojado en infraestructura cloud de alta disponibilidad con monitoreo continuo y redundancia.",
    barColor: "from-slate-400 to-slate-600",
    ringColor: "rgba(100,116,139,0.3)",
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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        {/* Breathing orbs */}
        <motion.div
          className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-blueprint-500/7 blur-[100px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: EASE }}
          >
            {/* Animated shield icon */}
            <motion.div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10"
              animate={{ boxShadow: ["0 0 0 0 rgba(34,211,238,0)", "0 0 0 12px rgba(34,211,238,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="h-8 w-8 text-blueprint-400" />
              </motion.div>
            </motion.div>
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

      {/* ── Security features ── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Medidas de seguridad"
            description="Protecciones técnicas y operativas que aplicamos para resguardar tu información."
          />

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_FEATURES.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7">
                  {/* Animated top bar */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${f.barColor} rounded-t-2xl`}
                    style={{ originX: 0 }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, ease: EASE, delay: 0.12 + i * 0.08 }}
                  />
                  {/* Icon with pulse ring */}
                  <div className="relative mb-5 h-12 w-12">
                    <motion.span
                      className="absolute inset-0 rounded-xl"
                      style={{ boxShadow: `0 0 0 0 ${f.ringColor}` }}
                      animate={{
                        boxShadow: [
                          `0 0 0 0px ${f.ringColor}`,
                          `0 0 0 10px rgba(0,0,0,0)`,
                        ],
                      }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: i * 0.4 }}
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 text-primary-600 ring-1 ring-primary-100">
                      <f.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/7 blur-[100px]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nuestros principios de seguridad" dark />

          <div className="mx-auto max-w-3xl space-y-5">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: EASE }}
                className="flex gap-5 rounded-xl border border-white/6 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-blueprint-400/20 hover:bg-white/7"
              >
                {/* Animated bullet */}
                <motion.div
                  className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blueprint-400"
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeInOut" }}
                />
                <div>
                  <h3 className="font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer & CTA ── */}
      <section className="bg-white py-24 sm:py-32">
        <MotionSection>
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
        </MotionSection>
      </section>
    </>
  );
}
