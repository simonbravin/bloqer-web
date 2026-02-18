"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderKanban,
  Calculator,
  FileCheck,
  ShoppingCart,
  Warehouse,
  ClipboardList,
  ArrowLeftRight,
  FileText,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { CTABand } from "@/components/home/CTABand";
import { REGISTER_URL } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

interface Module {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  headline: string;
  description: string;
  outcomes: string[];
  coming_soon?: boolean;
  screenshot_label: string;
}

const MODULES: Module[] = [
  {
    id: "proyectos",
    icon: FolderKanban,
    title: "Proyectos",
    headline: "Configurá y controlá cada proyecto desde un solo lugar",
    description:
      "Definí la estructura de tu proyecto, asigná responsables y activá los módulos que necesitás. Todo parte de acá.",
    outcomes: [
      "Estructura clara de proyecto con datos generales, ubicación y responsables",
      "Activación selectiva de módulos según la etapa del proyecto",
      "Vista general del estado de cada proyecto en tu organización",
    ],
    screenshot_label: "Vista de configuración de proyecto",
  },
  {
    id: "presupuesto",
    icon: Calculator,
    title: "Presupuesto y Costos",
    headline: "Presupuesto versionado con control de desviaciones en tiempo real",
    description:
      "Cargá tu presupuesto base, creá versiones y compará estimado vs. real. Detectá desvíos antes de que sean problemas.",
    outcomes: [
      "Presupuesto con versionado y trazabilidad de cada cambio",
      "Comparativo automático: presupuesto vs. comprometido vs. real",
      "Alertas tempranas de desviación por partida o rubro",
    ],
    screenshot_label: "Comparativo de presupuesto vs. real",
  },
  {
    id: "certificaciones",
    icon: FileCheck,
    title: "Certificaciones / Avances",
    headline: "Medí el avance real de obra y generá certificaciones",
    description:
      "Registrá mediciones de avance por partida y generá certificaciones de obra para facturación progresiva.",
    outcomes: [
      "Medición de avance físico por partida con historial completo",
      "Generación de certificaciones vinculadas al presupuesto",
      "Trazabilidad de montos certificados vs. contratados",
    ],
    screenshot_label: "Certificación de avance de obra",
  },
  {
    id: "compras",
    icon: ShoppingCart,
    title: "Compras y Proveedores",
    headline: "Solicitudes de compra con trazabilidad completa",
    description:
      "Desde la solicitud hasta la entrega: controlá cada compra, vinculá a partidas y seguí el estado con tus proveedores.",
    outcomes: [
      "Solicitudes de compra vinculadas a partidas del presupuesto",
      "Seguimiento de órdenes de compra y entregas",
      "Catálogo de proveedores centralizado por organización",
    ],
    screenshot_label: "Gestión de órdenes de compra",
  },
  {
    id: "inventario",
    icon: Warehouse,
    title: "Inventario y Movimientos",
    headline: "Stock en tiempo real con entradas, salidas y traspasos",
    description:
      "Controlá el inventario de cada proyecto: qué hay en obra, qué salió y hacia dónde. Sin sorpresas.",
    outcomes: [
      "Stock actualizado en tiempo real por proyecto y almacén",
      "Registro de entradas, salidas y traspasos con motivo",
      "Vinculación directa con órdenes de compra y partidas",
    ],
    screenshot_label: "Vista de inventario y movimientos",
  },
  {
    id: "reportes-diarios",
    icon: ClipboardList,
    title: "Reportes Diarios / Libro de Obra",
    headline: "Bitácora digital con fotos, clima e incidencias",
    description:
      "Registrá lo que pasó cada día en la obra: actividades, personal, equipos, clima y novedades. Con fotos adjuntas.",
    outcomes: [
      "Registro diario estructurado: actividades, recursos, clima",
      "Fotos de avance y novedades adjuntas al reporte",
      "Historial completo de la obra accesible en cualquier momento",
    ],
    screenshot_label: "Reporte diario de obra con fotos",
  },
  {
    id: "ordenes-cambio",
    icon: ArrowLeftRight,
    title: "Órdenes de Cambio",
    headline: "Gestioná cambios de alcance con impacto en costo y plazo",
    description:
      "Registrá y aprobá órdenes de cambio que afecten el presupuesto o cronograma. Todo queda documentado.",
    outcomes: [
      "Registro formal de cambios con impacto en costo y plazo",
      "Flujo de aprobación configurable por proyecto",
      "Actualización automática del presupuesto tras aprobación",
    ],
    screenshot_label: "Orden de cambio con impacto",
  },
  {
    id: "documentos",
    icon: FileText,
    title: "Documentos",
    headline: "Centralización y trazabilidad documental",
    description:
      "Organizá planos, contratos, permisos y documentos del proyecto en un solo lugar con control de versiones.",
    outcomes: [
      "Repositorio centralizado de documentos por proyecto",
      "Control de versiones: siempre sabés cuál es la última",
      "Acceso controlado por permisos de usuario",
    ],
    screenshot_label: "Gestor de documentos del proyecto",
  },
  {
    id: "finanzas",
    icon: TrendingUp,
    title: "Finanzas / Cashflow",
    headline: "Proyección de flujo de caja por proyecto",
    description:
      "Visualizá ingresos esperados vs. egresos comprometidos y proyectá tu flujo de caja en el tiempo.",
    outcomes: [
      "Proyección de flujo de caja basada en datos reales del proyecto",
      "Comparativo de ingresos (certificaciones) vs. egresos (compras)",
      "Alertas de brechas de liquidez por periodo",
    ],
    coming_soon: true,
    screenshot_label: "Dashboard de flujo de caja",
  },
  {
    id: "dashboard",
    icon: BarChart3,
    title: "Dashboard / Reportes",
    headline: "KPIs y métricas clave en tiempo real",
    description:
      "Dashboards con los indicadores que importan: avance, costos, compras y más. Para tomar decisiones informadas.",
    outcomes: [
      "Indicadores clave: avance vs. plan, costo vs. presupuesto",
      "Filtros por proyecto, periodo y responsable",
      "Exportación de reportes para presentaciones y comités",
    ],
    screenshot_label: "Dashboard de KPIs del proyecto",
  },
];

export function ModulosContent() {
  const [activeModule, setActiveModule] = useState(MODULES[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = MODULES.map((m) => ({
        id: m.id,
        el: document.getElementById(m.id),
      }));

      for (const section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveModule(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400" />
              Módulos
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Cada módulo resuelve un{" "}
              <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                dolor real
              </span>{" "}
              de la obra
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Activá solo los que necesitás. Cada módulo funciona integrado con
              el resto para que tu información siempre esté conectada.
            </p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Modules with sticky sidebar */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            {/* Sticky sidebar */}
            <nav className="hidden lg:block">
              <div className="sticky top-20 space-y-1 rounded-2xl border border-gray-100 bg-gray-50/50 p-4 shadow-card">
                <p className="mb-4 px-3 text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">
                  Módulos
                </p>
                {MODULES.map((m) => (
                  <a
                    key={m.id}
                    href={`#${m.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(m.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                      activeModule === m.id
                        ? "bg-primary-50 text-primary-700 shadow-sm"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <m.icon className="h-4 w-4 shrink-0" />
                    {m.title}
                    {m.coming_soon && (
                      <span className="ml-auto rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold text-yellow-700">
                        Próximamente
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </nav>

            {/* Module sections */}
            <div className="space-y-24">
              {MODULES.map((mod, i) => (
                <motion.div
                  key={mod.id}
                  id={mod.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="scroll-mt-24"
                >
                  <div className={cn(
                    "grid items-center gap-8 lg:grid-cols-2",
                    i % 2 === 1 && "lg:[direction:rtl] lg:*:[direction:ltr]"
                  )}>
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100/50 text-primary-600 ring-1 ring-primary-100">
                          <mod.icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-gray-900">
                          {mod.title}
                        </h2>
                        {mod.coming_soon && (
                          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                            Próximamente
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-gray-800">
                        {mod.headline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-gray-500">
                        {mod.description}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {mod.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-start gap-3 text-sm text-gray-500"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-3xl bg-primary-500/5 blur-xl" />
                      <div className="relative">
                        <ScreenshotPlaceholder label={mod.screenshot_label} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/15 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Listo para probarlo?
          </h2>
          <p className="mt-4 text-gray-400">
            Creá tu cuenta y activá los módulos que tu equipo necesita. Empezá
            con un proyecto de prueba, sin costo.
          </p>
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              href={REGISTER_URL}
              className="bg-primary-500 shadow-lg shadow-primary-500/25 hover:bg-primary-400"
            >
              Empezar gratis
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
