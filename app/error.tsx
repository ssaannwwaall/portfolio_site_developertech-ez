"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <main style={{ minHeight: "70vh", display: "flex", alignItems: "center", paddingTop: 74 }}>
      <div className="wrap" style={{ maxWidth: 640 }}>
        <div className="eyebrow">Something went wrong</div>
        <h1 className="h2" style={{ marginBottom: 20 }}>
          This page ran into a problem.
        </h1>
        <p className="lede" style={{ marginBottom: 32 }}>
          Sorry about that. Try reloading, or head back to the homepage and we will
          get you where you were going.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button onClick={reset} className="btn btn-solid">
            Try again <span className="arrow">→</span>
          </button>
          <Link href="/" className="btn btn-ghost">
            Back to homepage <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
