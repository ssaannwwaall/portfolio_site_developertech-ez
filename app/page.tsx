import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { NumbersSection } from "@/components/numbers-section"
import { AboutSection } from "@/components/about-section"
import { ClientsMap } from "@/components/clients-map"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "DevelopersTech | Flutter, AI and Enterprise Software Development Company",
  description:
    "We are an engineering studio building Flutter apps, AI platforms and enterprise systems for clients across the UK, USA, UAE, Malaysia and Europe. Five star rated, 59 verified reviews.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* Everything below slides over the pinned hero */}
      <div style={{ position: "relative", zIndex: 1, background: "var(--paper)", boxShadow: "0 -30px 60px rgba(14,27,38,.06)" }}>
        <ServicesSection />
        <ProjectsSection />
        <NumbersSection />
        <AboutSection />
        <ClientsMap />
        <CtaSection />
      </div>
    </main>
  )
}
