import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MauricIA — Analista de Promoción Inmobiliaria con Inteligencia Artificial",
  description:
    "MauricIA analiza operaciones inmobiliarias, genera informes financieros y evalúa la viabilidad de promociones en España con inteligencia artificial.",
  keywords:
    "inteligencia artificial, inversión inmobiliaria, análisis inmobiliario, promoción inmobiliaria, España, proforma, memorándum de inversión",
  authors: [{ name: "MauricIA" }],
  openGraph: {
    title: "MauricIA — Analista de Promoción Inmobiliaria con IA",
    description:
      "Analiza operaciones, genera informes financieros y evalúa la viabilidad de promociones inmobiliarias en España — en minutos, no en semanas.",
    type: "website",
    locale: "es_ES",
    siteName: "MauricIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "MauricIA — Analista de Promoción Inmobiliaria con IA",
    description:
      "Analiza operaciones, genera informes financieros y evalúa la viabilidad de promociones inmobiliarias en España — en minutos, no en semanas.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MauricIA",
              description:
                "Analista de inversión inmobiliaria potenciado por inteligencia artificial",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${dmSerif.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
