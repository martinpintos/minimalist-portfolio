import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="flex-col max-w-2xl mx-auto px-4">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
