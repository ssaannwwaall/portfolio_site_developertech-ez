"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react"

const contactMethods = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+92 307 449 4175",
    description: "Fastest response — usually within an hour",
    action: () => {
      const msg = "Hi Sanwal! I'd like to discuss a project with DevelopersTech."
      window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
    },
    accent: "#25d366",
  },
  {
    icon: Mail,
    label: "Email",
    value: "khansanwal922@gmail.com",
    description: "For detailed briefs and formal enquiries",
    action: () => {
      window.location.href = "mailto:khansanwal922@gmail.com?subject=Project Enquiry — DevelopersTech"
    },
    accent: "#3b82f6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 307 449 4175",
    description: "Available for calls and video consultations",
    action: () => { window.location.href = "tel:+923074494175" },
    accent: "#8b5cf6",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    description: "Serving clients globally — remote-first team",
    action: () => {},
    accent: "#f97316",
  },
]

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hi Sanwal!\n\nName: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\n\nMessage:\n${form.message}\n\nI'm interested in working with DevelopersTech.`
    window.open(`https://wa.me/923074494175?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="contact" className="section-padding px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/3 text-xs text-muted-foreground font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you with a clear plan and honest estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <button
                  key={method.label}
                  onClick={method.action}
                  className="w-full glow-card text-left bg-card border border-border/60 rounded-xl p-5 flex items-center gap-4 transition-all hover:border-primary/30"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: method.accent + "18", border: `1px solid ${method.accent}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: method.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground mb-0.5">{method.label}</div>
                    <div className="font-semibold text-foreground text-sm truncate">{method.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{method.description}</div>
                  </div>
                  {method.action.toString() !== (() => {}).toString() && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
              )
            })}

            {/* Availability note */}
            <div className="p-5 bg-primary/5 border border-primary/15 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Currently accepting new projects.</span>{" "}
                Book a free 30-minute discovery call and we'll map out your project together — no pressure, no commitment.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">Send a Project Brief</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Your Name</label>
                  <Input
                    name="name"
                    placeholder="John Smith"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background border-border/60 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Email Address</label>
                  <Input
                    name="email"
                    placeholder="john@company.com"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-background border-border/60 focus:border-primary/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Estimated Budget</label>
                <Input
                  name="budget"
                  placeholder="e.g. $5,000 – $15,000"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="bg-background border-border/60 focus:border-primary/50"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Tell us about your project</label>
                <Textarea
                  name="message"
                  placeholder="What are you building? What's the platform? What's your timeline?"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-32 bg-background border-border/60 focus:border-primary/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold gap-2 rounded-xl"
              >
                Send via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We typically respond within a few hours on WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
