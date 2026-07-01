"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const stats = [
  { value: "5+", label: "Years Engineering" },
  { value: "100+", label: "Products Delivered" },
  { value: "4", label: "Platforms Supported" },
  { value: "100K+", label: "End Users Reached" },
]

export function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const handleBookCall = () => {
    const msg = "Hi Sanwal! I'd like to discuss a project with DevelopersTech."
    window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />

      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Software Development Company
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          We Engineer Software{" "}
          <span className="gradient-text">That Powers Businesses</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          From Flutter mobile apps to AI-powered enterprise platforms — DevelopersTech delivers
          end-to-end software solutions built for scale, speed, and real business outcomes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 gap-2 rounded-xl glow-blue"
            onClick={handleBookCall}
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border bg-white/3 hover:bg-white/6 font-semibold px-8 rounded-xl backdrop-blur-sm"
            onClick={() => scrollTo("projects")}
          >
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/80 backdrop-blur-sm px-6 py-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
