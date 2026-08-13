"use client"

import { useState, useEffect, useRef } from "react"
import { CLIENTS } from "./work-data"

const FIVERR = "https://www.fiverr.com/sanwalkhan842"

/* Simplified continent outlines, drawn as smooth blobs on an equirectangular grid */
const LAND = [
  "M 96,64 L 148,50 L 196,54 L 232,72 L 244,98 L 232,124 L 206,140 L 180,150 L 158,142 L 140,120 L 118,102 L 100,84 Z",
  "M 176,158 L 204,150 L 224,164 L 232,196 L 224,236 L 204,262 L 184,258 L 172,232 L 168,196 Z",
  "M 268,52 L 310,44 L 344,50 L 358,66 L 348,84 L 322,92 L 292,88 L 272,72 Z",
  "M 286,96 L 322,90 L 344,104 L 350,140 L 340,180 L 318,204 L 296,198 L 284,166 L 280,126 Z",
  "M 356,44 L 430,36 L 496,48 L 528,70 L 536,102 L 512,124 L 468,132 L 416,124 L 376,102 L 358,72 Z",
  "M 452,140 L 486,134 L 500,152 L 494,174 L 468,182 L 448,168 Z",
  "M 486,196 L 528,188 L 552,204 L 548,228 L 516,238 L 490,226 Z",
]

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } },
      { threshold, rootMargin: "0px 0px -50px 0px" })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, seen }
}

export function ClientsMap() {
  const [active, setActive] = useState<string | null>(null)
  const { ref, seen } = useReveal()
  const client = CLIENTS.find(c => c.id === active)

  return (
    <section ref={ref} style={{ background: "#0E1B26", padding: "110px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 52 }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase",
              color: "#6FA0BC", marginBottom: 20, display: "flex", alignItems: "center", gap: 12,
              opacity: seen ? 1 : 0, transition: "opacity .8s ease",
            }}>
              <span style={{ width: 26, height: 1, background: "currentColor", opacity: .5 }} />
              Where we work
            </div>
            <h2 style={{ fontSize: "clamp(30px,3.2vw,42px)", lineHeight: 1.14, letterSpacing: "-.035em", fontWeight: 500, color: "#FBFAF8", margin: 0 }}>
              {"Clients across four continents.".split(" ").map((w, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: ".08em", marginBottom: "-.08em" }}>
                  <span style={{
                    display: "inline-block",
                    transform: seen ? "translateY(0)" : "translateY(110%)",
                    transition: `transform .95s cubic-bezier(.16,1,.3,1) ${i * .06}s`,
                  }}>{w}</span>{"\u00A0"}
                </span>
              ))}
            </h2>
          </div>
          <div style={{
            opacity: seen ? 1 : 0, transform: seen ? "translateY(0)" : "translateY(20px)",
            transition: "all .9s cubic-bezier(.16,1,.3,1) .35s",
          }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(251,250,248,.62)", marginBottom: 18 }}>
              Verified projects delivered across the UK, US, UAE, Germany and India, run from our studio in Lahore.
            </p>
            <a href={FIVERR} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13.5,
              color: "#6FA0BC", textDecoration: "none", borderBottom: "1px solid rgba(111,160,188,.3)", paddingBottom: 3,
            }}>
              <span style={{ color: "#B8935F" }}>★★★★★</span> 5.0 from 59 reviews on Fiverr ↗
            </a>
          </div>
        </div>

        {/* Map */}
        <div style={{
          position: "relative", background: "#0A1520", border: "1px solid #1E2E3C",
          borderRadius: 3, overflow: "hidden", marginBottom: 28,
          opacity: seen ? 1 : 0, transform: seen ? "scale(1)" : "scale(.98)",
          transition: "all 1.1s cubic-bezier(.16,1,.3,1) .2s",
        }}>
          <svg viewBox="0 0 620 300" style={{ width: "100%", display: "block" }}>
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4A7A96" strokeWidth=".3" opacity=".14" />
              </pattern>
            </defs>
            <rect width="620" height="300" fill="url(#grid)" />
            {LAND.map((d, i) => (
              <path key={i} d={d} fill="#16252F" stroke="#22384A" strokeWidth=".8"
                style={{
                  opacity: seen ? 1 : 0,
                  transition: `opacity 1s ease ${.3 + i * .07}s`,
                }} />
            ))}
            {/* Connection arcs from Lahore to each client */}
            {CLIENTS.filter(c => !c.hq).map((c, i) => {
              const hq = CLIENTS.find(x => x.hq)!
              const x1 = hq.x * 6.2, y1 = hq.y * 3, x2 = c.x * 6.2, y2 = c.y * 3
              const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.24
              return (
                <path key={c.id} d={`M ${x1},${y1} Q ${mx},${my} ${x2},${y2}`}
                  fill="none" stroke={active === c.id ? c.color : "#4A7A96"}
                  strokeWidth={active === c.id ? 1.4 : .7}
                  opacity={active === c.id ? .85 : .3}
                  strokeDasharray="220"
                  style={{
                    strokeDashoffset: seen ? 0 : 220,
                    transition: `stroke-dashoffset 1.6s cubic-bezier(.16,1,.3,1) ${.7 + i * .12}s, opacity .4s, stroke-width .4s`,
                  }} />
              )
            })}
            {/* Pins */}
            {CLIENTS.map((c, i) => (
              <g key={c.id} onClick={() => setActive(active === c.id ? null : c.id)}
                style={{ cursor: "pointer", opacity: seen ? 1 : 0, transition: `opacity .5s ease ${1.1 + i * .09}s` }}>
                <circle cx={c.x * 6.2} cy={c.y * 3} r={active === c.id ? 15 : 11}
                  fill="none" stroke={c.color} strokeWidth="1"
                  opacity={active === c.id ? .7 : .28}
                  style={{ transition: "all .4s cubic-bezier(.16,1,.3,1)" }} />
                <circle cx={c.x * 6.2} cy={c.y * 3} r={c.hq ? 6 : 4.5}
                  fill={c.color} stroke="#0A1520" strokeWidth="1.5" />
                {c.hq && <circle cx={c.x * 6.2} cy={c.y * 3} r="11" fill="none" stroke={c.color} strokeWidth="1">
                  <animate attributeName="r" values="7;17;7" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".7;0;.7" dur="3s" repeatCount="indefinite" />
                </circle>}
                <text x={c.x * 6.2} y={c.y * 3 - 14} textAnchor="middle"
                  fontSize="8.5" fill={active === c.id ? "#FBFAF8" : "rgba(251,250,248,.5)"}
                  fontWeight="600" letterSpacing=".08em" style={{ transition: "fill .3s", pointerEvents: "none" }}>
                  {c.flag}
                </text>
              </g>
            ))}
          </svg>

          <div style={{
            position: "absolute", top: 18, right: 22, fontSize: 10.5,
            color: "rgba(251,250,248,.3)", letterSpacing: ".1em", textTransform: "uppercase",
          }}>
            Select a marker
          </div>
        </div>

        {/* Detail panel */}
        <div style={{
          minHeight: client ? 0 : 0,
          maxHeight: client ? 320 : 0,
          opacity: client ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .7s cubic-bezier(.16,1,.3,1), opacity .5s ease",
          marginBottom: client ? 28 : 0,
        }}>
          {client && (
            <div style={{ background: "#12212C", border: `1px solid ${client.color}30`, padding: "30px 34px", display: "flex", gap: 28 }}>
              <div style={{
                width: 52, height: 52, flexShrink: 0, borderRadius: "50%",
                background: `${client.color}18`, border: `1px solid ${client.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: client.color, letterSpacing: ".05em",
              }}>{client.flag}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                  <span style={{ fontSize: 17, fontWeight: 500, color: "#FBFAF8" }}>{client.name}</span>
                  <span style={{ fontSize: 13, color: client.color }}>{client.role}</span>
                  <span style={{ fontSize: 13, color: "rgba(251,250,248,.4)" }}>{client.city}</span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(251,250,248,.72)", marginBottom: 16 }}>
                  {client.review}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: client.color, padding: "5px 13px", background: `${client.color}12`, border: `1px solid ${client.color}28` }}>
                    {client.project}
                  </span>
                  {client.fiverr && (
                    <a href={FIVERR} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, color: "#6FA0BC", textDecoration: "none" }}>
                      Verified on Fiverr ↗
                    </a>
                  )}
                </div>
              </div>
              <button onClick={() => setActive(null)} style={{
                background: "none", border: "none", color: "rgba(251,250,248,.35)",
                fontSize: 22, cursor: "pointer", lineHeight: 1, alignSelf: "flex-start",
              }}>×</button>
            </div>
          )}
        </div>

        {/* Client strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "#1E2E3C" }}>
          {CLIENTS.map((c, i) => (
            <button key={c.id} onClick={() => setActive(active === c.id ? null : c.id)}
              style={{
                background: active === c.id ? "#16252F" : "#0E1B26",
                border: "none", padding: "20px 22px", textAlign: "left", cursor: "pointer",
                fontFamily: "inherit", transition: "background .3s",
                opacity: seen ? 1 : 0, transform: seen ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${1.3 + i * .05}s`,
                transitionProperty: "opacity, transform, background",
                transitionDuration: ".8s",
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                borderTop: `2px solid ${active === c.id ? c.color : "transparent"}`,
              }}>
              <div style={{ fontSize: 10.5, color: c.color, letterSpacing: ".1em", marginBottom: 7, fontWeight: 600 }}>{c.flag}</div>
              <div style={{ fontSize: 14, color: "#FBFAF8", fontWeight: 500, marginBottom: 3 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "rgba(251,250,248,.45)" }}>{c.city}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
