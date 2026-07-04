import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, ArrowRight, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio — Projects & Case Studies",
  description: "Real projects delivered by DevelopersTech — Flutter apps, AI platforms, taxi dispatch systems, guard monitoring software, and web applications.",
}

const WA_BASE = "https://wa.me/923074494175?text="

const PROJECTS = [
  {
    id: "softpatrol",
    title: "Softpatrol",
    category: "Security Guard Management",
    description: "Enterprise guard patrol management system with real-time GPS tracking, patrol scheduling, incident reporting, and multi-client analytics dashboards. 1,000+ downloads on Google Play. Used by UK security companies daily.",
    stack: ["Flutter","Firebase","Google Maps","Real-time GPS","Android","Cloud Functions"],
    color: "#5184A3",
    metrics: ["1,000+ Play Store downloads","Released Dec 2023","v1.7.4","Android 8.0+"],
    links: {
      caseStudy: "/project/softpatrol",
      playStore: "https://play.google.com/store/apps/details?id=com.computerfriends.softpatrol",
    },
    highlight: "Live on Google Play"
  },
  {
    id: "tbms",
    title: "TBMS Driver",
    category: "Taxi Dispatch System",
    description: "Advanced taxi dispatch management platform for a UK-based transportation company. Real-time job tracking, driver management, automated dispatch logic, earnings reporting, and comprehensive admin analytics. Actively used in commercial UK operations.",
    stack: ["Flutter","WebSockets","Payment Integration","Real-time Dispatch","Analytics","Firebase"],
    color: "#3A9B6E",
    metrics: ["UK enterprise deployment","Commercial daily use","Android & iOS","Real-time dispatch"],
    links: {
      caseStudy: null,
      playStore: null,
    },
    highlight: "Enterprise Client — UK"
  },
  {
    id: "jamgo-cee",
    title: "JAMGO-CEE",
    category: "Web Platform",
    description: "Full-stack web platform built for an international client. Custom UI design, dynamic content management, performance-optimized architecture, and SEO-focused build. Live and running in production.",
    stack: ["Next.js","React","Node.js","PostgreSQL","Vercel","SEO"],
    color: "#7B5EA7",
    metrics: ["Live in production","International client","SEO optimized","Fast Core Web Vitals"],
    links: {
      caseStudy: null,
      live: "https://jamgocee.com",
    },
    highlight: "Live at jamgocee.com"
  },
  {
    id: "the-movers",
    title: "TheMovers Dispatch Platform",
    category: "Ride-hailing & Fleet",
    description: "Taxi booking and dispatch platform built for a local Lahore transportation company. Architected the real-time driver dispatch system, ride-hailing logic, and GPS tracking. Flutter migration from native Android reduced maintenance costs by 40%.",
    stack: ["Flutter","Java","Socket Programming","GPS","Real-time","Android"],
    color: "#D97706",
    metrics: ["40% maintenance cost reduction","Lahore operations","Driver app + Admin portal","Real-time dispatch"],
    links: {},
    highlight: "Fleet Management"
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Platform",
    category: "AI Development",
    description: "Multi-tenant AI chatbot platform with custom knowledge bases, conversation memory, multi-channel deployment (web, WhatsApp, Telegram), and analytics dashboard. Helps agencies serve SMB clients with white-labeled AI customer support.",
    stack: ["OpenAI API","Node.js","React","PostgreSQL","WebSockets","Multi-tenant"],
    color: "#059669",
    metrics: ["~60% support volume reduction","Multi-channel deployment","White-label ready","Custom knowledge bases"],
    links: {},
    highlight: "AI Integration"
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering System",
    category: "F&B Technology",
    description: "Full-stack restaurant management system with QR table ordering, kitchen display screens, real-time order tracking, POS integration, and owner analytics dashboard. Deployed across multiple restaurant chains.",
    stack: ["Flutter","Firebase","Real-time DB","POS Integration","QR Ordering","Analytics"],
    color: "#DC2626",
    metrics: ["Multi-restaurant deployment","QR ordering","Kitchen display system","Real-time tracking"],
    links: {},
    highlight: "Restaurant Tech"
  },
  {
    id: "chauffeur-app",
    title: "Premium Chauffeur Booking",
    category: "Luxury Transport",
    description: "Premium limousine and chauffeur booking platform with clean dark UI, real-time driver tracking, advance booking, dynamic pricing engine, and corporate account management. Built for a luxury transport company.",
    stack: ["Flutter","Node.js","Google Maps","Stripe","Firebase","Corporate Accounts"],
    color: "#7C3AED",
    metrics: ["4.8★ user rating","Live booking operations","Stripe payments","Corporate accounts"],
    links: {},
    highlight: "Luxury Transport"
  },
  {
    id: "business-management",
    title: "Business Management System",
    category: "Enterprise SaaS",
    description: "Comprehensive business management platform with CRM, invoicing, project tracking, employee management, and reporting. Multi-role access control system built for growing SMB operations.",
    stack: ["Flutter","Node.js","PostgreSQL","REST APIs","Role-based Access","Reporting"],
    color: "#0284C7",
    metrics: ["Multi-tenant","Role-based access","Full CRM","Invoice & reporting"],
    links: {},
    highlight: "Enterprise SaaS"
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-pad border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="dt-badge">Portfolio</span>
          <h1 className="section-title mt-4 mb-3 max-w-3xl">
            Products We've Shipped<br />
            <span className="gradient-text">for Real Businesses</span>
          </h1>
          <p className="section-sub">
            Production software — not demos. Every project here is deployed and actively used by real clients.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PROJECTS.map((p) => {
              const waMsg = encodeURIComponent(`Hi Sanwal! I saw the ${p.title} project and I'd like to build something similar. Can we discuss?`)
              return (
                <div key={p.id} className="card-hover bg-card rounded-2xl overflow-hidden border border-border flex flex-col">
                  {/* Colour stripe */}
                  <div style={{ height: 6, background: `linear-gradient(90deg, ${p.color}, ${p.color}70)` }} />

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: p.color }}>{p.category}</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold text-white" style={{ background: p.color + "30", border: `1px solid ${p.color}50` }}>
                        {p.highlight}
                      </span>
                    </div>

                    <h2 className="text-[20px] font-extrabold text-foreground tracking-tight mb-3">{p.title}</h2>
                    <p className="text-[13px] text-muted-foreground leading-[1.78] mb-4 flex-1">{p.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {p.metrics.map(m => (
                        <div key={m} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                          {m}
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.stack.map(t => <span key={t} className="tech-pill">{t}</span>)}
                    </div>

                    {/* Gradient accent */}
                    <div style={{ height: 1, background: `linear-gradient(90deg, ${p.color}60, transparent)`, marginBottom: 16 }} />

                    {/* Actions */}
                    <div className="flex gap-2 flex-wrap">
                      <a href={`${WA_BASE}${waMsg}`} target="_blank" rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[12px] font-semibold text-foreground bg-white/4 border border-border rounded-xl hover:bg-white/7 transition-all">
                        Build Similar <ArrowRight size={12} />
                      </a>
                      {p.links.caseStudy && (
                        <Link href={p.links.caseStudy}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-semibold rounded-xl transition-all"
                          style={{ background: p.color + "18", border: `1px solid ${p.color}35`, color: p.color }}>
                          Case Study <ArrowRight size={12} />
                        </Link>
                      )}
                      {p.links.live && (
                        <a href={p.links.live} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-semibold rounded-xl transition-all"
                          style={{ background: p.color + "18", border: `1px solid ${p.color}35`, color: p.color }}>
                          View Live <ExternalLink size={12} />
                        </a>
                      )}
                      {p.links.playStore && (
                        <a href={p.links.playStore} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-semibold rounded-xl transition-all"
                          style={{ background: p.color + "18", border: `1px solid ${p.color}35`, color: p.color }}>
                          Play Store <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center p-8 md:p-12 bg-card border border-border rounded-2xl">
            <h2 className="text-[clamp(22px,3vw,34px)] font-bold text-foreground mb-3">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-[14px]">
              Let's talk about what you're building. Free 30-minute call, honest estimate, no commitment required.
            </p>
            <a href={`${WA_BASE}${encodeURIComponent("Hi Sanwal! I've seen your portfolio and I'd like to discuss building a new project with DevelopersTech.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all">
              Start a Conversation <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
