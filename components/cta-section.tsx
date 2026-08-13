"use client"
import { MaskHeading, Rise } from "./mask-heading"

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20book%20a%20consultation."

export function CtaSection() {
  return (
    <section className="section" style={{ background: "var(--ink)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -180, right: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(111,160,188,.15),transparent 70%)" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <div style={{ maxWidth: 620 }}>
          <Rise><div className="eyebrow eyebrow-dark">Next step</div></Rise>
          <MaskHeading text="Tell us what you are building." tag="h2" className="h1" style={{ color: "var(--paper)" }} />
          <Rise delay={0.3}>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "rgba(251,250,248,.66)", margin: "24px 0 36px" }}>
              Thirty minutes, no pitch. We will tell you honestly whether we are the right
              team and what it will realistically take.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-light mag">
                Book a consultation <span className="arrow">→</span>
              </a>
              <span style={{ fontSize: 13.5, color: "rgba(251,250,248,.48)" }}>Usually replies within 2 hours</span>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  )
}
