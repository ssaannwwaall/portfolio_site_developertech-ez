const testimonials = [
  {
    content:
      "Sanwal delivered our Flutter app ahead of schedule and handled every technical challenge with confidence. The real-time tracking worked flawlessly on launch day. Would use DevelopersTech again without hesitation.",
    author: "James T.",
    role: "Operations Director",
    company: "UK Transportation Company",
    rating: 5,
    flag: "🇬🇧",
  },
  {
    content:
      "We needed a complex dispatch system built to enterprise standards. DevelopersTech understood our requirements better than we did and built something genuinely impressive. Clean code, clean handoff.",
    author: "Ahmed R.",
    role: "Founder",
    company: "Logistics SaaS, Dubai",
    rating: 5,
    flag: "🇦🇪",
  },
  {
    content:
      "I hired Sanwal through Fiverr for a Flutter project and came back for three more. Excellent communicator, fast delivery, and the quality of the code is something I can actually maintain.",
    author: "Michael K.",
    role: "Product Owner",
    company: "Startup, Germany",
    rating: 5,
    flag: "🇩🇪",
  },
  {
    content:
      "The AI chatbot integration Sanwal built for our platform increased user engagement significantly. He knew exactly how to work with the OpenAI APIs and built something production-ready from day one.",
    author: "Priya M.",
    role: "CTO",
    company: "EdTech Startup",
    rating: 5,
    flag: "🇮🇳",
  },
  {
    content:
      "DevelopersTech redesigned our web platform completely. Modern, fast, and SEO-optimized. We saw a measurable improvement in organic traffic within weeks of launch.",
    author: "Sara B.",
    role: "Marketing Director",
    company: "E-commerce Brand",
    rating: 5,
    flag: "🇵🇰",
  },
  {
    content:
      "Professional, honest, and technically excellent. Sanwal walked us through every decision and made sure we understood what we were building. Rare to find that combination.",
    author: "Daniel W.",
    role: "Founder & CEO",
    company: "B2B SaaS",
    rating: 5,
    flag: "🇺🇸",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/3 text-xs text-muted-foreground font-medium mb-4">
            Client Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We measure success by the outcomes we create for our clients — and by how often they come back.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glow-card bg-card border border-border/60 rounded-xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-primary text-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5 italic">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                  {t.flag}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
