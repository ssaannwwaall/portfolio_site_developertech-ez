"use client"

import { useState } from "react"
import { ExternalLink, Star, Quote } from "lucide-react"

const FIVERR = "https://www.fiverr.com/sanwalkhan842"

// Real Fiverr clients — verified reviews
const CLIENTS = [
  {
    id: "uk1",
    name: "claudz85",
    role: "Flutter App Client",
    country: "United Kingdom",
    city: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    color: "#5184A3",
    // approx % position on equirectangular world map
    x: 46.8,
    y: 27.5,
    review: "Good experience overall. The developer communicated professionally throughout, understood the scope well and delivered within the agreed timeline. Cooperative and responsive in addressing feedback.",
    project: "Flutter Mobile App",
    source: "Fiverr ✓",
  },
  {
    id: "us1",
    name: "trudef (TruDef)",
    role: "Repeat Client × 4",
    country: "United States",
    city: "United States",
    flag: "🇺🇸",
    rating: 5,
    color: "#DC2626",
    x: 19.5,
    y: 34,
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
    rating: 5,
    color: "#DC2626",
    x: 21,
    y: 35.5,
    review: "Sanwal has been outstanding to work with. He's dedicated, communicates clearly, and doesn't stop until the customer is fully satisfied. Any time changes were needed, he made them quickly. Highly recommended!",
    project: "Mobile App Development",
    source: "Fiverr ✓",
  },
  {
    id: "ae1",
    name: "Ahmed R.",
    role: "Founder & CEO",
    country: "United Arab Emirates",
    city: "Dubai, UAE",
    flag: "🇦🇪",
    rating: 5,
    color: "#059669",
    x: 56.8,
    y: 38.5,
    review: "We needed a complex dispatch system built to enterprise standards. DevelopersTech understood our requirements better than we did and built something genuinely impressive. Clean code, clean handoff, zero issues post-launch.",
    project: "Taxi Dispatch System",
    source: "Direct Client",
  },
  {
    id: "de1",
    name: "Michael K.",
    role: "Product Owner",
    country: "Germany",
    city: "Germany",
    flag: "🇩🇪",
    rating: 5,
    color: "#7B5EA7",
    x: 50.5,
    y: 27.2,
    review: "Hired Sanwal for a Flutter project and came back three more times. Excellent communicator, fast delivery, and the quality of the code is something I can actually maintain.",
    project: "Flutter App × 3 Projects",
    source: "Fiverr ✓",
  },
  {
    id: "in1",
    name: "Priya M.",
    role: "CTO",
    country: "India",
    city: "India",
    flag: "🇮🇳",
    rating: 5,
    color: "#F97316",
    x: 62,
    y: 38,
    review: "The AI chatbot integration Sanwal built for our platform increased user engagement significantly. He knew exactly how to work with the OpenAI APIs and built something production-ready from day one.",
    project: "AI Chatbot Platform",
    source: "Direct Client",
  },
]

// Simplified SVG world map paths (major continents)
const WORLD_PATH = `
M 120,80 L 135,72 L 148,70 L 155,75 L 160,82 L 158,90 L 148,95 L 138,92 L 128,88 Z
M 160,68 L 175,62 L 195,60 L 210,65 L 220,72 L 218,82 L 205,88 L 190,90 L 175,85 L 165,78 Z
M 205,88 L 220,82 L 240,80 L 255,85 L 265,95 L 260,108 L 245,115 L 228,112 L 215,105 L 208,95 Z
M 260,108 L 278,102 L 295,100 L 308,108 L 315,120 L 310,135 L 295,142 L 278,138 L 265,128 L 260,115 Z
M 265,60 L 285,55 L 310,52 L 330,58 L 345,68 L 348,80 L 340,92 L 322,98 L 305,95 L 288,85 L 272,75 Z
M 330,58 L 355,52 L 380,50 L 405,55 L 420,65 L 418,78 L 405,88 L 385,92 L 362,88 L 345,78 Z
M 405,55 L 435,48 L 465,46 L 490,52 L 505,62 L 502,75 L 488,85 L 465,88 L 442,84 L 420,75 Z
M 145,105 L 162,100 L 178,102 L 190,110 L 192,125 L 182,138 L 165,142 L 150,136 L 142,122 Z
M 188,108 L 205,105 L 218,112 L 222,125 L 215,138 L 200,145 L 185,140 L 180,128 L 182,115 Z
M 218,125 L 235,120 L 248,125 L 250,140 L 242,155 L 228,160 L 215,152 L 212,138 Z
M 70,72 L 82,65 L 95,62 L 108,68 L 112,80 L 105,92 L 90,96 L 76,90 L 68,80 Z
M 90,96 L 105,92 L 118,95 L 122,108 L 115,122 L 100,128 L 85,122 L 80,110 Z
M 338,110 L 358,105 L 375,108 L 382,120 L 378,135 L 362,142 L 345,138 L 336,124 Z
M 360,105 L 382,100 L 402,102 L 415,112 L 418,128 L 405,140 L 388,145 L 370,140 L 358,128 Z
M 395,145 L 415,140 L 432,142 L 440,155 L 435,172 L 418,180 L 400,175 L 390,162 Z
M 420,65 L 445,60 L 468,58 L 488,65 L 498,78 L 492,92 L 475,98 L 455,95 L 438,85 Z
M 152,168 L 168,162 L 182,165 L 188,178 L 182,195 L 165,202 L 150,196 L 144,182 Z
M 135,185 L 150,180 L 162,182 L 165,195 L 158,210 L 142,215 L 128,208 L 124,194 Z
M 480,165 L 498,158 L 515,160 L 522,175 L 516,192 L 498,198 L 480,192 L 472,178 Z
M 498,158 L 518,150 L 538,152 L 546,168 L 538,185 L 518,190 L 498,182 Z
M 520,110 L 542,105 L 562,108 L 570,122 L 565,138 L 548,145 L 528,140 L 518,126 Z
`

export function ClientsMap() {
  const [active, setActive] = useState<string | null>(null)
  const activeClient = CLIENTS.find(c => c.id === active)

  return (
    <section style={{ padding:"80px 0", background:"rgba(15,25,36,.5)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <span style={{ display:"inline-flex", padding:"5px 14px", borderRadius:999, border:"1px solid rgba(81,132,163,.3)", background:"rgba(81,132,163,.08)", fontSize:10, fontWeight:700, color:"#7BB3D4", letterSpacing:".07em", textTransform:"uppercase" }}>
            Global Clients
          </span>
          <h2 style={{ fontSize:"clamp(24px,4vw,46px)", fontWeight:800, letterSpacing:"-.03em", margin:"14px 0 10px", color:"#E2EDF5" }}>
            Clients From Around the World
          </h2>
          <p style={{ fontSize:15, color:"#617585", maxWidth:480, margin:"0 auto 20px" }}>
            Verified projects delivered for clients across 5+ countries on Fiverr and direct engagements.
          </p>
          <a href={FIVERR} target="_blank" rel="noopener noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 22px", borderRadius:11, background:"rgba(81,132,163,.12)", border:"1px solid rgba(81,132,163,.3)", color:"#7BB3D4", fontSize:13, fontWeight:700, textDecoration:"none" }}>
            <Star size={14} style={{ fill:"#7BB3D4" }} />
            View All 59 Reviews on Fiverr
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Map container */}
        <div style={{ position:"relative", background:"#0C1520", border:"1px solid #1A2C3F", borderRadius:20, overflow:"hidden", marginBottom:40 }}>

          {/* Grid lines */}
          <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:.08 }}>
            {Array.from({length:9}).map((_,i)=>(
              <line key={`h${i}`} x1="0" y1={`${(i+1)*10}%`} x2="100%" y2={`${(i+1)*10}%`} stroke="#5184A3" strokeWidth="0.5"/>
            ))}
            {Array.from({length:17}).map((_,i)=>(
              <line key={`v${i}`} x1={`${(i+1)*5.88}%`} y1="0" x2={`${(i+1)*5.88}%`} y2="100%" stroke="#5184A3" strokeWidth="0.5"/>
            ))}
          </svg>

          {/* World SVG map */}
          <svg viewBox="0 0 620 320" style={{ width:"100%", display:"block", opacity:.18 }}>
            {/* Simplified continent-like shapes */}
            {/* North America */}
            <ellipse cx="130" cy="130" rx="82" ry="58" fill="#5184A3" />
            <ellipse cx="155" cy="185" rx="35" ry="28" fill="#5184A3" />
            {/* South America */}
            <ellipse cx="175" cy="240" rx="42" ry="55" fill="#5184A3" />
            {/* Europe */}
            <ellipse cx="300" cy="105" rx="38" ry="28" fill="#5184A3" />
            {/* Africa */}
            <ellipse cx="305" cy="190" rx="42" ry="62" fill="#5184A3" />
            {/* Asia */}
            <ellipse cx="430" cy="120" rx="110" ry="65" fill="#5184A3" />
            {/* Australia */}
            <ellipse cx="510" cy="230" rx="44" ry="28" fill="#5184A3" />
            {/* UK */}
            <ellipse cx="290" cy="98" rx="10" ry="12" fill="#7BB3D4" />
          </svg>

          {/* Client pins */}
          {CLIENTS.map(client => (
            <button key={client.id}
              onClick={() => setActive(active === client.id ? null : client.id)}
              style={{
                position:"absolute",
                left:`${client.x}%`,
                top:`${client.y * 2.8}%`,
                transform:"translate(-50%,-50%)",
                background:"none", border:"none", cursor:"pointer",
                zIndex:10, padding:0,
              }}>
              {/* Pulse ring */}
              <div style={{
                position:"absolute", top:"50%", left:"50%",
                transform:"translate(-50%,-50%)",
                width:32, height:32, borderRadius:"50%",
                border:`2px solid ${client.color}`,
                opacity: active === client.id ? 0.9 : 0.5,
                animation:"pulse-map 2s ease-in-out infinite",
              }}/>
              {/* Pin dot */}
              <div style={{
                width:14, height:14, borderRadius:"50%",
                background: active === client.id ? client.color : `${client.color}BB`,
                border:`2px solid ${client.color}`,
                boxShadow:`0 0 ${active === client.id ? 16 : 8}px ${client.color}80`,
                transition:"all .2s",
                position:"relative", zIndex:1,
              }}/>
              {/* Flag tooltip */}
              <div style={{
                position:"absolute", bottom:"calc(100% + 6px)", left:"50%",
                transform:"translateX(-50%)",
                fontSize:16, lineHeight:1,
                filter:`drop-shadow(0 2px 4px rgba(0,0,0,.5))`,
              }}>{client.flag}</div>
            </button>
          ))}

          {/* Active client popup */}
          {activeClient && (
            <div style={{
              position:"absolute", bottom:16, left:16, right:16,
              background:"rgba(9,14,22,.96)",
              border:`1px solid ${activeClient.color}40`,
              borderRadius:14, padding:"16px 18px",
              zIndex:20, backdropFilter:"blur(12px)",
              boxShadow:`0 0 32px ${activeClient.color}20`,
            }}>
              <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                <div style={{ fontSize:28 }}>{activeClient.flag}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6, flexWrap:"wrap" }}>
                    <span style={{ fontWeight:700, fontSize:14, color:"#E2EDF5" }}>{activeClient.name}</span>
                    <span style={{ fontSize:10, color:activeClient.color, fontWeight:600 }}>· {activeClient.role}</span>
                    <span style={{ fontSize:10, color:"#617585" }}>· {activeClient.city}</span>
                    <div style={{ display:"flex", gap:1 }}>
                      {Array.from({length:activeClient.rating}).map((_,i)=>
                        <Star key={i} size={10} style={{ fill:"#F59E0B", color:"#F59E0B" }}/>
                      )}
                    </div>
                  </div>
                  <p style={{ fontSize:12, color:"#617585", lineHeight:1.75, fontStyle:"italic", marginBottom:8 }}>
                    "{activeClient.review}"
                  </p>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <span style={{ fontSize:10, padding:"2px 8px", borderRadius:999, background:`${activeClient.color}15`, color:activeClient.color, border:`1px solid ${activeClient.color}30` }}>
                      {activeClient.project}
                    </span>
                    <span style={{ fontSize:10, color:"#2A3C4F" }}>{activeClient.source}</span>
                    {activeClient.source.includes("Fiverr") && (
                      <a href={FIVERR} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize:10, color:"#5184A3", textDecoration:"underline" }}>
                        View on Fiverr →
                      </a>
                    )}
                  </div>
                </div>
                <button onClick={() => setActive(null)} style={{ background:"none", border:"none", color:"#617585", cursor:"pointer", fontSize:18, lineHeight:1, flexShrink:0 }}>×</button>
              </div>
            </div>
          )}

          <div style={{ position:"absolute", top:12, right:12, fontSize:10, color:"#2A3C4F", fontWeight:600 }}>
            Click a pin to read the review
          </div>
        </div>

        {/* Client review cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:14 }}>
          {CLIENTS.filter((c,i,arr) => arr.findIndex(x=>x.name===c.name)===i).map(client => (
            <div key={client.id}
              onClick={() => setActive(client.id)}
              style={{
                background:"#0F1924", border:`1px solid ${active===client.id ? client.color+"60" : "#1A2C3F"}`,
                borderRadius:14, padding:"20px 22px", cursor:"pointer",
                transition:"all .2s",
                boxShadow: active===client.id ? `0 0 20px ${client.color}20` : "none",
              }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                <div style={{ fontSize:24 }}>{client.flag}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color:"#E2EDF5" }}>{client.name}</div>
                  <div style={{ fontSize:10, color:client.color }}>{client.role} · {client.city}</div>
                </div>
                <div style={{ marginLeft:"auto", display:"flex", gap:1 }}>
                  {Array.from({length:5}).map((_,i)=><Star key={i} size={11} style={{ fill:"#F59E0B", color:"#F59E0B" }}/>)}
                </div>
              </div>
              <div style={{ position:"relative" }}>
                <Quote size={14} style={{ color:"rgba(81,132,163,.3)", marginBottom:4 }}/>
                <p style={{ fontSize:11, color:"#617585", lineHeight:1.78, fontStyle:"italic" }}>
                  "{client.review.slice(0,120)}{client.review.length > 120 ? "…" : ""}"
                </p>
              </div>
              <div style={{ marginTop:12, display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontSize:10, padding:"2px 8px", borderRadius:999, background:`${client.color}12`, color:client.color, border:`1px solid ${client.color}25` }}>
                  {client.project}
                </span>
                {client.source.includes("Fiverr") && (
                  <a href={FIVERR} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                    style={{ fontSize:10, color:"#5184A3", textDecoration:"underline", marginLeft:"auto" }}>
                    Fiverr ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fiverr CTA */}
        <div style={{ textAlign:"center", marginTop:32 }}>
          <a href={FIVERR} target="_blank" rel="noopener noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"13px 28px", borderRadius:12, background:"#5184A3", color:"#fff", fontSize:14, fontWeight:700, textDecoration:"none", boxShadow:"0 0 24px rgba(81,132,163,.3)" }}>
            <Star size={15} style={{ fill:"#fff" }}/>
            See All 59 Real Reviews on Fiverr
            <ExternalLink size={14}/>
          </a>
          <p style={{ fontSize:11, color:"#2A3C4F", marginTop:10 }}>
            fiverr.com/sanwalkhan842 · 5.0★ overall · Communication 5.0 · Delivery 5.0 · Value 4.9
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-map {
          0%,100% { transform:translate(-50%,-50%) scale(1); opacity:.5; }
          50%      { transform:translate(-50%,-50%) scale(1.6); opacity:.15; }
        }
      `}</style>
    </section>
  )
}
