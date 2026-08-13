"use client"
import { MaskHeading, Rise } from "./mask-heading"
import { SERVICES } from "./work-data"

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20discuss%20a%20project."


export function ServicesSection() {
  return (
    <section className="section" style={{ background: "var(--paper2)" }}>
      <div className="wrap svc-grid">
        <div className="svc-sticky">
          <Rise><div className="eyebrow">What we do</div></Rise>
          <MaskHeading text="Four disciplines, one team." />
          <Rise delay={0.25}>
            <p className="lede" style={{ margin: "22px 0 30px" }}>
              We do not hand your project to a junior and disappear. The engineer you meet
              in the first call is the one writing the code.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mag">
              Discuss your project <span className="arrow">→</span>
            </a>
          </Rise>
        </div>
        <div>
          {SERVICES.map((s, i) => (
            <Rise key={s.n} delay={i * 0.08}>
              <div style={{ padding: "34px 0", borderBottom: "1px solid var(--line)", display: "flex", gap: 26 }}>
                <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500, paddingTop: 5, minWidth: 22 }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 500, color: "var(--ink)", letterSpacing: "-.02em", marginBottom: 10 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.72, color: "var(--body)", marginBottom: 15 }}>{s.d}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {s.items.map(it => (
                      <span key={it} style={{ fontSize: 12.5, color: "var(--body)", padding: "5px 13px", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 100 }}>{it}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
      <style jsx>{`
        .svc-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 70px; }
        .svc-sticky { position: sticky; top: 120px; align-self: start; }
        @media (max-width: 980px) {
          .svc-grid { grid-template-columns: 1fr; gap: 40px; }
          .svc-sticky { position: static; }
        }
      `}</style>
    </section>
  )
}
