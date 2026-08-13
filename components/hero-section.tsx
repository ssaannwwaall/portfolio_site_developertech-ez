"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20book%20a%20free%20consultation."
const LINE1 = ["We", "build", "the", "software"]
const LINE2 = ["businesses", "run", "on."]

export function HeroSection() {
  const inner = useRef<HTMLDivElement>(null)
  const [go, setGo] = useState(false)

  useEffect(() => { const t = setTimeout(() => setGo(true), 120); return () => clearTimeout(t) }, [])

  /* Pinned: scale + fade as the next section slides over */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    const tick = () => {
      const el = inner.current
      if (el) {
        const p = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.85), 0), 1)
        el.style.transform = `scale(${1 - p * 0.07}) translateY(${-p * 40}px)`
        el.style.opacity = String(1 - p * 1.25)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const word = (w: string, i: number, italic?: boolean) => (
    <span key={i} className="mask-word">
      <span className={italic ? "italic-accent" : undefined}
        style={{ transform: go ? "translateY(0)" : "translateY(110%)", transitionDelay: `${0.15 + i * 0.07}s` }}>
        {w}
      </span>{"\u00A0"}
    </span>
  )

  return (
    <section style={{ position: "sticky", top: 0, height: "100vh", minHeight: 640, background: "var(--paper)", zIndex: 0, overflow: "hidden" }}>
      <div ref={inner} style={{ height: "100%", display: "flex", alignItems: "center", willChange: "transform,opacity" }}>
        <div className="wrap" style={{ width: "100%" }}>
          <div className="hero-grid">
            <div>
              <div style={{ overflow: "hidden", marginBottom: 30 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 16px", borderRadius: 100,
                  background: "rgba(74,122,150,.08)", border: "1px solid rgba(74,122,150,.18)",
                  transform: go ? "translateY(0)" : "translateY(120%)",
                  transition: "transform .9s cubic-bezier(.16,1,.3,1)",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2FA560" }} />
                  <span style={{ fontSize: 12.5, color: "var(--accent)", fontWeight: 500 }}>Taking on new work for Q3</span>
                </div>
              </div>

              <h1 className="h1" style={{ marginBottom: 26, color: "var(--ink)" }}>
                {LINE1.map((w, i) => word(w, i))}
                <br />
                {LINE2.map((w, i) => word(w, i + LINE1.length, true))}
              </h1>

              <p className="lede" style={{
                maxWidth: 460, marginBottom: 36,
                opacity: go ? 1 : 0, transform: go ? "translateY(0)" : "translateY(20px)",
                transition: "opacity .9s cubic-bezier(.16,1,.3,1) .62s, transform .9s cubic-bezier(.16,1,.3,1) .62s",
              }}>
                A Lahore based engineering studio shipping Flutter apps, AI platforms and
                enterprise systems for clients in the UK, UAE, Europe and the US.
              </p>

              <div style={{
                display: "flex", gap: 14, flexWrap: "wrap",
                opacity: go ? 1 : 0, transform: go ? "translateY(0)" : "translateY(20px)",
                transition: "opacity .9s cubic-bezier(.16,1,.3,1) .74s, transform .9s cubic-bezier(.16,1,.3,1) .74s",
              }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-solid mag">
                  Book a free consultation <span className="arrow">→</span>
                </a>
                <Link href="/portfolio" className="btn btn-ghost mag">
                  See our work <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-visual" style={{
              opacity: go ? 1 : 0, transform: go ? "translateY(0)" : "translateY(36px)",
              transition: "opacity 1.1s cubic-bezier(.16,1,.3,1) .3s, transform 1.1s cubic-bezier(.16,1,.3,1) .3s",
            }}>
              <div data-view className="media" style={{ position: "absolute", inset: 0, borderRadius: 3 }}>
                <Image src="/softpatrol-dashboard.webp" alt="Softpatrol dashboard" fill sizes="(max-width:900px) 100vw, 46vw" style={{ objectFit: "cover" }} priority />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(14,27,38,.05),rgba(14,27,38,.42))" }} />
              </div>

              <div className="float-1 hero-card" style={{ left: -32, top: 70 }}>
                <div style={{ fontSize: 30, fontWeight: 500, color: "var(--ink)", letterSpacing: "-.03em", lineHeight: 1 }}>5<span style={{ color: "var(--accent)" }}>+</span></div>
                <div style={{ fontSize: 12, color: "var(--body)", marginTop: 5 }}>years engineering</div>
              </div>
              <div className="float-2 hero-card" style={{ right: -26, bottom: 96 }}>
                <div style={{ fontSize: 30, fontWeight: 500, color: "var(--ink)", letterSpacing: "-.03em", lineHeight: 1 }}>100<span style={{ color: "var(--accent)" }}>+</span></div>
                <div style={{ fontSize: 12, color: "var(--body)", marginTop: 5 }}>products shipped</div>
              </div>
              <div className="float-1 hero-card" style={{ left: 26, bottom: -20, background: "var(--ink)", animationDelay: ".6s" }}>
                <div style={{ fontSize: 11, color: "var(--accent-lt)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 }}>Currently</div>
                <div style={{ fontSize: 13.5, color: "var(--paper)" }}>Building for UK and UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 70px; align-items: center; }
        .hero-visual { position: relative; height: 520px; }
        .hero-card {
          position: absolute; background: var(--paper); padding: 18px 22px;
          box-shadow: 0 20px 60px rgba(14,27,38,.14); border: 1px solid var(--line);
        }
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-visual { height: 340px; }
          .hero-card { display: none; }
        }
      `}</style>
    </section>
  )
}
