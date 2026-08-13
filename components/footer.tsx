"use client"
import Link from "next/link"
import Image from "next/image"

const WA = "https://wa.me/923074494175"
const FIVERR = "https://www.fiverr.com/sanwalkhan842"

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", padding: "76px 0 38px", position: "relative", zIndex: 1 }}>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
              <Image src="/images/company-logo.png" alt="" width={32} height={32} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: 17, fontWeight: 500, color: "var(--paper)" }}>
                Developers<span style={{ color: "var(--accent-lt)" }}>Tech</span>
              </span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.78, color: "rgba(251,250,248,.54)", maxWidth: 270 }}>
              An engineering studio in Lahore building Flutter applications, AI platforms
              and enterprise systems for clients worldwide.
            </p>
          </div>
          <div>
            <div className="foot-h">Navigate</div>
            {[["Home", "/"], ["Work", "/portfolio"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} className="foot-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="foot-h">Services</div>
            {["Mobile Apps", "Web Platforms", "AI Integration", "Enterprise SaaS", "Dispatch Systems"].map(l => (
              <div key={l} className="foot-link" style={{ cursor: "default" }}>{l}</div>
            ))}
          </div>
          <div>
            <div className="foot-h">Connect</div>
            {[["WhatsApp", WA], ["Fiverr", FIVERR], ["LinkedIn", "https://linkedin.com/in/sanwal-khan-3b4019213"], ["Google Play", "https://play.google.com/store/apps/details?id=com.computerfriends.softpatrol"]].map(([l, u]) => (
              <a key={l} href={u} target="_blank" rel="noopener noreferrer" className="foot-link">{l} ↗</a>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <div>2025 DevelopersTech. Lahore, Pakistan.</div>
          <div>khansanwal922@gmail.com · +92 307 449 4175</div>
        </div>
      </div>
      <style jsx>{`
        .foot-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 46px;
          margin-bottom: 56px; padding-bottom: 52px; border-bottom: 1px solid var(--line-dk);
        }
        .foot-h { font-size: 11.5px; color: var(--accent-lt); letter-spacing: .14em; text-transform: uppercase; margin-bottom: 18px; }
        .foot-bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 14px; font-size: 13px; color: rgba(251,250,248,.36); }
        @media (max-width: 860px) { .foot-grid { grid-template-columns: 1fr 1fr; gap: 34px; } }
      `}</style>
    </footer>
  )
}
