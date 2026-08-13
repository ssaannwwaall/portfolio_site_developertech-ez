const techCategories = [
  {
    name: "Mobile",
    items: ["Flutter", "Dart", "Android", "iOS", "Swift", "Kotlin", "React Native"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Java", "Spring Boot", "Python", "FastAPI", "Express.js", "Socket.IO"],
  },
  {
    name: "AI & ML",
    items: ["OpenAI API", "Claude API", "Gemini API", "LangChain", "TensorFlow", "Hugging Face"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Supabase", "SQLite"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "CI/CD", "Linux", "Nginx", "Vercel"],
  },
  {
    name: "Frontend & Tools",
    items: ["Next.js", "React", "TypeScript", "GraphQL", "REST APIs", "Git", "Figma"],
  },
  {
    name: "Integrations",
    items: ["Stripe", "PayPal", "Google Maps", "Firebase Push", "Twilio", "SendGrid", "Zapier"],
  },
]

const highlights = [
  { label: "Flutter", note: "Primary mobile framework, 5+ years" },
  { label: "Firebase", note: "Real-time DB, Auth, Push, Functions" },
  { label: "Java / Spring Boot", note: "Backend systems & enterprise APIs" },
  { label: "OpenAI & Claude APIs", note: "AI product development" },
  { label: "Google Maps API", note: "Tracking, navigation & corrections" },
  { label: "Node.js", note: "REST APIs & microservices" },
]

export function TechStackSection() {
  return (
    <section id="tech" className="section-padding px-4 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/3 text-xs text-muted-foreground font-medium mb-4">
            Technology
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built With the{" "}
            <span className="gradient-text">Right Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We choose technologies based on what's right for the product, not what's trendy. Here's our core stack.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="glow-card flex items-center gap-3 px-4 py-3 bg-card border border-border/60 rounded-xl"
            >
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <div>
                <span className="text-sm font-semibold text-foreground">{h.label}</span>
                <span className="text-xs text-muted-foreground ml-2">{h.note}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {techCategories.map((category) => (
            <div
              key={category.name}
              className="bg-card border border-border/60 rounded-xl p-5 glow-card"
            >
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                {category.name}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
