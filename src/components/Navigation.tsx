"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#que-hacemos", label: "Qué Hacemos" },
  { href: "#como-funciona", label: "Cómo Funciona" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-gold/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#" className="relative z-[110]">
            <Logo size="md" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted text-sm tracking-wide hover:text-cream transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="btn-gold py-2.5 px-6 text-sm"
            >
              Solicitar Acceso
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[110] flex flex-col justify-center items-center w-8 h-8 gap-1.5 lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block h-[2px] w-6 bg-cream transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-cream transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-cream transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-navy/95 backdrop-blur-2xl transition-all duration-400 lg:hidden ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-cream text-2xl font-serif tracking-wide hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMenu}
            className="btn-gold mt-4"
          >
            Solicitar Acceso
          </a>
        </div>
      </div>
    </nav>
  );
}
