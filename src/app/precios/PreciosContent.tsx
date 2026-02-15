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
      <section className="bg-gradient-to-b from-primary-50/50 to-white pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              Precios
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Planes simples,{" "}
              <span className="text-primary-600">sin sorpresas</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Elegí el plan que se adapte a tu operación. Empezá gratis y escalá
              cuando lo necesités.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="-mt-4 bg-white pb-20">
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
                  "relative flex flex-col rounded-2xl border p-8",
                  plan.highlighted
                    ? "border-primary-500 shadow-xl shadow-primary-100 ring-1 ring-primary-500"
                    : "border-gray-200"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 right-0 left-0 mx-auto w-fit rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white">
                    Más popular
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-gray-500">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      <span className="text-gray-700">{feature}</span>
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

          <p className="mt-8 text-center text-sm text-gray-500">
            Precios referenciales en USD — consultá por planes para equipos
            grandes. Los precios no incluyen impuestos locales.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="¿No estás seguro cuál elegir?"
            description="Contactanos y te ayudamos a encontrar el plan ideal para tu equipo."
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href={WHATSAPP_URL}>
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </Button>
            <Button variant="outline" size="lg" href="/contacto">
              Formulario de contacto
            </Button>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
