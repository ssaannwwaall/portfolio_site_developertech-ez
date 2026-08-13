"use client"
import { useEffect, useRef } from "react"

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let raf = 0
    const tick = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      if (bar.current) bar.current.style.transform = `scaleY(${h > 0 ? scrollY / h : 0})`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <div aria-hidden style={{ position: "fixed", right: 0, top: 0, width: 2, height: "100vh", zIndex: 800, background: "rgba(74,122,150,.12)", pointerEvents: "none" }}>
      <div ref={bar} style={{ width: "100%", height: "100%", background: "var(--accent)", transformOrigin: "top", transform: "scaleY(0)", willChange: "transform" }} />
    </div>
  )
}
