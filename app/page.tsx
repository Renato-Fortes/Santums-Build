import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AtmosphericBackground from "./components/AtmosphericBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AtmosphericBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Features />
        <About />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
