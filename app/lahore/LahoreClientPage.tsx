"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function LahoreClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/images/company-logo.png"
                alt="DeveloperTech Logo - Flutter App Developer in Lahore"
                width={80}
                height={80}
                className="object-contain mb-4"
              />
              <Badge variant="secondary" className="mb-2">
                Flutter App Developer in Lahore, Pakistan
              </Badge>
              <h3 className="text-xl font-semibold text-primary mb-2">Sanwal Khan</h3>
              <p className="text-muted-foreground">
                Director at DeveloperTech - Mobile App Development Company in Lahore
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flutter App Developer in Lahore | Best Mobile App Development Company
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Leading Flutter App Developer in Lahore, Pakistan. Our Mobile App Development Company in Lahore
              specializes in Android iOS App Development. Hire Flutter Developer in Pakistan with proven expertise in
              delivering Best Mobile App Development Services Lahore businesses trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() =>
                  window.open(
                    `https://wa.me/923074494175?text=Hi Sanwal Khan, I need Flutter App Development services in Lahore. Can you help me?`,
                    "_blank",
                  )
                }
              >
                Hire Flutter Developer in Lahore
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "/")}>
                View Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Flutter App Development Lahore</h3>
                <p className="text-muted-foreground">
                  Expert Flutter App Developer in Lahore creating cross-platform mobile applications for Android and iOS
                  with native performance.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Mobile App Development Company</h3>
                <p className="text-muted-foreground">
                  Professional Mobile App Development Company in Lahore offering complete Android iOS App Development
                  services for businesses.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Hire Flutter Developer Pakistan</h3>
                <p className="text-muted-foreground">
                  Hire Flutter Developer in Pakistan with 5+ years experience and 100+ successful app deployments across
                  various industries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
