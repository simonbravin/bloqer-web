"use client";

import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, FolderKanban, DollarSign, Users, Warehouse, BarChart3, Bell } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";
import { EASE, PulseRing } from "@/components/motion";

// ── Dashboard Mockup ───────────────────────────────────────────────────────
function DashboardMockup() {
  const navSections = [
    {
      label: "OPERACIONES",
      items: [
        { icon: LayoutDashboard, label: "Tablero", active: true },
        { icon: FolderKanban, label: "Proyectos" },
        { icon: DollarSign, label: "Finanzas" },
      ],
    },
    {
      label: "GESTIÓN",
      items: [
        { icon: Users, label: "Equipo" },
        { icon: Warehouse, label: "Inventario" },
      ],
    },
    {
      label: "REPORTES",
      items: [
        { icon: BarChart3, label: "Reportes" },
      ],
    },
  ];

  const stats = [
    { label: "Proyectos Activos", value: "3", valueColor: "text-white", sub: "+1 este mes" },
    { label: "Presupuesto Total", value: "$1.2M", valueColor: "text-white", sub: "3 proyectos" },
    { label: "Avance Promedio", value: "67%", valueColor: "text-green-400", sub: "+8% vs prev" },
    { label: "Gastos del Mes", value: "$84K", valueColor: "text-white", sub: "En 3 proyectos" },
  ];

  // Cashflow chart polyline points (SVG viewBox 0 0 440 90)
  const chartPoints = "0,72 55,65 110,52 165,36 220,42 275,26 330,30 385,20 440,22";
  const areaPath = `M 0,72 55,65 110,52 165,36 220,42 275,26 330,30 385,20 440,22 L 440,90 L 0,90 Z`;

  return (
    <div
      className="relative overflow-hidden rounded-2xl ring-1 ring-white/10"
      style={{ background: "#020617" }}
    >
      {/* Window chrome bar */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="mx-auto text-[11px] font-medium text-white/30 tracking-wide">
          Bloqer — Tablero de Control
        </span>
        <motion.div
          className="flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <span className="text-[10px] text-green-400/70">en vivo</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex" style={{ height: 370 }}>
        {/* ── Sidebar ── */}
        <motion.aside
          className="hidden w-44 shrink-0 flex-col border-r border-white/5 sm:flex"
          style={{ background: "#020617" }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-4 border-b border-white/5">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-500 text-white">
              <span className="text-[10px] font-black">B</span>
            </div>
            <span className="text-sm font-semibold text-white">Bloqer</span>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-hidden p-2 space-y-3">
            {navSections.map((sec, si) => (
              <div key={sec.label}>
                <p className="px-2 pb-1 text-[9px] font-bold tracking-widest text-white/25 uppercase">
                  {sec.label}
                </p>
                {sec.items.map((item, ii) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + si * 0.1 + ii * 0.06, duration: 0.4, ease: EASE }}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 mb-0.5 ${
                      item.active
                        ? "bg-primary-500/15 text-primary-400"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    <item.icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="text-[11px] font-medium">{item.label}</span>
                    {item.active && (
                      <span className="ml-auto h-1 w-1 rounded-full bg-primary-400" />
                    )}
                  </motion.div>
                ))}
              </div>
            ))}
          </nav>

          {/* User */}
          <motion.div
            className="border-t border-white/5 p-3 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-[10px] font-bold text-white">
              DB
            </div>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-medium text-white/70">Demo Bloqer</p>
              <p className="text-[9px] text-white/30">Admin</p>
            </div>
          </motion.div>
        </motion.aside>

        {/* ── Main area ── */}
        <div className="flex-1 overflow-hidden bg-slate-900/60 p-4 sm:p-5">
          {/* Header */}
          <motion.div
            className="mb-4 flex items-start justify-between"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55, ease: EASE }}
          >
            <div>
              <h2 className="text-sm font-extrabold text-white">Tablero de Control</h2>
              <p className="text-[10px] text-white/35">Resumen de la actividad de tu organización</p>
            </div>
            <motion.div
              className="flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <Bell className="h-3 w-3 text-white/30" />
              <span className="text-[10px] text-white/30">0 alertas</span>
            </motion.div>
          </motion.div>

          {/* ── Stat cards ── */}
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.09, duration: 0.5, ease: EASE }}
                className="rounded-xl border border-white/6 bg-white/4 p-3"
              >
                <p className="mb-1 text-[9px] text-white/35 leading-tight">{s.label}</p>
                <motion.p
                  className={`text-lg font-extrabold leading-none ${s.valueColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 + i * 0.09, duration: 0.4 }}
                >
                  {s.value}
                </motion.p>
                <p className="mt-1 text-[8px] text-white/25">{s.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Chart area ── */}
          <motion.div
            className="relative overflow-hidden rounded-xl border border-white/6 bg-white/3 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold text-white/70">Flujo de Caja</p>
                <p className="text-[9px] text-white/30">Ingresos y gastos por periodo</p>
              </div>
              <div className="flex gap-1">
                {["3 meses", "6 meses", "Año"].map((l, i) => (
                  <span
                    key={l}
                    className={`rounded px-2 py-0.5 text-[8px] ${i === 1 ? "bg-primary-500/20 text-primary-400" : "text-white/25"}`}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <svg viewBox="0 0 440 90" className="w-full" style={{ height: 90 }}>
              <defs>
                <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[22, 45, 68].map((y) => (
                <line key={y} x1="0" y1={y} x2="440" y2={y}
                  stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              {/* Area fill */}
              <motion.path
                d={areaPath}
                fill="url(#dashGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              />
              {/* Main line */}
              <motion.polyline
                points={chartPoints}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.6, ease: EASE }}
              />
              {/* Live dot at end */}
              <motion.circle
                cx="440" cy="22" r="4"
                fill="#3b82f6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.7, duration: 0.3 }}
              />
              <motion.circle
                cx="440" cy="22" r="8"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
                strokeOpacity="0.4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 0.4, 0] }}
                transition={{ delay: 2.8, duration: 1, repeat: Infinity, repeatDelay: 2 }}
              />
              {/* Month labels */}
              {["Oct", "Nov", "Dic", "Ene", "Feb", "Mar"].map((m, i) => (
                <motion.text
                  key={m}
                  x={i * 88} y={88}
                  fill="rgba(255,255,255,0.2)"
                  fontSize="7"
                  fontFamily="system-ui"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + i * 0.05 }}
                >
                  {m}
                </motion.text>
              ))}
            </svg>
          </motion.div>

          {/* ── Bottom metrics row ── */}
          <motion.div
            className="mt-2 grid grid-cols-3 gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5, ease: EASE }}
          >
            {[
              { label: "Total Ingresos", value: "$1.8M", color: "text-green-400" },
              { label: "Total Gastos", value: "$612K", color: "text-red-400" },
              { label: "Balance Período", value: "+$1.2M", color: "text-primary-400" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-white/3 px-2.5 py-2">
                <p className="text-[8px] text-white/30">{m.label}</p>
                <p className={`text-[11px] font-bold ${m.color}`}>{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── Hero section ──────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-0 sm:pt-36">
      {/* Blueprint grid */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />

      {/* Breathing gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-600/8 blur-[140px]"
        animate={{ scale: [1, 1.12, 0.95, 1], opacity: [0.5, 0.8, 0.55, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", times: [0, 0.35, 0.7, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute top-20 -left-40 h-[500px] w-[500px] rounded-full bg-blueprint-500/6 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-primary-500/5 blur-[100px]"
        animate={{ scaleX: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Top edge accent */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Copy ── */}
        <div className="mx-auto max-w-3xl pb-16 text-center sm:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: EASE, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]"
          >
            Controlá tus proyectos{" "}
            <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
              de construcción
            </span>{" "}
            sin perder el hilo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
          >
            Presupuestos, compras, inventario, avances y reportes — todo conectado
            en una sola plataforma. Menos planillas, más control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: EASE, delay: 0.32 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <div className="relative">
              <PulseRing />
              <Button
                variant="primary"
                size="lg"
                href={REGISTER_URL}
                className="relative bg-primary-500 shadow-lg shadow-primary-500/25 hover:bg-primary-400"
              >
                Empezar gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
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

        {/* ── Dashboard Mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.42 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-6 rounded-3xl bg-primary-500/8 blur-2xl" />
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/6 to-transparent" />
          <div className="relative">
            <DashboardMockup />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
