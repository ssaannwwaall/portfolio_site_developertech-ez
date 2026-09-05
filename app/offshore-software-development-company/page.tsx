import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Offshore Software Development Company",
  description:
    "An offshore software development team with products in daily commercial use across the UK, UAE and Europe. Fixed scope, written estimates, full code ownership, 5.0 from 59 reviews.",
  keywords: [
    "offshore software development company",
    "offshore development team",
    "outsource software development",
    "offshore app development company",
    "dedicated development team",
    "nearshore vs offshore development",
  ],
  alternates: { canonical: "/offshore-software-development-company" },
  openGraph: {
    title: "Offshore Software Development Company | DevelopersTech",
    description: "Offshore engineering with products running commercially in the UK, UAE and Europe.",
    url: "/offshore-software-development-company",
  },
}

const config: LocationConfig = {
  region: "clients hiring offshore",
  short: "offshore engagements",
  eyebrow: "Offshore software development",
  h1: "Offshore engineering without the usual compromises.",
  h1Italic: 3,
  lede: "Most offshore horror stories come from the same three failures: unclear scope, invisible progress, and code nobody can maintain afterwards. Each one is preventable and each one is a choice.",
  intro: [
    "Hiring offshore is a reasonable commercial decision that frequently goes badly, and the reasons are consistent enough to be worth naming. Scope was never written down properly. Progress was reported rather than demonstrated. And the code that arrived at the end could not be maintained by anyone else.",
    "None of those are inherent to working across borders. They are what happens when a team is optimising for winning the contract rather than for the client still being happy in a year. We have inherited enough of these projects to know the pattern.",
    "Our position is straightforward. Written scope with line items before anything starts. A build every week that you open yourself rather than a status email. Documentation written for engineers who were not on the project. If those three things are in place, offshore is simply engineering.",
  ],
  points: [
    ["Scope written before code", "A brief with line items and a realistic timeline, produced after discovery. If scope changes we raise it before the work happens, not when the invoice arrives."],
    ["Progress you verify yourself", "A build lands on staging every week. You open it and form your own view rather than trusting a percentage in an email."],
    ["Code your next engineer can read", "Mainstream stacks chosen deliberately so your future hires already know them, with documentation aimed at someone who was not involved."],
    ["Products still in commercial use", "Our dispatch and monitoring platforms run daily for operators in the UK and UAE. Maintained, not delivered and forgotten."],
  ],
  services: [
    ["Dedicated development team", "Ongoing engineering capacity on a monthly retainer, working as an extension of your team rather than a black box."],
    ["Fixed scope project delivery", "A defined build with a written breakdown, fixed price and an agreed timeline. Suited to work where the requirements are clear."],
    ["Mobile development", "Flutter across Android and iOS from one codebase, plus native work where a platform specific requirement demands it."],
    ["Web and SaaS platforms", "Next.js and Node.js applications, multi tenant architecture, billing, permissions and the admin tooling that comes with them."],
    ["AI integration", "OpenAI, Claude and Gemini built into live products, with cost modelling at your expected volume rather than at demo scale."],
    ["Taking over existing projects", "Auditing and continuing work another team started, including an honest assessment of whether continuing is the right call."],
  ],
  workIds: ["softpatrol", "tbms", "ai"],
  working: [
    ["Contracts, currency and paperwork", "Written agreements invoiced in USD, GBP, EUR or AED. We work under your MSA and sign NDAs before project discussion."],
    ["Timezone handled deliberately", "Our day overlaps European and Gulf business hours substantially, and reaches the American morning. Async work between calls rather than waiting on meetings."],
    ["Start small if you want to", "Most long running relationships here began with one contained project. Evaluating a team on something small is sensible and we prefer to earn the rest."],
    ["Complete handover", "Source code, documentation, architecture notes and deployment access transfer at completion. No lock in of any kind."],
  ],
  faqs: [
    ["What usually goes wrong with offshore development?", "Three things, consistently. Scope that was never written down, progress that was reported rather than shown, and code nobody else can maintain. All three are preventable and we address each deliberately."],
    ["How do we know work is actually progressing?", "A build lands on a staging environment every week and you open it yourself. Verification beats reporting, and it removes the need to trust a status update."],
    ["What about the timezone difference?", "Our working day overlaps European and Gulf hours substantially and reaches the American morning. Calls are scheduled in your day and work continues asynchronously between them."],
    ["Who owns the code?", "You do, entirely. Source, documentation and deployment access transfer at completion. No licensing arrangement and no dependency on us for future changes."],
    ["Can we start with a small project to evaluate you?", "Yes, and we recommend it. Most of our long running clients began with one contained build before scaling up."],
    ["Will you sign an NDA and work under our contract?", "Both, routinely. We are comfortable working under your paperwork rather than insisting on ours."],
    ["How do you price work?", "Fixed price for defined scope, monthly retainer for ongoing capacity. Either way you receive a written breakdown with line items before work begins, not a range."],
  ],
  close: "Offshore works when the process is deliberate, so here is exactly how ours is structured.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Offshore Software Development", path: "/offshore-software-development-company" }]} /><LocationPage c={config} /></>
}
