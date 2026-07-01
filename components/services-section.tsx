import {
  Smartphone,
  Globe,
  Bot,
  Building2,
  Plug,
  Palette,
  TrendingUp,
  Zap,
  Database,
  Car,
  ShieldCheck,
  Search,
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform Flutter applications for Android and iOS. From consumer apps to enterprise mobility solutions — built to perform and built to scale.",
    tags: ["Flutter", "Android", "iOS"],
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Full-stack web platforms, admin dashboards, ERPs, CRMs, and SaaS products engineered for performance, security, and business impact.",
    tags: ["Next.js", "Node.js", "React"],
  },
  {
    icon: Bot,
    title: "AI & Machine Learning Integration",
    description:
      "Intelligent applications powered by OpenAI, Claude, and Gemini APIs. Chatbots, automation agents, content engines, and AI workflows built for production.",
    tags: ["OpenAI", "Claude API", "Gemini"],
  },
  {
    icon: Building2,
    title: "Enterprise & SaaS Development",
    description:
      "Enterprise-grade platforms with role-based access, multi-tenancy, analytics, and integrations. Software that powers operations at scale.",
    tags: ["SaaS", "ERP", "CRM"],
  },
  {
    icon: Plug,
    title: "API Development & Integrations",
    description:
      "Robust REST and GraphQL APIs, third-party integrations, payment gateways, real-time systems, and microservices architecture.",
    tags: ["REST", "GraphQL", "WebSockets"],
  },
  {
    icon: Car,
    title: "Taxi Dispatch & Booking Platforms",
    description:
      "Specialized transportation software including taxi dispatch systems, chauffeur booking apps, fleet management, and ride-booking platforms.",
    tags: ["GPS Tracking", "Real-time", "Dispatch"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Guard Monitoring Software",
    description:
      "Guard patrol management systems, incident logging, real-time GPS monitoring, and business security dashboards for enterprise operations.",
    tags: ["GPS", "Real-time", "Security"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Product design that converts. Wireframes, prototypes, design systems, and production-ready interfaces that users actually enjoy using.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: Search,
    title: "SEO & Technical SEO",
    description:
      "Full-spectrum SEO services — technical audits, on-page optimization, local SEO, Google Business management, and organic growth strategies.",
    tags: ["Technical SEO", "Local SEO", "Google"],
  },
  {
    icon: TrendingUp,
    title: "B2B Lead Generation",
    description:
      "LinkedIn outreach, email prospecting, and sales automation systems that build qualified pipelines for software companies and agencies.",
    tags: ["LinkedIn", "Email Outreach", "Sales"],
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description:
      "Automate repetitive workflows, data pipelines, reporting systems, and internal tools. Save time, reduce costs, scale operations.",
    tags: ["Automation", "Workflows", "Integrations"],
  },
  {
    icon: Database,
    title: "Backend & Database Architecture",
    description:
      "Scalable backend systems, cloud infrastructure setup, database design, and performance optimization for high-traffic applications.",
    tags: ["PostgreSQL", "MongoDB", "AWS"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/3 text-xs text-muted-foreground font-medium mb-4">
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            End-to-End Software Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to deployment — we cover every layer of your product. One team, full ownership.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="glow-card gradient-border-card bg-card rounded-xl p-6 border border-border/60 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-border/60 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
