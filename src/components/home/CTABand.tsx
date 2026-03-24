"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";
import { EASE, PulseRing, MotionSection } from "@/components/motion";

// ── Floating particle dots ─────────────────────────────────────────────────
function Particle({ x, y, delay, duration }: { x: string; y: string; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-white/20"
      style={{ left: x, top: y }}
      animate={{ y: [0, -24, 0], opacity: [0, 0.7, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = [
  { x: "12%", y: "60%", delay: 0, duration: 4 },
  { x: "28%", y: "40%", delay: 1.2, duration: 5 },
  { x: "55%", y: "70%", delay: 0.5, duration: 3.8 },
  { x: "70%", y: "35%", delay: 2, duration: 4.5 },
  { x: "85%", y: "55%", delay: 0.8, duration: 3.5 },
  { x: "40%", y: "20%", delay: 1.8, duration: 4.2 },
];

export function CTABand() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500" />
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid" />

      {/* Shifting glow orbs */}
      <motion.div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-800/40 blur-3xl"
        animate={{ x: [0, -15, 20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/4 blur-3xl"
        animate={{ scaleX: [1, 1.2, 0.9, 1], opacity: [0.4, 0.6, 0.35, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <MotionSection>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: EASE }}
            className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
          >
            Empezá a controlar tus obras hoy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: EASE, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-primary-100/90"
          >
            Creá tu cuenta gratis y configurá tu primer proyecto en minutos. Sin
            tarjeta de crédito, sin compromisos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: EASE, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <div className="relative">
              <PulseRing color="rgba(255,255,255,0.3)" />
              <Button
                variant="secondary"
                size="lg"
                href={REGISTER_URL}
                className="relative bg-white text-primary-700 shadow-lg hover:bg-gray-50 hover:shadow-xl"
              >
                Crear cuenta gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="lg"
              href="/contacto"
              className="text-white/90 hover:bg-white/10 hover:text-white"
            >
              Hablar con ventas
            </Button>
          </motion.div>
        </div>
      </MotionSection>
    </section>
  );
}
