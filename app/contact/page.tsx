"use client"
import type { Metadata } from "next"
import { useState } from "react"
import { ArrowRight, MessageSquare, Mail, Phone, MapPin, Clock } from "lucide-react"

const WA_BASE = "https://wa.me/923074494175?text="

const METHODS = [
  { Icon: MessageSquare, label: "WhatsApp",    val: "+92 307 449 4175",        note: "Fastest, usually under 2 hrs",         color: "#22C55E", href: `${WA_BASE}${encodeURIComponent("Hi Sanwal! I'd like to discuss a project with DevelopersTech.")}` },
  { Icon: Mail,          label: "Email",        val: "khansanwal922@gmail.com", note: "For detailed briefs and proposals",      color: "#5184A3", href: "mailto:khansanwal922@gmail.com?subject=Project%20Enquiry%20%E2%80%94%20DevelopersTech" },
  { Icon: Phone,         label: "Phone",        val: "+92 307 449 4175",        note: "Available for calls by appointment",     color: "#7B5EA7", href: "tel:+923074494175" },
  { Icon: MapPin,        label: "Location",     val: "Lahore, Pakistan",         note: "Serving clients in UK, UAE, US & EU",   color: "#D97706", href: "#" },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", budget:"", project:"", msg:"" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hi Sanwal!\n\nName: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\nProject Type: ${form.project}\n\nMessage:\n${form.msg}\n\nI found you on DevelopersTech website.`
    )
    window.open(`${WA_BASE}${text}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      <section className="section-pad border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />
        <div className="orb-1" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="dt-badge">Contact</span>
          <h1 className="section-title mt-4 mb-3">Let's Build Something<br /><span className="gradient-text">That Matters</span></h1>
          <p className="section-sub">Tell us about your project, we'll respond with a plan, not a pitch.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-[20px] font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-3 mb-8">
              {METHODS.map(m => (
                <a key={m.label} href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`card-hover flex items-center gap-4 p-4 bg-card border border-border rounded-xl transition-all ${m.href === "#" ? "cursor-default" : "cursor-pointer"}`}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: m.color + "15", border: `1px solid ${m.color}25` }}>
                    <m.Icon size={18} style={{ color: m.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-muted-foreground mb-0.5">{m.label}</div>
                    <div className="text-[14px] font-semibold text-foreground truncate">{m.val}</div>
                    <div className="text-[11px] text-muted-foreground">{m.note}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-5 bg-primary/6 border border-primary/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-primary" />
                <span className="text-[12px] font-bold text-primary">Currently Available</span>
              </div>
              <p className="text-[13px] text-muted-foreground leading-[1.75]">
                Accepting new projects for Q3 2025. Free 30-minute discovery call, no commitment, no hard sell.
                Just an honest conversation about your product and whether we're the right fit.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card-hover bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-[18px] font-bold text-foreground mb-6">Send a Project Brief</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 font-medium">Your Name *</label>
                  <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 font-medium">Email *</label>
                  <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 font-medium">Budget Range</label>
                  <select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-[13px] text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="">Select range</option>
                    <option>Under $2,000</option>
                    <option>$2,000, $5,000</option>
                    <option>$5,000, $15,000</option>
                    <option>$15,000, $50,000</option>
                    <option>$50,000+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 font-medium">Project Type</label>
                  <select value={form.project} onChange={e=>setForm({...form,project:e.target.value})}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-[13px] text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="">Select type</option>
                    <option>Flutter Mobile App</option>
                    <option>Web Application</option>
                    <option>AI Integration</option>
                    <option>Enterprise SaaS</option>
                    <option>Taxi Dispatch System</option>
                    <option>Guard Monitoring</option>
                    <option>SEO Services</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-muted-foreground mb-2 font-medium">Tell us about your project *</label>
                <textarea required value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})}
                  placeholder="What are you building? Platform, timeline, any technical requirements?"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-[14px] font-bold text-white bg-primary rounded-xl btn-primary-glow hover:bg-primary/90 transition-all">
                Send via WhatsApp <ArrowRight size={15} />
              </button>
              <p className="text-[11px] text-muted-foreground text-center">We respond to every enquiry, usually within 2 hours.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
