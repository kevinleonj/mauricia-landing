import AnimateOnScroll from "./AnimateOnScroll";

const AUDIENCES = [
  {
    title: "Promotores inmobiliarios",
    description:
      "Para evaluar la viabilidad de nuevas promociones con datos precisos y proyecciones automatizadas.",
  },
  {
    title: "Fondos de inversión",
    description:
      "Para analizar múltiples operaciones simultáneamente y generar memorándums estandarizados.",
  },
  {
    title: "Consultoras y asesores",
    description:
      "Para ofrecer análisis de nivel institucional a sus clientes sin ampliar el equipo.",
  },
];

export default function ParaQuien() {
  return (
    <section className="relative py-24 lg:py-32 section-glow">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-steel/[0.03] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateOnScroll>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Para Quién
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-cream leading-tight max-w-2xl mb-16 lg:mb-20">
            Diseñado para profesionales del sector inmobiliario
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {AUDIENCES.map((audience, i) => (
            <AnimateOnScroll key={audience.title} delay={0.1 + i * 0.12}>
              <div className="glass-card p-8 lg:p-10 h-full flex flex-col">
                <h3 className="font-serif text-2xl text-gold mb-4 leading-snug">
                  {audience.title}
                </h3>
                <p className="text-muted leading-relaxed text-base flex-1">
                  {audience.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
