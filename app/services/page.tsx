import type { Metadata } from "next"
import { SERVICES } from "@/components/work-data"
import { MaskHeading, Rise } from "@/components/mask-heading"

export const metadata: Metadata = {
  title: "Services",
  description: "Flutter and native mobile development, web platforms, SaaS, AI integration, taxi dispatch and guard monitoring systems.",
}

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: 74 }}>
      <section style={{ padding: "80px 0 60px" }}>
        <div className="wrap">
          <Rise><div className="eyebrow">Capabilities</div></Rise>
          <MaskHeading text="Full stack, from first sketch to production." italic={4} tag="h1" className="h1" />
        </div>
      </section>
      <section style={{ paddingBottom: 110 }}>
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <Rise key={s.n} delay={i * 0.08}>
              <div className="svc-row">
                <div style={{ fontSize: 15, color: "var(--accent)", fontWeight: 500 }}>{s.n}</div>
                <div>
                  <h3 style={{ fontSize: 27, fontWeight: 500, color: "var(--ink)", letterSpacing: "-.025em", marginBottom: 13 }}>{s.t}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.78, color: "var(--body)" }}>{s.d}</p>
                </div>
                <div>
                  {s.items.map(it => (
                    <div key={it} style={{ fontSize: 15, color: "var(--ink)", padding: "0 0 12px", marginBottom: 12, borderBottom: "1px solid var(--line)" }}>{it}</div>
                  ))}
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </section>
    </main>
  )
}
