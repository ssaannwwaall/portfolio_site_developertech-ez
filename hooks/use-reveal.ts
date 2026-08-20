"use client"
import { useEffect, useRef, type RefObject } from "react"
import { subscribe } from "@/lib/ticker"

/** Adds .revealed when the element scrolls into view. Handles mask + rise. */
export function useReveal<T extends HTMLElement>(threshold = 0.15): RefObject<T> {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("revealed"); return
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("revealed"); io.disconnect() }
    }, { threshold, rootMargin: "0px 0px -50px 0px" })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return ref
}

/**
 * Parallax that only costs anything while the element is on screen.
 *
 * Previously each instance ran its own permanent rAF loop reading
 * getBoundingClientRect every frame, whether the image was visible or not.
 * Now an IntersectionObserver gates subscription to the shared ticker, and
 * the element's page offset is measured once rather than every frame.
 */
export function useParallax<T extends HTMLElement>(strength = 18): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const wrap = ref.current
    if (!wrap) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const img = wrap.querySelector<HTMLElement>("[data-parallax]") ?? wrap
    let unsubscribe: (() => void) | null = null
    let centreOffset = 0
    let height = 0

    const remeasure = () => {
      const r = wrap.getBoundingClientRect()
      height = r.height
      centreOffset = r.top + window.scrollY + height / 2
    }

    const tick = () => {
      const vh = window.innerHeight
      // Position of the element centre relative to the viewport centre,
      // derived from cached geometry instead of a fresh layout read.
      const p = (centreOffset - window.scrollY - vh / 2) / vh
      img.style.transform = `translate3d(0,${p * strength}px,0) scale(1.1)`
    }

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        remeasure()
        if (!unsubscribe) unsubscribe = subscribe(tick)
      } else {
        unsubscribe?.()
        unsubscribe = null
      }
    }, { rootMargin: "120px 0px" })

    io.observe(wrap)
    window.addEventListener("resize", remeasure, { passive: true })

    return () => {
      io.disconnect()
      unsubscribe?.()
      window.removeEventListener("resize", remeasure)
    }
  }, [strength])

  return ref
}
