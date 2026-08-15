import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Guard Monitoring and Patrol Management Software",
  description:
    "Guard patrol management software with GPS verified checkpoints, incident reporting and client dashboards. Over a thousand installs, used daily by UK security firms.",
  keywords: ["Guard Monitoring Software", "Patrol Management System", "Security Guard Tracking App", "Security Management Software", "Incident Reporting Software", "Guard Tour System", "Lone Worker Safety App"],
  alternates: { canonical: "/guard-monitoring-software" },
  openGraph: {
    title: "Guard Monitoring and Patrol Management Software | DevelopersTech",
    description: "GPS verified patrols, incident reporting and client dashboards. Live with UK security firms.",
    url: "/guard-monitoring-software",
  },
}

const config: LocationConfig = {
  region: "security operations",
  short: "security firms",
  eyebrow: "Guard monitoring software",
  h1: "Patrol management that security firms actually use.",
  h1Italic: 3,
  lede: "Softpatrol has over a thousand installs and runs daily for UK security operators. It exists because paper patrol logs cannot prove anything when a client disputes an invoice.",
  intro: [
    "Security operations run on proof. Proof a patrol happened. Proof of when an incident was reported and by whom. Proof you can put in front of a client who is questioning what they paid for last month.",
    "Paper logs and WhatsApp messages do not survive that conversation. A signature on a sheet proves someone had a pen. A GPS logged checkpoint scan with a timestamp proves someone was standing at that door at 2:14am, which is a different class of evidence entirely.",
    "We built Softpatrol around that problem specifically. Every checkpoint, incident and shift is captured with location and time, then surfaced in a dashboard you can show a client directly. It has passed a thousand installs on Google Play and is used by UK firms during live operations, including on sites where signal barely reaches.",
  ],
  points: [
    ["Patrols you can prove happened", "GPS logged checkpoint scans with timestamps. When a client asks whether the 3am round was completed, you have an answer with evidence rather than an assurance."],
    ["Works where signal does not", "Basements, stairwells, remote yards. Scans and reports are captured locally and synchronise when connectivity returns, so coverage is never lost to dead zones."],
    ["Incidents reach supervisors immediately", "Guards file from the field with photos, written notes and location. Supervisors see it as it happens rather than at the end of a shift."],
    ["Client dashboards that sell renewals", "Each site gets its own view showing coverage and incidents. Sharing verified activity with a client is the most effective contract renewal argument there is."],
  ],
  services: [
    ["Guard patrol application", "Checkpoint scanning, shift start and end, incident capture and lone worker check ins. Built for one handed use in poor light, because that is the reality."],
    ["Supervisor and control room portal", "Live guard positions, patrol completion status, incoming incidents and shift oversight across multiple sites simultaneously."],
    ["Client reporting dashboards", "Separate views per customer site, showing verified patrol coverage and logged incidents. Each client sees only their own data."],
    ["Rostering and shift management", "Shift assignment, availability, leave tracking and coverage gap alerts, built into the same system rather than a separate spreadsheet."],
    ["Incident and evidence management", "Structured incident capture with photographs, notes, location and timestamps, retained in a form that holds up when it is needed."],
    ["Lone worker safety features", "Check in timers, missed check in escalation and duress alerts for guards working sites alone, with defined escalation paths."],
  ],
  workIds: ["softpatrol"],
  working: [
    ["White label or custom build", "We can brand Softpatrol for your firm, or build a custom system around your specific operating procedures if they differ substantially."],
    ["Guard adoption is the real risk", "Software guards resent will be worked around. We design for a guard mid shift in bad weather with one free hand, not for a demo in an office."],
    ["Rollout site by site", "Deploying across every contract at once invites failure. We roll out progressively so problems surface on one site rather than all of them."],
    ["Support that understands shifts", "Security runs nights and weekends. Retainer clients have escalation paths that reflect that, because a failure at 2am cannot wait for Monday."],
  ],
  faqs: [
    ["Is your guard monitoring software already in use?", "Yes. Softpatrol is live on Google Play with over a thousand installs and is used daily by UK security firms. It is a maintained product, not a concept."],
    ["Does it work without a mobile signal?", "Yes. Checkpoint scans and incident reports are captured locally and synchronise when connectivity returns, so patrols in basements or remote sites are still logged accurately."],
    ["Can guards report incidents with photographs?", "Yes. Incidents are filed from the field with photos, written notes and GPS location, and reach supervisors immediately rather than at shift end."],
    ["Can we white label it for our own company?", "Yes. We can brand the application for your firm, or build a custom version around your operating procedures if they differ significantly from the standard flow."],
    ["How does client reporting work?", "Each client site has its own dashboard showing patrol coverage, completed checkpoints and logged incidents. You can share verified activity directly, which is considerably more persuasive than a summary email."],
    ["Does it handle rostering and shift planning?", "Yes. Shift assignment, availability, leave tracking and coverage gap alerts are part of the same system rather than requiring a separate tool."],
    ["What about lone worker safety requirements?", "Check in timers, missed check in escalation and duress alerts are supported, with escalation paths you define according to your own policy."],
  ],
  close: "Security software succeeds or fails on whether guards will use it. Here is how we approach that.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Guard Monitoring Software", path: "/guard-monitoring-software" }]} /><LocationPage c={config} /></>
}
