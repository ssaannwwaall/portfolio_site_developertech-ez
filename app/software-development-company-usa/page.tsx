import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Software Development Company for USA Clients",
  description:
    "Software development for US startups and businesses. Flutter apps, AI platforms and SaaS products. Five star rated by repeat US clients. Free consultation, honest estimates.",
  keywords: ["Software Development Company USA", "Flutter App Developers USA", "Offshore Software Development USA", "Mobile App Development Company USA", "AI Development Company USA", "SaaS Development USA"],
  alternates: { canonical: "/software-development-company-usa" },
  openGraph: {
    title: "Software Development Company for USA Clients | DevelopersTech",
    description: "Flutter apps, AI platforms and SaaS for US startups and businesses. Repeat five star clients.",
    url: "/software-development-company-usa",
  },
}

const config: LocationConfig = {
  region: "the United States",
  short: "the US",
  eyebrow: "Serving the United States",
  h1: "Software development for US startups and teams.",
  h1Italic: 2,
  lede: "Our US clients keep coming back. One has run four separate projects with us. Flutter apps, AI platforms, product design, delivered on schedule with code your team can actually maintain.",
  intro: [
    "US founders and product owners make up a large share of our repeat business. The pattern is consistent: a first project, then a second, then a standing relationship.",
    "That happens because we treat scope seriously. You get a written brief before work starts, weekly builds you can open yourself, and a clean handoff at the end with documentation your own engineers can pick up.",
  ],
  points: [
    ["Repeat US clients", "One US client has commissioned four separate projects with our team. Our Fiverr profile carries a five star rating across fifty nine reviews."],
    ["MVP to production", "We help founders scope ruthlessly and ship something testable fast, then scale it properly once the market responds."],
    ["AI that ships", "We integrate OpenAI, Claude and Gemini into live products. Chatbots, automation, retrieval systems, built to hold up under real usage."],
    ["Clear written estimates", "You receive a breakdown with line items, not a range. If scope changes, we tell you before the work happens, not after."],
  ],
  workIds: ["ai", "jamgo", "fitness"],
  faqs: [
    ["Do you work with US startups?", "Yes. Early stage founders are a significant part of our work. We help define scope, prioritise what actually matters for launch, and ship something testable rather than something bloated."],
    ["How does the timezone difference work?", "We schedule calls in your morning or evening and work asynchronously between them. Weekly builds land on a staging environment so you can check progress on your own schedule."],
    ["Can we start with a small test project?", "Absolutely, and we encourage it. Most of our long running US relationships started with one focused project before scaling up."],
    ["Do you have references we can check?", "Our Fiverr profile carries fifty nine verified reviews with a five star average, including detailed feedback from repeat US buyers. It is public and linked throughout this site."],
    ["Who owns the code?", "You do, completely. Source code, documentation and deployment access transfer to you at completion. No lock in, no licensing games."],
  ],
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development USA", path: "/software-development-company-usa" }]} /><LocationPage c={config} /></>
}
