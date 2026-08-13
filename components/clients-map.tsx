"use client"

import { useState, useEffect, useRef } from "react"
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps"
import { CLIENTS } from "./work-data"
import { MaskHeading, Rise } from "./mask-heading"

const GEO = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const FIVERR = "https://www.fiverr.com/sanwalkhan842"

/* ISO numeric codes we tint as "where we work" */
const ACTIVE = new Set(["826", "840", "784", "276", "356", "586"])

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
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ scale: 168, center: [12, 12] }}
            width={900} height={420}
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <Geographies geography={GEO}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const on = ACTIVE.has(String(geo.id))
                  return (
                    <Geography key={geo.rsmKey} geography={geo}
                      style={{
                        default: { fill: on ? "#22384A" : "#16252F", stroke: "#22384A", strokeWidth: 0.4, outline: "none" },
                        hover:   { fill: on ? "#274355" : "#1A2C38", stroke: "#2C4759", strokeWidth: 0.4, outline: "none" },
                        pressed: { outline: "none" },
                      }}
                      fill={on ? "#22384A" : "#16252F"}
                    />
                  )
                })
              }
            </Geographies>

            {/* Arcs from studio to each client */}
            {CLIENTS.filter(c => !c.hq).map((c, i) => (
              <Line key={c.id}
                from={hq.coords} to={c.coords}
                stroke={active === c.id ? c.color : "#4A7A96"}
                strokeWidth={active === c.id ? 1.6 : 0.8}
                strokeLinecap="round"
                opacity={active === c.id ? 0.9 : 0.32}
                style={{
                  strokeDasharray: 400,
                  strokeDashoffset: seen ? 0 : 400,
                  transition: `stroke-dashoffset 1.7s cubic-bezier(.16,1,.3,1) ${0.55 + i * 0.13}s, opacity .4s, stroke-width .4s, stroke .4s`,
                }}
              />
            ))}

            {/* Markers */}
            {CLIENTS.map((c, i) => (
              <Marker key={c.id} coordinates={c.coords}
                onClick={() => setActive(active === c.id ? null : c.id)}
                style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" }, pressed: { cursor: "pointer" } }}>
                <g style={{ opacity: seen ? 1 : 0, transition: `opacity .5s ease ${1 + i * 0.09}s` }}>
                  <circle r={active === c.id ? 13 : 9} fill="none" stroke={c.color} strokeWidth={0.9}
                    opacity={active === c.id ? 0.75 : 0.3}
                    style={{ transition: "all .4s cubic-bezier(.16,1,.3,1)" }} />
                  {c.hq && (
                    <circle r={9} fill="none" stroke={c.color} strokeWidth={1}>
                      <animate attributeName="r" values="6;16;6" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values=".8;0;.8" dur="3s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle r={c.hq ? 5 : 4} fill={c.color} stroke="#0A1520" strokeWidth={1.4} />
                  <text textAnchor="middle" y={-14} fontSize={8.5} fontWeight={600}
                    letterSpacing=".08em" style={{ pointerEvents: "none", transition: "fill .3s" }}
                    fill={active === c.id ? "#FBFAF8" : "rgba(251,250,248,.55)"}>
                    {c.flag}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>

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
