import Hero from "@/components/sections/hero";
import AboutStack from "@/components/sections/about-stack";
import SkillsSection from "@/components/sections/skills-section";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";


export default function Home() {
  return (
    <main className="relative bg-background flex flex-col items-center justify-between mx-auto overflow-x-hidden">
      <div className="w-full">
        <Header />
        
        <Hero />
        <div className="flex flex-col items-center justify-center w-full">
          <AboutStack />
          <SkillsSection />
          <Experience />
          <FeaturedProjects />
          <ContactSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
