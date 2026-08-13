"use client"

import { useEffect, createContext, useContext, useRef } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

// Expose lenis instance so hooks can call lenis.scrollTo() etc.
const LenisContext = createContext<{ lenis: Lenis | null }>({ lenis: null })
export const useLenis = () => useContext(LenisContext)

interface Props { children: React.ReactNode }

export function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      // Custom easing — exponential feel, snappy start, soft end
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      // Prevent over-scroll on iOS
      overscroll: false,
    })

    lenisRef.current = lenis

    // Sync Lenis scroll position → GSAP ScrollTrigger
    lenis.on("scroll", () => ScrollTrigger.update())

    // Lenis needs to drive GSAP's RAF, not the browser default
    const rafCb = (time: number) => lenis.raf(time)
    gsap.ticker.add(rafCb)

    return () => {
      gsap.ticker.remove(rafCb)
      lenis.destroy()
      lenisRef.current = null
      // Kill ALL ScrollTriggers on full unmount (route change)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}
