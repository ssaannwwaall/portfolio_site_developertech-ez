import Link from "next/link"
import { WORK } from "./work-data"
import { WorkCard } from "./work-card"
import { MaskHeading, Rise } from "./mask-heading"

const WA = "https://wa.me/923074494175?text="

export interface LocationConfig {
  region: string
  short: string
  eyebrow: string
  h1: string
  h1Italic: number
  lede: string
  /** 3 paragraphs, written specifically for this market */
  intro: string[]
  /** 4 differentiators, specific to this market */
  points: Array<[string, string]>
  /** Services described in this market's language, not generic copy */
  services: Array<[string, string]>
  /** Case studies to feature */
  workIds: string[]
  /** Practical engagement detail: contracts, currency, hours, compliance */
  working: Array<[string, string]>
  /** 7 FAQs */
  faqs: Array<[string, string]>
  /** Closing paragraph */
  close: string
}

export function LocationPage({ c }: { c: LocationConfig }) {
  const work = WORK.filter(w => c.workIds.includes(w.id))
  const msg = encodeURIComponent(`Hi! We are based in ${c.region} and would like to discuss a project with DevelopersTech.`)

  return (
    <main style={{ paddingTop: 74 }}>
      {/* Hero */}
      <section style={{ padding: "80px 0 60px" }}>
        <div className="wrap">
          <Rise><div className="eyebrow">{c.eyebrow}</div></Rise>
          <MaskHeading text={c.h1} italic={c.h1Italic} tag="h1" className="h1" />
          <Rise delay={0.3}>
            <p className="lede" style={{ maxWidth: 580, marginTop: 22, marginBottom: 34 }}>{c.lede}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={`${WA}${msg}`} target="_blank" rel="noopener noreferrer" className="btn btn-solid mag">
                Book a free consultation <span className="arrow">→</span>
              </a>
              <Link href="/portfolio" className="btn btn-ghost mag">
                See our work <span className="arrow">→</span>
              </Link>
            </div>
          </Rise>
        </div>
      </section>

      {/* Intro + differentiators */}
      <section className="section" style={{ background: "var(--paper2)" }}>
        <div className="wrap loc-grid">
          <div>
            <MaskHeading text={`Why teams in ${c.region} work with us.`} />
            <Rise delay={0.25}>
              <div style={{ fontSize: 16.5, lineHeight: 1.82, color: "var(--body)", display: "flex", flexDirection: "column", gap: 17, marginTop: 24 }}>
                {c.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Rise>
          </div>
          <div>
            {c.points.map(([t, d], i) => (
              <Rise key={t} delay={i * 0.08}>
                <div style={{ padding: "28px 0", borderBottom: "1px solid var(--line)" }}>
                  <h3 style={{ fontSize: 19, fontWeight: 500, color: "var(--ink)", letterSpacing: "-.02em", marginBottom: 9 }}>{t}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body)" }}>{d}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Market specific services */}
      <section className="section">
        <div className="wrap">
          <Rise><div className="eyebrow">What we build</div></Rise>
          <MaskHeading text={`Services for ${c.short} clients.`} />
          <div className="loc-services" style={{ marginTop: 44 }}>
            {c.services.map(([n, d], i) => (
              <Rise key={n} delay={i * 0.07}>
                <div className="card" style={{ padding: "28px 26px", height: "100%" }}>
                  <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500, marginBottom: 14 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 500, color: "var(--ink)", letterSpacing: "-.02em", marginBottom: 10 }}>{n}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.72, color: "var(--body)" }}>{d}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant work */}
      {work.length > 0 && (
        <section className="section" style={{ background: "var(--paper2)" }}>
          <div className="wrap">
            <Rise><div className="eyebrow">Relevant work</div></Rise>
            <MaskHeading text="Projects already in production." />
            <div className="loc-work" style={{ marginTop: 44 }}>
              {work.map((w, i) => <WorkCard key={w.id} w={w} i={i} />)}
            </div>
          </div>
        </section>
      )}

      {/* How we work with this market */}
      <section className="section">
        <div className="wrap loc-grid">
          <div>
            <Rise><div className="eyebrow">Practicalities</div></Rise>
            <MaskHeading text={`How engagements with ${c.short} clients run.`} />
            <Rise delay={0.3}>
              <p className="lede" style={{ marginTop: 22 }}>{c.close}</p>
            </Rise>
          </div>
          <div>
            {c.working.map(([t, d], i) => (
              <Rise key={t} delay={i * 0.08}>
                <div style={{ padding: "26px 0", borderBottom: "1px solid var(--line)" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 500, color: "var(--ink)", marginBottom: 8 }}>{t}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body)" }}>{d}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" style={{ background: "var(--paper2)" }}>
        <div className="wrap loc-faq">
          <div>
            <Rise><div className="eyebrow">Common questions</div></Rise>
            <MaskHeading text={`Working with us from ${c.short}.`} />
          </div>
          <div>
            {c.faqs.map(([q, a], i) => (
              <Rise key={q} delay={i * 0.06}>
                <div style={{ padding: "26px 0", borderBottom: "1px solid var(--line)" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 500, color: "var(--ink)", marginBottom: 10, letterSpacing: "-.01em" }}>{q}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.78, color: "var(--body)" }}>{a}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA, worded per market */}
      <section className="section" style={{ background: "var(--ink)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -180, right: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(111,160,188,.15),transparent 70%)" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ maxWidth: 640 }}>
            <Rise><div className="eyebrow eyebrow-dark">Next step</div></Rise>
            <MaskHeading text={`Tell us what you are building in ${c.region}.`} tag="h2" className="h1" style={{ color: "var(--paper)" }} />
            <Rise delay={0.3}>
              <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "rgba(251,250,248,.66)", margin: "24px 0 36px" }}>
                Thirty minutes, no pitch. We will tell you honestly whether we are the right
                team, what it will realistically take, and what it should cost.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <a href={`${WA}${msg}`} target="_blank" rel="noopener noreferrer" className="btn btn-light mag">
                  Book a consultation <span className="arrow">→</span>
                </a>
                <span style={{ fontSize: 13.5, color: "rgba(251,250,248,.48)" }}>Usually replies within 2 hours</span>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faqs.map(([q, a]) => ({
          "@type": "Question", name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }) }} />
    </main>
  )
}
