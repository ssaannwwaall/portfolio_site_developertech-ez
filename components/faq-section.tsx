"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What types of projects does DevelopersTech take on?",
    a: "We work on mobile apps (Flutter, Android, iOS), web applications, enterprise SaaS platforms, AI-powered tools, API development, and digital growth services. We're comfortable with both greenfield products and improving existing systems.",
  },
  {
    q: "How do you handle projects for international clients?",
    a: "We've worked with clients across the UK, UAE, Europe, and the US. We adapt to client time zones, use async-first communication, and deliver through structured milestones with clear documentation at every stage.",
  },
  {
    q: "Do you build minimum viable products (MVPs) for startups?",
    a: "Yes — in fact we enjoy it. We help founders define scope, prioritise ruthlessly, and ship a testable product quickly. We've helped several early-stage founders go from idea to app store in under 3 months.",
  },
  {
    q: "What does your development process look like?",
    a: "We follow a structured flow: discovery → scope and architecture → design → development → QA → deployment. We provide weekly progress updates, shared staging environments, and use tools like Jira, Notion, or whatever the client prefers.",
  },
  {
    q: "Can you integrate AI into an existing application?",
    a: "Absolutely. We integrate OpenAI, Anthropic's Claude, Google Gemini, and other AI APIs into existing mobile or web applications. This includes chatbots, content generation, recommendation systems, data extraction, and intelligent automation.",
  },
  {
    q: "How are projects priced?",
    a: "We offer fixed-price project agreements for well-defined scopes, and time-and-materials for ongoing development. We always provide a detailed breakdown upfront — no surprises. Book a free consultation and we'll give you an honest estimate.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. We offer dedicated support retainers for bug fixes, feature updates, and ongoing development. Many clients continue with us long after launch on a monthly basis.",
  },
  {
    q: "Can you also help with SEO and getting my site to rank on Google?",
    a: "Yes — we offer Technical SEO, On-page SEO, Local SEO, Google Business Profile management, and B2B lead generation services. We've helped software companies and businesses improve their organic visibility significantly.",
  },
  {
    q: "What's the best way to get started?",
    a: "The easiest first step is a free 30-minute consultation — no commitment required. Just hit 'Book a Call' and we'll discuss your project, timeline, and budget to see if we're a good fit.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="section-padding px-4 bg-card/20">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/3 text-xs text-muted-foreground font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before we start building together.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-foreground font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 bg-card border border-border/60 rounded-2xl">
          <p className="text-muted-foreground mb-4">Still have questions? We're happy to answer them directly.</p>
          <button
            onClick={() => {
              const msg = "Hi Sanwal! I have some questions about working with DevelopersTech."
              window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-colors text-sm"
          >
            Ask a Question via WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
