import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Software Development Company for USA Clients",
  description:
    "Software development for US startups and businesses. Flutter apps, AI platforms and SaaS. One US client returned for four projects. 5.0 across 59 verified reviews. Honest estimates.",
  keywords: ["Software Development Company USA", "Flutter App Developers USA", "Offshore Software Development USA", "Mobile App Development Company USA", "AI Development Company USA", "SaaS Development USA", "MVP Development USA"],
  alternates: { canonical: "/software-development-company-usa" },
  openGraph: {
    title: "Software Development Company for USA Clients | DevelopersTech",
    description: "Flutter apps, AI platforms and SaaS for US startups. Repeat clients, five star rated.",
    url: "/software-development-company-usa",
  },
}

const config: LocationConfig = {
  region: "the United States",
  short: "the US",
  eyebrow: "Serving the United States",
  h1: "Software development for US startups and product teams.",
  h1Italic: 2,
  lede: "Our American clients keep coming back. One has run four separate projects with us. That repeat rate says more about how we work than any case study we could write.",
  intro: [
    "American founders and product owners make up the largest share of our repeat business. The pattern is consistent enough to be worth naming: a first small project, then a second, then a standing relationship that runs for years.",
    "That happens for an unglamorous reason. We take scope seriously. You get a written brief before anyone writes code, weekly builds you can open yourself, and a handover at the end that your own engineers can actually work from. None of this is remarkable. It is simply rarer than it should be.",
    "US work also tends to move faster and iterate harder than European or Gulf projects. Founders want something testable in front of users quickly, then want to change it based on what happens. We build for that: architecture that tolerates direction changes without requiring a rewrite three months in.",
  ],
  points: [
    ["A client who came back four times", "One US buyer has commissioned four separate projects with our team. Their public review mentions consistency and communication, which is the part most offshore engagements get wrong."],
    ["MVP thinking, production standards", "We help founders cut scope to what actually needs to exist for launch, then build that properly. Fast and disposable are not the same thing, and we do not ship the second."],
    ["AI that survives real usage", "We integrate OpenAI, Claude and Gemini into live products. Rate limiting, fallback behaviour, cost control and prompt versioning are handled, because demos and production have different requirements."],
    ["Written estimates, not ranges", "You receive a breakdown with line items. If scope shifts mid project we tell you before the work happens, not when the invoice arrives."],
  ],
  services: [
    ["MVP development for founders", "Scoping, building and shipping a first version that real users can test. We push back on features that can wait, which is usually most of them."],
    ["Flutter apps for iOS and Android", "One codebase covering both stores. For a US startup watching runway, this is typically the difference between one build cycle and two."],
    ["AI product integration", "Chatbots, retrieval systems, content generation and agentic workflows built on OpenAI, Claude and Gemini. Built to hold up when usage climbs and costs matter."],
    ["SaaS platform engineering", "Multi tenant architecture, Stripe billing, role based permissions, admin tooling and the analytics layer investors will ask about."],
    ["Web applications on Next.js", "Marketing sites, product dashboards and customer portals built for speed, search visibility and Core Web Vitals scores that hold up."],
    ["Fractional engineering support", "Ongoing development capacity for teams without a full time engineer. Monthly retainer, predictable cost, no hiring process."],
  ],
  workIds: ["ai", "jamgo", "fitness"],
  working: [
    ["Timezone and communication", "We schedule calls in your morning or evening and work asynchronously between them. Weekly builds land on staging so you can review progress on your own schedule rather than waiting for a status call."],
    ["Contracts and payment", "Standard written agreements, invoiced in USD. We can work under your MSA or provide our own. NDAs signed before project discussion whenever you prefer."],
    ["Start small if you want to", "Most of our long running US relationships began with one focused project. Testing a team on something small is sensible, and we would rather earn the second project than argue for it upfront."],
    ["You own everything", "Source code, documentation and deployment access transfer at completion. No licensing arrangement on your own product, no dependency on us to make changes later."],
  ],
  faqs: [
    ["Do you work with early stage US startups?", "Frequently. Founders are a significant part of our work. We help define scope, prioritise what genuinely matters for launch, and ship something testable rather than something bloated that arrives late."],
    ["How do you handle the timezone gap?", "Calls happen in your morning or evening, and we work asynchronously in between. Weekly builds land on a staging environment you can open whenever suits you, so progress is verifiable without a meeting."],
    ["Can we start with a small test project?", "Yes, and we encourage it. Most of our long running American relationships started with one contained project before scaling up. It is a reasonable way to evaluate a team."],
    ["What references can we check?", "Our Fiverr profile carries fifty nine verified reviews at a 5.0 average, including detailed feedback from a US buyer who returned for four separate projects. It is public and linked throughout this site."],
    ["Who owns the intellectual property?", "You do, completely. Source code, documentation and deployment access transfer to you at completion. We retain nothing and there is no licensing arrangement on your product."],
    ["How do you price AI features?", "AI work is quoted like any other engineering, but we also model the running cost of API usage at your expected volume. Founders are often surprised by inference costs at scale, and it is better to know before launch."],
    ["Can you work under our existing contract or MSA?", "Yes. We are happy to work under your paperwork rather than insisting on ours. Send it across and we will review and sign."],
  ],
  close: "American engagements tend to move quickly, so here is the practical detail upfront rather than three emails in.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development USA", path: "/software-development-company-usa" }]} /><LocationPage c={config} /></>
}
