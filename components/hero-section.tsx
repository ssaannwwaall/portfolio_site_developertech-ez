"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/company-logo.png"
            alt="DeveloperTech Logo"
            width={80}
            height={80}
            className="object-contain mb-4"
          />
          <Badge variant="secondary" className="mb-2">
            Director & Mobile App Developer
          </Badge>
          <h3 className="text-xl font-semibold text-primary mb-2">Sanwal Khan</h3>
          <p className="text-muted-foreground">Director at DeveloperTech</p>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Best Mobile App Developer & Flutter Expert - Sanwal Khan
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm Sanwal Khan, a Flutter developer and expert in mobile engineering with 5+ years of experience. As Director
          at DeveloperTech, I have built innovative iOS and Android applications that deliver seamless user experiences,
          achieve 100K+ downloads, and help businesses grow. Recognized as one of the best mobile app developers, I
          specialize in crafting scalable and user-friendly apps tailored to client needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Mobile App Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Who am I
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Apps Developed by Sanwal Khan</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100K+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
