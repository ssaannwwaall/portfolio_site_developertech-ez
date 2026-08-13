"use client"
import { useReveal } from "@/hooks/use-reveal"

interface Props {
  text: string
  /** how many trailing words render in italic accent */
  italic?: number
  className?: string
  tag?: "h1" | "h2" | "h3"
  style?: React.CSSProperties
}

export function MaskHeading({ text, italic = 0, className = "h2", tag = "h2", style }: Props) {
  const ref = useReveal<HTMLHeadingElement>(0.2)
  const words = text.split(" ")
  const start = words.length - italic
  const Tag = tag as any
  return (
    <Tag ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="mask-word">
          <span
            className={italic && i >= start ? "italic-accent" : undefined}
            style={{ transitionDelay: `${i * 0.055}s` }}
          >
            {w}
          </span>
          {"\u00A0"}
        </span>
      ))}
    </Tag>
  )
}

export function Rise({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>(0.1)
  return (
    <div ref={ref} className={`rise ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}
