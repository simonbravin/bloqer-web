"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 py-20 sm:py-24">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid" />
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-800/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Empezá a controlar tus obras hoy
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-100/90">
          Creá tu cuenta gratis y configurá tu primer proyecto en minutos. Sin
          tarjeta de crédito, sin compromisos.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            href={REGISTER_URL}
            className="bg-white text-primary-700 shadow-lg hover:bg-gray-50 hover:shadow-xl"
          >
            Crear cuenta gratis
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/contacto"
            className="text-white/90 hover:bg-white/10 hover:text-white"
          >
            Hablar con ventas
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
