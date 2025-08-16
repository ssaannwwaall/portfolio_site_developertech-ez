"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+923074494175"
    const message = "Hi Sanwal! I'm interested in discussing a mobile app development project with DeveloperTech."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/company-logo.png"
            alt="DeveloperTech Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-bold text-xl">DeveloperTech</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90" onClick={handleWhatsAppClick}>
          Get In Touch
        </Button>
      </div>
    </header>
  )
}
