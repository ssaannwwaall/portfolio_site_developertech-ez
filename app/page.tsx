import { HeroSection }        from "@/components/hero-section"
import { ServicesSection }    from "@/components/services-section"
import { ProjectsSection }    from "@/components/projects-section"
import { AboutSection }       from "@/components/about-section"
import { TechStackSection }   from "@/components/tech-stack-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection }         from "@/components/faq-section"
import { ContactSection }     from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
