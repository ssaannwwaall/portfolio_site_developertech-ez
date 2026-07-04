"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20book%20a%20free%20consultation%20with%20DevelopersTech."

const STATS = [
  { v: "5+",    l: "Years Engineering"     },
  { v: "100+",  l: "Products Delivered"    },
  { v: "5.0★",  l: "Fiverr Rating (59 reviews)" },
  { v: "4",     l: "Platforms: Mobile · Web · Desktop · Backend" },
]

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal")
    if (!els) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") })
    }, { threshold: 0.1 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative min-h-[92vh] flex flex-col justify-center px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="orb-1" /><div className="orb-2" />
      <div className="absolute top-0 inset-x-0 gradient-line" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Status */}
          <div className="reveal flex items-center gap-2 mb-7">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold"
              style={{ background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.25)", color:"#4ADE80" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
              Now Accepting New Projects
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal delay-100 text-[clamp(38px,6vw,76px)] font-extrabold tracking-tight leading-[1.04] mb-5 text-foreground">
            Software That Ships.<br />
            <span className="gradient-text">Engineering That Scales.</span>
          </h1>

          {/* Subheadline */}
          <p className="reveal delay-200 text-[clamp(15px,2vw,19px)] text-muted-foreground leading-[1.75] max-w-[600px] mb-8">
            DevelopersTech builds enterprise-grade Flutter apps, AI-powered platforms,
            and SaaS products for companies that need to move fast — and get it right the first time.
          </p>

          {/* CTAs */}
          <div className="reveal delay-300 flex flex-wrap gap-3 mb-16">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all">
              Book a Free Consultation <ArrowRight size={15} />
            </a>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-foreground bg-white/3 border border-border rounded-xl hover:bg-white/6 transition-all">
              View Case Studies
            </Link>
          </div>

          {/* Stats bar */}
          <div className="reveal delay-400 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border border-border rounded-2xl overflow-hidden">
            {STATS.map(s => (
              <div key={s.l} className="bg-card/70 backdrop-blur-sm px-4 md:px-6 py-5 text-center">
                <div className="text-[clamp(22px,3vw,32px)] font-extrabold gradient-text mb-1">{s.v}</div>
                <div className="text-[11px] text-muted-foreground leading-tight">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Fiverr badge */}
          <div className="reveal mt-6 flex items-center gap-2 flex-wrap">
            <Image src="/images/company-logo.png" alt="DevelopersTech" width={22} height={22} className="object-contain opacity-80" />
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-[12px] text-muted-foreground">
              <strong className="text-foreground">59 reviews</strong> on Fiverr · Verified clients from UK, US, UAE
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
