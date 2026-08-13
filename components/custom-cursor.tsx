"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Disable on touch devices or reduced-motion
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const dot   = dotRef.current!
    const ring  = ringRef.current!
    const label = labelRef.current!

    // Hide native cursor globally
    document.documentElement.style.cursor = "none"

    let mouseX = window.innerWidth  / 2
    let mouseY = window.innerHeight / 2
    let ringX  = mouseX
    let ringY  = mouseY
    let rafId  = 0

    const LERP = 0.12

    // Track mouse
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", onMove)

    // RAF loop — 60fps smooth trailing
    const tick = () => {
      // Dot: zero-lag
      dot.style.transform  = `translate(${mouseX}px, ${mouseY}px)`

      // Ring: lerp trailing
      ringX += (mouseX - ringX) * LERP
      ringY += (mouseY - ringY) * LERP
      ring.style.transform  = `translate(${ringX}px, ${ringY}px)`
      label.style.transform = `translate(${ringX}px, ${ringY}px)`

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    // Hover on interactive elements → ring scale-up, dot hide
    const addHover = () => {
      ring.style.width   = "56px"
      ring.style.height  = "56px"
      ring.style.opacity = "0.5"
      ring.style.backdropFilter = "blur(4px)"
      dot.style.opacity  = "0"
    }
    const removeHover = () => {
      ring.style.width   = "36px"
      ring.style.height  = "36px"
      ring.style.opacity = "0.7"
      ring.style.backdropFilter = "none"
      dot.style.opacity  = "1"
      label.style.opacity = "0"
    }

    // Image hover → show "View" label
    const addImageHover = () => {
      ring.style.width   = "72px"
      ring.style.height  = "72px"
      ring.style.opacity = "0.35"
      dot.style.opacity  = "0"
      label.style.opacity = "1"
    }

    // Magnetic pull on buttons
    const onButtonEnter = (e: Event) => {
      addHover()
      const btn = e.currentTarget as HTMLElement
      const move = (ev: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const cx = rect.left + rect.width  / 2
        const cy = rect.top  + rect.height / 2
        const dx = (ev.clientX - cx) * 0.25
        const dy = (ev.clientY - cy) * 0.25
        btn.style.transform = `translate(${dx}px, ${dy}px)`
      }
      btn.addEventListener("mousemove", move)
      ;(btn as any)._moveFn = move
    }
    const onButtonLeave = (e: Event) => {
      removeHover()
      const btn = e.currentTarget as HTMLElement
      btn.style.transform = "translate(0,0)"
      btn.style.transition = "transform 0.4s cubic-bezier(0.23,1,0.32,1)"
      if ((btn as any)._moveFn) btn.removeEventListener("mousemove", (btn as any)._moveFn)
      setTimeout(() => { btn.style.transition = "" }, 400)
    }

    // Register listeners
    const interactive = document.querySelectorAll("a, button, [data-cursor-hover]")
    const images      = document.querySelectorAll("[data-cursor-view]")
    const buttons     = document.querySelectorAll("a.btn-magnetic, button.btn-magnetic")

    interactive.forEach(el => {
      el.addEventListener("mouseenter", addHover)
      el.addEventListener("mouseleave", removeHover)
      ;(el as HTMLElement).style.cursor = "none"
    })
    images.forEach(el => {
      el.addEventListener("mouseenter", addImageHover)
      el.addEventListener("mouseleave", removeHover)
    })
    buttons.forEach(el => {
      el.addEventListener("mouseenter", onButtonEnter)
      el.addEventListener("mouseleave", onButtonLeave)
    })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      document.documentElement.style.cursor = ""
      interactive.forEach(el => {
        el.removeEventListener("mouseenter", addHover)
        el.removeEventListener("mouseleave", removeHover)
      })
      images.forEach(el => {
        el.removeEventListener("mouseenter", addImageHover)
        el.removeEventListener("mouseleave", removeHover)
      })
      buttons.forEach(el => {
        el.removeEventListener("mouseenter", onButtonEnter)
        el.removeEventListener("mouseleave", onButtonLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Solid dot — zero lag */}
      <div ref={dotRef} aria-hidden style={{
        position:"fixed", top:0, left:0, zIndex:99999, pointerEvents:"none",
        width:7, height:7, borderRadius:"50%",
        background:"#5184A3",
        transform:"translate(-50%,-50%)",
        marginLeft:"-3.5px", marginTop:"-3.5px",
        willChange:"transform",
        transition:"opacity 0.2s",
      }}/>

      {/* Trailing ring */}
      <div ref={ringRef} aria-hidden style={{
        position:"fixed", top:0, left:0, zIndex:99998, pointerEvents:"none",
        width:36, height:36, borderRadius:"50%",
        border:"1.5px solid rgba(81,132,163,0.7)",
        transform:"translate(-50%,-50%)",
        marginLeft:"-18px", marginTop:"-18px",
        willChange:"transform",
        transition:"width 0.25s ease, height 0.25s ease, opacity 0.25s ease",
        opacity:0.7,
      }}/>

      {/* "View" label inside ring on image hover */}
      <div ref={labelRef} aria-hidden style={{
        position:"fixed", top:0, left:0, zIndex:99999, pointerEvents:"none",
        transform:"translate(-50%,-50%)",
        marginLeft:"-20px", marginTop:"-10px",
        color:"#fff", fontSize:"11px", fontWeight:700,
        letterSpacing:"0.06em", textTransform:"uppercase",
        opacity:0, transition:"opacity 0.2s",
        willChange:"transform",
      }}>View</div>
    </>
  )
}
