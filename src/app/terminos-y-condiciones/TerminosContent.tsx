"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function TerminosContent() {
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
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400" />
                Legal
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Términos y{" "}
                <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                  Condiciones
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
            className="prose prose-gray max-w-none"
          >
            <div className="space-y-10 text-gray-700">

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Aceptación de los términos</h2>
                <p className="text-sm leading-relaxed">
                  Al acceder o utilizar la plataforma Bloqer (en adelante, "el Servicio"), disponible en{" "}
                  <strong>bloqer.app</strong> y sus subdominios, usted acepta quedar vinculado por estos
                  Términos y Condiciones. Si no está de acuerdo con alguno de los términos aquí establecidos,
                  le pedimos que no utilice el Servicio. Estos términos aplican a todos los usuarios,
                  incluyendo visitantes, clientes y cualquier persona que acceda o use el Servicio.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Descripción del servicio</h2>
                <p className="text-sm leading-relaxed">
                  Bloqer es una plataforma SaaS (Software como Servicio) de gestión de proyectos de
                  construcción diseñada para equipos en Latinoamérica. El Servicio incluye módulos de
                  presupuesto, control de compras, inventario, seguimiento de avance de obra, gestión
                  documental y otras funcionalidades descritas en nuestra plataforma. Bloqer se reserva el
                  derecho de modificar, suspender o discontinuar cualquier aspecto del Servicio en cualquier
                  momento, con o sin previo aviso.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cuentas de usuario</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Para acceder al Servicio, el usuario debe crear una cuenta con información veraz, completa
                  y actualizada. Usted es responsable de mantener la confidencialidad de sus credenciales de
                  acceso y de todas las actividades que ocurran bajo su cuenta.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>Notifique de inmediato a Bloqer ante cualquier uso no autorizado de su cuenta.</li>
                  <li>No comparta sus credenciales con terceros no autorizados.</li>
                  <li>
                    Bloqer no será responsable por pérdidas derivadas del uso no autorizado de su cuenta
                    cuando el usuario no haya tomado medidas razonables de seguridad.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Pagos y facturación</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Los pagos por el Servicio son procesados por <strong>Paddle</strong>, nuestro proveedor
                  autorizado de pagos (Merchant of Record). Al suscribirse a un plan de pago, usted autoriza
                  a Paddle a cobrar el monto correspondiente mediante el método de pago seleccionado.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>Los precios se expresan en dólares estadounidenses (USD) salvo indicación contraria.</li>
                  <li>Las suscripciones se renuevan automáticamente salvo que el usuario las cancele.</li>
                  <li>
                    Los impuestos aplicables serán calculados y cobrados por Paddle de acuerdo con la
                    normativa fiscal del país del cliente.
                  </li>
                  <li>
                    Para disputas o consultas sobre cobros, consulte nuestra{" "}
                    <Link href="/politica-de-reembolso" className="text-primary-600 hover:underline">
                      Política de Reembolso
                    </Link>.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Uso aceptable</h2>
                <p className="text-sm leading-relaxed mb-3">
                  El usuario se compromete a utilizar el Servicio únicamente para fines legales y de acuerdo
                  con estos Términos. Está expresamente prohibido:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>Usar el Servicio para actividades ilegales o fraudulentas.</li>
                  <li>Intentar acceder de forma no autorizada a sistemas o datos de terceros.</li>
                  <li>Cargar contenido malicioso, virus o cualquier código dañino.</li>
                  <li>Revender, sublicenciar o distribuir el Servicio sin autorización escrita de Bloqer.</li>
                  <li>Realizar ingeniería inversa o intentar extraer el código fuente de la plataforma.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. Propiedad intelectual</h2>
                <p className="text-sm leading-relaxed">
                  Todo el contenido, código, diseño, marcas y materiales del Servicio son propiedad exclusiva
                  de Bloqer o sus licenciantes y están protegidos por las leyes de propiedad intelectual
                  aplicables. El usuario recibe una licencia limitada, no exclusiva e intransferible para
                  utilizar el Servicio según lo establecido en estos Términos. Los datos ingresados por el
                  usuario en la plataforma son de su propiedad; Bloqer los procesa únicamente para prestar el
                  Servicio.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitación de responsabilidad</h2>
                <p className="text-sm leading-relaxed">
                  En la máxima medida permitida por la ley aplicable, Bloqer no será responsable por daños
                  indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso o la
                  imposibilidad de uso del Servicio. La responsabilidad total de Bloqer ante el usuario no
                  superará el monto pagado por el Servicio durante los tres (3) meses anteriores al evento
                  que originó la reclamación. El Servicio se provee "tal cual" y "según disponibilidad", sin
                  garantías de ningún tipo, expresas o implícitas.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Privacidad</h2>
                <p className="text-sm leading-relaxed">
                  El tratamiento de datos personales se rige por nuestra{" "}
                  <Link href="/politica-de-privacidad" className="text-primary-600 hover:underline">
                    Política de Privacidad
                  </Link>
                  , la cual forma parte integral de estos Términos. Al usar el Servicio, usted consiente el
                  tratamiento de sus datos conforme a dicha política.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">9. Modificaciones</h2>
                <p className="text-sm leading-relaxed">
                  Bloqer podrá actualizar estos Términos en cualquier momento. Los cambios sustanciales serán
                  notificados por correo electrónico o mediante aviso en la plataforma con al menos 15 días
                  de anticipación. El uso continuado del Servicio luego de la entrada en vigencia de los
                  nuevos términos constituirá aceptación de los mismos.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">10. Ley aplicable y jurisdicción</h2>
                <p className="text-sm leading-relaxed">
                  Estos Términos se rigen por las leyes de la República de Panamá. Cualquier controversia que
                  no pueda resolverse de manera amistosa será sometida a la jurisdicción de los tribunales
                  competentes de la Ciudad de Panamá, Panamá.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contacto</h2>
                <p className="text-sm leading-relaxed">
                  Para consultas relacionadas con estos Términos, comuníquese con nosotros a través de{" "}
                  <a href="mailto:info@bloqer.app" className="text-primary-600 hover:underline">
                    info@bloqer.app
                  </a>{" "}
                  o por WhatsApp al{" "}
                  <a
                    href="https://wa.me/50766284172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    +507 6628-4172
                  </a>
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
