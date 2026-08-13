"use client"
import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const d = dot.current!, r = ring.current!, l = label.current!
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, raf = 0

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    addEventListener("mousemove", move, { passive: true })

    const tick = () => {
      d.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      r.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`
      l.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const grow = () => { r.style.width = "70px"; r.style.height = "70px"; r.style.opacity = ".5"; d.style.opacity = "0" }
    const view = () => { grow(); l.style.opacity = "1" }
    const reset = () => { r.style.width = "34px"; r.style.height = "34px"; r.style.opacity = ".8"; d.style.opacity = "1"; l.style.opacity = "0" }

    const magEnter = (e: Event) => {
      const b = e.currentTarget as HTMLElement & { _mv?: (ev: MouseEvent) => void }
      const mv = (ev: MouseEvent) => {
        const q = b.getBoundingClientRect()
        b.style.transform = `translate(${(ev.clientX - q.left - q.width / 2) * 0.22}px,${(ev.clientY - q.top - q.height / 2) * 0.22}px)`
      }
      b.addEventListener("mousemove", mv); b._mv = mv; grow()
    }
    const magLeave = (e: Event) => {
      const b = e.currentTarget as HTMLElement & { _mv?: (ev: MouseEvent) => void }
      b.style.transform = "translate(0,0)"
      if (b._mv) b.removeEventListener("mousemove", b._mv)
      reset()
    }

    const wire = () => {
      document.querySelectorAll<HTMLElement>("a,button").forEach(el => {
        if (el.dataset.cw) return
        el.dataset.cw = "1"
        if (el.classList.contains("mag")) {
          el.addEventListener("mouseenter", magEnter); el.addEventListener("mouseleave", magLeave)
        } else {
          el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", reset)
        }
      })
      document.querySelectorAll<HTMLElement>("[data-view]").forEach(el => {
        if (el.dataset.cw) return
        el.dataset.cw = "1"
        el.addEventListener("mouseenter", view); el.addEventListener("mouseleave", reset)
      })
    }
    wire()
    const mo = new MutationObserver(wire)
    mo.observe(document.body, { childList: true, subtree: true })
    document.documentElement.classList.add("cursor-on")

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener("mousemove", move)
      mo.disconnect()
      document.documentElement.classList.remove("cursor-on")
    }
  }, [])

  const base: React.CSSProperties = { position: "fixed", top: 0, left: 0, pointerEvents: "none", willChange: "transform" }
  return (
    <>
      <div ref={dot} aria-hidden style={{ ...base, zIndex: 9999, width: 7, height: 7, borderRadius: "50%", background: "#fff", mixBlendMode: "difference", transition: "opacity .25s" }} />
      <div ref={ring} aria-hidden style={{ ...base, zIndex: 9998, width: 34, height: 34, borderRadius: "50%", border: "1.4px solid #fff", mixBlendMode: "difference", opacity: .8, transition: "width .35s cubic-bezier(.16,1,.3,1),height .35s cubic-bezier(.16,1,.3,1),opacity .35s" }} />
      <div ref={label} aria-hidden style={{ ...base, zIndex: 9999, fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#fff", mixBlendMode: "difference", opacity: 0, transition: "opacity .3s" }}>View</div>
    </>
  )
}
