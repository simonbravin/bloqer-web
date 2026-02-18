"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, LOGIN_URL, REGISTER_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/bloqer-logo.png"
            alt="Bloqer"
            width={130}
            height={36}
            className={cn(
              "h-8 w-auto transition-all duration-300",
              !scrolled && "brightness-0 invert"
            )}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? scrolled ? "text-primary-600" : "text-white"
                  : scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-300 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            href={LOGIN_URL}
            className={cn(
              !scrolled && "text-gray-300 hover:text-white hover:bg-white/10"
            )}
          >
            Iniciar sesión
          </Button>
          <Button variant="primary" size="sm" href={REGISTER_URL}>
            Empezar
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "rounded-md p-2 lg:hidden transition-colors",
            scrolled
              ? "text-gray-600 hover:bg-gray-100"
              : "text-gray-300 hover:bg-white/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-gray-200 bg-white transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-none"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 pt-2 pb-4" aria-label="Navegación móvil">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary-50 text-primary-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
            <Button variant="outline" size="md" href={LOGIN_URL}>
              Iniciar sesión
            </Button>
            <Button variant="primary" size="md" href={REGISTER_URL}>
              Empezar
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
