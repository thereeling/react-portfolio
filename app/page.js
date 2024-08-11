import Hero from "@/components/hero";
import MotionSeparator from "@/components/motion-separator";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import EmailSection from "@/components/email-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <MotionSeparator />
      <AboutMe />
      <MotionSeparator />
      <Projects />
      <MotionSeparator />
      <Experience />
      <MotionSeparator />
      <EmailSection />
    </main>
  );
}
