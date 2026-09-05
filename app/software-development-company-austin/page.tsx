import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Hardware and Connected Product App Development in Austin",
  description:
    "App development for Austin hardware and connected product companies. Device companion apps, telematics, IoT dashboards and consumer mobile, built by a team with five years of GPS and device work.",
  keywords: [
    "hardware app development Austin",
    "IoT app development Austin",
    "connected device app developers",
    "software development company Austin",
    "Austin app developers",
    "telematics software development",
  ],
  alternates: { canonical: "/software-development-company-austin" },
  openGraph: {
    title: "Hardware and Connected Product App Development in Austin | DevelopersTech",
    description: "Device companion apps, telematics and IoT dashboards for Austin product companies.",
    url: "/software-development-company-austin",
  },
}

const config: LocationConfig = {
  region: "Austin",
  short: "Austin",
  eyebrow: "Serving Austin hardware and product teams",
  h1: "App development for Austin hardware companies.",
  h1Italic: 2,
  lede: "Austin builds things that touch the physical world. Hardware, vehicles, connected devices. The software layer for those products has different problems than a pure SaaS app, and we have spent five years on exactly those problems.",
  intro: [
    "Austin's tech scene grew differently from the coastal hubs. Where San Francisco is dominated by pure software and New York by finance, Austin has become a centre for electric vehicles, hardware and connected products, alongside a fast moving consumer startup community.",
    "That matters because hardware adjacent software is a different discipline. An app that talks to a device has to handle a connection that drops mid operation, firmware that lags behind the app, and state that must stay correct when the two disagree. These are the same problems we solved building GPS tracking for vehicles and offline capture for field devices.",
    "The second thing shaping Austin is the cost gap that pulled companies here from California in the first place. Founders who moved to extend runway are not looking to spend it back on a Bay Area agency rate, but they are also not willing to accept work they cannot maintain. That gap is where we tend to fit.",
  ],
  points: [
    ["Device and vehicle connected apps", "Our GPS tracking and dispatch work involves apps talking continuously to moving hardware over unreliable connections. That is the hard part of any connected product."],
    ["State that stays correct when things disconnect", "When an app and a device disagree, one of them is wrong and the user sees it. We design reconciliation deliberately rather than hoping the connection holds."],
    ["Built for the runway you actually have", "Founders moved to Austin to extend runway. We scope to what the money buys and tell you plainly if it is not enough, rather than starting a project that stalls."],
    ["A US client who came back four times", "One American buyer has run four separate projects with us. For a founder evaluating an unknown team, repeat business is the signal worth weighing."],
  ],
  services: [
    ["Companion apps for hardware", "Mobile applications that pair with a physical device over Bluetooth or a network, handling firmware version mismatch and connection loss without corrupting state."],
    ["Vehicle and telematics software", "Live location, trip history, driver behaviour and fleet views. We built this stack for a transport operator running it commercially."],
    ["IoT dashboards and control panels", "Web interfaces for monitoring device fleets, with live status, alerting and the historical data view that makes a problem diagnosable."],
    ["Consumer mobile products", "Flutter apps across iOS and Android from one codebase, with the polish a consumer audience expects rather than internal tool standards."],
    ["Product analytics instrumentation", "Event tracking and funnels wired in during the build, so the metrics exist when a raise makes them urgent."],
    ["Fractional engineering capacity", "Monthly retainer for teams not ready to hire in house, at a rate that reflects why you left California."],
  ],
  workIds: ["tbms", "fitness", "chauffeur"],
  working: [
    ["Start with one project", "Most of our long running American relationships began with a single contained build. Testing a team on something small is sensible and we would rather earn the second project."],
    ["Weekly builds you can open", "Progress lands on a staging environment every week. You verify it yourself rather than taking our word from a status call."],
    ["Timezone handled asynchronously", "Calls in your morning or evening, async work between. Founders are busy and we do not need a meeting to make progress."],
    ["You own the code", "Source, documentation and deployment access transfer at completion. No lock in, which matters when you raise and hire your own engineers."],
  ],
  faqs: [
    ["Do you build apps that connect to hardware?", "Yes. Our dispatch and tracking work involves apps communicating continuously with moving vehicles over connections that drop constantly. The pattern transfers directly to any connected device."],
    ["What happens when the device and app disagree about state?", "One of them is wrong and the user will notice, so we decide the reconciliation rule deliberately during design. Usually the device is authoritative for its own state and the app is authoritative for user intent, but that depends on the product."],
    ["Can you handle Bluetooth and local network protocols?", "Yes, including the reconnection and pairing edge cases that consume most of the actual development time on a connected product."],
    ["We are pre seed with limited runway. Is that a problem?", "No, but it changes the conversation. We will tell you what your budget genuinely buys, and if the answer is not enough for what you described, we will say so rather than start something that stalls halfway."],
    ["Will our future engineering hires be able to take this over?", "That is the point. We use mainstream stacks specifically so the engineers you hire already know them, and documentation is written for someone who was not involved in the build."],
    ["Can you help scope before we commit to anything?", "Yes, and the discovery call is free. Several founders have left it with a smaller, cheaper and better project than the one they described at the start."],
    ["What references can we check?", "Fifty nine verified reviews at 5.0 on Fiverr, including a US client who returned for four separate projects. The profile is public and linked throughout this site."],
  ],
  close: "Hardware timelines are unforgiving and founders hate wasted meetings, so here is the practical detail upfront.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development Austin", path: "/software-development-company-austin" }]} /><LocationPage c={config} /></>
}
