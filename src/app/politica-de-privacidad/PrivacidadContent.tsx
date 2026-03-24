"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function PrivacidadContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-28 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark" />
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blueprint-500/8 blur-[100px]" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blueprint-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-blueprint-200 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blueprint-400" />
                Legal
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Política de{" "}
                <span className="bg-gradient-to-r from-blueprint-400 to-primary-400 bg-clip-text text-transparent">
                  Privacidad
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
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable del tratamiento</h2>
                <p className="text-sm leading-relaxed">
                  Bloqer (en adelante, "nosotros" o "la Empresa") es responsable del tratamiento de los datos
                  personales que usted nos proporciona al usar la plataforma <strong>bloqer.app</strong>.
                  Para cualquier consulta sobre privacidad, puede contactarnos en{" "}
                  <a href="mailto:info@bloqer.app" className="text-primary-600 hover:underline">
                    info@bloqer.app
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Datos que recopilamos</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Recopilamos distintos tipos de información para prestar y mejorar nuestro Servicio:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>
                    <strong>Datos de registro:</strong> nombre, correo electrónico, nombre de la empresa,
                    número de teléfono y contraseña cifrada.
                  </li>
                  <li>
                    <strong>Datos de uso:</strong> páginas visitadas, funcionalidades utilizadas,
                    interacciones dentro de la plataforma, dirección IP y datos del dispositivo.
                  </li>
                  <li>
                    <strong>Datos de proyecto:</strong> información que usted ingresa en la plataforma
                    relacionada con sus proyectos de construcción (presupuestos, compras, inventarios, etc.).
                  </li>
                  <li>
                    <strong>Datos de pago:</strong> procesados por Paddle; Bloqer no almacena datos de
                    tarjetas de crédito ni información bancaria sensible.
                  </li>
                  <li>
                    <strong>Comunicaciones:</strong> mensajes que nos envíe por correo electrónico,
                    WhatsApp o formularios de contacto.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalidad del tratamiento</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Utilizamos sus datos para los siguientes fines:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>Proveer, operar y mantener el Servicio.</li>
                  <li>Procesar pagos y gestionar su suscripción.</li>
                  <li>Enviar comunicaciones transaccionales (recibos, alertas de cuenta, etc.).</li>
                  <li>Enviar comunicaciones comerciales, previa aceptación del usuario.</li>
                  <li>Mejorar y personalizar la experiencia de uso.</li>
                  <li>Cumplir obligaciones legales y resolver disputas.</li>
                  <li>Detectar y prevenir actividad fraudulenta o abusiva.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Compartición de datos con terceros</h2>
                <p className="text-sm leading-relaxed mb-3">
                  No vendemos ni alquilamos sus datos personales. Podemos compartir información con los
                  siguientes terceros en la medida necesaria para operar el Servicio:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li>
                    <strong>Paddle:</strong> proveedor de pagos (Merchant of Record). Procesa transacciones
                    y facturación según su propia política de privacidad.
                  </li>
                  <li>
                    <strong>Proveedores de infraestructura:</strong> servicios de hosting y computación en
                    la nube que alojan la plataforma.
                  </li>
                  <li>
                    <strong>Herramientas de análisis:</strong> para monitorear el rendimiento y uso del
                    Servicio, con datos anonimizados o seudonimizados.
                  </li>
                  <li>
                    <strong>Autoridades competentes:</strong> cuando la ley lo exija o para proteger
                    nuestros derechos legales.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Seguridad de los datos</h2>
                <p className="text-sm leading-relaxed">
                  Implementamos medidas técnicas y organizativas razonables para proteger sus datos contra
                  acceso no autorizado, pérdida, divulgación o alteración. Esto incluye cifrado en tránsito
                  (TLS/HTTPS), cifrado en reposo para datos sensibles, controles de acceso basados en roles
                  y auditorías periódicas de seguridad. Sin embargo, ningún sistema es completamente seguro;
                  el usuario acepta que el uso del Servicio conlleva riesgos inherentes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. Retención de datos</h2>
                <p className="text-sm leading-relaxed">
                  Conservamos sus datos personales durante el tiempo que su cuenta esté activa y durante el
                  período necesario para cumplir obligaciones legales, resolver disputas y hacer cumplir
                  nuestros acuerdos. Al cancelar su cuenta, podrá solicitar la eliminación de sus datos
                  personales, sujeto a excepciones legales aplicables.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Sus derechos</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Dependiendo de su ubicación, puede tener los siguientes derechos sobre sus datos:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed pl-2">
                  <li><strong>Acceso:</strong> solicitar una copia de los datos que poseemos sobre usted.</li>
                  <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                  <li><strong>Eliminación:</strong> solicitar la supresión de sus datos personales.</li>
                  <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y legible.</li>
                  <li><strong>Oposición:</strong> oponerse al tratamiento para fines de marketing directo.</li>
                </ul>
                <p className="text-sm leading-relaxed mt-3">
                  Para ejercer estos derechos, envíenos un correo a{" "}
                  <a href="mailto:info@bloqer.app" className="text-primary-600 hover:underline">
                    info@bloqer.app
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies y tecnologías similares</h2>
                <p className="text-sm leading-relaxed">
                  Utilizamos cookies y tecnologías similares para mantener sesiones activas, recordar
                  preferencias y analizar el uso del Servicio. Puede configurar su navegador para rechazar
                  cookies, aunque esto puede afectar la funcionalidad de algunas partes del Servicio.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">9. Menores de edad</h2>
                <p className="text-sm leading-relaxed">
                  El Servicio no está dirigido a personas menores de 18 años. No recopilamos
                  intencionalmente datos personales de menores. Si detectamos que un menor nos ha
                  proporcionado información personal, procederemos a eliminarla.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">10. Cambios a esta política</h2>
                <p className="text-sm leading-relaxed">
                  Podemos actualizar esta Política de Privacidad periódicamente. Notificaremos cambios
                  significativos por correo electrónico o mediante un aviso destacado en la plataforma. Le
                  recomendamos revisar esta página con regularidad. El uso continuado del Servicio tras
                  publicar los cambios implica su aceptación.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contacto</h2>
                <p className="text-sm leading-relaxed">
                  Para consultas sobre privacidad o para ejercer sus derechos, contáctenos en{" "}
                  <a href="mailto:info@bloqer.app" className="text-primary-600 hover:underline">
                    info@bloqer.app
                  </a>{" "}
                  o consulte nuestros{" "}
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
