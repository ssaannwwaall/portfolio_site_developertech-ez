import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Flutter App Development Company UK",
  description:
    "Flutter app development for UK businesses. We built dispatch and guard monitoring systems running daily for UK operators. GDPR aware architecture, UK hours, fixed scope. Free consultation.",
  keywords: ["Flutter App Development UK", "Mobile App Development Company UK", "Software Development Company UK", "Taxi Dispatch Software UK", "Guard Monitoring Software UK", "App Developers UK", "Flutter Agency London"],
  alternates: { canonical: "/flutter-app-development-uk" },
  openGraph: {
    title: "Flutter App Development Company UK | DevelopersTech",
    description: "Cross platform Flutter apps and operational systems for UK businesses. Live products with UK operators.",
    url: "/flutter-app-development-uk",
  },
}

const config: LocationConfig = {
  region: "the United Kingdom",
  short: "the UK",
  eyebrow: "Serving the United Kingdom",
  h1: "Flutter app development for UK businesses.",
  h1Italic: 2,
  lede: "Most of our enterprise experience comes from British operators. Dispatch systems, guard monitoring, workforce platforms. Software that runs a business every day, not software that photographs well.",
  intro: [
    "The United Kingdom is where our team learned what production software actually demands. We spent five years building and maintaining commercial platforms for a UK enterprise client, and that work still shapes how we approach every system we ship.",
    "Two of those platforms are running now. TBMS handles live dispatch for a British transport operator, allocating jobs and tracking drivers through a working day. Softpatrol manages guard patrols for UK security firms, with over a thousand installs on Google Play. Neither is a portfolio piece. Both are load bearing.",
    "That background matters because British businesses tend to ask harder questions than most. What happens when a driver loses signal in a multi storey car park. How is personal data handled under UK GDPR. Who owns the code if we part ways. We have answered all three in front of real clients, which is a different exercise from answering them in a proposal.",
  ],
  points: [
    ["Live products with UK operators", "TBMS and Softpatrol are both in daily commercial use in Britain. When we describe dispatch logic or patrol verification, we are describing systems we maintain, not features we have read about."],
    ["Working hours that overlap yours", "Our day covers the British morning and most of the afternoon. Questions raised at 10am are usually answered before you finish lunch, rather than waiting overnight for a reply from another timezone."],
    ["UK GDPR handled at architecture stage", "Data residency, consent capture and retention rules are decided before the schema is written. Retrofitting compliance into a live system is expensive, and we would rather not send you that invoice."],
    ["Fixed scope with line items", "You receive a written breakdown before development starts. Not a range, not a day rate with an open end. If scope changes we raise it before the work happens."],
  ],
  services: [
    ["Flutter apps for UK field teams", "Driver apps, engineer apps, patrol apps. Anything where staff are away from a desk and connectivity is unreliable. We build for degraded signal because British basements and rural routes demand it."],
    ["Dispatch and scheduling systems", "Real time job allocation, driver state management, automated reallocation when a job is declined. Built from the dispatch platform we already run for a UK operator."],
    ["Workforce monitoring platforms", "Patrol verification, incident capture, shift rostering and client reporting. Softpatrol covers this ground and can be adapted or rebuilt around your procedures."],
    ["Web platforms and admin portals", "Next.js dashboards for operations teams, with role based access, exportable reporting and the audit trail British clients tend to require."],
    ["Legacy system modernisation", "We have migrated native Android estates to Flutter and cut ongoing maintenance cost by roughly forty percent. We audit first and tell you honestly whether rebuilding beats extending."],
    ["Ongoing maintenance retainers", "Several UK relationships continue monthly after launch. Feature work, platform updates, App Store and Play Store compliance as requirements change."],
  ],
  workIds: ["softpatrol", "tbms"],
  working: [
    ["Contracts and invoicing", "We work to standard written agreements and invoice in GBP, USD or EUR. NDAs signed before any project detail is discussed, if you prefer to start there."],
    ["Weekly builds on staging", "Every week a build lands on a shared staging environment you can open yourself. Progress is something you verify, not something we report."],
    ["Code and documentation handover", "Source code, technical documentation and deployment access transfer to you at completion. No vendor lock in and no licensing arrangement on your own product."],
    ["Thirty days post launch support", "Included on every project. Most UK clients then continue on a monthly retainer, though there is no obligation to."],
  ],
  faqs: [
    ["Have you actually delivered software for UK companies?", "Yes, and it is still running. TBMS handles dispatch for a British transport operator and Softpatrol is used by UK security firms with over a thousand Play Store installs. Both are in daily commercial operation rather than sitting in a portfolio."],
    ["How does the timezone difference work in practice?", "Our working day covers the UK morning and most of the afternoon. In practice you send a question during your morning and have an answer well before end of day. Calls are scheduled in your afternoon, which suits both sides."],
    ["Do you handle UK GDPR requirements?", "Yes. Data residency, consent capture and retention policies are architecture decisions we make at the start of a project. We can deploy to UK or EU regions depending on what your compliance position requires."],
    ["Will you sign an NDA before we discuss the project?", "Yes, and it is a reasonable thing to ask for. Mention it on the first call and we will have it signed before you share anything commercially sensitive."],
    ["What does a UK project typically cost?", "It depends entirely on scope, and any firm who quotes before understanding the scope is guessing. A focused MVP sits considerably below a full operational platform. After the discovery call you receive a written breakdown with line items, invoiced in GBP if that is easier for your finance team."],
    ["Can you take over a project another developer started?", "Often yes. We audit the existing codebase first and give you an honest answer on whether continuing or rebuilding is the better commercial decision. Sometimes the honest answer is that the existing work is sound and you should stay with it."],
    ["What happens after the app launches?", "Thirty days of support is included on every project, covering fixes and adjustments. Beyond that most UK clients move to a monthly retainer for feature development and platform maintenance, but you are not committed to it."],
  ],
  close: "British clients tend to want the practical detail before the sales conversation, which suits us. Here is how engagements actually run.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Flutter App Development UK", path: "/flutter-app-development-uk" }]} /><LocationPage c={config} /></>
}
