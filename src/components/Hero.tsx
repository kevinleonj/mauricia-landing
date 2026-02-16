export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Radial glow base */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial-[circle_at_center] from-slate/60 to-transparent opacity-60" />

        {/* Floating orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[120px] animate-mesh-1 top-[15%] left-[20%]" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-steel/[0.06] blur-[100px] animate-mesh-2 top-[25%] right-[15%]" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-gold/[0.03] blur-[80px] animate-mesh-3 bottom-[20%] left-[35%]" />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,78,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-cream">
            Tu analista de promoción inmobiliaria.{" "}
            <span className="text-gold">
              Potenciado por inteligencia artificial.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-7 lg:mt-9 text-muted text-lg lg:text-xl leading-relaxed max-w-2xl">
            Analiza operaciones, genera informes financieros y evalúa la
            viabilidad de promociones inmobiliarias en España — en minutos,
            no en semanas.
          </p>

          {/* CTA */}
          <div className="mt-10 lg:mt-12">
            <a href="#contacto" className="btn-gold text-base lg:text-lg">
              Solicitar Acceso Anticipado
            </a>
          </div>

          {/* Qualifying text */}
          <p className="mt-5 text-muted text-sm tracking-wide">
            Acceso limitado para promotores y fondos de inversión en España
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
