import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Smartphone, Globe, Bot, Building2, Car, ShieldCheck, Search, TrendingUp, Zap, Database, Palette, Plug } from "lucide-react"

export const metadata: Metadata = {
  title: "Services, Flutter, AI, Web & Enterprise Development",
  description: "Complete software development services from DevelopersTech, Flutter mobile apps, AI integration, enterprise SaaS, taxi dispatch software, SEO, and B2B lead generation.",
}

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20discuss%20a%20service%20from%20DevelopersTech."

const CATEGORIES = [
  {
    name: "Mobile Development",
    color: "#5184A3",
    icon: Smartphone,
    services: [
      { n:"Flutter Development", d:"Cross-platform apps for Android, iOS, Web & Desktop from a single codebase. 5+ years of production experience." },
      { n:"Android Development", d:"Native Android with Material Design, Jetpack, and full device-hardware integration." },
      { n:"iOS Development",     d:"Swift development for iPhone and iPad, performance-optimized, App Store ready." },
      { n:"Cross-Platform Apps", d:"One codebase, four platforms. Maximum reach, minimum maintenance overhead." },
    ]
  },
  {
    name: "Web & Enterprise",
    color: "#3A9B6E",
    icon: Globe,
    services: [
      { n:"Web Application Development", d:"Next.js and React web platforms built for performance, SEO, and scale." },
      { n:"SaaS Development",            d:"Multi-tenant SaaS with auth, billing, role-based access, and analytics." },
      { n:"ERP & CRM Development",       d:"Custom enterprise resource planning and client management platforms." },
      { n:"Admin Panels & Dashboards",   d:"Data-rich internal tools, reporting systems, and management interfaces." },
    ]
  },
  {
    name: "AI & Automation",
    color: "#7B5EA7",
    icon: Bot,
    services: [
      { n:"AI Applications",      d:"Production AI apps using OpenAI, Claude, and Gemini APIs, beyond simple chatbots." },
      { n:"AI Chatbots",          d:"Customer-facing and internal AI assistants built for accuracy, context, and tone." },
      { n:"Business Automation",  d:"Automate workflows, data pipelines, reports, and internal processes." },
      { n:"API Development",      d:"REST and GraphQL APIs, third-party integrations, webhooks, and microservices." },
    ]
  },
  {
    name: "Industry Software",
    color: "#D97706",
    icon: Car,
    services: [
      { n:"Taxi Dispatch Systems",  d:"Real-time dispatch, GPS tracking, driver management, automated routing, and booking apps." },
      { n:"Guard Monitoring",       d:"Patrol management, incident logging, GPS monitoring, and security dashboards." },
      { n:"Booking Platforms",      d:"Restaurant reservations, chauffeur booking, appointment scheduling systems." },
      { n:"Fleet Management",       d:"Vehicle tracking, maintenance scheduling, and driver performance analytics." },
    ]
  },
  {
    name: "Digital Growth",
    color: "#DC2626",
    icon: Search,
    services: [
      { n:"Technical SEO",          d:"Site architecture, Core Web Vitals, structured data, crawl optimization." },
      { n:"Local SEO",              d:"Google Business Profile, citation building, local map ranking." },
      { n:"B2B Lead Generation",    d:"LinkedIn outreach, email prospecting, and qualified sales pipeline building." },
      { n:"Google Maps Corrections", d:"Road corrections, business listing management, and map data updates." },
    ]
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="section-pad border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />
        <div className="orb-1" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="dt-badge">Services</span>
          <h1 className="section-title mt-4 mb-3 max-w-3xl">Everything Your Product Needs,<br /><span className="gradient-text">Under One Roof</span></h1>
          <p className="section-sub mb-8">From mobile to enterprise, one team, full ownership, every layer of your product.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all">
            Discuss Your Project <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto space-y-16">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.name}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cat.color + "18", border: `1px solid ${cat.color}30` }}>
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h2 className="text-[20px] md:text-[24px] font-bold text-foreground">{cat.name}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.services.map(s => (
                    <div key={s.n} className="card-hover bg-card rounded-xl p-5 border border-border"
                      style={{ borderLeft: `3px solid ${cat.color}60` }}>
                      <h3 className="font-semibold text-foreground text-[14px] mb-2">{s.n}</h3>
                      <p className="text-[12px] text-muted-foreground leading-[1.75]">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-card/20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="section-title mb-4">Not Sure What You Need?</h2>
          <p className="section-sub mx-auto mb-8">Book a free discovery call. We'll help you figure out the right approach, tech stack, and timeline, no jargon, no pressure.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all">
            Book a Free Call <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </main>
  )
}
