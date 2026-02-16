import AnimateOnScroll from "./AnimateOnScroll";
import { ExcelLogo, WordLogo, PowerPointLogo } from "./ProductLogos";

const STEPS = [
  {
    number: "01",
    title: "Sube tus documentos",
    description:
      "PDFs, hojas de cálculo, informes. MauricIA los clasifica y analiza automáticamente.",
    logos: [ExcelLogo, WordLogo],
  },
  {
    number: "02",
    title: "Pregunta lo que necesites",
    description:
      "Haz preguntas sobre la operación en lenguaje natural. Obtén respuestas con referencias a los documentos originales.",
    logos: [],
  },
  {
    number: "03",
    title: "Exporta informes profesionales",
    description:
      "Memorándums de inversión, proformas de desarrollo y análisis financieros listos para presentar.",
    logos: [ExcelLogo, PowerPointLogo],
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32 section-glow">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateOnScroll>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Cómo Funciona
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-cream leading-tight max-w-2xl mb-16 lg:mb-20">
            De documentos a decisiones en tres pasos
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={0.1 + i * 0.15}>
              <div className="relative">
                {/* Step number */}
                <span className="block font-serif text-6xl lg:text-7xl text-gold/20 mb-4 leading-none select-none">
                  {step.number}
                </span>

                {/* Connecting line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+8px)] w-[calc(100%-16px)] h-px bg-gradient-to-r from-gold/15 to-transparent" />
                )}

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl text-cream mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed text-base">
                  {step.description}
                </p>

                {/* Product logos */}
                {step.logos.length > 0 && (
                  <div className="flex items-center gap-2.5 mt-5">
                    {step.logos.map((LogoComponent, j) => (
                      <LogoComponent key={j} size={26} />
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
