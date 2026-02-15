"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQS = [
  {
    q: "¿Bloqer funciona en cualquier país de Latinoamérica?",
    a: "Sí. Bloqer es una plataforma SaaS en la nube, accesible desde cualquier lugar. El sistema está diseñado con las necesidades operativas de la construcción en LatAm en mente.",
  },
  {
    q: "¿Necesito instalar algo en mi computadora?",
    a: "No. Bloqer funciona 100% en el navegador. Solo necesitás una conexión a internet. También es accesible desde dispositivos móviles.",
  },
  {
    q: "¿Puedo usar solo algunos módulos?",
    a: "Sí. Podés activar y usar solo los módulos que tu equipo necesite. No estás obligado a usar toda la plataforma desde el primer día.",
  },
  {
    q: "¿Cómo migro mis datos actuales?",
    a: "Podés cargar presupuestos y catálogos manualmente o importarlos. Nuestro equipo te puede asistir en la configuración inicial de tu primer proyecto.",
  },
  {
    q: "¿Qué pasa con mis datos si cancelo la suscripción?",
    a: "Tus datos te pertenecen. Antes de cancelar, podés exportar toda tu información. Nunca la eliminamos sin tu consentimiento.",
  },
  {
    q: "¿Cuántos usuarios puedo agregar?",
    a: "Depende del plan. El plan Starter permite hasta 10 usuarios, el Pro es ilimitado, y el Enterprise incluye configuración personalizada. Consultá la página de precios para más detalles.",
  },
  {
    q: "¿Ofrecen soporte técnico?",
    a: "Sí. Todos los planes incluyen soporte por WhatsApp y correo electrónico. Los planes Pro y Enterprise incluyen además soporte prioritario y sesiones de onboarding.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-medium text-gray-900">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-gray-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Preguntas frecuentes"
          description="Respuestas rápidas sobre Bloqer."
        />

        <div className="border-t border-gray-200">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
