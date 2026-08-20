"use client"
import { useEffect, useRef } from "react"
import { subscribe, readScroll } from "@/lib/ticker"

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let last = -1
    // Shared loop, and the DOM is only written when the value actually moves.
    return subscribe(() => {
      const { scrollY, viewportH, docHeight } = readScroll()
      const max = docHeight - viewportH
      const p = max > 0 ? scrollY / max : 0
      if (Math.abs(p - last) < 0.001) return
      last = p
      if (bar.current) bar.current.style.transform = `scaleY(${p})`
    })
  }, [])
  return (
    <div aria-hidden style={{ position: "fixed", right: 0, top: 0, width: 2, height: "100vh", zIndex: 800, background: "rgba(74,122,150,.12)", pointerEvents: "none" }}>
      <div ref={bar} style={{ width: "100%", height: "100%", background: "var(--accent)", transformOrigin: "top", transform: "scaleY(0)", willChange: "transform" }} />
    </div>
  )
}
