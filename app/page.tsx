import Hero from "@/components/sections/hero";
import AboutStack from "@/components/sections/about-stack";
import SkillsSection from "@/components/sections/skills-section";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Maulik Koli',
    url: SOCIAL_LINKS.DOMAIN_URL,
    image: `${SOCIAL_LINKS.DOMAIN_URL}/og-image.png`,
    sameAs: [
      SOCIAL_LINKS.GITHUB,
      SOCIAL_LINKS.LINKEDIN,
      SOCIAL_LINKS.TWITTER,
    ],
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer from Rajkot, India. I build scalable, end-to-end web applications — from database architecture to deployment.',
  };

  return (
    <main className="relative bg-background flex flex-col items-center justify-between mx-auto overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
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
