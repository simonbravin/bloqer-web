"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { REGISTER_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-20 sm:pt-40 sm:pb-32">
      {/* Blueprint grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="absolute top-20 -left-40 h-[400px] w-[400px] rounded-full bg-blueprint-500/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary-500/6 blur-[100px]" />
      </div>

      {/* Subtle top edge line */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400 animate-pulse" />
              ERP de Construcción para Latinoamérica
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]"
          >
            Controlá tus proyectos{" "}
            <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
              de construcción
            </span>{" "}
            sin perder el hilo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
          >
            Presupuestos, compras, inventario, avances y reportes — todo conectado
            en una sola plataforma. Menos planillas, más control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              variant="primary"
              size="lg"
              href={REGISTER_URL}
              className="bg-primary-500 shadow-lg shadow-primary-500/25 hover:bg-primary-400 hover:shadow-xl hover:shadow-primary-500/30"
            >
              Empezar gratis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/modulos"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
            >
              Ver módulos
            </Button>
          </motion.div>
        </div>

        {/* Screenshot with glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          {/* Glow behind the screenshot */}
          <div className="absolute -inset-4 rounded-3xl bg-primary-500/10 blur-2xl" />
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
          <div className="relative">
            <ScreenshotPlaceholder
              label="Dashboard principal — Vista general de proyectos"
              aspect="video"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
