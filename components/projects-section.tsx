"use client"
import Link from "next/link"
import { WORK } from "./work-data"
import { WorkCard } from "./work-card"
import { MaskHeading, Rise } from "./mask-heading"

export function ProjectsSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, gap: 24, flexWrap: "wrap" }}>
          <div>
            <Rise><div className="eyebrow">Selected work</div></Rise>
            <MaskHeading text="Products in production." />
          </div>
          <Link href="/portfolio" style={{ fontSize: 14, color: "var(--body)", textDecoration: "none", borderBottom: "1px solid var(--line)", paddingBottom: 4 }}>
            All projects →
          </Link>
        </div>
        <div className="work-grid">
          {WORK.slice(0, 4).map((w, i) => <WorkCard key={w.id} w={w} i={i} />)}
        </div>
      </div>
      <style jsx>{`
        .work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        @media (max-width: 860px) { .work-grid { grid-template-columns: 1fr; gap: 40px; } }
      `}</style>
    </section>
  )
}
