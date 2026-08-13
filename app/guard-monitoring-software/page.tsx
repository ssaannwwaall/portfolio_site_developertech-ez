import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Guard Monitoring and Patrol Management Software",
  description:
    "Guard patrol management software with live GPS tracking, patrol scheduling, incident reporting and multi client dashboards. Over one thousand downloads, live with UK security firms.",
  keywords: ["Guard Monitoring Software", "Patrol Management System", "Security Guard Tracking App", "Security Management Software", "Incident Reporting Software", "Guard Tour System"],
  alternates: { canonical: "/guard-monitoring-software" },
  openGraph: {
    title: "Guard Monitoring and Patrol Management Software | DevelopersTech",
    description: "Live GPS patrol tracking, scheduling and incident reporting. Live with UK security firms.",
    url: "/guard-monitoring-software",
  },
}

const config: LocationConfig = {
  region: "security firms",
  short: "security operations",
  eyebrow: "Guard monitoring software",
  h1: "Patrol management that security firms actually use.",
  h1Italic: 3,
  lede: "Live GPS patrol tracking, shift scheduling, incident reporting and multi client dashboards. Our Softpatrol platform has over a thousand downloads and runs daily for UK security operators.",
  intro: [
    "Security operations run on proof. Proof that a patrol happened, proof of when an incident was reported, proof you can put in front of a client when they question the invoice.",
    "We built Softpatrol around exactly that problem. Every checkpoint, every incident and every shift is logged with location and timestamp, and surfaced in dashboards a client can be shown directly.",
  ],
  points: [
    ["Verified patrol tracking", "GPS logged checkpoints with timestamps, so completed patrols are provable rather than assumed."],
    ["Incident reporting", "Guards file incidents from the field with photos, notes and location, delivered to supervisors immediately."],
    ["Shift and holiday scheduling", "Roster management, shift assignment and leave tracking built into the same system rather than a separate spreadsheet."],
    ["Multi client dashboards", "Separate views per client site, so each customer sees their own coverage without seeing anyone else's."],
  ],
  workIds: ["softpatrol"],
  faqs: [
    ["Is your guard monitoring software already in use?", "Yes. Softpatrol is live on Google Play with over a thousand downloads and is used daily by UK security firms."],
    ["Does it work offline?", "Yes. Checkpoint scans and incident reports are captured locally and synchronised when signal returns, so patrols in basements or remote sites are still logged correctly."],
    ["Can guards report incidents with photos?", "Yes. Incidents are filed from the field with photos, written notes and GPS location, and reach supervisors immediately."],
    ["Can we white label it for our company?", "Yes. We can brand the application for your firm, or build a custom version around your specific operating procedures."],
    ["How does client reporting work?", "Each client site has its own dashboard showing patrol coverage, completed checkpoints and logged incidents, so you can share verified activity directly with the customer."],
  ],
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Guard Monitoring Software", path: "/guard-monitoring-software" }]} /><LocationPage c={config} /></>
}
