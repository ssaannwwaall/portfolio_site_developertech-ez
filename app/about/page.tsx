import type { Metadata } from "next"
import Image from "next/image"
import { MaskHeading, Rise } from "@/components/mask-heading"

export const metadata: Metadata = {
  title: "About",
  description: "DevelopersTech is an engineering team led by Sanwal Khan, with five years of Flutter, backend and enterprise software delivery.",
}

const SKILLS = [
  ["Flutter and Dart", "Our primary mobile stack"],
  ["Java and Spring Boot", "Backend systems and APIs"],
  ["OpenAI and Claude", "Production AI integration"],
  ["Real time systems", "GPS, dispatch, WebSockets"],
]

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 74 }}>
      <section style={{ padding: "80px 0 60px" }}>
        <div className="wrap">
          <Rise><div className="eyebrow">About</div></Rise>
          <MaskHeading text="A small studio that builds like a big one." italic={4} tag="h1" className="h1" />
          <Rise delay={0.3}>
            <p className="lede" style={{ maxWidth: 540, marginTop: 22 }}>
              A focused engineering team serving clients across the UK, UAE, Europe
              and the United States since 2023.
            </p>
          </Rise>
        </div>
      </section>

      <section style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <Rise delay={0.1}>
            <div data-view className="media" style={{ position: "relative", height: 420, borderRadius: 3 }}>
              <Image src="/softpatrol-tracking.webp" alt="Softpatrol live tracking" fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>
          </Rise>
        </div>
      </section>

      <section style={{ padding: "56px 0 110px" }}>
        <div className="wrap about-page-grid">
          <Rise>
            <div style={{ position: "sticky", top: 130 }}>
              <Image src="/images/company-logo.png" alt="" width={44} height={44} style={{ objectFit: "contain", marginBottom: 16 }} />
              <div style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>Sanwal Khan</div>
              <div style={{ fontSize: 14, color: "var(--body)", marginBottom: 22 }}>Managing Director and Co-Founder</div>
              <a href="https://linkedin.com/in/sanwal-khan-3b4019213" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 13.5, color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--line)", paddingBottom: 3 }}>
                LinkedIn profile ↗
              </a>
            </div>
          </Rise>
          <Rise delay={0.1}>
            <div style={{ fontSize: 17, lineHeight: 1.85, color: "var(--body)", display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: 21, color: "var(--ink)", lineHeight: 1.65 }}>
                We started where good engineering starts: Java desktop applications and socket
                based systems. Architecture before frameworks.
              </p>
              <p>That foundation carried into Android, then into Flutter, where our team now ships
              cross platform applications for Android, iOS, desktop and web from a single codebase,
              at a level that holds up in production.</p>
              <p>Our most formative years were spent building enterprise software for a UK client:
              taxi dispatch systems and guard monitoring platforms used commercially every day.
              That work taught us the difference between software that demos well and software that
              survives contact with real operators.</p>
              <p>DevelopersTech exists to bring that standard to founders, small teams and growing
              businesses who need engineering they can trust.</p>
              <div className="skill-grid">
                {SKILLS.map(([t, d]) => (
                  <div key={t}>
                    <div style={{ fontSize: 15, color: "var(--ink)", fontWeight: 500, marginBottom: 5 }}>{t}</div>
                    <div style={{ fontSize: 13.5, color: "var(--body)" }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  )
}
