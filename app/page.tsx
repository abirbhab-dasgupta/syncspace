
import { AgentsBento } from "@/components/landing/AgentsBento";
import { CTA } from "@/components/landing/CTA";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Stats } from "@/components/landing/Stats";
import { TechStack } from "@/components/landing/TechStack";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <AgentsBento />
      <Features />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}