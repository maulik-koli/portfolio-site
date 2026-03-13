import Hero from "@/components/hero";
import AboutStack from "@/components/about-stack";
import SkillsSection from "@/components/skills-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { SingleExperience } from "@/components/single-experience";
import { Footer } from "@/components/footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HEADER_DATA } from "@/lib/data";


export default function Home() {
  return (
    <main className="relative bg-obsidian flex flex-col items-center justify-between overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={HEADER_DATA} /> 
        
        <Hero />
        
        <div className="flex flex-col items-center justify-center w-full">
          <AboutStack />
          <SkillsSection />
          <SingleExperience />
          <FeaturedProjects />
        </div>

        <Footer />
      </div>
    </main>
  );
}
