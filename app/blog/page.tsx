import type { Metadata } from "next"
import Link from "next/link"
import { POSTS } from "@/content/posts"
import { MaskHeading, Rise } from "@/components/mask-heading"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Notes on Building Software",
  description:
    "Practical writing on Flutter development, dispatch systems, guard monitoring software and AI integration, from a team that maintains these products in production.",
  keywords: ["Flutter development blog", "guard monitoring software", "taxi dispatch software", "software engineering notes"],
  alternates: { canonical: "/blog" },
}

export default function BlogIndex() {
  return (
    <main style={{ paddingTop: 74 }}>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <section style={{ padding: "80px 0 60px" }}>
        <div className="wrap">
          <Rise><div className="eyebrow">Writing</div></Rise>
          <MaskHeading text="Notes from building this software." italic={2} tag="h1" className="h1" />
          <Rise delay={0.3}>
            <p className="lede" style={{ maxWidth: 560, marginTop: 22 }}>
              Things we learned maintaining products in production, written for the people
              who have to make these decisions.
            </p>
          </Rise>
        </div>
      </section>

      <section style={{ paddingBottom: 110 }}>
        <div className="wrap">
          {POSTS.map((p, i) => (
            <Rise key={p.slug} delay={i * 0.08}>
              <Link href={`/blog/${p.slug}`} className="post-row">
                <div className="post-meta">
                  <span style={{ fontSize: 11.5, color: "var(--accent)", letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>
                    {p.category}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--light)" }}>
                    {new Date(p.published).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    {" · "}{p.readingTime}
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(22px,2.6vw,32px)", fontWeight: 500, letterSpacing: "-.025em", lineHeight: 1.22, color: "var(--ink)", margin: "14px 0 12px" }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--body)", maxWidth: 620, marginBottom: 16 }}>
                  {p.excerpt}
                </p>
                <span style={{ fontSize: 14, color: "var(--accent)", fontWeight: 500 }}>Read the piece →</span>
              </Link>
            </Rise>
          ))}
        </div>
      </section>
    </main>
  )
}
