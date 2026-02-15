"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Briefcase } from "lucide-react";

const SEGMENTS = [
  { icon: Building2, label: "Constructoras" },
  { icon: HardHat, label: "Contratistas" },
  { icon: Briefcase, label: "Desarrolladores" },
];

export function SocialProof() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium tracking-wide text-gray-400 uppercase">
          Diseñado para equipos de construcción en Latinoamérica
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={seg.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-gray-400"
            >
              <seg.icon className="h-8 w-8" strokeWidth={1.5} />
              <span className="text-base font-medium">{seg.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
