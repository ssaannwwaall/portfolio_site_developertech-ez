import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Software Development Company for Europe",
  description:
    "Software development for European businesses. Flutter apps, SaaS and AI with GDPR aware architecture and EU data residency. Our German client returned for four projects.",
  keywords: ["Software Development Company Europe", "Flutter App Development Europe", "Offshore Software Development Europe", "GDPR Compliant Software Development", "Mobile App Development Germany", "SaaS Development Europe", "EU Data Residency"],
  alternates: { canonical: "/software-development-europe" },
  openGraph: {
    title: "Software Development Company for Europe | DevelopersTech",
    description: "Flutter apps, SaaS and AI platforms with GDPR aware architecture for European clients.",
    url: "/software-development-europe",
  },
}

const config: LocationConfig = {
  region: "Europe",
  short: "Europe",
  eyebrow: "Serving European businesses",
  h1: "Software development for European businesses.",
  h1Italic: 2,
  lede: "Our German client hired us once, then three more times. When asked why, the answer was code quality their own team could maintain. That is the only review that really counts.",
  intro: [
    "European clients tend to care about the same things our engineers do. Whether the architecture makes sense. How personal data moves through the system. Whether a new developer joining in two years will understand what was built and why.",
    "Those questions are unglamorous and they are also the right ones. A product that ships quickly but cannot be maintained is a liability disguised as an asset, and European buyers seem to recognise that faster than most markets.",
    "GDPR is treated as an architecture decision here rather than a compliance document written afterwards. Data residency, consent capture, retention and deletion are designed into the schema and the service boundaries. Bolting compliance onto a live system is expensive, and the conversation is much easier when it was never necessary.",
  ],
  points: [
    ["A German client who returned four times", "Hired for one Flutter project, then three more. The stated reason was code quality their internal team could actually maintain without us."],
    ["GDPR designed in, not added later", "Data residency, consent flows, retention and deletion decided before the schema is written. Retrofitting compliance is expensive and entirely avoidable."],
    ["EU data residency available", "Deployment to EU regions on AWS, Google Cloud or Vercel, chosen according to what your compliance position and procurement process require."],
    ["Documentation written for successors", "Every handover includes technical documentation aimed at engineers who were not on the project. That is what makes maintainability real rather than claimed."],
  ],
  services: [
    ["Flutter applications for EU markets", "Cross platform apps with multi language support built into the architecture. German, French, Spanish and others within a single codebase."],
    ["GDPR aware SaaS platforms", "Multi tenant systems with consent management, data export, right to erasure and audit logging designed in from the start rather than added under pressure."],
    ["AI integration with data controls", "OpenAI, Claude and Gemini built into products, with explicit control over what data leaves your infrastructure and what does not."],
    ["Enterprise web platforms", "Next.js applications with strong Core Web Vitals, accessibility standards and the reporting depth European procurement processes tend to ask for."],
    ["System modernisation", "Migrating ageing applications to maintainable architectures. We audit first and give an honest recommendation, which is sometimes to keep what you have."],
    ["Long term maintenance partnerships", "Ongoing development relationships rather than one off builds. Several European clients have worked with us across multiple years and projects."],
  ],
  workIds: ["jamgo", "ai", "softpatrol"],
  working: [
    ["Overlapping working hours", "Our day covers most of the European working day. Questions raised in your morning are answered the same day rather than waiting until tomorrow."],
    ["Contracts and invoicing", "Written agreements invoiced in EUR, GBP or USD. We are comfortable working under your procurement paperwork, including NDAs signed before project discussion."],
    ["Data processing agreements", "We can sign a DPA where your compliance position requires one, and we are happy to document how data flows through the system for your records."],
    ["Complete handover", "Source code, documentation, deployment access and architecture notes transfer at completion. Your team takes full control whenever it suits you."],
  ],
  faqs: [
    ["How do you handle GDPR requirements?", "As architecture decisions rather than compliance paperwork. Data residency, consent capture, retention and deletion are designed into the schema at the start, which is considerably cheaper than adding them to a live system later."],
    ["Have you worked with European clients before?", "Yes. Our German client engaged us across four separate projects. We have also delivered web platform work for other European clients, including production systems still running."],
    ["Can data be hosted within the EU?", "Yes. We deploy to EU regions on AWS, Google Cloud or Vercel, selected according to what your compliance position and procurement requirements dictate."],
    ["Will you sign a DPA or NDA?", "Both, and neither is unusual to ask for. We can also document how personal data moves through the system if you need that for your own compliance records."],
    ["How are contracts and invoicing handled?", "Standard written agreements invoiced in EUR, GBP or USD. We are equally happy working under your procurement paperwork rather than insisting on our own."],
    ["What languages can you support in an application?", "Multi language support is built into the architecture rather than added at the interface. German, French, Spanish and others coexist in one codebase without the usual layout breakage."],
    ["Do you offer long term maintenance?", "Yes. Thirty days of support is included on every project, and several European clients have continued with monthly retainers across multiple years."],
  ],
  close: "European procurement tends to ask detailed questions early, which we appreciate. Here are the answers upfront.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development Europe", path: "/software-development-europe" }]} /><LocationPage c={config} /></>
}
