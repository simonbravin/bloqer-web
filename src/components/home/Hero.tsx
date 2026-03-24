"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";
import { EASE, PulseRing } from "@/components/motion";

// ── Helper: draw transition for SVG path animations ──────────────────────
const draw = (delay: number, duration = 1.2) => ({
  pathLength: { delay, duration, ease: EASE },
  opacity: { delay, duration: 0.01 },
});

// ── Animated blueprint floor-plan SVG ─────────────────────────────────────
function BlueprintFloorPlan() {
  // Junction coordinates for interior wall endpoints
  const junctions: [number, number][] = [
    [220, 45], [330, 45], [220, 185], [330, 185], [420, 185], [220, 310],
  ];

  // Window indicators on top outer wall
  const topWindows = [110, 210, 300, 390];

  // Room labels
  const rooms = [
    { x: 140, y: 185, label: "PLANTA BAJA" },
    { x: 275, y: 112, label: "OFICINAS" },
    { x: 375, y: 112, label: "SALA" },
    { x: 322, y: 255, label: "ÁREA COMÚN" },
  ];

  // Title block text
  const titleLines = [
    { y: 265, text: "BLOQER · PLANO TIPO", size: 6.5, op: 0.65 },
    { y: 279, text: "ESC. 1:100  REV.03", size: 5.5, op: 0.4 },
    { y: 292, text: "TORRE CENTRAL", size: 5.5, op: 0.4 },
    { y: 305, text: "PANAMÁ, 2025", size: 5.5, op: 0.3 },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blueprint-400/10">
      {/* Blueprint background */}
      <div className="absolute inset-0 bg-slate-950 bg-blueprint-grid-dark opacity-90" />

      <svg
        viewBox="0 0 640 360"
        className="relative w-full"
        aria-hidden="true"
        style={{ filter: "drop-shadow(0 0 28px rgba(34,211,238,0.1))" }}
      >
        {/* ── Registration crosshairs at corners ── */}
        {([[28, 18], [612, 18], [612, 342], [28, 342]] as [number, number][]).map(([x, y], i) => (
          <g key={`reg-${i}`}>
            <motion.line x1={x - 10} y1={y} x2={x + 10} y2={y}
              stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
            />
            <motion.line x1={x} y1={y - 10} x2={x} y2={y + 10}
              stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
            />
          </g>
        ))}

        {/* ── Title block (draws early as frame element) ── */}
        <motion.rect x="445" y="250" width="165" height="80" rx="2"
          stroke="#22d3ee" strokeWidth="0.75" strokeOpacity="0.3" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />
        <motion.line x1="445" y1="265" x2="610" y2="265"
          stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        />
        {titleLines.map((t, i) => (
          <motion.text key={t.text} x="527" y={t.y}
            fill="#22d3ee" fillOpacity={t.op}
            fontSize={t.size} fontFamily="monospace" textAnchor="middle"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.0 + i * 0.12, duration: 0.3 }}
          >
            {t.text}
          </motion.text>
        ))}

        {/* ── Outer building perimeter ── */}
        <motion.path
          d="M 60 45 L 430 45 L 430 310 L 60 310 Z"
          stroke="#22d3ee" strokeWidth="2.2" fill="rgba(34,211,238,0.022)"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={draw(0.45, 1.5)}
        />

        {/* ── Interior walls ── */}
        <motion.line x1="220" y1="45" x2="220" y2="310"
          stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={draw(1.75, 0.7)}
        />
        <motion.line x1="330" y1="45" x2="330" y2="185"
          stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={draw(2.05, 0.55)}
        />
        <motion.line x1="220" y1="185" x2="430" y2="185"
          stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={draw(2.3, 0.7)}
        />

        {/* ── Junction dots at wall intersections ── */}
        {junctions.map(([x, y], i) => (
          <motion.circle key={`jd-${i}`} cx={x} cy={y} r={3.5}
            fill="#22d3ee"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ delay: 2.45 + i * 0.06, duration: 0.3, ease: EASE }}
          />
        ))}

        {/* ── Top wall window indicators ── */}
        {topWindows.map((x, i) => (
          <motion.rect key={`tw-${i}`}
            x={x - 14} y={38} width={28} height={8} rx="1.5"
            fill="rgba(34,211,238,0.18)" stroke="#22d3ee" strokeWidth="0.75" strokeOpacity="0.65"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            style={{ transformOrigin: `${x}px 42px` }}
            transition={{ delay: 2.65 + i * 0.08, duration: 0.4, ease: EASE }}
          />
        ))}

        {/* ── Right wall window indicators ── */}
        {[105, 250].map((y, i) => (
          <motion.rect key={`rw-${i}`}
            x={423} y={y - 10} width={8} height={20} rx="1.5"
            fill="rgba(34,211,238,0.18)" stroke="#22d3ee" strokeWidth="0.75" strokeOpacity="0.65"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            style={{ transformOrigin: `427px ${y}px` }}
            transition={{ delay: 2.85 + i * 0.1, duration: 0.38, ease: EASE }}
          />
        ))}

        {/* ── Door arcs (dashed = swing path) ── */}
        <motion.path d="M 60 235 A 36 36 0 0 1 96 199"
          stroke="#22d3ee" strokeWidth="0.9" strokeOpacity="0.55" fill="none"
          strokeDasharray="3 2.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 3.05, duration: 0.55 }}
        />
        <motion.path d="M 220 125 A 30 30 0 0 0 250 95"
          stroke="#22d3ee" strokeWidth="0.9" strokeOpacity="0.55" fill="none"
          strokeDasharray="3 2.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.45 }}
        />

        {/* ── Room labels ── */}
        {rooms.map((r, i) => (
          <motion.text key={r.label} x={r.x} y={r.y}
            fill="#22d3ee" fillOpacity="0.3"
            fontSize="7.5" fontFamily="monospace" textAnchor="middle" letterSpacing="2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 3.35 + i * 0.1, duration: 0.4 }}
          >
            {r.label}
          </motion.text>
        ))}

        {/* ── Dimension line: top ── */}
        <motion.line x1="60" y1="23" x2="430" y2="23"
          stroke="#22d3ee" strokeWidth="0.65" strokeOpacity="0.3" strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.75 }}
        />
        {[60, 430].map((x, i) => (
          <motion.line key={`dt-${i}`} x1={x} y1={18} x2={x} y2={28}
            stroke="#22d3ee" strokeWidth="0.65" strokeOpacity="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 3.9, duration: 0.2 }}
          />
        ))}
        <motion.text x="245" y="19" fill="#22d3ee" fillOpacity="0.45"
          fontSize="7" fontFamily="monospace" textAnchor="middle"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.95, duration: 0.3 }}
        >
          30.00 m
        </motion.text>

        {/* ── Dimension line: left ── */}
        <motion.line x1="40" y1="45" x2="40" y2="310"
          stroke="#22d3ee" strokeWidth="0.65" strokeOpacity="0.3" strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.65 }}
        />
        <motion.text x="40" y="182" fill="#22d3ee" fillOpacity="0.45"
          fontSize="7" fontFamily="monospace" textAnchor="middle"
          transform="rotate(-90,40,182)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 4.0, duration: 0.3 }}
        >
          22.00 m
        </motion.text>

        {/* ── North arrow ── */}
        <g transform="translate(490, 80)">
          <motion.circle cx="0" cy="0" r="16"
            stroke="#22d3ee" strokeWidth="0.75" strokeOpacity="0.25" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.55 }}
          />
          <motion.path d="M0,-14 L5,7 L0,3 L-5,7 Z"
            fill="#22d3ee" fillOpacity="0.7"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.7, duration: 0.4, ease: EASE }}
          />
          <motion.text y="-21" x="0" fill="#22d3ee" fillOpacity="0.55"
            fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.3 }}
          >
            N
          </motion.text>
        </g>

        {/* ── Live pulse indicator ── */}
        <motion.circle cx="510" cy="32" r="4.5"
          fill="#22c55e"
          animate={{ opacity: [1, 0.35, 1], r: [4.5, 5.5, 4.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="510" cy="32" r="10"
          stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3" fill="none"
          animate={{ opacity: [0.3, 0, 0.3], r: [10, 18, 10] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.text x="521" y="36"
          fill="#22c55e" fillOpacity="0.7" fontSize="7" fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.9 }}
        >
          EN VIVO
        </motion.text>

        {/* ── Scan line (subtle) ── */}
        <motion.line x1="60" y1="45" x2="60" y2="310"
          stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0"
          animate={{ x1: [60, 430, 60], x2: [60, 430, 60], strokeOpacity: [0, 0.06, 0] }}
          transition={{ duration: 6, delay: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-blueprint-400"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              ERP de Construcción
            </span>
          </motion.div>

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

        {/* ── Animated Blueprint SVG ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.42 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-6 rounded-3xl bg-primary-500/8 blur-2xl" />
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/6 to-transparent" />
          <div className="relative ring-1 ring-white/5 rounded-2xl">
            <BlueprintFloorPlan />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
