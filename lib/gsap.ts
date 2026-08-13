/**
 * Central GSAP registration — import this once at the top of any file
 * that uses ScrollTrigger so the plugin is never registered twice.
 */
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
  // Mobile normalise: prevents jank from touch momentum
  ScrollTrigger.normalizeScroll(true)
  // Don't compensate for lag — Lenis drives the RAF loop
  gsap.ticker.lagSmoothing(0)
}

export { gsap, ScrollTrigger }
