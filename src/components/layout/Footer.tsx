import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER, NAV_ITEMS, LOGIN_URL, REGISTER_URL } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-gradient-to-b from-gray-50 to-gray-100/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/bloqer-logo.png"
                alt="Bloqer"
                width={120}
                height={33}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              El ERP de construcción para Latinoamérica. Controlá tus proyectos con
              trazabilidad de principio a fin.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">Navegación</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">Portal</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={LOGIN_URL}
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Iniciar sesión
                </a>
              </li>
              <li>
                <a
                  href={REGISTER_URL}
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Crear cuenta
                </a>
              </li>
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-green-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="h-4 w-4" />
                info@bloqer.app
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Panamá, Panamá
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200/60 pt-8 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bloqer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
