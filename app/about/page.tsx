import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Code2, Cpu, Globe2, Building2, Linkedin, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "About Sanwal Khan & DevelopersTech",
  description: "Learn about Sanwal Khan, Managing Director & Co-Founder of DevelopersTech. 5+ years of Flutter, AI, and enterprise software engineering experience.",
}

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%20read%20about%20DevelopersTech%20and%20I%27d%20like%20to%20discuss%20a%20project."

const TIMELINE = [
  { icon: Code2,     year: "2018", title: "Started with Java", body: "Built desktop applications, socket-based systems, and learned software architecture and backend development, a foundation that still informs how I design systems today." },
  { icon: Cpu,       year: "2020", title: "Android & Flutter", body: "Moved into Android development, then specialized in Flutter. Joined TheMovers as a Java developer and was promoted to Project Manager after successfully migrating their native apps to Flutter, reducing maintenance costs by 40%." },
  { icon: Building2, year: "2021", title: "UK Enterprise Software", body: "Joined a UK-based SaaS company building commercial enterprise software: taxi dispatch systems, guard monitoring platforms, business management tools, software used daily by transport and security companies." },
  { icon: Globe2,    year: "2023", title: "Co-Founded DevelopersTech", body: "Founded DevelopersTech to provide premium software engineering services globally, bringing enterprise standards to startups, SMBs, and ambitious product teams worldwide." },
]

const VALUES = [
  { t: "Engineering first",      d: "We architect for scale, not just for the deadline. Code quality is non-negotiable." },
  { t: "Full ownership",         d: "One team from requirement to release. No handoffs, no gaps, no excuses." },
  { t: "Honest communication",   d: "We tell you what's possible, what's not, and why, before it becomes a problem." },
  { t: "Outcome-focused",        d: "We care what your software achieves, not just that it ships." },
]

const INDUSTRIES = ["Transportation & Dispatch","Security Operations","Enterprise SaaS","FinTech & Payments","Health & Wellness","Restaurant & Food","E-commerce","Education","Government","Logistics"]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Page Hero */}
      <section className="section-pad border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="orb-1" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="dt-badge">About</span>
          <h1 className="section-title mt-4 mb-4 max-w-3xl">
            Built by Engineers,<br />
            <span className="gradient-text">Run Like a Product Team</span>
          </h1>
          <p className="section-sub mb-8">
            DevelopersTech is a software engineering company founded in Lahore, Pakistan, serving clients in the UK, UAE, Europe, and the US.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all">
              Start a Project <ArrowRight size={14} />
            </a>
            <a href="https://www.linkedin.com/in/sanwal-khan-3b4019213" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-foreground bg-white/3 border border-border rounded-xl hover:bg-white/6 transition-all">
              <Linkedin size={14} /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/images/company-logo.png" alt="DevelopersTech" width={44} height={44} className="object-contain" />
                <div>
                  <div className="font-bold text-foreground text-[16px]">Sanwal Khan</div>
                  <div className="text-[12px] text-muted-foreground">Managing Director & Co-Founder · DevelopersTech</div>
                  <div className="text-[11px] text-primary mt-0.5">Lahore, Pakistan · Open to International Projects</div>
                </div>
              </div>

              <div className="space-y-4 text-[14px] text-muted-foreground leading-[1.85] mb-8">
                <p>I started my engineering career building Java desktop applications and socket-based communication systems, which gave me a strong foundation in architecture and backend development long before mobile was on my radar.</p>
                <p>That foundation led me into Android development, and eventually Flutter, where I found the intersection of performance, cross-platform reach, and rapid iteration. Over five years, I've shipped commercial software for transportation companies, security operations, enterprise management platforms, and consumer apps, across four platforms.</p>
                <p>I worked at a UK-based enterprise software company building taxi dispatch systems and guard monitoring platforms that are actively used by businesses across the UK. That experience gave me a real understanding of what it means to build software that has to work, not just look good in a demo.</p>
                <p>Today, through DevelopersTech, I work with startups and established businesses to build the software that powers their operations, from the first line of code to production at scale.</p>
              </div>

              {/* Skills */}
              <div className="p-5 bg-card border border-border rounded-2xl">
                <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-3">Core Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {["Flutter / Dart","Android / Kotlin","Firebase","Java / Spring Boot","Node.js","Python","REST APIs","Google Maps API","OpenAI API","Claude API","Real-time Systems","Socket Programming","PostgreSQL","Docker","AWS","CI/CD"].map(s => (
                    <span key={s} className="tech-pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Journey */}
            <div>
              <h2 className="text-[20px] font-bold text-foreground mb-6">The Journey</h2>
              <div className="space-y-0">
                {TIMELINE.map((t, i) => {
                  const Icon = t.icon
                  return (
                    <div key={i} className="relative flex gap-4">
                      {i < TIMELINE.length - 1 && (
                        <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                      )}
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1 z-10">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <div className="pb-8">
                        <div className="text-[11px] font-bold text-primary mb-1">{t.year}</div>
                        <div className="text-[15px] font-semibold text-foreground mb-2">{t.title}</div>
                        <p className="text-[13px] text-muted-foreground leading-[1.8]">{t.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="dt-badge">How We Work</span>
            <h2 className="section-title mt-4 mb-3">Our Principles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {VALUES.map(v => (
              <div key={v.t} className="card-hover bg-card rounded-xl p-5 flex gap-3">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-[14px] mb-1">{v.t}</div>
                  <div className="text-[12px] text-muted-foreground leading-[1.7]">{v.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="mt-10 p-6 bg-card border border-border rounded-2xl max-w-3xl mx-auto">
            <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-4">Industries Served</div>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map(ind => <span key={ind} className="tech-pill">{ind}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="section-title mb-4">Ready to Build Something?</h2>
          <p className="section-sub mx-auto mb-8">Free 30-minute discovery call. No commitment, no hard sell, just an honest conversation about your project.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all">
              Book a Free Call <ArrowRight size={14} />
            </a>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-foreground bg-white/3 border border-border rounded-xl hover:bg-white/6 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
