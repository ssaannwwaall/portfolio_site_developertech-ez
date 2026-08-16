import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { POSTS, getPost } from "@/content/posts"
import { MaskHeading, Rise } from "@/components/mask-heading"

const BASE = "https://developerstech.space"
const WA = "https://wa.me/923074494175?text=Hi!%20I%20read%20your%20article%20and%20would%20like%20to%20discuss%20a%20project."

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.published,
      authors: ["Sanwal Khan"],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const date = new Date(post.published).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

  return (
    <main style={{ paddingTop: 74 }}>
      {/* Article schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.published,
        dateModified: post.updated ?? post.published,
        author: { "@type": "Person", name: "Sanwal Khan", url: "https://www.linkedin.com/in/sanwal-khan-3b4019213" },
        publisher: { "@type": "Organization", name: "DevelopersTech", logo: { "@type": "ImageObject", url: `${BASE}/images/company-logo.png` } },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
        keywords: post.keywords.join(", "),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
        ],
      }) }} />

      <article>
        <header style={{ padding: "72px 0 48px", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap" style={{ maxWidth: 820 }}>
            <Rise>
              <Link href="/blog" style={{ fontSize: 13.5, color: "var(--body)", textDecoration: "none", borderBottom: "1px solid var(--line)", paddingBottom: 3 }}>
                ← All writing
              </Link>
            </Rise>
            <div style={{ marginTop: 30 }}>
              <Rise>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", marginBottom: 20 }}>
                  <span style={{ fontSize: 11.5, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600 }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: 13.5, color: "var(--light)" }}>{date} · {post.readingTime}</span>
                </div>
              </Rise>
              <MaskHeading text={post.title} tag="h1" className="h1" style={{ fontSize: "clamp(30px,3.6vw,50px)", lineHeight: 1.14 }} />
            </div>
          </div>
        </header>

        <div style={{ padding: "56px 0 90px" }}>
          <div className="wrap" style={{ maxWidth: 720 }}>
            {post.body.map((b, i) => {
              if (b.t === "h2") return <h2 key={i} className="post-h2">{b.v}</h2>
              if (b.t === "h3") return <h3 key={i} className="post-h3">{b.v}</h3>
              if (b.t === "p")  return <p  key={i} className="post-p">{b.v}</p>
              if (b.t === "ul") return <ul key={i} className="post-list">{b.v.map((li, j) => <li key={j}>{li}</li>)}</ul>
              if (b.t === "ol") return <ol key={i} className="post-list post-list-ol">{b.v.map((li, j) => <li key={j}>{li}</li>)}</ol>
              if (b.t === "note") return <aside key={i} className="post-note">{b.v}</aside>
              if (b.t === "quote") return (
                <blockquote key={i} className="post-quote">
                  <p>{b.v}</p>
                  {b.by && <cite>{b.by}</cite>}
                </blockquote>
              )
              return null
            })}

            {/* Author */}
            <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--line)", display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--accent)", color: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 600, flexShrink: 0 }}>
                SK
              </div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontSize: 15.5, fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>Sanwal Khan</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "var(--body)" }}>
                  Managing Director at DevelopersTech. Our team builds Flutter applications,
                  dispatch systems and guard monitoring platforms that run in daily commercial use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="section" style={{ background: "var(--ink)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -180, right: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(111,160,188,.15),transparent 70%)" }} />
          <div className="wrap" style={{ position: "relative" }}>
            <div style={{ maxWidth: 620 }}>
              <Rise><div className="eyebrow eyebrow-dark">Working on something similar</div></Rise>
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
                  <Link href="/guard-monitoring-software" className="btn btn-ghost mag" style={{ color: "var(--paper)", borderColor: "rgba(251,250,248,.3)" }}>
                    Guard monitoring software <span className="arrow">→</span>
                  </Link>
                </div>
              </Rise>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
