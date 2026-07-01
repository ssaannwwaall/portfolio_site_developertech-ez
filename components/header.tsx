"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBookCall = () => {
    const msg = "Hi Sanwal! I'd like to book a free consultation with DevelopersTech to discuss a project."
    window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2.5 group">
          <Image
            src="/images/company-logo.png"
            alt="DevelopersTech"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-semibold text-lg text-foreground">
            Developers<span className="gradient-text">Tech</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={handleBookCall}
            className="bg-primary hover:bg-primary/90 text-white font-medium gap-1.5 rounded-lg"
            size="sm"
          >
            Book a Call
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border/60">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border/60 mt-2">
              <Button onClick={handleBookCall} className="w-full bg-primary hover:bg-primary/90 gap-1.5">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
