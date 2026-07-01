"use client"

import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "softpatrol",
    title: "Softpatrol",
    category: "Security & Management",
    description:
      "Enterprise guard patrol management system with real-time GPS tracking, incident reporting, patrol route monitoring, and multi-client dashboards. Used by security companies to modernise their operations.",
    image: "/softpatrol-dashboard.webp",
    technologies: ["Flutter", "Firebase", "Google Maps", "Real-time GPS", "Cloud Functions"],
    color: "from-cyan-500 to-blue-600",
    accent: "#06b6d4",
    screens: ["/softpatrol-tracking.webp", "/softpatrol-schedule.webp"],
    highlight: "Real-time Operations",
  },
  {
    id: "tbms",
    title: "TBMS Driver",
    category: "Transportation & Dispatch",
    description:
      "Advanced taxi dispatch management system for a UK-based transportation business. Features live job tracking, driver management, automated dispatch logic, earnings reporting, and comprehensive admin analytics.",
    image: "/tbms-dashboard.webp",
    technologies: ["Flutter", "Real-time Tracking", "Payment Integration", "Cloud Dispatch", "Analytics"],
    color: "from-emerald-500 to-teal-600",
    accent: "#10b981",
    screens: ["/tbms-jobs.webp", "/tbms-earnings.webp"],
    highlight: "UK Transportation",
  },
  {
    id: "jamgo-cee",
    title: "JAMGO-CEE",
    category: "Web Platform",
    description:
      "Full-stack web platform developed for an international client. Custom web application with modern UI, dynamic content management, and optimised performance for a professional online presence.",
    image: "/softpatrol-dashboard.webp",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel"],
    color: "from-violet-500 to-purple-600",
    accent: "#8b5cf6",
    liveUrl: "https://jamgocee.com",
    screens: [],
    highlight: "International Client",
  },
  {
    id: "fitness",
    title: "FitLife Pro",
    category: "Health & Fitness",
    description:
      "Comprehensive fitness tracking app with personalised workout plans, progress analytics, social features, and AI-powered coaching. Built for cross-platform performance on Android and iOS.",
    image: "/fitness-app-interface.png",
    technologies: ["Flutter", "Firebase", "AI Integration", "REST API"],
    color: "from-orange-500 to-red-600",
    accent: "#f97316",
    screens: ["/fitness-app-workout.png", "/fitness-app-social.png"],
    highlight: "Cross-Platform",
  },
  {
    id: "meditation",
    title: "MindfulSpace",
    category: "Mental Wellness",
    description:
      "Guided meditation and mindfulness app featuring breathing exercises, sleep sounds, mood tracking, and personalised wellness routines. Clean, calming UX designed for daily engagement.",
    image: "/meditation-app-interface.png",
    technologies: ["Flutter", "Firebase", "Audio Streaming", "Offline Mode"],
    color: "from-pink-500 to-rose-600",
    accent: "#ec4899",
    screens: ["/guided-meditation.png", "/breathing-exercises-interface.png"],
    highlight: "Wellness App",
  },
  {
    id: "crypto",
    title: "CryptoVault",
    category: "FinTech",
    description:
      "Cryptocurrency portfolio tracker with live market data, trading interface, price alerts, and secure wallet management. Real-time WebSocket integration with major exchange APIs.",
    image: "/crypto-wallet-interface.png",
    technologies: ["Flutter", "WebSockets", "REST APIs", "Secure Storage"],
    color: "from-yellow-500 to-amber-600",
    accent: "#eab308",
    screens: ["/trading-interface.png", "/portfolio-tracking-dashboard.png"],
    highlight: "Real-time Data",
  },
]

export function ProjectsSection() {
  const handleWhatsApp = (title: string) => {
    const msg = `Hi Sanwal! I saw your ${title} project and I'm interested in building something similar. Can we discuss?`
    window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <section id="projects" className="section-padding px-4 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/3 text-xs text-muted-foreground font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Products We've Shipped
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real products, real clients, real impact. Each project reflects our commitment to quality, performance, and business outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border/60 rounded-2xl overflow-hidden glow-card"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-semibold text-white"
                    style={{ background: project.accent + "33", border: `1px solid ${project.accent}55` }}
                  >
                    {project.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-border/60 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-border/60 text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Bottom accent line */}
                <div className={`h-px w-full bg-gradient-to-r ${project.color} opacity-40 mb-4`} />

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-border/60 text-muted-foreground hover:text-foreground hover:bg-white/5 text-xs gap-1.5"
                    onClick={() => handleWhatsApp(project.title)}
                  >
                    Build Similar
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-primary/15 hover:bg-primary/25 text-primary border border-primary/20 text-xs gap-1.5"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      Live
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white gap-2 rounded-xl"
            onClick={() => {
              const msg = "Hi Sanwal! I'd like to discuss a new project with DevelopersTech."
              window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
            }}
          >
            Let's Build Your Next Product
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
