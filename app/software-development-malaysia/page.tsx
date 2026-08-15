import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Software Development Company Malaysia",
  description:
    "Software house services for Malaysian businesses. Flutter apps, web platforms, SaaS and AI integration. Close timezone, multi language support, enterprise standards at regional rates.",
  keywords: ["Software Development Company Malaysia", "Mobile App Development Malaysia", "Software House Malaysia", "Flutter Developers Malaysia", "Web Development Company Malaysia", "SaaS Development Malaysia", "App Developer Kuala Lumpur"],
  alternates: { canonical: "/software-development-malaysia" },
  openGraph: {
    title: "Software Development Company Malaysia | DevelopersTech",
    description: "Flutter apps, web platforms and SaaS for Malaysian businesses and startups.",
    url: "/software-development-malaysia",
  },
}

const config: LocationConfig = {
  region: "Malaysia",
  short: "Malaysia",
  eyebrow: "Serving Malaysia and Southeast Asia",
  h1: "Software development for Malaysian businesses.",
  h1Italic: 2,
  lede: "The same architecture discipline we apply to British enterprise work, at rates that make sense for a company growing across Southeast Asia.",
  intro: [
    "Malaysian businesses expanding regionally face a specific problem. The software that got you to this point often will not survive the next stage, and rebuilding at that moment is expensive and badly timed.",
    "We build for the load you expect in two years rather than the load you have today. That is not over engineering, it is choosing a database schema and service boundary that can absorb growth without a rewrite. The cost difference at build time is small. The cost difference at scale is not.",
    "The timezone helps considerably. Only a few hours separate us, which means questions get answered inside your working day rather than the next morning. Compared with engaging a European or American vendor, the practical difference in momentum is substantial.",
  ],
  points: [
    ["Enterprise standards at regional cost", "The same discipline we apply to UK enterprise work, priced for a growing Southeast Asian business rather than a London one."],
    ["A few hours apart, not twelve", "Our working days overlap heavily. You send a question in the morning and have an answer before you leave, which changes how quickly a project actually moves."],
    ["Multi language from the schema up", "Bahasa Malaysia, Chinese and English inside one application, with localisation designed into the data model rather than patched on at the interface."],
    ["Architected for the next stage", "We design for the traffic you expect after expansion. Rebuilding at eighteen months because the foundation was too thin is a cost we would rather you avoid."],
  ],
  services: [
    ["Flutter apps for regional launch", "One codebase covering Android and iOS across multiple Southeast Asian markets, with language and currency handling built in from the start."],
    ["SaaS platforms built to scale", "Multi tenant architecture, subscription billing and role based access, structured so adding a new market does not require re engineering."],
    ["E-commerce and marketplace systems", "Storefronts, vendor management, order flows and regional payment gateway integration for businesses selling across borders."],
    ["Business automation and internal tools", "Replacing spreadsheet driven processes with software. Inventory, approvals, reporting and the operational workflows that quietly consume staff hours."],
    ["AI integration for regional products", "OpenAI, Claude and Gemini built into live products, including handling for multiple languages in the same conversation flow."],
    ["Web platforms and dashboards", "Next.js applications with strong performance scores, structured for search visibility in regional markets rather than only in English."],
  ],
  workIds: ["restaurant", "ai", "crypto"],
  working: [
    ["Close timezone collaboration", "Only a few hours between us. In practice this means same day answers and calls at reasonable hours, which is the single biggest practical advantage over a Western vendor."],
    ["Contracts and invoicing", "Written agreements invoiced in MYR, USD or SGD. Straightforward paperwork without unnecessary legal overhead."],
    ["Transparent pricing", "A written breakdown with line items before development starts. Our rates are typically competitive with regional agencies while carrying delivery experience from UK and Gulf commercial projects."],
    ["Full ownership at handover", "Source code, documentation and deployment access transfer at completion. Your team can take over maintenance whenever you choose to."],
  ],
  faqs: [
    ["Do you work with Malaysian companies?", "Yes, and across Southeast Asia generally. The close timezone overlap makes collaboration considerably smoother than working with a European or American vendor, which is often the deciding factor."],
    ["How do your rates compare to local agencies?", "Typically competitive with regional agencies, while bringing delivery experience from UK enterprise and Gulf commercial projects. You are not paying a premium for that background."],
    ["Can you build multi language applications?", "Yes. Bahasa Malaysia, Chinese and English within one application, with localisation designed into the data model rather than patched into the interface at the end."],
    ["Which regional payment gateways can you integrate?", "The gateways your market requires, alongside Stripe and standard card processing, with full testing before launch rather than after."],
    ["What is a realistic project timeline?", "A focused MVP typically runs six to twelve weeks. Larger platforms take longer. You receive a realistic timeline in writing after the discovery call, not an optimistic one designed to win the work."],
    ["Do you work with startups or only established businesses?", "Both. Early stage founders and established companies expanding regionally are equally common in our work, though the approach differs between them."],
    ["Can you help if we already have a development team?", "Yes. We work alongside internal teams on specific components, or provide additional capacity during a push. It does not have to be all or nothing."],
  ],
  close: "Southeast Asian engagements benefit from the timezone overlap, and here is how that plays out in practice.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development Malaysia", path: "/software-development-malaysia" }]} /><LocationPage c={config} /></>
}
