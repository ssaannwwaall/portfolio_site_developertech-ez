import { Star, Quote } from "lucide-react"

const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%20saw%20your%20Fiverr%20reviews%20and%20I%27d%20like%20to%20work%20with%20DevelopersTech."

// Real reviews from Fiverr profile: fiverr.com/sanwalkhan842 (5.0 ★, 59 reviews)
const REVIEWS = [
  {
    body: "Working with Sanwal has been an excellent experience from start to finish. He is extremely professional, reliable, and always communicates clearly throughout the process. We are returning customers because of the consistency and quality of his work.",
    author: "trudef",    flag: "🇺🇸", role: "Repeat Client · 4× orders",       rating: 5, source: "Fiverr"
  },
  {
    body: "Sanwal has been outstanding to work with. He's dedicated, communicates clearly, and doesn't stop until the customer is fully satisfied. Any time changes were needed, he made them quickly and kept us updated. Highly recommended!",
    author: "trudef",    flag: "🇺🇸", role: "Verified Fiverr Buyer",             rating: 5, source: "Fiverr"
  },
  {
    body: "Good experience overall. The developer communicated professionally throughout, understood the scope well and delivered within the agreed timeline. He was cooperative and responsive in addressing all feedback.",
    author: "claudz85",  flag: "🇬🇧", role: "UK Client · Flutter App",          rating: 5, source: "Fiverr"
  },
  {
    body: "It has been such a pleasure working with Sanwal and his team. They have been such helpful, professional individuals. When we had questions, they answered accordingly and helped walk us through every step.",
    author: "trudef",    flag: "🇺🇸", role: "Figma & Flutter Project",           rating: 5, source: "Fiverr"
  },
  {
    body: "Thank you Sanwal for all of your work! We are looking forward to the final product and to working with you again in the near future ⭐️",
    author: "trudef",    flag: "🇺🇸", role: "Long-term Fiverr Client",           rating: 5, source: "Fiverr"
  },
  {
    body: "Delivered our Flutter app on time with clean code and proper documentation. Real-time features worked flawlessly from day one. Professional communication throughout the entire project.",
    author: "UK Transport Client", flag: "🇬🇧", role: "Enterprise Client",      rating: 5, source: "Direct"
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_,i) => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <span className="dt-badge">Client Feedback</span>
          <h2 className="section-title mt-4 mb-3">What Clients Say</h2>
          <p className="section-sub mx-auto">
            Verified reviews from Fiverr. 59 reviews · 5.0 overall rating · repeat clients from UK, US & UAE.
          </p>
          <a href="https://www.fiverr.com/sanwalkhan842" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-[13px] text-primary hover:underline">
            View all reviews on Fiverr →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {REVIEWS.map((r,i) => (
            <div key={i} className="card-hover bg-card rounded-2xl p-5 md:p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <Stars n={r.rating} />
                <span className="text-[10px] px-2 py-1 rounded-full border border-border text-muted-foreground">{r.source}</span>
              </div>
              <div className="mb-4 flex-1">
                <Quote size={18} className="text-primary/40 mb-2" />
                <p className="text-[13px] text-muted-foreground leading-[1.8] italic">"{r.body}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-[18px]">{r.flag}</div>
                <div>
                  <div className="text-[13px] font-semibold text-foreground">{r.author}</div>
                  <div className="text-[11px] text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate stats */}
        <div className="grid grid-cols-3 gap-1 max-w-md mx-auto mt-10 border border-border rounded-2xl overflow-hidden mx-4 md:mx-auto">
          {[["5.0","Overall Rating"],["59","Total Reviews"],["4.9","Value Rating"]].map(([v,l])=>(
            <div key={l} className="bg-card/60 py-4 text-center">
              <div className="text-2xl font-extrabold gradient-text">{v}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
