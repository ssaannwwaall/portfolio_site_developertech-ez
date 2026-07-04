"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"

const NAV = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
]

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27d%20like%20to%20book%20a%20free%20consultation%20with%20DevelopersTech."

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass-header" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center h-16 gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/images/company-logo.png" alt="DevelopersTech" width={32} height={32} className="object-contain" />
          <span className="font-bold text-[17px] text-foreground">
            Developers<span className="gradient-text">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                pathname === n.href
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/4"
              }`}>
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all ml-auto flex-shrink-0">
          Book a Free Call <ArrowRight size={14} />
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden ml-auto p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mobile-menu">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV.map(n => (
              <Link key={n.href} href={n.href}
                className={`px-4 py-3 text-[14px] font-medium rounded-lg transition-colors ${
                  pathname === n.href ? "text-primary bg-primary/8" : "text-muted-foreground hover:text-foreground hover:bg-white/4"
                }`}>
                {n.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-border">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-[14px] font-semibold text-white bg-primary rounded-xl">
                Book a Free Consultation <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
