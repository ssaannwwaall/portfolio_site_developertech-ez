"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const NAV = [
  { l: "Work", h: "/portfolio" },
  { l: "Services", h: "/services" },
  { l: "About", h: "/about" },
  { l: "Writing", h: "/blog" },
  { l: "Contact", h: "/contact" },
]
const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20start%20a%20project%20with%20DevelopersTech."

export function Header() {
  const [scr, setScr] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const f = () => setScr(window.scrollY > 40)
    window.addEventListener("scroll", f, { passive: true })
    return () => window.removeEventListener("scroll", f)
  }, [])
  useEffect(() => { setOpen(false) }, [path])

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 700,
      background: scr ? "rgba(251,250,248,.9)" : "transparent",
      backdropFilter: scr ? "blur(20px) saturate(180%)" : "none",
      WebkitBackdropFilter: scr ? "blur(20px) saturate(180%)" : "none",
      borderBottom: `1px solid ${scr ? "var(--line)" : "transparent"}`,
      transition: "all .45s cubic-bezier(.16,1,.3,1)",
    }}>
      <div className="wrap" style={{ height: 74, display: "flex", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, marginRight: "auto", textDecoration: "none" }}>
          <Image src="/images/company-logo.png" alt="DevelopersTech" width={34} height={34} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", letterSpacing: "-.02em" }}>
            Developers<span style={{ color: "var(--accent)" }}>Tech</span>
          </span>
        </Link>

        <nav className="hidden md:flex" style={{ gap: 4, marginRight: 26 }}>
          {NAV.map(n => (
            <Link key={n.h} href={n.h} style={{
              padding: "8px 18px", fontSize: 14, fontWeight: 500, textDecoration: "none",
              color: path === n.h ? "var(--ink)" : "var(--body)",
              borderBottom: `1px solid ${path === n.h ? "var(--accent)" : "transparent"}`,
              transition: "all .3s",
            }}>{n.l}</Link>
          ))}
        </nav>

        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-solid mag hidden md:inline-flex" style={{ padding: "12px 24px", fontSize: 13 }}>
          Start a project <span className="arrow">→</span>
        </a>

        <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden"
          style={{ background: "none", border: "none", padding: 8, cursor: "pointer", color: "var(--ink)" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap" style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map(n => (
              <Link key={n.h} href={n.h} style={{
                padding: "14px 0", fontSize: 16, textDecoration: "none",
                color: path === n.h ? "var(--accent)" : "var(--ink)",
                borderBottom: "1px solid var(--line)",
              }}>{n.l}</Link>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-solid" style={{ marginTop: 16, justifyContent: "center" }}>
              Start a project <span className="arrow">→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
