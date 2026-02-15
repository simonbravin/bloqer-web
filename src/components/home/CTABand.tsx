"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="bg-primary-600 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Empezá a controlar tus obras hoy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Creá tu cuenta gratis y configurá tu primer proyecto en minutos. Sin
          tarjeta de crédito, sin compromisos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            href={REGISTER_URL}
            className="bg-white text-primary-700 hover:bg-gray-50"
          >
            Crear cuenta gratis
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/contacto"
            className="text-white hover:bg-primary-500 hover:text-white"
          >
            Hablar con ventas
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
