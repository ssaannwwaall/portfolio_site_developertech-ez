"use client"

/**
 * One requestAnimationFrame loop for the whole page.
 *
 * Previously the cursor, the scroll progress bar, the pinned hero and every
 * parallax image each ran their own rAF loop. On the homepage that was eight
 * concurrent loops, each calling getBoundingClientRect every frame and forcing
 * a layout recalculation. That is what pushed INP to 240ms.
 *
 * Subscribers register a callback here instead. The loop runs only while at
 * least one subscriber is active, and stops entirely when the tab is hidden.
 */

type Job = (now: number) => void

const jobs = new Set<Job>()
let rafId = 0
let running = false

function frame(now: number) {
  for (const job of jobs) job(now)
  rafId = jobs.size > 0 ? requestAnimationFrame(frame) : 0
  running = rafId !== 0
}

function start() {
  if (running || jobs.size === 0) return
  if (typeof document !== "undefined" && document.hidden) return
  running = true
  rafId = requestAnimationFrame(frame)
}

function stop() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = 0
  running = false
}

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop()
    else start()
  })
}

/** Subscribe a callback to the shared loop. Returns an unsubscribe function. */
export function subscribe(job: Job): () => void {
  jobs.add(job)
  start()
  return () => {
    jobs.delete(job)
    if (jobs.size === 0) stop()
  }
}

/**
 * Scroll position read once per frame and shared, so subscribers do not each
 * trigger their own layout read.
 */
let scrollY = 0
let docHeight = 0
let viewportH = 0

function measure() {
  scrollY = window.scrollY
  viewportH = window.innerHeight
  docHeight = document.documentElement.scrollHeight
}

if (typeof window !== "undefined") {
  measure()
  window.addEventListener("scroll", () => { scrollY = window.scrollY }, { passive: true })
  window.addEventListener("resize", measure, { passive: true })
}

export const readScroll = () => ({ scrollY, viewportH, docHeight })
