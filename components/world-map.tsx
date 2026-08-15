"use client"

import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps"
import { CLIENTS } from "./work-data"

const GEO = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const ACTIVE = new Set(["826", "840", "784", "276", "356", "586"])

/** Just the SVG map. Loaded client side only and wrapped in an error boundary. */
export default function WorldMap({
  active, setActive, seen,
}: {
  active: string | null
  setActive: (id: string | null) => void
  seen: boolean
}) {
  const hq = CLIENTS.find(c => c.hq)!

  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{ scale: 168, center: [12, 12] }}
      width={900} height={420}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <Geographies geography={GEO}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey} geography={geo}
              fill={ACTIVE.has(String(geo.id)) ? "#22384A" : "#16252F"}
              style={{
                default: { stroke: "#22384A", strokeWidth: 0.4, outline: "none" },
                hover:   { fill: ACTIVE.has(String(geo.id)) ? "#274355" : "#1A2C38", stroke: "#2C4759", strokeWidth: 0.4, outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

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
  )
}
