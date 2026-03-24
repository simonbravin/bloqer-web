"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// ── Shared easing curve (all animations use this) ──────────────────────────
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Variant sets ───────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

// ── MotionSection: scroll-triggered fade + slide reveal ────────────────────
interface MotionSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MotionSection({ children, delay = 0, className = "" }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.72, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerContainer: staggers direct children on scroll ───────────────────
interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerContainer({ children, className = "", delay = 0 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// ── FloatingGradient: an orb that breathes autonomously ────────────────────
interface FloatingGradientProps {
  className?: string;
  duration?: number;
  delay?: number;
}

export function FloatingGradient({ className = "", duration = 8, delay = 0 }: FloatingGradientProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full ${className}`}
      animate={{
        scale: [1, 1.14, 0.96, 1],
        opacity: [0.5, 0.85, 0.6, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.38, 0.72, 1],
      }}
    />
  );
}

// ── PulseRing: expanding ring for CTA buttons ──────────────────────────────
export function PulseRing({ color = "rgba(59,130,246,0.4)" }: { color?: string }) {
  return (
    <motion.span
      className="pointer-events-none absolute inset-0 rounded-xl"
      animate={{
        boxShadow: [
          `0 0 0 0px ${color}`,
          `0 0 0 14px rgba(59,130,246,0)`,
        ],
      }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
    />
  );
}
