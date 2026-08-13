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
              An engineering studio building Flutter applications, AI platforms and
              enterprise systems for clients worldwide.
            </p>
          </div>
          <div>
            <div className="foot-h">Navigate</div>
            {[["Home", "/"], ["Work", "/portfolio"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} className="foot-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="foot-h">Solutions</div>
            {[["Taxi Dispatch Software", "/taxi-dispatch-software"], ["Guard Monitoring Software", "/guard-monitoring-software"], ["Mobile Apps", "/services"], ["Web Platforms", "/services"], ["AI Integration", "/services"]].map(([l, h]) => (
              <Link key={l} href={h} className="foot-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="foot-h">Regions</div>
            {[["United Kingdom", "/flutter-app-development-uk"], ["United States", "/software-development-company-usa"], ["Dubai and UAE", "/mobile-app-development-dubai"], ["Malaysia", "/software-development-malaysia"], ["Europe", "/software-development-europe"]].map(([l, h]) => (
              <Link key={l} href={h} className="foot-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="foot-h">Connect</div>
            {[["WhatsApp", WA], ["Fiverr", FIVERR], ["LinkedIn", "https://linkedin.com/in/sanwal-khan-3b4019213"], ["Google Play", "https://play.google.com/store/apps/details?id=com.computerfriends.soft.patrol"]].map(([l, u]) => (
              <a key={l} href={u} target="_blank" rel="noopener noreferrer" className="foot-link">{l} ↗</a>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <div>2025 DevelopersTech. All rights reserved.</div>
          <div>khansanwal922@gmail.com · +92 307 449 4175</div>
        </div>
      </div>
      <style jsx>{`
        .foot-grid {
          display: grid; grid-template-columns: 1.8fr 1fr 1.15fr 1.15fr 1fr; gap: 40px;
          margin-bottom: 56px; padding-bottom: 52px; border-bottom: 1px solid var(--line-dk);
        }
        .foot-h { font-size: 11.5px; color: var(--accent-lt); letter-spacing: .14em; text-transform: uppercase; margin-bottom: 18px; }
        .foot-bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 14px; font-size: 13px; color: rgba(251,250,248,.36); }
        @media (max-width: 1100px) { .foot-grid { grid-template-columns: 1fr 1fr 1fr; gap: 34px; } }
        @media (max-width: 720px) { .foot-grid { grid-template-columns: 1fr 1fr; gap: 30px; } }
      `}</style>
    </footer>
  )
}
