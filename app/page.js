import Hero from "@/components/hero";
import MotionSeparator from "@/components/motion-separator";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <MotionSeparator />
      <AboutMe />
      <MotionSeparator />
      <Projects />
    </main>
  );
}
