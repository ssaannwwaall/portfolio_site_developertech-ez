"use client"
import { useEffect, useRef, type RefObject } from "react"

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

/** Parallax: shifts a [data-parallax] child as the wrapper crosses the viewport. */
export function useParallax<T extends HTMLElement>(strength = 18): RefObject<T> {
  const ref = useRef<T>(null)
  useEffect(() => {
    const wrap = ref.current
    if (!wrap) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const img = wrap.querySelector<HTMLElement>("[data-parallax]") ?? wrap
    let raf = 0
    const tick = () => {
      const r = wrap.getBoundingClientRect()
      if (r.bottom > 0 && r.top < window.innerHeight) {
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
        img.style.transform = `translate3d(0,${p * strength}px,0) scale(1.1)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [strength])
  return ref
}
