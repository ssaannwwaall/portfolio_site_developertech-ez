"use client"
import { MaskHeading, Rise } from "./mask-heading"

const N = [["5+", "Years engineering"], ["100+", "Products delivered"], ["59", "Client reviews"], ["4", "Countries served"]]

export function NumbersSection() {
  return (
    <section className="section" style={{ background: "var(--ink)" }}>
      <div className="wrap num-grid">
        <div>
          <Rise><div className="eyebrow eyebrow-dark">By the numbers</div></Rise>
          <MaskHeading text="Five years, one standard." style={{ color: "var(--paper)" }} />
          <Rise delay={0.25}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(251,250,248,.66)", maxWidth: 400, marginTop: 20 }}>
              Every project ships with documentation, clean handoff and thirty days
              of post launch support. No exceptions.
            </p>
          </Rise>
        </div>
        <div className="num-cells">
          {N.map(([v, l], i) => (
            <Rise key={l} delay={i * 0.09}>
              <div style={{ borderLeft: "1px solid rgba(111,160,188,.3)", paddingLeft: 20 }}>
                <div style={{ fontSize: 44, fontWeight: 400, color: "var(--paper)", letterSpacing: "-.04em", lineHeight: 1, marginBottom: 7 }}>{v}</div>
                <div style={{ fontSize: 13.5, color: "rgba(251,250,248,.58)" }}>{l}</div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
      <style jsx>{`
        .num-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 76px; align-items: center; }
        .num-cells { display: grid; grid-template-columns: 1fr 1fr; gap: 42px 38px; }
        @media (max-width: 900px) { .num-grid { grid-template-columns: 1fr; gap: 44px; } }
      `}</style>
    </section>
  )
}
