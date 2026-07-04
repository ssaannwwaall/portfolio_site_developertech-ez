import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const WA = "https://wa.me/923074494175?text="

const PROJECTS = [
  {
    title: "Softpatrol",
    category: "Security Management",
    description: "Enterprise guard patrol system with real-time GPS tracking, patrol scheduling, incident reporting, and analytics dashboards. 1,000+ Google Play downloads.",
    stack: ["Flutter","Firebase","GPS","Real-time","Android"],
    color: "#5184A3",
    badge: "Live on Play Store",
    caseStudy: "/project/softpatrol",
    playStore: "https://play.google.com/store/apps/details?id=com.computerfriends.softpatrol",
  },
  {
    title: "TBMS Driver",
    category: "Taxi Dispatch",
    description: "UK taxi dispatch management platform with live job tracking, driver management, automated dispatch logic, and earnings analytics. In active commercial use.",
    stack: ["Flutter","WebSockets","Payments","Dispatch"],
    color: "#3A9B6E",
    badge: "UK Enterprise",
    caseStudy: null,
    playStore: null,
  },
  {
    title: "JAMGO-CEE",
    category: "Web Platform",
    description: "Full-stack web platform for an international client. Custom UI, dynamic content management, SEO-optimised architecture. Live in production.",
    stack: ["Next.js","React","Node.js","PostgreSQL"],
    color: "#7B5EA7",
    badge: "Live",
    live: "https://jamgocee.com",
    caseStudy: null,
  },
  {
    title: "AI Chatbot Platform",
    category: "AI Development",
    description: "Multi-tenant AI chatbot with custom knowledge bases, conversation memory, multi-channel deployment. Reduces client support volume by ~60%.",
    stack: ["OpenAI API","Node.js","React","PostgreSQL"],
    color: "#059669",
    badge: "AI Integration",
  },
  {
    title: "Restaurant Ordering System",
    category: "F&B Technology",
    description: "QR table ordering, kitchen display, real-time tracking, POS integration, and owner analytics. Deployed across multiple restaurant chains.",
    stack: ["Flutter","Firebase","POS","Real-time"],
    color: "#DC2626",
    badge: "Multi-chain",
  },
  {
    title: "Chauffeur Booking App",
    category: "Luxury Transport",
    description: "Premium limousine booking with real-time driver tracking, advance booking, dynamic pricing, and corporate account management. 4.8★ user rating.",
    stack: ["Flutter","Google Maps","Stripe","Firebase"],
    color: "#7C3AED",
    badge: "4.8★ Rating",
  },
]

export function ProjectsSection() {
  return (
    <section className="section-pad bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <span className="dt-badge">Case Studies</span>
          <h2 className="section-title mt-4 mb-3">Products We've Shipped</h2>
          <p className="section-sub mx-auto">
            Production software — not demos. Every project here is deployed and actively used by real businesses.
          </p>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
          {PROJECTS.map((p) => {
            const waMsg = encodeURIComponent(`Hi Sanwal! I saw the ${p.title} project on DevelopersTech and I'd like to build something similar.`)
            return (
              <div key={p.title} className="card-hover bg-card rounded-2xl overflow-hidden border border-border flex flex-col">
                <div style={{ height: 5, background: `linear-gradient(90deg, ${p.color}, ${p.color}50)` }} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: p.color }}>{p.category}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: p.color + "20", color: p.color, border: `1px solid ${p.color}40` }}>{p.badge}</span>
                  </div>
                  <h3 className="text-[18px] font-extrabold text-foreground tracking-tight mb-2">{p.title}</h3>
                  <p className="text-[12px] text-muted-foreground leading-[1.78] mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                  <div style={{ height: 1, background: `linear-gradient(90deg, ${p.color}50, transparent)`, marginBottom: 14 }} />
                  <div className="flex gap-2 flex-wrap">
                    <a href={`${WA}${waMsg}`} target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 text-[11px] font-semibold text-foreground bg-white/4 border border-border rounded-lg hover:bg-white/7 transition-all">
                      Build Similar <ArrowRight size={11} />
                    </a>
                    {p.caseStudy && (
                      <Link href={p.caseStudy}
                        className="inline-flex items-center gap-1 px-3 py-2 text-[11px] font-semibold rounded-lg transition-all"
                        style={{ background: p.color + "15", border: `1px solid ${p.color}35`, color: p.color }}>
                        Case Study
                      </Link>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 text-[11px] font-semibold rounded-lg transition-all"
                        style={{ background: p.color + "15", border: `1px solid ${p.color}35`, color: p.color }}>
                        Live <ExternalLink size={11} />
                      </a>
                    )}
                    {p.playStore && (
                      <a href={p.playStore} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 text-[11px] font-semibold rounded-lg transition-all"
                        style={{ background: p.color + "15", border: `1px solid ${p.color}35`, color: p.color }}>
                        Play Store <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 px-4">
          <Link href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-foreground bg-white/4 border border-border rounded-xl hover:bg-white/7 transition-all">
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
