"use client";

import { useState, type FormEvent } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const ROLES = [
  { value: "", label: "Selecciona tu rol" },
  { value: "promotor", label: "Promotor" },
  { value: "fondo", label: "Fondo de inversión" },
  { value: "consultor", label: "Consultor/Asesor" },
  { value: "otro", label: "Otro" },
];

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xyzgoldr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: let the form submit normally
      form.submit();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="relative py-24 lg:py-32 section-glow">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.015] blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Contacto
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-cream leading-tight mb-5">
              Solicita acceso anticipado
            </h2>
            <p className="text-muted text-lg max-w-lg mx-auto leading-relaxed">
              MauricIA está en fase de acceso limitado. Déjanos tus datos y
              te contactamos.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="glass-card p-8 lg:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="font-serif text-2xl text-gold mb-3">
                  Gracias
                </h3>
                <p className="text-muted text-lg">
                  Te contactaremos pronto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xyzgoldr"
                method="POST"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm text-muted mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-muted mb-2"
                    >
                      Email profesional
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="nombre@empresa.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm text-muted mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label
                      htmlFor="rol"
                      className="block text-sm text-muted mb-2"
                    >
                      Rol
                    </label>
                    <select
                      id="rol"
                      name="rol"
                      required
                      className="form-input appearance-none"
                      defaultValue=""
                    >
                      {ROLES.map((role) => (
                        <option
                          key={role.value}
                          value={role.value}
                          disabled={role.value === ""}
                          className="bg-navy text-cream"
                        >
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm text-muted mb-2"
                    >
                      Mensaje{" "}
                      <span className="text-muted-dark">(opcional)</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Cuéntanos sobre tu caso de uso"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Enviando..." : "Enviar solicitud"}
                </button>
              </form>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
