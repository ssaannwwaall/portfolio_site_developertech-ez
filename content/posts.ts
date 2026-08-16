export interface Post {
  slug: string
  title: string
  metaTitle: string
  description: string
  keywords: string[]
  published: string   // ISO
  updated?: string
  readingTime: string
  category: string
  excerpt: string
  /** Rendered in order. Paragraphs, headings, lists, callouts, quotes. */
  body: Array<
    | { t: "h2"; v: string }
    | { t: "h3"; v: string }
    | { t: "p"; v: string }
    | { t: "ul"; v: string[] }
    | { t: "ol"; v: string[] }
    | { t: "note"; v: string }
    | { t: "quote"; v: string; by?: string }
  >
}

export const POSTS: Post[] = [
  {
    slug: "guard-patrol-app-offline-mode",
    title: "Why your guard patrol app stops working in a basement, and what to do about it",
    metaTitle: "Guard Patrol App Offline Mode: Why Patrols Fail Without Signal",
    description:
      "Most guard patrol apps lose checkpoint scans in basements, stairwells and remote sites. Here is why it happens, what it costs security firms, and how offline first architecture fixes it.",
    keywords: [
      "guard patrol app offline mode",
      "patrol management system offline",
      "guard tour system without signal",
      "security guard tracking app basement",
      "offline first patrol software",
      "guard monitoring software UK",
    ],
    published: "2026-08-14",
    readingTime: "7 min read",
    category: "Security Software",
    excerpt:
      "A guard scans a checkpoint in an underground car park. The app shows a tick. The scan never reaches the server. Nobody finds out until a client disputes the invoice six weeks later.",
    body: [
      { t: "p", v: "A guard walks a night round in an underground car park. They scan the checkpoint by the stairwell, the app shows a green tick, and they move on. The scan never reaches the server. Nobody notices until six weeks later when a client questions an invoice and the patrol report has a hole in it exactly where that stairwell should be." },
      { t: "p", v: "This is the most common failure in guard monitoring software, and it is almost always caused by the same architectural shortcut. We ran into it while building Softpatrol, which is now used daily by UK security firms, and fixing it properly changed how we approach every field application we build." },

      { t: "h2", v: "The shortcut that causes it" },
      { t: "p", v: "Most patrol apps are built on a simple assumption: the guard scans a checkpoint, the app sends it to the server, the server confirms. Request, response, done. That works perfectly in an office where somebody is testing the app on strong office wifi." },
      { t: "p", v: "Security work does not happen in offices. It happens in basements, stairwells, plant rooms, loading bays, remote yards and industrial estates where signal is unreliable at best. The moment the request fails, one of two things happens, and both are bad." },
      { t: "ul", v: [
        "The app shows an error and asks the guard to retry, which means a guard standing in the cold pressing a button that will not work.",
        "The app shows success anyway because the developer did not want to show errors, and the scan silently disappears.",
      ]},
      { t: "p", v: "The second is worse and it is more common than you would expect. The guard believes the patrol is logged. The supervisor believes the patrol is logged. The client is billed for a patrol that has no record. Nobody discovers the problem until it matters." },

      { t: "h2", v: "What this actually costs a security firm" },
      { t: "p", v: "The technical failure is small. The commercial consequences are not." },
      { t: "h3", v: "Disputed invoices" },
      { t: "p", v: "A client questions coverage on a site. You open the report and there are gaps. You know the patrols happened. You cannot prove it. In that conversation the burden of proof sits with you, and a missing log looks identical to a missed patrol." },
      { t: "h3", v: "Guards who stop trusting the system" },
      { t: "p", v: "This one compounds. A guard whose scans occasionally vanish stops believing the app is a record of their work. They start photographing checkpoints on their personal phone as a backup, or they stop scanning consistently because it feels pointless. Once guards route around the software, the data is worthless regardless of what the architecture does." },
      { t: "h3", v: "Contracts that quietly do not renew" },
      { t: "p", v: "Security contracts renew on trust and evidence. A client who has twice received a patrol report with unexplained gaps will listen more carefully to your competitor next year. They may never tell you that was the reason." },

      { t: "note", v: "In our experience the sites with the worst connectivity are frequently the sites clients care about most: basements holding plant equipment, secure storage areas, remote perimeters. The coverage you most need to prove is the coverage most likely to go missing." },

      { t: "h2", v: "Offline first is the fix, and it is not complicated" },
      { t: "p", v: "The principle is straightforward. The phone, not the server, is the primary record. A scan is written to local storage first and confirmed to the guard immediately. Sending it to the server is a separate background job that retries until it succeeds." },
      { t: "p", v: "Reframed that way, losing signal stops being an error state. It becomes an ordinary condition the app is designed to operate in." },
      { t: "ol", v: [
        "Guard scans a checkpoint. The scan is written to the local database with a timestamp and GPS coordinates, and the app confirms it visually within the same second.",
        "A background sync process picks up unsent records and attempts to transmit them, retrying on a backoff schedule rather than giving up after one failure.",
        "When connectivity returns, queued records upload in order. The server reconciles them using the original capture timestamp, not the arrival time.",
        "The app shows the guard how many records are pending, so nothing is hidden and the guard knows the system is keeping up.",
      ]},

      { t: "h2", v: "The details that decide whether it actually works" },
      { t: "h3", v: "Timestamp at capture, never at upload" },
      { t: "p", v: "This is the one people get wrong. If the server records the arrival time rather than the capture time, a scan taken at 02:14 that uploads at 06:40 appears in the report as a 06:40 patrol. The data is now actively misleading, which is worse than missing." },
      { t: "h3", v: "GPS captured with the scan, held with the scan" },
      { t: "p", v: "Location must be captured at the moment of scanning and stored alongside it. Requesting location at upload time gives you the guard's position hours later, probably at home." },
      { t: "h3", v: "Queue depth visible to the guard" },
      { t: "p", v: "A small indicator showing pending records does two things. It reassures the guard that their work is recorded, and it surfaces a genuine problem if the number climbs and never falls." },
      { t: "h3", v: "Photographs queued the same way" },
      { t: "p", v: "Incident photos are large and will fail on weak signal long before a text record does. They belong in the same queue with the same retry logic, compressed on device before the first attempt." },
      { t: "h3", v: "Idempotent uploads" },
      { t: "p", v: "A retry that partially succeeded must not create a duplicate. Each record carries a client generated identifier so the server can recognise something it already has and ignore it." },

      { t: "h2", v: "How to test it honestly" },
      { t: "p", v: "Testing offline behaviour on airplane mode is not a real test. Airplane mode is a clean disconnection. Real sites give you something worse: a signal that technically exists but cannot complete a request, which is the condition most apps handle badly." },
      { t: "ul", v: [
        "Walk an actual site with poor coverage rather than simulating it at a desk.",
        "Scan several checkpoints while moving in and out of signal, then check every record arrives with the correct original timestamp.",
        "Force close the app mid patrol and reopen it. Queued records must survive.",
        "Let the device battery die with records pending, then charge and reopen. They must still be there.",
        "Run a full shift offline and confirm the entire shift uploads correctly afterwards.",
      ]},

      { t: "note", v: "If your current supplier cannot walk you through what happens at each of those five steps, that is a useful answer in itself." },

      { t: "h2", v: "What to ask before you buy patrol software" },
      { t: "p", v: "Whether you are evaluating a product or commissioning a build, these five questions separate systems designed for real sites from systems demonstrated in meeting rooms." },
      { t: "ol", v: [
        "Where is a checkpoint scan written first, on the device or on the server?",
        "Does the patrol report show the time the guard scanned, or the time the record reached you?",
        "What does the guard see when a record has not uploaded yet?",
        "How are incident photographs handled when the connection drops halfway through the upload?",
        "What happens if the same record is transmitted twice?",
      ]},
      { t: "p", v: "A supplier who has solved this will answer all five in specific terms without hesitation, because these decisions were made deliberately. Vague answers usually mean the problem has not come up yet, which means it will come up on your sites." },

      { t: "h2", v: "Why we care about this particular problem" },
      { t: "p", v: "Softpatrol handles patrol management for UK security firms and has passed a thousand installs on Google Play. Offline handling was not a feature we planned in advance. It became a priority because real guards on real sites hit the problem, and the fix had to work on their sites rather than in our testing." },
      { t: "quote", v: "The patrols you most need to prove happened are usually the ones in the places with no signal.", by: "Something a security operations manager told us early on" },
      { t: "p", v: "That observation shaped the architecture more than any specification document. If you are building patrol software or replacing a system that keeps losing records, this is worth getting right before anything else, because every other feature depends on the data being trustworthy." },
    ],
  },
]

export const getPost = (slug: string) => POSTS.find(p => p.slug === slug)
