import { CheckCircle2, Code2, Cpu, Globe2 } from "lucide-react"
import Image from "next/image"

const milestones = [
  { icon: Code2, year: "2018", label: "Started with Java — desktop apps and socket programming" },
  { icon: Cpu, year: "2020", label: "Moved to Android, then specialized deeply in Flutter" },
  { icon: Globe2, year: "2021", label: "Built enterprise systems for UK-based SaaS company" },
  { icon: CheckCircle2, year: "2023", label: "Co-founded DevelopersTech, serving global clients" },
]

const values = [
  { title: "Engineering first", description: "We build with architecture in mind, not just deadlines." },
  { title: "Full ownership", description: "One team from requirement to release. No handoffs, no gaps." },
  { title: "Honest communication", description: "Clear timelines, transparent pricing, no surprises." },
  { title: "Business outcomes", description: "We care about what your software achieves, not just what it does." },
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/3 text-xs text-muted-foreground font-medium mb-4">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built by Engineers,<br className="hidden md:block" />{" "}
            <span className="gradient-text">Run Like a Product Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DevelopersTech is a software engineering company founded in Lahore, Pakistan, serving clients globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/company-logo.png"
                alt="DevelopersTech"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <div className="font-bold text-foreground">Sanwal Khan</div>
                <div className="text-sm text-muted-foreground">Managing Director & Co-Founder</div>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I started my engineering career building Java desktop applications and socket-based communication systems —
                which gave me a strong foundation in software architecture and backend development long before
                mobile was on my radar.
              </p>
              <p>
                That foundation led me into Android development, and eventually into Flutter, where I found the
                intersection of performance, speed, and real cross-platform reach. Over five years, I've shipped
                products for transportation companies, security operations, enterprise management, and consumer apps
                across four platforms.
              </p>
              <p>
                Today, through DevelopersTech, I work with startups and businesses to build the software that
                powers their operations — from the first line of code to production at scale.
              </p>
            </div>

            {/* Journey timeline */}
            <div className="space-y-4">
              {milestones.map((m) => {
                const Icon = m.icon
                return (
                  <div key={m.year} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary">{m.year}</span>
                      <p className="text-sm text-muted-foreground">{m.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — Values */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">How We Work</h3>
            {values.map((v) => (
              <div
                key={v.title}
                className="glow-card bg-card border border-border/60 rounded-xl p-5 group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">{v.title}</div>
                    <div className="text-sm text-muted-foreground">{v.description}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Industries served */}
            <div className="mt-8 p-5 bg-card border border-border/60 rounded-xl">
              <h4 className="text-sm font-semibold text-foreground mb-3">Industries Served</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Transportation & Dispatch",
                  "Security Operations",
                  "Enterprise SaaS",
                  "FinTech",
                  "Health & Wellness",
                  "E-commerce",
                  "Restaurant & Food",
                  "Real Estate",
                  "Logistics",
                  "Government",
                ].map((industry) => (
                  <span
                    key={industry}
                    className="tech-badge text-xs"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
