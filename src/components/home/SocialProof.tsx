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
    <section className="relative border-b border-gray-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
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
              className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-gray-600"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-100 transition-all group-hover:bg-primary-50 group-hover:ring-primary-100">
                <seg.icon className="h-5 w-5 transition-colors group-hover:text-primary-600" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold tracking-wide">{seg.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
