"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ReembolsoContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Política de{" "}
                <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                  Reembolso
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Última actualización: marzo de 2025
              </p>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="space-y-10 text-gray-700">

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Política general</h2>
                <p className="text-sm leading-relaxed">
                  En Bloqer nos esforzamos por ofrecer un servicio de la más alta calidad. Si por alguna
                  razón no está satisfecho con su suscripción, puede solicitar un reembolso conforme a las
                  condiciones establecidas en esta política. Los pagos son procesados por <strong>Paddle</strong>,
                  nuestro Merchant of Record, quien gestiona las transacciones en su nombre.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Período de prueba y garantía</h2>
                <p className="text-sm leading-relaxed">
                  Bloqer ofrece un período de prueba gratuito para que el usuario evalúe el Servicio antes
                  de comprometerse con una suscripción de pago. Si cuenta con un período de prueba activo,
                  no se realizará ningún cobro hasta su vencimiento. Si decide no continuar, simplemente
                  cancele antes del fin del período de prueba sin costo alguno.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. Elegibilidad para reembolso</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Podrá solicitar un reembolso si se cumple alguna de las siguientes condiciones:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>
                    <strong>Reembolso dentro de los 7 días:</strong> si solicitó el reembolso dentro de los
                    7 días calendario posteriores al primer cobro de una suscripción nueva, sin haber hecho
                    un uso extensivo del Servicio.
                  </li>
                  <li>
                    <strong>Error de cobro:</strong> si se realizó un cobro incorrecto, duplicado o no
                    autorizado.
                  </li>
                  <li>
                    <strong>Fallo técnico grave:</strong> si el Servicio presentó una interrupción
                    significativa y documentada que impidió su uso durante un período prolongado, imputable
                    directamente a Bloqer.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Exclusiones</h2>
                <p className="text-sm leading-relaxed mb-3">
                  No se procesarán reembolsos en los siguientes casos:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>Solicitudes realizadas luego de los 7 días posteriores al cobro, salvo las excepciones indicadas.</li>
                  <li>Períodos de suscripción ya consumidos o utilizados activamente.</li>
                  <li>Cancelaciones motivadas por falta de uso voluntario del Servicio.</li>
                  <li>Cambios de necesidades o decisión comercial del cliente.</li>
                  <li>Cobros correspondientes a renovaciones automáticas cuando el usuario no canceló la suscripción antes de la fecha de renovación.</li>
                  <li>Planes anuales una vez transcurridos los primeros 7 días del ciclo de facturación.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cómo solicitar un reembolso</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Para solicitar un reembolso, siga estos pasos:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed pl-2">
                  <li>
                    Envíe un correo a{" "}
                    <a href="mailto:info@bloqer.app" className="text-primary-600 hover:underline">
                      info@bloqer.app
                    </a>{" "}
                    con el asunto <em>"Solicitud de reembolso"</em>.
                  </li>
                  <li>
                    Incluya: nombre completo, correo de su cuenta, número de factura o referencia de pago, y
                    el motivo de la solicitud.
                  </li>
                  <li>
                    Nuestro equipo evaluará la solicitud y le responderá dentro de 5 días hábiles.
                  </li>
                  <li>
                    Si el reembolso es aprobado, Paddle procesará la devolución al método de pago original
                    en un plazo de 5 a 10 días hábiles, según la entidad financiera.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cancelación de suscripción</h2>
                <p className="text-sm leading-relaxed">
                  Puede cancelar su suscripción en cualquier momento desde el panel de configuración de su
                  cuenta. La cancelación detendrá la renovación automática al final del período facturado
                  vigente; usted podrá seguir usando el Servicio hasta que venza dicho período. La
                  cancelación no genera reembolso proporcional por el tiempo no utilizado, salvo que aplique
                  alguna de las condiciones de elegibilidad descritas en la sección 3.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Disputas de pago</h2>
                <p className="text-sm leading-relaxed">
                  Le pedimos que nos contacte directamente antes de iniciar una disputa (chargeback) con su
                  entidad bancaria. En la mayoría de los casos podemos resolver el inconveniente de manera
                  rápida y directa. Los chargebacks pueden derivar en la suspensión de su cuenta mientras se
                  investiga el caso.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contacto</h2>
                <p className="text-sm leading-relaxed">
                  Para cualquier consulta sobre esta política, contáctenos en{" "}
                  <a href="mailto:info@bloqer.app" className="text-primary-600 hover:underline">
                    info@bloqer.app
                  </a>{" "}
                  o revise nuestros{" "}
                  <Link href="/terminos-y-condiciones" className="text-primary-600 hover:underline">
                    Términos y Condiciones
                  </Link>
                  .
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
