import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Experience from "@/components/sections/experience";
import Hobbies from "@/components/sections/hobbies";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Experience />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}
