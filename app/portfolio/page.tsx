import type { Metadata } from "next"
import { WORK } from "@/components/work-data"
import { WorkCard } from "@/components/work-card"
import { MaskHeading, Rise } from "@/components/mask-heading"

export const metadata: Metadata = {
  title: "Work",
  description: "Projects delivered by DevelopersTech. Flutter apps, taxi dispatch systems, guard monitoring platforms and AI products in production.",
}

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: 74 }}>
      <section style={{ padding: "80px 0 60px" }}>
        <div className="wrap">
          <Rise><div className="eyebrow">Portfolio</div></Rise>
          <MaskHeading text="Every project here is live and in use." italic={4} tag="h1" className="h1" />
          <Rise delay={0.3}>
            <p className="lede" style={{ maxWidth: 520, marginTop: 22 }}>
              No concept pieces, no mockups. Real software running for real operators
              in the UK, UAE and beyond.
            </p>
          </Rise>
        </div>
      </section>
      <section style={{ paddingBottom: 110 }}>
        <div className="wrap">
          <div className="pf-grid">
            {WORK.map((w, i) => <WorkCard key={w.id} w={w} i={i} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
