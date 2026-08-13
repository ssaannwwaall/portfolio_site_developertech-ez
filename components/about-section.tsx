"use client"
import Image from "next/image"
import { MaskHeading, Rise } from "./mask-heading"
import { useParallax } from "@/hooks/use-reveal"

const TIMELINE = [["2018", "Java and backend"], ["2020", "Flutter specialist"], ["2021", "UK enterprise"], ["2023", "DevelopersTech"]]

export function AboutSection() {
  const par = useParallax<HTMLDivElement>(18)
  return (
    <section className="section">
      <div className="wrap about-grid">
        <Rise>
          <div style={{ position: "relative" }}>
            <div ref={par} data-view className="media" style={{ position: "relative", aspectRatio: "4/5", borderRadius: 3 }}>
              <div data-parallax style={{ position: "absolute", inset: 0, willChange: "transform" }}>
                <Image src="/tbms-tablet.webp" alt="DevelopersTech work" fill sizes="(max-width:900px) 100vw, 36vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="founder-card">
              <Image src="/images/company-logo.png" alt="" width={30} height={30} style={{ objectFit: "contain", marginBottom: 10 }} />
              <div style={{ fontSize: 14.5, fontWeight: 500, color: "var(--ink)" }}>Sanwal Khan</div>
              <div style={{ fontSize: 12, color: "var(--body)", marginTop: 2 }}>Managing Director</div>
            </div>
          </div>
        </Rise>
        <div>
          <Rise><div className="eyebrow">The studio</div></Rise>
          <MaskHeading text="Started with Java. Stayed for the craft." italic={3} />
          <Rise delay={0.25}>
            <div style={{ fontSize: 16.5, lineHeight: 1.82, color: "var(--body)", display: "flex", flexDirection: "column", gap: 17, margin: "26px 0 32px" }}>
              <p>We began with Java desktop applications and socket programming. That grounding in architecture shapes how our team approaches every system we build today.</p>
              <p>Android came next, then Flutter, then five years building commercial software for a UK enterprise client. Taxi dispatch. Guard monitoring. Systems that had to work, every day, for real operators.</p>
            </div>
            <div style={{ display: "flex", gap: 38, paddingTop: 26, borderTop: "1px solid var(--line)", flexWrap: "wrap" }}>
              {TIMELINE.map(([y, t]) => (
                <div key={y}>
                  <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500, marginBottom: 4 }}>{y}</div>
                  <div style={{ fontSize: 13, color: "var(--body)" }}>{t}</div>
                </div>
              ))}
            </div>
          </Rise>
        </div>
      </div>
      <style jsx>{`
        .about-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 72px; align-items: center; }
        .founder-card {
          position: absolute; right: -28px; bottom: 36px; background: var(--paper);
          padding: 20px 26px; box-shadow: 0 20px 60px rgba(14,27,38,.16); border: 1px solid var(--line);
        }
        @media (max-width: 980px) {
          .about-grid { grid-template-columns: 1fr; gap: 44px; }
          .founder-card { right: 16px; bottom: 16px; padding: 14px 18px; }
        }
      `}</style>
    </section>
  )
}
