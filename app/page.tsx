
import { AgentsBento } from "@/components/sections/AgentsBento";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Stats } from "@/components/sections/Stats";
import { TechStack } from "@/components/sections/TechStack";


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