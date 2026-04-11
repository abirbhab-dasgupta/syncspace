import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Agents from "@/components/landing/agents";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import ScrollReveal from "@/components/landing/scroll-reveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Agents />
      <Features />
      <HowItWorks />
      <Cta />
      <Footer />
      <ScrollReveal />
    </main>
  );
}