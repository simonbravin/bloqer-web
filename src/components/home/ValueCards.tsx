"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldCheck, Users, BarChart3, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, StaggerContainer, StaggerItem } from "@/components/motion";

// ── Mini animated widgets (autonomous, no interaction needed) ─────────────

// Budget vs Real comparison bars
function CostWidget() {
  return (
    <div className="flex items-end gap-3 h-11">
      {/* Budget bar (static reference) */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 bg-gray-100 rounded-sm overflow-hidden" style={{ height: 36 }}>
          <div className="w-full bg-gray-300 rounded-sm" style={{ height: "100%" }} />
        </div>
        <span className="text-[8px] font-mono text-gray-400 tracking-wide">PPTO</span>
      </div>
      {/* Real bar (animates to show under-budget) */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 bg-gray-100 rounded-sm overflow-hidden" style={{ height: 36 }}>
          <motion.div
            className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-sm"
            style={{ originY: 1 }}
            animate={{ scaleY: [0, 0.82, 0.82, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: EASE, times: [0, 0.3, 0.85, 1] }}
          />
        </div>
        <span className="text-[8px] font-mono text-gray-400 tracking-wide">REAL</span>
      </div>
      {/* Savings badge */}
      <motion.span
        className="mb-5 rounded bg-green-50 px-1.5 py-0.5 text-[9px] font-bold text-green-600 ring-1 ring-green-100"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, times: [0, 0.3, 0.45, 0.85, 1] }}
      >
        −18%
      </motion.span>
    </div>
  );
}

// Audit trail — dots ping sequentially down the timeline
function TraceWidget() {
  const dots = [
    { label: "09:14", color: "bg-primary-500" },
    { label: "11:32", color: "bg-primary-400" },
    { label: "14:05", color: "bg-blueprint-400" },
    { label: "16:48", color: "bg-blueprint-500" },
  ];
  return (
    <div className="flex flex-col gap-1.5 h-11 justify-center">
      {dots.map((dot, i) => (
        <div key={dot.label} className="flex items-center gap-2">
          <motion.span
            className={`h-1.5 w-1.5 rounded-full ${dot.color} shrink-0`}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.55,
              ease: "easeInOut",
            }}
          />
          <motion.span
            className="text-[8px] font-mono text-gray-400"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.55 }}
          >
            {dot.label} — actualización
          </motion.span>
        </div>
      ))}
    </div>
  );
}

// Sparkline that continuously draws and resets
function DataWidget() {
  const points = "0,32 18,28 36,30 54,20 72,24 90,14 108,18 126,10 144,14 162,8";
  return (
    <div className="h-11 flex items-center">
      <svg viewBox="0 0 162 40" className="w-full" style={{ height: 44 }}>
        {/* Area fill */}
        <motion.path
          d="M0,32 18,28 36,30 54,20 72,24 90,14 108,18 126,10 144,14 162,8 L162,40 L0,40 Z"
          fill="url(#sparkGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0.35, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 0.8, times: [0, 0.3, 0.85, 1] }}
        />
        {/* Line */}
        <motion.polyline
          points={points}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 0.8, ease: EASE, times: [0, 0.45, 0.85, 1] }}
        />
        {/* Live dot */}
        <motion.circle cx="162" cy="8" r="3" fill="#3b82f6"
          animate={{ opacity: [0, 0, 1, 0], scale: [0.5, 0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 0.8, times: [0, 0.43, 0.55, 1] }}
        />
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ── Card definitions ───────────────────────────────────────────────────────
const VALUES = [
  {
    icon: Clock,
    title: "Ahorrá tiempo",
    description: "Automatizá procesos manuales que hoy te cuestan horas en planillas y correos.",
    widget: null,
    accent: "from-gray-50 to-gray-100/50",
    iconColor: "text-gray-500",
    iconBg: "bg-gray-50 ring-gray-100",
  },
  {
    icon: DollarSign,
    title: "Controlá costos",
    description: "Comparar presupuesto vs. real en tiempo real. Detectá desviaciones antes de que escalen.",
    widget: <CostWidget />,
    accent: "from-primary-50/80 to-primary-50/30",
    iconColor: "text-primary-600",
    iconBg: "bg-primary-50 ring-primary-100",
  },
  {
    icon: AlertTriangle,
    title: "Menos errores",
    description: "Una sola fuente de verdad elimina duplicaciones, versiones desactualizadas y pérdidas de información.",
    widget: null,
    accent: "from-amber-50/60 to-amber-50/20",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 ring-amber-100",
  },
  {
    icon: ShieldCheck,
    title: "Trazabilidad completa",
    description: "Cada movimiento queda registrado: quién, qué, cuándo. Auditoría en cualquier momento.",
    widget: <TraceWidget />,
    accent: "from-blueprint-50/60 to-blueprint-50/20",
    iconColor: "text-blueprint-500",
    iconBg: "bg-blueprint-50 ring-blueprint-100",
  },
  {
    icon: Users,
    title: "Colaboración real",
    description: "Ingenieros, administrativos y directores ven lo que necesitan, con los permisos correctos.",
    widget: null,
    accent: "from-violet-50/60 to-violet-50/20",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50 ring-violet-100",
  },
  {
    icon: BarChart3,
    title: "Decisiones con datos",
    description: "Dashboards y reportes que te muestran el estado real de cada proyecto al instante.",
    widget: <DataWidget />,
    accent: "from-primary-50/80 to-primary-50/30",
    iconColor: "text-primary-600",
    iconBg: "bg-primary-50 ring-primary-100",
  },
];

export function ValueCards() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="¿Por qué Bloqer?"
          title="Todo lo que necesitás para controlar tus obras"
          description="Dejá de perder tiempo con planillas desconectadas. Bloqer centraliza toda la operación de tus proyectos."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <StaggerItem key={v.title}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-gray-100/80 bg-white p-7 transition-colors duration-300 hover:border-gray-200">
                {/* Subtle gradient header */}
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${v.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Icon */}
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${v.accent} ${v.iconColor} ring-1 ${v.iconBg}`}>
                  <v.icon className="h-5 w-5" />
                </div>

                <h3 className="text-base font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.description}</p>

                {/* Animated widget (only for 3 cards) */}
                {v.widget && (
                  <div className="mt-5 border-t border-gray-50 pt-4">
                    {v.widget}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
