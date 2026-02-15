"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactoContent() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "El nombre es obligatorio";
    if (!form.email.trim()) {
      errs.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Email inválido";
    }
    if (!form.message.trim()) errs.message = "El mensaje es obligatorio";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const inputClasses = (field: keyof FormData) =>
    cn(
      "w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none",
      errors[field] ? "border-red-300" : "border-gray-300"
    );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50/50 to-white pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              Contacto
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              ¿En qué podemos{" "}
              <span className="text-primary-600">ayudarte</span>?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Escribinos con tus dudas, comentarios o solicitudes de demo. Te
              respondemos lo más rápido posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="bg-white py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Recibimos tu mensaje. Te contactaremos pronto.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Nombre *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className={inputClasses("name")}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@empresa.com"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={inputClasses("email")}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Empresa
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Nombre de tu empresa (opcional)"
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className={inputClasses("company")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Contanos en qué podemos ayudarte..."
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={inputClasses("message")}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Hubo un error al enviar. Intentá de nuevo o contactanos por
                      WhatsApp.
                    </p>
                  )}

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Otros canales
                </h3>

                <div className="mt-6 space-y-5">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-green-600"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p>{WHATSAPP_NUMBER}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p>info@bloqer.app</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ubicación</p>
                      <p>Panamá, Panamá</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <MessageCircle className="mx-auto h-8 w-8 text-green-600" />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  ¿Preferís WhatsApp?
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Escribinos directo y te respondemos al momento.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  href={WHATSAPP_URL}
                  className="mt-4 bg-green-600 hover:bg-green-700 shadow-green-600/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  Abrir WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
