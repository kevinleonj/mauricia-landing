import AnimateOnScroll from "./AnimateOnScroll";
import { ExcelLogo, PowerPointLogo, WordLogo } from "./ProductLogos";

const CAPABILITIES = [
  {
    title: "Análisis de documentos",
    description:
      "Sube PDFs, Excel o Word. MauricIA extrae datos clave, clasifica el tipo de documento y lo prepara para consulta.",
    logos: null,
  },
  {
    title: "Preguntas con referencias",
    description:
      "Haz cualquier pregunta sobre una operación. Cada respuesta incluye la referencia exacta al documento original.",
    logos: null,
  },
  {
    title: "Memorándums de selección",
    description:
      "Genera resúmenes ejecutivos de cada operación con los datos más relevantes para la toma de decisiones.",
    logos: null,
  },
  {
    title: "Proformas de desarrollo",
    description:
      "Cálculos de presupuesto, flujos de caja descontados y tablas de sensibilidad para promociones inmobiliarias.",
    logos: null,
  },
  {
    title: "Exportación profesional",
    description:
      "Descarga análisis en Excel, Word o PowerPoint con formato corporativo listo para comité de inversión.",
    logos: "office",
  },
  {
    title: "Análisis en cualquier idioma",
    description:
      "Sube documentos en inglés, alemán o francés. Haz preguntas y recibe respuestas en español.",
    logos: null,
  },
];

export default function Capacidades() {
  return (
    <section
      id="capacidades"
      className="relative py-24 lg:py-32 section-glow dot-pattern"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateOnScroll>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Capacidades
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-cream leading-tight max-w-2xl mb-16 lg:mb-20">
            Todo lo que necesitas para analizar una operación
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {CAPABILITIES.map((cap, i) => (
            <AnimateOnScroll key={cap.title} delay={0.05 + i * 0.08}>
              <div className="glass-card p-7 lg:p-8 h-full flex flex-col">
                <h3 className="font-serif text-xl text-gold mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted leading-relaxed text-[15px] flex-1">
                  {cap.description}
                </p>
                {cap.logos === "office" && (
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-cream/5">
                    <ExcelLogo size={30} />
                    <WordLogo size={30} />
                    <PowerPointLogo size={30} />
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
