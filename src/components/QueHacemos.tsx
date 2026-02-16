import AnimateOnScroll from "./AnimateOnScroll";

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="relative py-24 lg:py-32 section-glow">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateOnScroll>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Qué Hacemos
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* The Problem */}
          <AnimateOnScroll delay={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-muted-dark/40 to-transparent hidden lg:block" />
              <h2 className="font-serif text-3xl lg:text-4xl text-cream leading-tight mb-6">
                El análisis inmobiliario sigue atrapado en el siglo pasado
              </h2>
              <p className="text-muted leading-relaxed text-base lg:text-lg">
                Semanas recopilando datos dispersos en hojas de cálculo,
                construyendo proformas a mano, revisando documentos en
                distintos idiomas y formateando memorándums para comité.
                Cada operación exige cientos de horas de trabajo repetitivo
                que retrasa las decisiones de inversión y limita la
                capacidad de analizar nuevas oportunidades.
              </p>
            </div>
          </AnimateOnScroll>

          {/* The Solution */}
          <AnimateOnScroll delay={0.25}>
            <div className="relative lg:mt-12">
              <div className="glass-card p-8 lg:p-10">
                <h2 className="font-serif text-3xl lg:text-4xl text-gold leading-tight mb-6">
                  MauricIA reemplaza ese flujo de trabajo completo
                </h2>
                <p className="text-cream/80 leading-relaxed text-base lg:text-lg">
                  Sube tus documentos, haz preguntas en lenguaje natural y
                  obtén análisis financieros, memorándums de selección y
                  proformas de desarrollo listos para presentar. Sin
                  configuración, sin plantillas, sin esperas. La
                  inteligencia artificial se encarga del trabajo pesado
                  para que tu equipo se centre en tomar decisiones.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
