"use client"

import Image from "next/image"

const footerLinks = {
  Services: [
    "Mobile App Development",
    "Web Development",
    "AI Integration",
    "Enterprise Software",
    "API Development",
    "UI/UX Design",
    "SEO Services",
    "B2B Lead Generation",
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#projects" },
    { label: "Technology Stack", href: "#tech" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Specializations: [
    "Flutter Development",
    "Taxi Dispatch Software",
    "Guard Monitoring Software",
    "SaaS Products",
    "Booking Platforms",
    "Business Automation",
  ],
}

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWhatsApp = () => {
    const msg = "Hi Sanwal! I'd like to discuss a project with DevelopersTech."
    window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/company-logo.png"
                alt="DevelopersTech"
                width={30}
                height={30}
                className="object-contain"
              />
              <span className="font-semibold text-lg">
                Developers<span className="gradient-text">Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              A premium software development company building Flutter apps, AI systems, enterprise SaaS,
              and web platforms for startups and businesses worldwide.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>📍 Lahore, Pakistan</div>
              <div>✉️ khansanwal922@gmail.com</div>
              <div>📱 +92 307 449 4175</div>
            </div>
            <button
              onClick={handleWhatsApp}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/15 border border-primary/20 text-primary text-sm font-medium rounded-lg transition-colors"
            >
              Book a Free Consultation →
            </button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.Services.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.Company.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Specializations</h4>
            <ul className="space-y-2">
              {footerLinks.Specializations.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DevelopersTech. Founded by Sanwal Khan. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
