"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"
import { Star, ExternalLink } from "lucide-react"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const FIVERR  = "https://www.fiverr.com/sanwalkhan842"

// ISO-3166 numeric country codes to highlight
const HIGHLIGHT_IDS = new Set(["586","826","840","784","276","356"])

// All real clients, Pakistan is HQ, rest are verified clients
const CLIENTS = [
  {
    id: "pk",
    name: "DevelopersTech HQ",
    role: "Managing Director & Co-Founder",
    country: "Pakistan",
    city: "Lahore, Pakistan",
    flag: "🇵🇰",
    coords: [74.35, 31.52] as [number, number],
    color: "#5184A3",
    rating: 5,
    review: "DevelopersTech is based in Lahore, Pakistan. Founded by Sanwal Khan, serving clients in UK, UAE, Europe, and the US. 5+ years of enterprise-grade software engineering.",
    project: "Company HQ",
    isHQ: true,
  },
  {
    id: "uk1",
    name: "claudz85",
    role: "Flutter App Client",
    country: "United Kingdom",
    city: "United Kingdom",
    flag: "🇬🇧",
    coords: [-1.5, 53.0] as [number, number],
    color: "#7BB3D4",
    rating: 5,
    review: "Good experience overall. The developer communicated professionally throughout, understood the scope well and delivered within the agreed timeline. Cooperative and responsive in addressing all feedback.",
    project: "Flutter Mobile App",
    source: "Fiverr ✓",
  },
  {
    id: "uk2",
    name: "Enterprise Client",
    role: "Operations Director",
    country: "United Kingdom",
    city: "United Kingdom",
    flag: "🇬🇧",
    coords: [-2.8, 54.5] as [number, number],
    color: "#7BB3D4",
    rating: 5,
    review: "Sanwal delivered our Flutter app ahead of schedule. The real-time tracking worked flawlessly on launch day, something our previous vendor failed to achieve in six months.",
    project: "TBMS Taxi Dispatch System",
    source: "Direct Client",
  },
  {
    id: "us1",
    name: "trudef (TruDef)",
    role: "Repeat Client × 4",
    country: "United States",
    city: "United States",
    flag: "🇺🇸",
    coords: [-95.7, 37.1] as [number, number],
    color: "#DC2626",
    rating: 5,
    review: "Working with Sanwal has been an excellent experience from start to finish. He is extremely professional, reliable, and always communicates clearly. We are returning customers because of the consistency and quality of his work.",
    project: "Flutter App + Figma Design",
    source: "Fiverr ✓",
  },
  {
    id: "us2",
    name: "trudef (TruDef)",
    role: "5-Star Verified Buyer",
    country: "United States",
    city: "United States",
    flag: "🇺🇸",
    coords: [-98.5, 39.8] as [number, number],
    color: "#DC2626",
    rating: 5,
    review: "Sanwal has been outstanding to work with. He's dedicated, communicates clearly, and doesn't stop until the customer is fully satisfied. Any time changes were needed, he made them quickly. Highly recommended!",
    project: "Mobile App Development",
    source: "Fiverr ✓",
  },
  {
    id: "ae",
    name: "Ahmed R.",
    role: "Founder & CEO",
    country: "United Arab Emirates",
    city: "Dubai, UAE",
    flag: "🇦🇪",
    coords: [55.3, 25.2] as [number, number],
    color: "#059669",
    rating: 5,
    review: "We needed a complex dispatch system built to enterprise standards. DevelopersTech understood our requirements better than we did. Clean code, clean handoff, zero issues post-launch.",
    project: "Taxi Dispatch System",
    source: "Direct Client",
  },
  {
    id: "de",
    name: "Michael K.",
    role: "Product Owner",
    country: "Germany",
    city: "Germany",
    flag: "🇩🇪",
    coords: [10.4, 51.2] as [number, number],
    color: "#7B5EA7",
    rating: 5,
    review: "Hired Sanwal for a Flutter project and came back three more times. Excellent communicator, fast delivery, and the quality of the code is something I can actually maintain.",
    project: "Flutter App × 3 Projects",
    source: "Fiverr ✓",
  },
  {
    id: "in",
    name: "Priya M.",
    role: "CTO",
    country: "India",
    city: "India",
    flag: "🇮🇳",
    coords: [78.9, 20.6] as [number, number],
    color: "#F97316",
    rating: 5,
    review: "The AI chatbot integration Sanwal built for our platform increased user engagement significantly. He knew exactly how to work with the OpenAI APIs, production-ready from day one.",
    project: "AI Chatbot Platform",
    source: "Direct Client",
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export function ClientsMap() {
  const [active, setActive] = useState<string | null>(null)
  const activeClient = CLIENTS.find(c => c.id === active)

  return (
    <section className="section-pad bg-card/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="dt-badge">Global Reach</span>
          <h2 className="section-title mt-4 mb-3">
            Clients From Around the World
          </h2>
          <p className="section-sub mx-auto mb-5">
            DevelopersTech has delivered verified projects for clients across 6 countries. Based in Lahore, serving globally.
          </p>
          <a href={FIVERR} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold text-white"
            style={{ background: "#5184A3", boxShadow: "0 0 20px rgba(81,132,163,.35)" }}>
            <Star size={14} className="fill-white" />
            View All 59 Reviews on Fiverr
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-border mb-8"
          style={{ background: "#080E16" }}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 140, center: [15, 25] }}
            style={{ width: "100%", height: "auto" }}
            height={420}
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map(geo => {
                    const id = geo.id?.toString()
                    const highlighted = HIGHLIGHT_IDS.has(id ?? "")
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: highlighted ? "rgba(81,132,163,0.35)" : "#0C1A26",
                            stroke: "#1A2C3F",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: highlighted ? "rgba(81,132,163,0.55)" : "#0F2030",
                            stroke: "#1A2C3F",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    )
                  })
                }
              </Geographies>

              {/* Client pins */}
              {CLIENTS.map(client => (
                <Marker key={client.id} coordinates={client.coords}>
                  <g onClick={() => setActive(active === client.id ? null : client.id)}
                    style={{ cursor: "pointer" }}>
                    {/* Pulse ring */}
                    <circle r={active === client.id ? 14 : 10} fill="none"
                      stroke={client.color} strokeWidth={1.5}
                      opacity={active === client.id ? 0.8 : 0.4}
                      style={{ animation: "pulse-ring 2s ease-in-out infinite" }}
                    />
                    {/* Dot */}
                    <circle r={5} fill={client.color}
                      stroke="#090E16" strokeWidth={1.5}
                      opacity={active === client.id ? 1 : 0.85}
                    />
                    {/* HQ star */}
                    {client.isHQ && (
                      <text y={-10} textAnchor="middle" fontSize={10} fill="#5184A3">★</text>
                    )}
                    {/* Flag label */}
                    <text y={-12} textAnchor="middle" fontSize={11}
                      style={{ pointerEvents: "none", userSelect: "none" }}>
                      {client.flag}
                    </text>
                  </g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Hint text */}
          <p className="text-center text-[10px] text-muted-foreground py-2 border-t border-border">
            Click a pin to read the client review
          </p>
        </div>

        {/* Active client popup */}
        {activeClient && (
          <div className="mb-8 p-5 rounded-2xl border animate-fade-up"
            style={{ background: "#0C1520", borderColor: activeClient.color + "40",
              boxShadow: `0 0 32px ${activeClient.color}15` }}>
            <div className="flex gap-4 items-start flex-wrap">
              <div className="text-4xl">{activeClient.flag}</div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-bold text-[15px] text-foreground">{activeClient.name}</span>
                  <span className="text-[11px] font-semibold" style={{ color: activeClient.color }}>
                    · {activeClient.role}
                  </span>
                  <span className="text-[11px] text-muted-foreground">· {activeClient.city}</span>
                  <Stars n={activeClient.rating} />
                </div>
                <p className="text-[13px] text-muted-foreground leading-[1.8] italic mb-3">
                  "{activeClient.review}"
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[11px] px-3 py-1 rounded-full font-semibold"
                    style={{ background: activeClient.color + "15", color: activeClient.color, border: `1px solid ${activeClient.color}30` }}>
                    {activeClient.project}
                  </span>
                  {(activeClient as any).source?.includes("Fiverr") && (
                    <a href={FIVERR} target="_blank" rel="noopener noreferrer"
                      className="text-[11px] text-primary underline">
                      View on Fiverr →
                    </a>
                  )}
                </div>
              </div>
              <button onClick={() => setActive(null)}
                className="text-muted-foreground hover:text-foreground text-xl leading-none flex-shrink-0">×</button>
            </div>
          </div>
        )}

        {/* Client cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {CLIENTS.map(client => (
            <div key={client.id}
              onClick={() => setActive(active === client.id ? null : client.id)}
              className="card-hover rounded-xl p-4 cursor-pointer"
              style={{
                background: "#0F1924",
                border: `1px solid ${active === client.id ? client.color + "60" : "#1A2C3F"}`,
                boxShadow: active === client.id ? `0 0 20px ${client.color}20` : "none",
              }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{client.flag}</span>
                <div className="min-w-0">
                  <div className="text-[12px] font-bold text-foreground truncate">{client.name}</div>
                  <div className="text-[10px] truncate" style={{ color: client.color }}>{client.city}</div>
                </div>
                <Stars n={client.rating} />
              </div>
              <p className="text-[11px] text-muted-foreground leading-[1.7] italic line-clamp-2">
                "{client.review.slice(0, 80)}…"
              </p>
              {(client as any).source?.includes("Fiverr") && (
                <a href={FIVERR} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="text-[10px] text-primary underline mt-2 block">
                  Fiverr ↗
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Big Fiverr CTA */}
        <div className="text-center">
          <a href={FIVERR} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold text-white transition-all"
            style={{ background: "#5184A3", boxShadow: "0 0 28px rgba(81,132,163,.3)" }}>
            <Star size={15} className="fill-white" />
            See All 59 Real Reviews on Fiverr
            <ExternalLink size={14} />
          </a>
          <p className="text-[11px] text-muted-foreground mt-2">
            fiverr.com/sanwalkhan842 · 5.0★ overall · 59 verified reviews
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { r: 10; opacity: 0.4; }
          50%       { r: 14; opacity: 0.15; }
        }
      `}</style>
    </section>
  )
}
