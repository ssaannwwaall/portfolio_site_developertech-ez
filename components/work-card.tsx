"use client"
import Image from "next/image"
import { useParallax, useReveal } from "@/hooks/use-reveal"

const WA = "https://wa.me/923074494175?text="

export function WorkCard({ w, i = 0 }: { w: any; i?: number }) {
  const rise = useReveal<HTMLDivElement>(0.1)
  const par = useParallax<HTMLDivElement>(16)
  const msg = encodeURIComponent(`Hi Sanwal! I saw ${w.t} and would like to build something similar.`)

  return (
    <div ref={rise} className="rise" style={{ transitionDelay: `${i * 0.09}s` }}>
      <div ref={par} data-view className="media" style={{ position: "relative", aspectRatio: "16/11", marginBottom: 20 }}>
        <div data-parallax style={{ position: "absolute", inset: 0, willChange: "transform" }}>
          <Image src={w.img} alt={w.t} fill sizes="(max-width:900px) 100vw, 46vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="media-overlay" />
        <div style={{ position: "absolute", left: 24, bottom: 22, right: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(251,250,248,.8)", letterSpacing: ".13em", textTransform: "uppercase", marginBottom: 6 }}>{w.cat}</div>
            <div style={{ fontSize: 25, color: "var(--paper)", fontWeight: 500, letterSpacing: "-.02em" }}>{w.t}</div>
          </div>
          {w.link && (
            <a href={w.link} target="_blank" rel="noopener noreferrer" className="work-link"
              style={{ fontSize: 12, color: "var(--ink)", background: "var(--paper)", padding: "8px 14px", textDecoration: "none", whiteSpace: "nowrap" }}>
              {w.ll} ↗
            </a>
          )}
        </div>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body)", marginBottom: 15 }}>{w.d}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, paddingTop: 15, borderTop: "1px solid var(--line)", flexWrap: "wrap" }}>
        <a href={`${WA}${msg}`} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500, textDecoration: "none" }}>
          {w.metric}
        </a>
        <span style={{ fontSize: 12.5, color: "var(--light)" }}>{w.stack.join(" · ")}</span>
      </div>
    </div>
  )
}
