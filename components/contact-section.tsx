"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  const handleWhatsAppContact = () => {
    const message = "Hi Sanwal Khan! I'm interested in discussing a mobile app development project with you."
    const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:khansanwal922@gmail.com?subject=Mobile App Development Inquiry"
  }

  const handlePhoneContact = () => {
    window.location.href = "tel:+923074494175"
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const whatsappMessage = `Hi Sanwal Khan! 

Name: ${name}
Email: ${email}
Subject: ${subject}

Message: ${message}

I'm interested in discussing this project with you.`

    const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Sanwal Khan - Best Mobile App Developer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have an idea for iOS or Android? I'm Sanwal Khan, Flutter developer and expert in mobile engineering at
            DeveloperTech. Let's connect to build your app and transform your vision into a high-performing mobile
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleEmailContact}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">khansanwal922@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Reach out directly for project inquiries & collaboration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handlePhoneContact}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Phone className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+92 3074494175</p>
                    <p className="text-sm text-muted-foreground mt-1">Available for calls & consultations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleWhatsAppContact}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageCircle className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">Quick queries & support</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chat with Flutter Developer Sanwal Khan instantly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" required />
                  <Input name="email" placeholder="Your Email" type="email" required />
                </div>
                <Input name="subject" placeholder="Subject" required />
                <Textarea name="message" placeholder="Tell me about your project..." className="min-h-32" required />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
