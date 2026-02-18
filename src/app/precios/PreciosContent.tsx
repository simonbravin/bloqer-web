"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/home/FAQ";
import { REGISTER_URL, WHATSAPP_URL } from "@/lib/constants";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$49",
    period: "/mes por proyecto",
    description: "Para equipos pequeños que inician su transformación digital.",
    features: [
      "Hasta 3 proyectos activos",
      "Hasta 10 usuarios",
      "Módulos: Proyectos, Presupuesto, Compras",
      "Reportes diarios con fotos",
      "Inventario básico",
      "Soporte por email y WhatsApp",
      "1 GB de almacenamiento por proyecto",
    ],
    cta: "Empezar con Starter",
    href: REGISTER_URL,
  },
  {
    name: "Pro",
    price: "$129",
    period: "/mes",
    description: "Para operaciones que necesitan control total sin límites.",
    features: [
      "Proyectos ilimitados",
      "Usuarios ilimitados",
      "Todos los módulos incluidos",
      "Certificaciones y avances de obra",
      "Órdenes de cambio",
      "Documentos con control de versiones",
      "Dashboard con KPIs",
      "Soporte prioritario",
      "10 GB de almacenamiento por proyecto",
      "Sesión de onboarding incluida",
    ],
    cta: "Empezar con Pro",
    href: REGISTER_URL,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Para organizaciones con múltiples proyectos y equipos grandes.",
    features: [
      "Todo lo de Pro incluido",
      "Almacenamiento personalizado",
      "Integración con sistemas existentes (API)",
      "Capacitación dedicada",
      "Gerente de cuenta asignado",
      "SLA de soporte garantizado",
      "Configuración personalizada de flujos",
      "Facturación corporativa",
    ],
    cta: "Contactar ventas",
    href: WHATSAPP_URL,
  },
];

export function PreciosContent() {
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
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400" />
              Precios
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Planes simples,{" "}
              <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                sin sorpresas
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Elegí el plan que se adapte a tu operación. Empezá gratis y escalá
              cuando lo necesités.
            </p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Plans */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
                  plan.highlighted
                    ? "border-primary-500 shadow-card-elevated ring-1 ring-primary-500 scale-[1.02]"
                    : "border-gray-200 shadow-card hover:shadow-card-hover hover:-translate-y-1"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 right-0 left-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-1 text-xs font-semibold text-white shadow-md shadow-primary-500/25">
                    Más popular
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-gray-500">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    variant={plan.highlighted ? "primary" : "outline"}
                    size="lg"
                    href={plan.href}
                    className="w-full"
                  >
                    {plan.cta}
                    {plan.name === "Enterprise" ? (
                      <MessageCircle className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            Precios referenciales en USD — consultá por planes para equipos
            grandes. Los precios no incluyen impuestos locales.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="¿No estás seguro cuál elegir?"
            description="Contactanos y te ayudamos a encontrar el plan ideal para tu equipo."
            dark
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              href={WHATSAPP_URL}
              className="bg-primary-500 shadow-lg shadow-primary-500/25 hover:bg-primary-400"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contacto"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
            >
              Formulario de contacto
            </Button>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
