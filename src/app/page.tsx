import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import QueHacemos from "@/components/QueHacemos";
import ComoFunciona from "@/components/ComoFunciona";
import Capacidades from "@/components/Capacidades";
import ParaQuien from "@/components/ParaQuien";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <QueHacemos />
        <ComoFunciona />
        <Capacidades />
        <ParaQuien />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
