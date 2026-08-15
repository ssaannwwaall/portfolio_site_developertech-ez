"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { CLIENTS } from "./work-data"
import { MaskHeading, Rise } from "./mask-heading"
import { MapBoundary } from "./map-boundary"

const FIVERR = "https://www.fiverr.com/sanwalkhan842"

/* Loaded in the browser only. If the mapping library fails, the boundary
   below swaps in a static fallback instead of crashing the page. */
const WorldMap = dynamic(() => import("./world-map"), {
  ssr: false,
  loading: () => <MapSkeleton />,
})

function MapSkeleton() {
  return (
    <div style={{ height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: 12, color: "rgba(251,250,248,.3)", letterSpacing: ".12em", textTransform: "uppercase" }}>
        Loading map
      </span>
    </div>
  )
}

/* Shown if the map cannot render at all. Keeps the section meaningful. */
function MapFallback({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div style={{ padding: "56px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 14 }}>
      {CLIENTS.map(c => (
        <button key={c.id} onClick={() => onSelect(c.id)}
          style={{
            background: "#12212C", border: `1px solid ${c.color}30`, padding: "20px 18px",
            textAlign: "left", cursor: "pointer", fontFamily: "inherit",
          }}>
          <div style={{ fontSize: 11, color: c.color, fontWeight: 700, letterSpacing: ".1em", marginBottom: 8 }}>{c.flag}</div>
          <div style={{ fontSize: 14, color: "#FBFAF8", fontWeight: 500, marginBottom: 3 }}>{c.name}</div>
          <div style={{ fontSize: 12, color: "rgba(251,250,248,.45)" }}>{c.city}</div>
        </button>
      ))}
    </div>
  )
}

export function ClientsMap() {
  const [active, setActive] = useState<string | null>(null)
  const [seen, setSeen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)
  const client = CLIENTS.find(c => c.id === active)
  const hq = CLIENTS.find(c => c.hq)!

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } },
      { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={wrap} style={{ background: "var(--ink)", padding: "110px 0", overflow: "hidden" }}>
      <div className="wrap">

        {/* Header */}
        <div className="map-head">
          <div>
            <Rise><div className="eyebrow eyebrow-dark">Where we work</div></Rise>
            <MaskHeading text="Clients across four continents." style={{ color: "var(--paper)" }} />
          </div>
          <Rise delay={0.3}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(251,250,248,.62)", marginBottom: 18 }}>
              Verified projects delivered across the United Kingdom, United States,
              United Arab Emirates, Germany and India.
            </p>
            <a href={FIVERR} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13.5,
              color: "var(--accent-lt)", textDecoration: "none",
              borderBottom: "1px solid rgba(111,160,188,.3)", paddingBottom: 3,
            }}>
              <span style={{ color: "var(--gold)" }}>★★★★★</span> 5.0 from 59 reviews on Fiverr ↗
            </a>
          </Rise>
        </div>

        {/* Map */}
        <div style={{
          position: "relative", background: "#0A1520", border: "1px solid #1E2E3C",
          marginBottom: 26, overflow: "hidden",
          opacity: seen ? 1 : 0, transform: seen ? "scale(1)" : "scale(.985)",
          transition: "opacity 1.1s cubic-bezier(.16,1,.3,1) .15s, transform 1.1s cubic-bezier(.16,1,.3,1) .15s",
        }}>
          <MapBoundary fallback={<MapFallback onSelect={setActive} />}>
            <WorldMap active={active} setActive={setActive} seen={seen} />
          </MapBoundary>

          <div style={{
            position: "absolute", top: 18, right: 22, fontSize: 10.5,
            color: "rgba(251,250,248,.3)", letterSpacing: ".1em", textTransform: "uppercase",
            pointerEvents: "none",
          }}>
            Select a marker
          </div>
        </div>

        {/* Detail */}
        <div style={{
          maxHeight: client ? 340 : 0, opacity: client ? 1 : 0, overflow: "hidden",
          transition: "max-height .7s cubic-bezier(.16,1,.3,1), opacity .5s ease, margin-bottom .5s",
          marginBottom: client ? 26 : 0,
        }}>
          {client && (
            <div style={{ background: "#12212C", border: `1px solid ${client.color}30`, padding: "30px 34px", display: "flex", gap: 26 }}>
              <div style={{
                width: 52, height: 52, flexShrink: 0, borderRadius: "50%",
                background: `${client.color}18`, border: `1px solid ${client.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: client.color, letterSpacing: ".05em",
              }}>{client.flag}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                  <span style={{ fontSize: 17, fontWeight: 500, color: "var(--paper)" }}>{client.name}</span>
                  <span style={{ fontSize: 13, color: client.color }}>{client.role}</span>
                  <span style={{ fontSize: 13, color: "rgba(251,250,248,.4)" }}>{client.city}</span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(251,250,248,.72)", marginBottom: 16 }}>{client.review}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: client.color, padding: "5px 13px", background: `${client.color}12`, border: `1px solid ${client.color}28` }}>
                    {client.project}
                  </span>
                  {client.fiverr && (
                    <a href={FIVERR} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, color: "var(--accent-lt)", textDecoration: "none" }}>
                      Verified on Fiverr ↗
                    </a>
                  )}
                </div>
              </div>
              <button onClick={() => setActive(null)} aria-label="Close" style={{
                background: "none", border: "none", color: "rgba(251,250,248,.35)",
                fontSize: 22, cursor: "pointer", lineHeight: 1, alignSelf: "flex-start",
              }}>×</button>
            </div>
          )}
        </div>

        {/* Client strip */}
        <div className="client-strip">
          {CLIENTS.map((c, i) => (
            <button key={c.id} onClick={() => setActive(active === c.id ? null : c.id)}
              style={{
                background: active === c.id ? "#16252F" : "var(--ink)",
                border: "none", borderTop: `2px solid ${active === c.id ? c.color : "transparent"}`,
                padding: "20px 22px", textAlign: "left", cursor: "pointer", fontFamily: "inherit",
                opacity: seen ? 1 : 0, transform: seen ? "translateY(0)" : "translateY(16px)",
                transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1), background .3s, border-color .3s",
                transitionDelay: `${1.2 + i * 0.05}s`,
              }}>
              <div style={{ fontSize: 10.5, color: c.color, letterSpacing: ".1em", marginBottom: 7, fontWeight: 600 }}>{c.flag}</div>
              <div style={{ fontSize: 14, color: "var(--paper)", fontWeight: 500, marginBottom: 3 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "rgba(251,250,248,.45)" }}>{c.city}</div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .map-head { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; margin-bottom: 48px; }
        .client-strip { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: #1E2E3C; }
        @media (max-width: 900px) {
          .map-head { grid-template-columns: 1fr; gap: 26px; }
          .client-strip { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
