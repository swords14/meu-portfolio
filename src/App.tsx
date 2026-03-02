// src/app/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white/20">
      {/* glow background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-4 pt-24">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="highlights" className="mt-16 scroll-mt-24">
          <Highlights />
        </section>

        <section id="skills" className="mt-16 scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="mt-16 scroll-mt-24">
          <Experience />
        </section>

        <section id="projects" className="mt-16 scroll-mt-24">
          <Projects />
        </section>

        <section id="contact" className="mt-16 scroll-mt-24">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
}