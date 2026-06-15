import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Lab from "@/components/sections/Lab";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
    <SpeedInsights />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Lab />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
