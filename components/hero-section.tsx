"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20book%20a%20free%20consultation%20with%20DevelopersTech."

const STATS = [
  { v: "5+",   l: "Years Engineering"         },
  { v: "100+", l: "Products Delivered"        },
  { v: "5.0★", l: "Fiverr Rating"             },
  { v: "59",   l: "Verified Reviews"          },
]

/**
 * Simple text splitter — wraps every word in an overflow:hidden shell
 * so we can translateY each word up from underneath the mask.
 * No premium GSAP SplitText needed.
 */
function MaskText({
  text,
  tag: Tag = "span",
  className = "",
  "data-mask": dataMask = "",
}: {
  text: string
  tag?: keyof JSX.IntrinsicElements
  className?: string
  "data-mask"?: string
}) {
  const words = text.split(" ")
  return (
    // @ts-ignore — generic tag
    <Tag className={className} data-mask={dataMask} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="word-wrap"
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <span
            className="word"
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {word}
          </span>
          {wi < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  )
}

export function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)
  const subtextRef  = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const badgeRef    = useRef<HTMLDivElement>(null)

  /* ─── ON LOAD: letter/word mask reveal ──────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Collect all .word spans inside the hero heading
      const words    = section.querySelectorAll<HTMLElement>(".hero-heading .word")
      const subtext  = subtextRef.current
      const cta      = ctaRef.current
      const stats    = statsRef.current
      const badge    = badgeRef.current

      // Set initial states — hidden below their mask wrappers
      gsap.set(words,   { yPercent: 110 })
      gsap.set([subtext, cta, stats, badge], { opacity: 0, y: 28 })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl
        // Badge fades in first
        .to(badge,   { opacity: 1, y: 0, duration: 0.5 }, 0.1)
        // Heading words cascade up from below the mask
        .to(words,   { yPercent: 0, duration: 0.9, stagger: 0.055 }, 0.25)
        // Subtext rises after the last word
        .to(subtext, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        // CTAs and stats follow
        .to(cta,     { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(stats,   { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
    }, section)

    return () => ctx.revert()
  }, [])

  /* ─── ON SCROLL: hero scales + fades, next section overlaps ─────── */
  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      // Pin hero while the next section slides over it
      ScrollTrigger.create({
        trigger: section,
        start:   "top top",
        end:     "+=60%",           // pin for 60vh of scroll
        pin:     true,
        pinSpacing: false,           // don't push content down — overlap effect
        scrub:   1,
        onUpdate(self) {
          // Hero content: scale down + fade out as user scrolls away
          gsap.set(content, {
            scale:   1 - self.progress * 0.04,   // 1 → 0.96
            opacity: 1 - self.progress * 1.4,    // 1 → 0 (completes at ~70%)
            yPercent: -self.progress * 8,         // subtle upward drift
          })
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 24px",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="orb-1" />
      <div className="orb-2" />
      <div className="absolute top-0 inset-x-0 gradient-line" />

      {/* Content wrapper — this is what scales + fades on scroll */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ willChange: "transform, opacity" }}>
        <div style={{ maxWidth: 800 }}>

          {/* Status badge */}
          <div ref={badgeRef} style={{ opacity: 0 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "5px 14px", borderRadius: 999,
              border: "1px solid rgba(34,197,94,.3)",
              background: "rgba(34,197,94,.08)", marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%",
                background: "#22C55E", display: "inline-block" }} />
              <span style={{ fontSize: 11, color: "#22C55E", fontWeight: 700 }}>
                Now Accepting New Projects
              </span>
            </span>
          </div>

          {/* Heading with mask-reveal words */}
          <h1
            className="hero-heading"
            style={{
              fontSize: "clamp(38px, 6.5vw, 76px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: 20,
              color: "#E2EDF5",
            }}
          >
            <MaskText text="Software That Ships." />{" "}
            <br />
            <span style={{ display: "block" }}>
              <span style={{ background: "linear-gradient(135deg,#7BB3D4,#5184A3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <MaskText text="Engineering That Scales." />
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            style={{
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "#617585",
              lineHeight: 1.75,
              maxWidth: 580,
              marginBottom: 36,
              opacity: 0,
            }}
          >
            DevelopersTech builds enterprise-grade Flutter apps, AI-powered platforms,
            and SaaS products for companies that need to move fast — and get it right the first time.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56, opacity: 0 }}>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 26px", borderRadius: 12,
                background: "#5184A3", color: "#fff",
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 0 24px rgba(81,132,163,.3)",
                transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s",
              }}
            >
              Book a Free Consultation <ArrowRight size={15} />
            </a>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 26px", borderRadius: 12,
                background: "rgba(255,255,255,.04)", color: "#E2EDF5",
                fontWeight: 600, fontSize: 14, textDecoration: "none",
                border: "1px solid #1A2C3F",
                transition: "background 0.2s",
              }}
            >
              View Case Studies
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} style={{ opacity: 0 }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4,1fr)",
              gap: 1, background: "#1A2C3F", borderRadius: 14,
              overflow: "hidden", maxWidth: 620,
            }}>
              {STATS.map(s => (
                <div key={s.l} style={{ background: "#0F1924", padding: "16px 10px", textAlign: "center" }}>
                  <div style={{
                    fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 800,
                    background: "linear-gradient(135deg,#7BB3D4,#5184A3)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text", marginBottom: 3,
                  }}>
                    {s.v}
                  </div>
                  <div style={{ fontSize: 10, color: "#617585", lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Fiverr proof */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <Image src="/images/company-logo.png" alt="DevelopersTech" width={20} height={20} style={{ objectFit: "contain", opacity: 0.7 }} />
              <span style={{ fontSize: 16 }}>⭐⭐⭐⭐⭐</span>
              <span style={{ fontSize: 12, color: "#617585" }}>
                <strong style={{ color: "#E2EDF5" }}>59 verified reviews</strong> on Fiverr · UK, US & UAE clients
              </span>
              <a href="https://fiverr.com/sanwalkhan842" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 11, color: "#5184A3", textDecoration: "underline" }}>
                View profile →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #090E16, transparent)" }} />
    </section>
  )
}
