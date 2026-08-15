import Link from "next/link"

export default function NotFound() {
  return (
    <main style={{ minHeight: "70vh", display: "flex", alignItems: "center", paddingTop: 74 }}>
      <div className="wrap" style={{ maxWidth: 640 }}>
        <div className="eyebrow">404</div>
        <h1 className="h2" style={{ marginBottom: 20 }}>
          We could not find that page.
        </h1>
        <p className="lede" style={{ marginBottom: 32 }}>
          It may have moved, or the link might be out of date. Here is where most
          people are heading.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-solid">Homepage <span className="arrow">→</span></Link>
          <Link href="/portfolio" className="btn btn-ghost">Our work <span className="arrow">→</span></Link>
          <Link href="/contact" className="btn btn-ghost">Contact <span className="arrow">→</span></Link>
        </div>
      </div>
    </main>
  )
}
