import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Taxi Dispatch Software Development",
  description:
    "Custom taxi dispatch software with real time job allocation, GPS driver tracking and automated earnings reporting. Our dispatch platform runs daily operations for a UK operator.",
  keywords: ["Taxi Dispatch Software", "Taxi Booking App Development", "Ride Hailing App Development", "Fleet Management Software", "Chauffeur Booking Software", "Dispatch System Development", "Private Hire Software"],
  alternates: { canonical: "/taxi-dispatch-software" },
  openGraph: {
    title: "Taxi Dispatch Software Development | DevelopersTech",
    description: "Real time dispatch, GPS tracking and driver management. Live with UK and UAE operators.",
    url: "/taxi-dispatch-software",
  },
}

const config: LocationConfig = {
  region: "transport operators",
  short: "operators",
  eyebrow: "Taxi dispatch software",
  h1: "Dispatch software built for operators who run it daily.",
  h1Italic: 3,
  lede: "Our dispatch platform allocates jobs, tracks drivers and reconciles earnings for a UK transport operator every working day. This is not a product demo we are describing.",
  intro: [
    "Dispatch software is harder than it appears from the outside. The visible part is a map with cars on it. The difficult part is everything underneath: allocation logic that respects your business rules, driver state that stays accurate when the network does not, and earnings reconciliation that drivers will actually trust.",
    "Most systems get one of these right. The map looks good but jobs allocate badly, or allocation works but the day's earnings never match what drivers counted. Operators end up patching around the software rather than being helped by it.",
    "We built TBMS for a UK transport operator and have maintained it through real operational conditions. Peak hours, drivers in underground car parks, jobs declined at the worst moment, disputed shift totals on a Friday afternoon. Every one of those situations shaped a design decision, which is a different education from reading a specification.",
  ],
  points: [
    ["Allocation that follows your rules", "Proximity, availability, driver rating, vehicle class, account priority. Your dispatch logic encoded properly, with automatic reallocation when a job is declined or times out."],
    ["Driver state that stays honest", "A driver who loses signal should not appear frozen in the wrong place. Location updates are queued and reconciled rather than dropped, so the map reflects reality."],
    ["Earnings drivers actually trust", "Shift totals, commission and payouts calculated transparently, with a breakdown a driver can check themselves. Disputed earnings destroy operator relationships faster than almost anything."],
    ["Built from a live system", "We are not designing this from scratch for you. TBMS runs commercially and the hard problems have already been solved once, under real conditions."],
  ],
  services: [
    ["Driver application", "Job offers, navigation handoff, status updates, shift management and earnings visibility. Built in Flutter so Android and iOS ship together."],
    ["Passenger booking app", "Booking, live tracking, fare estimation, payment and ride history. Branded for your operation rather than a generic template."],
    ["Dispatch and admin portal", "Live operations view, manual override, driver management, account handling and the reporting your controllers need during a shift."],
    ["Automated allocation engine", "Rules based job distribution with reallocation, timeout handling, and priority logic for corporate accounts and pre bookings."],
    ["Corporate account management", "Business accounts, cost centres, monthly invoicing and booking permissions for organisations that book on behalf of staff."],
    ["Fleet and vehicle management", "Vehicle records, compliance document expiry tracking, maintenance scheduling and driver performance reporting."],
  ],
  workIds: ["tbms", "chauffeur"],
  working: [
    ["We audit before we quote", "If you already run dispatch software, we look at it first. Sometimes extending what you have is the better commercial decision and we will say so."],
    ["Phased rollout", "Dispatch cannot go dark during a switch. We plan migration in stages so your operation keeps running while the new system takes over progressively."],
    ["Driver onboarding matters", "The best dispatch system fails if drivers will not use it. We build for the reality of a driver mid shift with one hand free, not for a demo on a desk."],
    ["Ongoing operational support", "Dispatch software needs a maintenance relationship, not a handover and goodbye. Most operators continue with us on a retainer after launch."],
  ],
  faqs: [
    ["Do you have real dispatch experience or just similar projects?", "Real experience. Our TBMS platform runs daily commercial operations for a UK transport operator, and we delivered a separate dispatch system for a Dubai logistics company. Both are in active use."],
    ["Can you build the driver app, passenger app and admin portal?", "Yes, as one connected system. The mobile apps share a single Flutter codebase across Android and iOS, and the admin portal runs on the web."],
    ["How do you handle poor GPS signal?", "We design for it from the start. Location updates are queued locally and reconciled when connectivity returns, so a driver in an underground car park does not appear stuck in the wrong place."],
    ["Can we integrate card payments and corporate accounts?", "Yes. Card payments, in app wallets, corporate account billing and cash reconciliation, with the reporting operators need for month end."],
    ["Can you add features to our existing dispatch system?", "Often yes. We audit the existing system first and give you an honest answer on whether extending or rebuilding makes more commercial sense. Sometimes extending is genuinely the better call."],
    ["How long does a dispatch system take to build?", "A focused driver app with basic allocation is considerably faster than a full operation with corporate accounts and fleet management. After a discovery call you get a phased plan with realistic timings."],
    ["What happens if something breaks during a shift?", "Dispatch failures are operational emergencies, not support tickets. Retainer clients have direct escalation, because a system that stops at 6pm on a Friday cannot wait until Monday."],
  ],
  close: "Dispatch is operational software, so the practical questions matter more than the feature list. Here is how we handle them.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Taxi Dispatch Software", path: "/taxi-dispatch-software" }]} /><LocationPage c={config} /></>
}
