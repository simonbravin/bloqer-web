"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { REGISTER_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl" />
        <div className="absolute top-20 -left-40 h-96 w-96 rounded-full bg-primary-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
              ERP de Construcción para Latinoamérica
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Controlá tus proyectos{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              de construcción
            </span>{" "}
            sin perder el hilo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            Presupuestos, compras, inventario, avances y reportes — todo conectado
            en una sola plataforma. Menos planillas, más control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="primary" size="lg" href={REGISTER_URL}>
              Empezar gratis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" href="/modulos">
              Ver módulos
            </Button>
          </motion.div>
        </div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <ScreenshotPlaceholder
            label="Dashboard principal — Vista general de proyectos"
            aspect="video"
          />
        </motion.div>
      </div>
    </section>
  );
}
