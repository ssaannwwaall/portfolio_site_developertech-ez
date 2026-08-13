import Link from "next/link"
import { WORK, SERVICES } from "./work-data"
import { WorkCard } from "./work-card"
import { MaskHeading, Rise } from "./mask-heading"
import { CtaSection } from "./cta-section"

const WA = "https://wa.me/923074494175?text="

export interface LocationConfig {
  region: string          // "the United Kingdom"
  short: string           // "UK"
  eyebrow: string         // "Serving the UK"
  h1: string              // headline text
  h1Italic: number        // trailing words rendered italic
  lede: string
  intro: string[]         // 2 paragraphs
  points: Array<[string, string]>
  workIds: string[]       // which case studies to feature
  faqs: Array<[string, string]>
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
            <p className="lede" style={{ maxWidth: 560, marginTop: 22, marginBottom: 34 }}>{c.lede}</p>
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

      {/* Intro + points */}
      <section className="section" style={{ background: "var(--paper2)" }}>
        <div className="wrap loc-grid">
          <div>
            <MaskHeading text={`Software teams in ${c.region} work with us for a reason.`} />
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

      {/* Services */}
      <section className="section">
        <div className="wrap">
          <Rise><div className="eyebrow">What we build</div></Rise>
          <MaskHeading text={`Services for ${c.short} clients.`} />
          <div className="loc-services" style={{ marginTop: 44 }}>
            {SERVICES.map((s, i) => (
              <Rise key={s.n} delay={i * 0.07}>
                <div className="card" style={{ padding: "28px 26px", height: "100%" }}>
                  <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500, marginBottom: 14 }}>{s.n}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 500, color: "var(--ink)", letterSpacing: "-.02em", marginBottom: 10 }}>{s.t}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.72, color: "var(--body)" }}>{s.d}</p>
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
            <Rise><div className="eyebrow">Selected work</div></Rise>
            <MaskHeading text="Projects already in production." />
            <div className="loc-work" style={{ marginTop: 44 }}>
              {work.map((w, i) => <WorkCard key={w.id} w={w} i={i} />)}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section">
        <div className="wrap loc-faq">
          <div>
            <Rise><div className="eyebrow">Common questions</div></Rise>
            <MaskHeading text={`Working with us from ${c.short}.`} />
          </div>
          <div>
            {c.faqs.map(([q, a], i) => (
              <Rise key={q} delay={i * 0.07}>
                <div style={{ padding: "26px 0", borderBottom: "1px solid var(--line)" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 500, color: "var(--ink)", marginBottom: 10, letterSpacing: "-.01em" }}>{q}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.78, color: "var(--body)" }}>{a}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      {/* FAQ schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }) }} />
    </main>
  )
}
