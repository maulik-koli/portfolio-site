import Hero from "@/components/sections/hero";
import AboutStack from "@/components/sections/about-stack";
import SkillsSection from "@/components/sections/skills-section";
import SingleExperience from "@/components/sections/single-experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";


export default function Home() {
  return (
    <main className="relative bg-obsidian flex flex-col items-center justify-between mx-auto overflow-x-hidden">
      <div className="w-full">
        <Header />
  
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
