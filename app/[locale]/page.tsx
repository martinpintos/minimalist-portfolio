import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Education from "@/components/sections/education";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto px-4 pt-4 sm:pt-16">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
