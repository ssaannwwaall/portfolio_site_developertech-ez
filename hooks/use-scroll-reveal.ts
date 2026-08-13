"use client"

import { useEffect, useRef, type RefObject } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

export interface ScrollRevealOptions {
  /** Which child elements to animate. Defaults to [data-reveal] children, or the element itself. */
  selector?: string
  duration?: number
  /** Initial Y offset in px */
  y?: number
  /** Initial opacity */
  from?: number
  stagger?: number
  ease?: string
  /** ScrollTrigger start string */
  start?: string
  delay?: number
  /** If true, plays every time element re-enters viewport */
  repeat?: boolean
}

/**
 * useScrollReveal — attach to a container ref.
 *
 * Targets either [data-reveal] children inside the container, or a custom
 * selector, or the container itself. All GSAP contexts are cleaned up on
 * unmount so there are zero memory leaks.
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.12 })
 *   <section ref={ref}>
 *     <h2 data-reveal>Heading</h2>
 *     <p data-reveal>Body text</p>
 *   </section>
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      selector   = "[data-reveal]",
      duration   = 0.75,
      y          = 36,
      from       = 0,
      stagger    = 0.1,
      ease       = "power3.out",
      start      = "top 88%",
      delay      = 0,
      repeat     = false,
    } = options

    // Resolve targets — prefer children with data-reveal, else the container
    const children = el.querySelectorAll<HTMLElement>(selector)
    const targets: Element[] = children.length > 0 ? Array.from(children) : [el]

    // Set initial state before paint to avoid flash
    gsap.set(targets, { opacity: from, y })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start,
        once: !repeat,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease,
          })
        },
        onLeaveBack: repeat
          ? () => gsap.set(targets, { opacity: from, y })
          : undefined,
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * useParallax — attach to an image wrapper.
 * The image shifts vertically as the wrapper scrolls through the viewport.
 *
 * Usage:
 *   const ref = useParallax(15) // 15% offset
 *   <div ref={ref} style={{ overflow: "hidden" }}>
 *     <img data-parallax src="..." />
 *   </div>
 */
export function useParallax<T extends HTMLElement>(
  strength = 15
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const wrapper = ref.current
    if (!wrapper) return

    const image = wrapper.querySelector<HTMLElement>("[data-parallax]") ?? wrapper

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    }, wrapper)

    return () => ctx.revert()
  }, [strength])

  return ref
}
