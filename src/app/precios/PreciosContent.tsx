"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/home/FAQ";
import { REGISTER_URL, WHATSAPP_URL } from "@/lib/constants";

const FEATURES = [
  "Proyectos ilimitados",
  "Usuarios ilimitados",
  "Todos los módulos incluidos",
  "Presupuesto y control de costos",
  "Compras y órdenes de compra",
  "Inventario y almacén",
  "Certificaciones y avances de obra",
  "Reportes diarios con fotos",
  "Documentos con control de versiones",
  "Dashboard con KPIs en tiempo real",
  "Órdenes de cambio",
  "Soporte prioritario por WhatsApp",
  "Sesión de onboarding incluida",
  "Almacenamiento ilimitado",
];

const BILLING_OPTIONS = [
  {
    id: "monthly",
    label: "Mensual",
    price: 179,
    billingNote: "por mes",
    badge: null,
    savingsNote: null,
    cta: "Empezar ahora",
  },
  {
    id: "quarterly",
    label: "Trimestral",
    price: 150,
    billingNote: "por mes · $450 cada 3 meses",
    badge: "Ahorrás $87",
    savingsNote: "16% de descuento vs mensual",
    cta: "Empezar ahora",
    highlighted: true,
  },
  {
    id: "annual",
    label: "Anual",
    price: 125,
    billingNote: "por mes · $1,499 al año",
    badge: "Ahorrás $649",
    savingsNote: "30% de descuento vs mensual",
    cta: "Empezar ahora",
  },
] as const;

type BillingId = (typeof BILLING_OPTIONS)[number]["id"];

export function PreciosContent() {
  const [selected, setSelected] = useState<BillingId>("quarterly");

  const active = BILLING_OPTIONS.find((o) => o.id === selected)!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-28 sm:pt-40 sm:pb-40">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400" />
              Precios
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Sin vueltas.{" "}
              <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                Una sola oferta.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Un plan completo con todo lo que necesitás para gestionar tus obras.
              Sin tiers confusos, sin funciones bloqueadas, sin sorpresas.
            </p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Pricing card */}
      <section className="bg-white pt-4 pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1 gap-1">
              {BILLING_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`relative flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    selected === opt.id
                      ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {opt.label}
                  {opt.badge && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                      {opt.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main card */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-3xl border-2 border-primary-500 bg-white shadow-card-elevated ring-1 ring-primary-500/20"
          >
            {/* Top badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-1.5 text-xs font-semibold text-white shadow-md shadow-primary-500/30">
                <Zap className="h-3 w-3" />
                Plan único — Todo incluido
              </span>
            </div>

            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left: price */}
              <div className="p-10 pt-12 lg:border-r lg:border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold tracking-tight text-gray-900">
                    ${active.price}
                  </span>
                  <span className="text-sm text-gray-500">{active.billingNote}</span>
                </div>

                {active.savingsNote && (
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    {active.savingsNote}
                  </p>
                )}

                <p className="mt-6 text-sm leading-relaxed text-gray-500">
                  Acceso completo a todas las funcionalidades de Bloqer desde el
                  primer día. Sin límites de proyectos, sin límites de usuarios.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    href={REGISTER_URL}
                    className="w-full bg-primary-500 shadow-lg shadow-primary-500/25 hover:bg-primary-400"
                  >
                    {active.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    href={WHATSAPP_URL}
                    className="w-full text-gray-500 hover:text-gray-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Hablar con ventas
                  </Button>
                </div>

                <p className="mt-5 text-center text-xs text-gray-400">
                  Podés cancelar en cualquier momento. Precios en USD.
                </p>
              </div>

              {/* Right: features */}
              <div className="p-10 pt-12">
                <p className="mb-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Todo lo que incluye
                </p>
                <ul className="space-y-3">
                  {FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 ring-1 ring-primary-100">
                        <Check className="h-3 w-3 text-primary-600" />
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <p className="mt-6 text-center text-xs text-gray-400">
            Los precios no incluyen impuestos locales. Facturación gestionada por Paddle.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Tenés dudas antes de empezar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Hablemos. Te mostramos la plataforma en vivo y te ayudamos a
            evaluar si Bloqer es la herramienta que tu equipo necesita.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
