import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <Experience />
      <Contact />
      <Toaster position="bottom-center" />
    </main>
  )
}
