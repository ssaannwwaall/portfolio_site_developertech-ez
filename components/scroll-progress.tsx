"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

/**
 * A thin vertical bar on the right side of the screen that tracks
 * scroll progress using scaleY (GPU composited — zero layout cost).
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    // scaleY from 0 → 1 as user scrolls document top → bottom
    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        // Direct style mutation — no React re-render, stays 60fps
        bar.style.transform = `scaleY(${self.progress})`
      },
    })

    return () => st.kill()
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: 2,
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
        background: "rgba(81,132,163,0.12)",
      }}
    >
      <div
        ref={barRef}
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, #7BB3D4, #5184A3)",
          transformOrigin: "top center",
          transform: "scaleY(0)",
          willChange: "transform",
        }}
      />
    </div>
  )
}
