import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Logo + location */}
          <div>
            <Logo size="sm" />
            <p className="text-muted-dark text-sm mt-2">Madrid, España</p>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-muted text-sm hover:text-cream transition-colors duration-300"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-muted text-sm hover:text-cream transition-colors duration-300"
            >
              Términos
            </a>
          </div>

          {/* Right: Copyright */}
          <p className="text-muted-dark text-sm">
            &copy; 2026 MauricIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
