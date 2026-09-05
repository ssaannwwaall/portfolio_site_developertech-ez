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
    slug: "native-to-flutter-migration-worth-it",
    title: "We cut maintenance cost by 40% migrating to Flutter. Here is when not to.",
    metaTitle: "Native to Flutter Migration: When It Is Worth It and When It Is Not",
    description:
      "A native Android to Flutter migration cut our maintenance cost by roughly 40%. The honest account of where that saving came from, and the projects where migrating would have been the wrong call.",
    keywords: [
      "native to Flutter migration",
      "should I migrate to Flutter",
      "Flutter migration cost",
      "Android to Flutter migration",
      "cross platform migration",
      "Flutter vs native maintenance cost",
    ],
    published: "2026-08-20",
    readingTime: "9 min read",
    category: "Flutter",
    excerpt:
      "The 40% number gets quoted at us more than anything else we have published. It is real. It is also narrower than it sounds, and it did not come from where most people assume.",
    body: [
      { t: "p", v: "A few years ago we migrated a client from a native Android codebase to Flutter and their ongoing maintenance cost dropped by roughly forty percent. That number has followed us around ever since, and it comes up in almost every conversation about migration." },
      { t: "p", v: "It is a real number. It is also narrower than people assume when they hear it, and I have watched at least two prospects reach for a migration on the strength of it when their situation was nothing like the one it came from. So this is the honest version, including the projects where we told a client not to bother." },

      { t: "h2", v: "Where the saving actually came from" },
      { t: "p", v: "Not from Flutter being faster to write. Writing Dart is not meaningfully quicker than writing Kotlin once you know both." },
      { t: "p", v: "The saving came from something duller. They were maintaining two applications that were supposed to behave identically and did not. A fix would land on Android and take another sprint to reach iOS, or it would land on both and be implemented slightly differently, and three months later a bug would appear on one platform that nobody could reproduce on the other." },
      { t: "p", v: "Most of what was being paid for was not building features. It was reconciling two codebases that kept drifting apart. When the business logic moved into one place, that entire category of work disappeared." },
      { t: "note", v: "This is why the number does not transfer to a company running a single Android app. There was no drift to eliminate, so there is no forty percent to save. The saving was a function of their specific mess, not a property of Flutter." },

      { t: "h2", v: "What the migration actually cost" },
      { t: "p", v: "The rebuild took longer than the estimate. Not dramatically, but enough to be worth saying out loud, because I have never seen a migration case study admit this." },
      { t: "p", v: "The screens went fast. Layout in Flutter is quick and a developer who knows it can move through UI at a good pace. What ate the time was everything touching the platform underneath." },
      { t: "ul", v: [
        "Background location, which behaves differently on every manufacturer build and needed testing on real handsets rather than emulators.",
        "Push notification handling, particularly deep links from a notification when the app was killed rather than backgrounded.",
        "A payment SDK with no maintained Flutter package, which meant writing a platform channel and maintaining it ourselves.",
        "Local storage migration, so users updating from the old app did not lose their data. This was three days of work nobody had costed.",
      ]},
      { t: "p", v: "None of that is a reason to avoid Flutter. It is a reason to distrust any estimate built by counting screens." },

      { t: "h2", v: "When we tell clients not to migrate" },
      { t: "p", v: "We have talked more than one company out of this, which is a strange sales position but an easier conversation than the one that happens later." },

      { t: "h3", v: "You only ship on one platform and intend to stay that way" },
      { t: "p", v: "The core argument for Flutter is one codebase serving several platforms. If you are Android only and have no iOS plan, you are paying migration cost to buy an advantage you have no use for. Stay where you are." },

      { t: "h3", v: "Your app is mostly platform specific capability" },
      { t: "p", v: "Heavy camera work, Bluetooth peripherals, background audio, anything leaning on recent OS APIs. You will spend the project writing platform channels, which means maintaining native code on both sides plus a Dart layer on top. That is more surface area than you started with, not less." },

      { t: "h3", v: "The existing code is genuinely fine" },
      { t: "p", v: "Sometimes a team wants to migrate because the codebase is a mess, and the mess is architectural rather than linguistic. Rewriting it in Dart produces the same tangle in a new language, plus a migration bill. If the problem is that nobody separated business logic from the UI, that problem is portable." },

      { t: "h3", v: "You have a native team and no Flutter experience" },
      { t: "p", v: "A team fluent in Kotlin and Swift will produce better software in those languages than in a framework they are learning on a live project. Migration makes sense when the people maintaining it afterwards actually want it." },

      { t: "h2", v: "When it is clearly worth it" },
      { t: "p", v: "The pattern is consistent enough to state plainly." },
      { t: "ol", v: [
        "Two codebases meant to behave identically, and a history of them not doing so.",
        "Feature work that lands on one platform noticeably before the other, and users who have noticed.",
        "A small team, three or four engineers, trying to cover both platforms and covering neither well.",
        "Business logic that is mostly ordinary. Forms, lists, API calls, state, navigation. This is where Flutter is strongest and where the maintenance saving is real.",
      ]},
      { t: "p", v: "Three of those four and the arithmetic usually works. One of them and it usually does not." },

      { t: "h2", v: "How to size it honestly" },
      { t: "p", v: "If you are considering this, the useful exercise takes an afternoon and does not require an agency." },
      { t: "p", v: "Go through the last six months of commits and sort maintenance work into two buckets. Work that existed because there were two codebases, and work that would have existed regardless. Cross platform inconsistency bugs, the same fix applied twice, features shipped twice, drift between designs. That first bucket is your ceiling. It is the only part a migration removes." },
      { t: "p", v: "Then get an estimate for the rebuild and be sceptical of it, particularly around anything touching the platform. Divide the rebuild cost by your monthly first bucket figure. That is your payback period in months." },
      { t: "p", v: "For the client where we saw forty percent, the payback landed around fourteen months and they had a multi year horizon, so it was straightforward. For a company planning a pivot in eight months, the same arithmetic says do not." },

      { t: "quote", v: "The best migration advice we have given was to a company that did not migrate. They extracted their business logic into a shared module, fixed the drift, and kept both native apps.", by: "Still the right call two years later" },

      { t: "h2", v: "The summary, without the marketing" },
      { t: "p", v: "Flutter is a good framework and we build most of our mobile work in it. The forty percent is real and we will keep quoting it, because it happened." },
      { t: "p", v: "But it was a saving on a specific kind of waste, in a specific situation, for a company with a long enough horizon to recover the cost. Read it as a description of what a migration can fix rather than a promise about what yours will save. If your maintenance bill is not mostly two codebases disagreeing with each other, the number does not apply to you, and anyone telling you otherwise is selling a migration." },
    ],
  },
  {
    slug: "gps-signal-loss-taxi-dispatch",
    title: "The map is lying to you: GPS signal loss in dispatch systems",
    metaTitle: "GPS Signal Loss in Taxi Dispatch Software: Why the Map Lies",
    description:
      "Dispatch maps show drivers where they last were, not where they are. Here is why that gap causes bad job allocation, and how to build a system that admits when it does not know.",
    keywords: [
      "GPS signal loss dispatch",
      "taxi dispatch software GPS accuracy",
      "driver tracking app signal loss",
      "real time vehicle tracking problems",
      "dispatch system location accuracy",
      "fleet tracking offline handling",
    ],
    published: "2026-08-20",
    readingTime: "8 min read",
    category: "Dispatch Systems",
    excerpt:
      "A controller sends the nearest car to a job. The car is not there. It has been sitting in a multi storey car park for eleven minutes and the map never said so.",
    body: [
      { t: "p", v: "Here is a scene that plays out in dispatch offices more often than anyone admits. A job comes in. The controller looks at the map, sees a car two streets away, and sends it. Four minutes later the passenger calls to ask where the driver is, and the driver is nine minutes out because the car on the map has been parked in a multi storey since half past two." },
      { t: "p", v: "Nothing crashed. No error appeared. The map was doing exactly what it was built to do, which was show the last position it received. The problem is that a stale position and a live position look identical on a screen, and the controller had no way to tell them apart." },
      { t: "p", v: "We hit this properly while building TBMS, the dispatch platform we still maintain for a UK operator. It took us longer than it should have to understand that the fix was not better GPS. It was being honest about uncertainty." },

      { t: "h2", v: "Why the default behaviour is wrong" },
      { t: "p", v: "Almost every tracking system starts the same way. The driver app reads location every few seconds and posts it up. The server stores the newest one. The map draws whatever the server has." },
      { t: "p", v: "That works until it does not, and when it stops working it does so silently. The app is in a car park with no signal, or the OS has throttled background location to save battery, or the driver force closed the app after their last drop. In all three cases the server keeps holding a position that was true once and is not true now." },
      { t: "p", v: "A controller looking at that map is being shown a claim with no confidence attached. Two streets away and eleven minutes stale renders exactly the same as two streets away and four seconds fresh." },
      { t: "note", v: "The nastiest version of this is the driver who genuinely is where the map says, but has been stationary for twenty minutes because they have gone for lunch. The position is accurate. The availability inference drawn from it is not." },

      { t: "h2", v: "What we changed" },
      { t: "p", v: "The first change was small and it fixed most of the pain. Every position carries the time it was captured, and the map shows position age wherever a controller can see a vehicle." },
      { t: "p", v: "Under about thirty seconds, the marker is solid. Past a minute or so it starts to fade. Past five minutes it goes hollow with the age printed next to it. Controllers stopped trusting hollow markers within about a week, which is roughly how long it takes anyone to learn that a particular light means something." },
      { t: "p", v: "We did not need to explain the colours to anybody. Somebody sent one car to a hollow marker, waited, and told the rest of the office." },

      { t: "h3", v: "Capture time, not arrival time" },
      { t: "p", v: "This one is easy to get wrong and expensive to discover late. If the server timestamps a position when it arrives, then a batch of readings that were queued in a tunnel and uploaded at 15:42 all appear to have happened at 15:42. The driver appears to teleport across three miles in a second, and any speed or route calculation built on top of that is nonsense." },
      { t: "p", v: "The device knows when it took the reading. That timestamp travels with the reading and the server treats it as authoritative. Arrival time is a separate field and is useful for debugging, nothing else." },

      { t: "h3", v: "Queue instead of drop" },
      { t: "p", v: "Positions taken while offline go into a local queue and upload in order when signal returns. This matters less for the live map, which only cares about the newest reading anyway, and matters enormously for anything historical. Route reconstruction, mileage, time on site, and any dispute about whether a driver actually went where they said all depend on the gaps being filled in rather than lost." },

      { t: "h3", v: "Let the allocation engine see the uncertainty" },
      { t: "p", v: "This was the change that actually moved the numbers. Our allocation logic used to treat every position as equally reliable, which meant a stale car frequently beat a fresh one on distance and won the job. Now position age is an input. A vehicle whose last fix is several minutes old is either weighted down or skipped depending on how contested the job is." },
      { t: "p", v: "The result is not that allocation became perfect. It became less confidently wrong, which is a different and more useful thing." },

      { t: "h2", v: "The battery problem nobody warns you about" },
      { t: "p", v: "There is a second cause of stale positions that has nothing to do with signal, and it is worse because it looks like signal loss and is not." },
      { t: "p", v: "Both Android and iOS aggressively restrict what an app can do in the background. Android will doze an app it decides is idle. Manufacturers stack their own battery optimisation on top, and some of them are far more aggressive than stock Android. iOS suspends background execution on its own schedule. The app is not crashed and the phone has full signal, but location updates have quietly stopped arriving." },
      { t: "p", v: "The honest fix on Android is a foreground service with a persistent notification, which is intrusive and which drivers occasionally complain about. We looked hard for a way around it and did not find one that survives a real shift on a real handset. On some manufacturer builds you also have to walk the driver through disabling battery optimisation during onboarding, because nothing else works." },
      { t: "quote", v: "We spent two weeks convinced we had a network problem. It was a battery optimisation setting on one make of phone that three of the drivers happened to own.", by: "From our own notes, which we kept because it was annoying" },

      { t: "h2", v: "How to check whether your system has this problem" },
      { t: "p", v: "You do not need to read any code to find out. Sit with a controller for an hour during a busy period and ask four questions." },
      { t: "ol", v: [
        "Can you tell from this screen how old any vehicle position is?",
        "When a driver goes into an underground car park, what does the map do?",
        "If a driver has no signal for ten minutes, does the route history fill in afterwards or stay blank?",
        "Does the allocation engine know the difference between a car that reported four seconds ago and one that reported six minutes ago?",
      ]},
      { t: "p", v: "If the answers are no, nothing visible, stays blank, and no, then the map in that office is a confident guess and the controllers have probably already learned not to fully trust it. That last part is the real cost. A controller who does not trust the screen starts phoning drivers to confirm, and at that point the dispatch system has become a very expensive way of displaying phone numbers." },

      { t: "h2", v: "What this does not fix" },
      { t: "p", v: "Being straight about the limits. None of this makes GPS accurate indoors, because it is not. Urban canyons still produce readings that put a car through a building. A driver who leaves their phone in the cab and walks off still shows as present." },
      { t: "p", v: "What changes is that the system stops presenting all of these with the same confidence. It can say I do not know, and a controller who is told I do not know makes a better decision than one who is told something wrong in a convincing tone." },
      { t: "p", v: "That is most of what we learned. Not a clever algorithm. Just a system that admits the difference between knowing and having known." },
    ],
  },
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
