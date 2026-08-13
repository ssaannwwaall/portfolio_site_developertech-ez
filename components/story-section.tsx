"use client"

import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

/* ─── Beat data ────────────────────────────────────────────────── */
const BEATS = [
  {
    n: 1, step: "Step 01", keyword: "I Listen",
    sub: "Every great product starts with understanding. I dig deep into your goals, constraints, and the problem you're really solving, before writing a single line of code.",
    color: "#5184A3", accent: "#7BB3D4", icon: "📥",
  },
  {
    n: 2, step: "Step 02", keyword: "I Plan",
    sub: "Architecture before code. I map the tech stack, data flows, and edge cases so we move fast without surprises. No scope creep. No mid-project pivots.",
    color: "#7B5EA7", accent: "#A07BC8", icon: "🗺️",
  },
  {
    n: 3, step: "Step 03", keyword: "I Build",
    sub: "Clean, documented, production-ready code. Flutter, Next.js, Node.js, the right tool for each layer. QA is built in throughout, not bolted on at the end.",
    color: "#3A9B6E", accent: "#5FBD94", icon: "⚙️",
  },
  {
    n: 4, step: "Step 04", keyword: "I Deliver",
    sub: "On time, on scope, full handoff. Source code, docs, and 30-day post-launch support. You own everything, no lock-in, no surprises on the invoice.",
    color: "#22C55E", accent: "#4ADE80", icon: "🚀",
  },
]

/* ─── Mobile fallback card ─────────────────────────────────────── */
function BeatCard({ beat }: { beat: typeof BEATS[0] }) {
  return (
    <div style={{
      background: "#0F1924", border: `1px solid ${beat.color}30`,
      borderRadius: 16, padding: "28px 24px",
      borderLeft: `4px solid ${beat.color}`,
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: beat.color,
        textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
        {beat.step}
      </div>
      <div style={{ fontSize: 32, marginBottom: 6 }}>{beat.icon}</div>
      <h3 style={{ fontSize: 28, fontWeight: 800, color: "#E2EDF5",
        letterSpacing: "-.03em", marginBottom: 10 }}>
        {beat.keyword}
      </h3>
      <p style={{ fontSize: 14, color: "#617585", lineHeight: 1.8 }}>{beat.sub}</p>
    </div>
  )
}

/* ─── SVG Scene ────────────────────────────────────────────────── */
function DevScene({ activeRef }: { activeRef: React.RefObject<number> }) {

  /* Code lines for each beat's editor state */
  const codeLines = {
    1: [
      { c:"#7BB3D4", t:"// New project request received" },
      { c:"#617585", t:"const brief = await inbox.read()" },
      { c:"#617585", t:"const goals = brief.extract('goals')" },
      { c:"#5FBD94", t:"console.log('Understanding client vision...')" },
      { c:"#617585", t:"// Reading requirements..." },
      { c:"#617585", t:"// Asking the right questions..." },
    ],
    2: [
      { c:"#A07BC8", t:"// Architecture planning" },
      { c:"#7BB3D4", t:"const stack = { mobile: 'Flutter'," },
      { c:"#7BB3D4", t:"  backend: 'Node.js / Spring Boot'," },
      { c:"#7BB3D4", t:"  db: 'PostgreSQL', cloud: 'AWS' }" },
      { c:"#5FBD94", t:"const timeline = estimateDelivery(scope)" },
      { c:"#A07BC8", t:"// Creating roadmap..." },
    ],
    3: [
      { c:"#5FBD94", t:"// Building production-ready code" },
      { c:"#7BB3D4", t:"class AppService extends BaseService {" },
      { c:"#617585", t:"  Future<void> init() async {" },
      { c:"#617585", t:"    await database.connect()" },
      { c:"#617585", t:"    await auth.setup(config)" },
      { c:"#5FBD94", t:"    logger.info('App initialized ✓')" },
    ],
    4: [
      { c:"#4ADE80", t:"// Deployment complete ✓" },
      { c:"#7BB3D4", t:"$ vercel deploy --prod" },
      { c:"#4ADE80", t:"  ✓ Build completed in 12s" },
      { c:"#4ADE80", t:"  ✓ All tests passing (47/47)" },
      { c:"#4ADE80", t:"  ✓ Production URL: live" },
      { c:"#617585", t:"  → Sending handoff to client..." },
    ],
  }

  return (
    <svg viewBox="0 0 580 400" style={{ width: "100%", height: "100%" }}
      role="img" aria-label="Developer journey animation">
      <defs>
        <clipPath id="screen-clip">
          <rect x="30" y="48" width="375" height="215" rx="2" />
        </clipPath>
        <filter id="glow-blue">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        {/* Animated gradient for active beat */}
        <linearGradient id="beat-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5184A3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7BB3D4" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* ── Editor window chrome ── */}
      {/* Outer frame */}
      <rect x="18" y="22" width="402" height="256" rx="10"
        fill="#0C1520" stroke="#1A2C3F" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="18" y="22" width="402" height="28" rx="10" fill="#111D2B" />
      <rect x="18" y="38" width="402" height="12" fill="#111D2B" />
      {/* Traffic lights */}
      <circle cx="35" cy="36" r="5" fill="#FF5F56" />
      <circle cx="51" cy="36" r="5" fill="#FEBC2E" />
      <circle cx="67" cy="36" r="5" fill="#28C840" />
      {/* Tab text */}
      <text x="90" y="40" fontSize="9" fill="#617585" fontFamily="monospace">
        DevelopersTech, workspace
      </text>

      {/* Screen area */}
      <rect x="18" y="50" width="402" height="228" fill="#06080E" />

      {/* Line numbers gutter */}
      <rect x="18" y="50" width="36" height="228" fill="#0A111A" />
      {[1,2,3,4,5,6].map((n, i) => (
        <text key={n} x="26" y={74 + i * 24} fontSize="9"
          fill="#2A3C4F" fontFamily="monospace">{n}</text>
      ))}

      {/* Code lines, rendered per beat */}
      {BEATS.map((beat, bi) => (
        <g key={beat.n} id={`code-beat-${beat.n}`}
          opacity={bi === 0 ? 1 : 0}>
          {codeLines[beat.n as keyof typeof codeLines].map((line, li) => (
            <text key={li} x="62" y={72 + li * 24}
              fontSize="10" fill={line.c} fontFamily="monospace"
              style={{ letterSpacing: "0.02em" }}>
              {line.t}
            </text>
          ))}
        </g>
      ))}

      {/* Cursor blink */}
      <rect id="cursor" x="62" y="166" width="6" height="11"
        fill="#5184A3" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0;0.8"
          dur="1.1s" repeatCount="indefinite" />
      </rect>

      {/* ── Side panel (right of editor) ── */}
      <rect x="428" y="22" width="140" height="256" rx="8"
        fill="#0C1520" stroke="#1A2C3F" strokeWidth="1.5" />
      <rect x="428" y="22" width="140" height="24" rx="8" fill="#111D2B" />
      <rect x="428" y="34" width="140" height="12" fill="#111D2B" />
      <text x="445" y="38" fontSize="8" fill="#617585" fontFamily="monospace">preview</text>

      {/* ── Beat 1 side panel: incoming brief ── */}
      <g id="side-beat-1" opacity="1">
        <rect x="438" y="40" width="120" height="228" fill="#060C14" />
        {/* Message bubble */}
        <rect x="444" y="50" width="108" height="58" rx="8"
          fill="#1A2C3F" stroke="#5184A3" strokeWidth="1" />
        <text x="452" y="68" fontSize="8" fill="#7BB3D4" fontFamily="sans-serif">📥 New Request</text>
        <text x="452" y="82" fontSize="7" fill="#617585" fontFamily="sans-serif">Hi! We need a</text>
        <text x="452" y="93" fontSize="7" fill="#617585" fontFamily="sans-serif">Flutter app for...</text>
        {/* Typing indicator */}
        <g transform="translate(448, 120)">
          <circle cx="0"  cy="0" r="3" fill="#5184A3" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="0.8s" begin="0s" repeatCount="indefinite"/>
          </circle>
          <circle cx="10" cy="0" r="3" fill="#5184A3" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="20" cy="0" r="3" fill="#5184A3" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="0.8s" begin="0.4s" repeatCount="indefinite"/>
          </circle>
        </g>
        {/* Fiverr-style star rating */}
        <text x="448" y="148" fontSize="8" fill="#FEBC2E">★★★★★</text>
        <text x="448" y="160" fontSize="7" fill="#617585" fontFamily="sans-serif">5.0, 59 reviews</text>
      </g>

      {/* ── Beat 2 side panel: architecture diagram ── */}
      <g id="side-beat-2" opacity="0">
        <rect x="438" y="40" width="120" height="228" fill="#060C14" />
        <text x="448" y="58" fontSize="8" fill="#A07BC8" fontFamily="monospace">Architecture</text>
        {/* Simple flowchart nodes */}
        {[
          { x:448, y:68,  w:108, h:18, c:"#1A1A35", tc:"#7BB3D4", t:"Flutter App" },
          { x:458, y:96,  w:88,  h:18, c:"#1A2C1F", tc:"#5FBD94", t:"REST API" },
          { x:458, y:124, w:88,  h:18, c:"#1A2C1F", tc:"#5FBD94", t:"PostgreSQL" },
          { x:458, y:152, w:88,  h:18, c:"#1A1A35", tc:"#A07BC8", t:"Firebase" },
          { x:458, y:180, w:88,  h:18, c:"#1A2A10", tc:"#4ADE80", t:"AWS Deploy" },
        ].map((b,i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="4" fill={b.c} stroke={b.tc} strokeWidth="0.5"/>
            <text x={b.x+6} y={b.y+12} fontSize="7.5" fill={b.tc} fontFamily="monospace">{b.t}</text>
            {i < 4 && <line x1={b.x+b.w/2} y1={b.y+b.h} x2={b.x+b.w/2} y2={b.y+b.h+10}
              stroke={b.tc} strokeWidth="0.5" strokeDasharray="2,2"/>}
          </g>
        ))}
      </g>

      {/* ── Beat 3 side panel: build progress ── */}
      <g id="side-beat-3" opacity="0">
        <rect x="438" y="40" width="120" height="228" fill="#060C14" />
        <text x="448" y="58" fontSize="8" fill="#5FBD94" fontFamily="monospace">$ npm run build</text>
        {[
          { t:"Compiling...", c:"#617585", d:"✓" },
          { t:"Tests (47/47)", c:"#5FBD94", d:"✓" },
          { t:"Bundle size",   c:"#5FBD94", d:"✓" },
          { t:"Type check",    c:"#5FBD94", d:"✓" },
        ].map((item, i) => (
          <g key={i}>
            <text x="448" y={76 + i * 20} fontSize="7.5" fill={item.c} fontFamily="monospace">
              {item.d} {item.t}
            </text>
            <rect x="448" y={80 + i * 20} width={90 * (i > 0 ? 1 : 0.6)} height="3" rx="1.5"
              fill={i > 0 ? "#5FBD94" : "#3A9B6E"} opacity="0.6"/>
          </g>
        ))}
        {/* Progress bar */}
        <rect x="448" y="165" width="108" height="6" rx="3" fill="#1A2C3F"/>
        <rect x="448" y="165" width="86" height="6" rx="3" fill="#3A9B6E"/>
        <text x="448" y="183" fontSize="7.5" fill="#617585" fontFamily="monospace">Build: 79%...</text>
      </g>

      {/* ── Beat 4 side panel: deployed ── */}
      <g id="side-beat-4" opacity="0">
        <rect x="438" y="40" width="120" height="228" fill="#060C14" />
        {/* Big checkmark */}
        <circle cx="498" cy="90" r="28" fill="none" stroke="#22C55E" strokeWidth="2" opacity="0.3"/>
        <text x="488" y="97" fontSize="22" fill="#22C55E">✓</text>
        {/* Deploy info */}
        <text x="448" y="132" fontSize="8" fill="#4ADE80" fontFamily="monospace">Deployed!</text>
        <text x="448" y="146" fontSize="7" fill="#617585" fontFamily="sans-serif">Production live</text>
        <text x="448" y="160" fontSize="7" fill="#617585" fontFamily="sans-serif">Docs delivered</text>
        <text x="448" y="174" fontSize="7" fill="#617585" fontFamily="sans-serif">30-day support ✓</text>
        {/* Client rating */}
        <text x="448" y="196" fontSize="10" fill="#FEBC2E">★★★★★</text>
        <text x="448" y="210" fontSize="7.5" fill="#4ADE80" fontFamily="monospace">Client satisfied!</text>
      </g>

      {/* ── Developer figure (bottom left) ── */}
      {/* Chair back */}
      <rect x="32" y="300" width="14" height="72" rx="4" fill="#111D2B" />
      {/* Chair seat */}
      <rect x="28" y="358" width="96" height="12" rx="4" fill="#111D2B" />
      {/* Chair legs */}
      <rect x="35" y="370" width="8" height="20" fill="#0A111A" />
      <rect x="108" y="370" width="8" height="20" fill="#0A111A" />
      {/* Body */}
      <rect x="46" y="305" width="68" height="60" rx="10" fill="#1A2C3F" />
      {/* Neck */}
      <rect x="72" y="295" width="16" height="14" rx="4" fill="#2A3C4F" />
      {/* Head */}
      <circle cx="80" cy="278" r="24" fill="#2A3C4F" />
      {/* Hair */}
      <path d="M58 270 Q80 252 102 270 Q100 258 80 254 Q60 258 58 270Z" fill="#5184A3" opacity="0.7"/>
      {/* Eyes */}
      <ellipse cx="72" cy="276" rx="3" ry="3.5" fill="#7BB3D4" />
      <ellipse cx="88" cy="276" rx="3" ry="3.5" fill="#7BB3D4" />
      <ellipse cx="72" cy="277" rx="1.5" ry="2" fill="#090E16" />
      <ellipse cx="88" cy="277" rx="1.5" ry="2" fill="#090E16" />
      {/* Arms/hands toward keyboard */}
      <rect x="26" y="338" width="40" height="10" rx="5" fill="#2A3C4F" />
      <rect x="98" y="338" width="40" height="10" rx="5" fill="#2A3C4F" />
      {/* Headphones */}
      <path d="M58 268 Q58 248 80 248 Q102 248 102 268" fill="none" stroke="#5184A3" strokeWidth="3" />
      <rect x="53" y="265" width="9" height="14" rx="4" fill="#5184A3" />
      <rect x="98" y="265" width="9" height="14" rx="4" fill="#5184A3" />

      {/* ── Desk surface ── */}
      <rect x="18" y="390" width="550" height="12" rx="4" fill="#111D2B" />
      <rect x="22" y="278" width="2" height="114" fill="#0A111A" /> {/* Monitor stand left */}
      <rect x="414" y="278" width="2" height="114" fill="#0A111A" /> {/* Monitor stand right */}
      {/* Keyboard */}
      <rect x="150" y="380" width="220" height="10" rx="3" fill="#111D2B" />
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <rect key={i} x={158 + i * 22} y={382} width="16" height="6" rx="2" fill="#1A2C3F" />
      ))}

      {/* ── Floating notification (beat 1 only) ── */}
      <g id="notif" opacity="1">
        <rect x="420" y="12" width="148" height="32" rx="8"
          fill="#1A2C3F" stroke="#5184A3" strokeWidth="1" />
        <text x="432" y="24" fontSize="8" fill="#7BB3D4" fontFamily="sans-serif">📩 New project request</text>
        <text x="432" y="36" fontSize="7" fill="#617585" fontFamily="sans-serif">from Fiverr client</text>
      </g>

      {/* ── Build particles (beat 3 only) ── */}
      <g id="particles" opacity="0">
        {[
          {x:150,y:160,t:"<Widget/>",c:"#5FBD94"},
          {x:490,y:200,t:"await api()",c:"#7BB3D4"},
          {x:500,y:100,t:"class Model",c:"#A07BC8"},
        ].map((p, i) => (
          <text key={i} x={p.x} y={p.y} fontSize="9" fill={p.c}
            fontFamily="monospace" opacity="0.6">{p.t}</text>
        ))}
      </g>

      {/* ── Delivery checkmark overlay (beat 4) ── */}
      <g id="delivery" opacity="0">
        <circle cx="480" cy="350" r="30" fill="none" stroke="#22C55E" strokeWidth="2" opacity="0.4"/>
        <text x="466" y="358" fontSize="26" fill="#22C55E">✓</text>
        <text x="448" y="392" fontSize="9" fill="#4ADE80" fontFamily="monospace">delivered!</text>
      </g>
    </svg>
  )
}

/* ─── Main Component ───────────────────────────────────────────── */
export function StorySection() {
  const wrapperRef    = useRef<HTMLDivElement>(null)
  const textRefs      = useRef<(HTMLDivElement | null)[]>([])
  const progressRef   = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile]   = useState(false)
  const [reduced, setReduced]     = useState(false)
  const activeRef = useRef(0)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  /* ─ Desktop scroll animation ─ */
  useEffect(() => {
    if (isMobile || reduced) return
    const wrapper = wrapperRef.current
    if (!wrapper) return

    /* helper: get SVG beat group */
    const svgG = (id: string) => wrapper.querySelector<SVGGElement>(`#${id}`)

    const ctx = gsap.context(() => {
      /* Initial states */
      BEATS.forEach((_, i) => {
        if (i > 0) gsap.set(textRefs.current[i], { yPercent: 80, opacity: 0 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: "+=300%",        // 3 × 100vh of scroll for 3 transitions
          onUpdate(self) {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
          },
        },
      })

      /* ── Beat 1 → 2 ──────────────────── at progress 0.25–0.4 */
      tl
        .to(textRefs.current[0], { yPercent: -80, opacity: 0, duration: 0.12, ease: "power2.in" }, 0.2)
        .to(textRefs.current[1], { yPercent: 0,   opacity: 1, duration: 0.12, ease: "power2.out" }, 0.3)
        .to(svgG("code-beat-1"),  { opacity: 0, duration: 0.1 }, 0.22)
        .to(svgG("side-beat-1"),  { opacity: 0, duration: 0.1 }, 0.22)
        .to(svgG("notif"),        { opacity: 0, y: -20, duration: 0.1 }, 0.22)
        .to(svgG("code-beat-2"),  { opacity: 1, duration: 0.12 }, 0.30)
        .to(svgG("side-beat-2"),  { opacity: 1, duration: 0.12 }, 0.30)

      /* ── Beat 2 → 3 ──────────────────── at progress 0.55–0.7 */
        .to(textRefs.current[1], { yPercent: -80, opacity: 0, duration: 0.12, ease: "power2.in" }, 0.55)
        .to(textRefs.current[2], { yPercent: 0,   opacity: 1, duration: 0.12, ease: "power2.out" }, 0.63)
        .to(svgG("code-beat-2"),  { opacity: 0, duration: 0.1 }, 0.56)
        .to(svgG("side-beat-2"),  { opacity: 0, duration: 0.1 }, 0.56)
        .to(svgG("code-beat-3"),  { opacity: 1, duration: 0.12 }, 0.63)
        .to(svgG("side-beat-3"),  { opacity: 1, duration: 0.12 }, 0.63)
        .to(svgG("particles"),    { opacity: 1, duration: 0.1  }, 0.65)

      /* ── Beat 3 → 4 ──────────────────── at progress 0.8–0.95 */
        .to(textRefs.current[2], { yPercent: -80, opacity: 0, duration: 0.12, ease: "power2.in" }, 0.82)
        .to(textRefs.current[3], { yPercent: 0,   opacity: 1, duration: 0.12, ease: "power2.out" }, 0.88)
        .to(svgG("code-beat-3"),  { opacity: 0, duration: 0.1 }, 0.83)
        .to(svgG("side-beat-3"),  { opacity: 0, duration: 0.1 }, 0.83)
        .to(svgG("particles"),    { opacity: 0, duration: 0.08 }, 0.83)
        .to(svgG("code-beat-4"),  { opacity: 1, duration: 0.12 }, 0.88)
        .to(svgG("side-beat-4"),  { opacity: 1, duration: 0.12 }, 0.88)
        .to(svgG("delivery"),     { opacity: 1, duration: 0.1  }, 0.90)

    }, wrapper)

    return () => ctx.revert()
  }, [isMobile, reduced])

  /* ─── Mobile / reduced-motion fallback ─────────────────────── */
  if (isMobile || reduced) {
    return (
      <section style={{ padding: "80px 24px", background: "rgba(15,25,36,.5)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="dt-badge">How I Work</span>
            <h2 className="section-title" style={{ marginTop: 14, marginBottom: 10 }}>
              The Journey from Brief to Launch
            </h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Four beats. One continuous commitment to quality.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {BEATS.map(beat => <BeatCard key={beat.n} beat={beat} />)}
          </div>
        </div>
      </section>
    )
  }

  /* ─── Desktop pinned storytelling ──────────────────────────── */
  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>

      {/* Scroll progress bar inside section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 2, background: "#1A2C3F", zIndex: 20,
      }}>
        <div ref={progressRef} style={{
          height: "100%",
          background: "linear-gradient(90deg, #5184A3, #7BB3D4)",
          transformOrigin: "left center",
          transform: "scaleX(0)",
          willChange: "transform",
        }} />
      </div>

      {/* Pinned section, 100vh, stays put while scroll drives the scrub */}
      <section style={{
        height: "100vh", display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0, overflow: "hidden",
        background: "#090E16",
        borderTop: "1px solid #1A2C3F",
        borderBottom: "1px solid #1A2C3F",
      }}>

        {/* ── Left: text panel ── */}
        <div style={{
          display: "flex", flexDirection: "column",
          justifyContent: "center",
          padding: "64px 56px",
          position: "relative",
          borderRight: "1px solid #1A2C3F",
          overflow: "hidden",
        }}>
          {/* Subtle gradient bg */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 30% 60%, rgba(81,132,163,.06), transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Beat step counter */}
          <div style={{
            fontSize: 11, fontWeight: 700, color: "#2A3C4F",
            letterSpacing: ".12em", textTransform: "uppercase",
            marginBottom: 40,
          }}>
            The Process
          </div>

          {/* Stacked text blocks, GSAP moves these */}
          <div style={{ position: "relative", minHeight: 280 }}>
            {BEATS.map((beat, i) => (
              <div
                key={beat.n}
                ref={el => { textRefs.current[i] = el }}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  top: i === 0 ? undefined : 0,
                  left: 0, right: 0,
                }}
              >
                {/* Step label */}
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: ".1em",
                  textTransform: "uppercase", color: beat.color,
                  marginBottom: 14,
                }}>
                  {beat.step}
                </div>

                {/* Big keyword */}
                <div style={{
                  fontSize: "clamp(44px, 5vw, 72px)",
                  fontWeight: 800, letterSpacing: "-.04em",
                  lineHeight: 1, color: "#E2EDF5",
                  marginBottom: 20,
                }}>
                  {beat.keyword.split(" ").map((word, wi) => (
                    <span key={wi} style={{ display: "block" }}>
                      {wi === 0
                        ? <span style={{ color: "#617585" }}>{word}</span>
                        : <span style={{
                            background: `linear-gradient(135deg, ${beat.color}, ${beat.accent})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}>{word}</span>
                      }
                    </span>
                  ))}
                </div>

                {/* Supporting text */}
                <p style={{
                  fontSize: 15, color: "#617585", lineHeight: 1.8,
                  maxWidth: 360,
                }}>
                  {beat.sub}
                </p>

                {/* Beat dots */}
                <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
                  {BEATS.map(b => (
                    <div key={b.n} style={{
                      width: b.n === beat.n ? 24 : 6,
                      height: 6, borderRadius: 3,
                      background: b.n === beat.n ? beat.color : "#1A2C3F",
                      transition: "width .3s",
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: SVG scene ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "40px 32px",
          background: "#060B12",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Background glow */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 60% 40%, rgba(81,132,163,.07), transparent 65%)",
            pointerEvents: "none",
          }} />

          {/* Scroll hint (fades as user scrolls, handled by GSAP progress) */}
          <div style={{
            position: "absolute", bottom: 24, left: "50%",
            transform: "translateX(-50%)",
            fontSize: 10, color: "#2A3C4F",
            letterSpacing: ".08em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <span>Scroll to see the journey</span>
            <span style={{ animation: "bounce-down 1.5s ease infinite" }}>↓</span>
          </div>

          <div style={{ width: "100%", maxWidth: 600 }}>
            <DevScene activeRef={activeRef} />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
      `}</style>
    </div>
  )
}
