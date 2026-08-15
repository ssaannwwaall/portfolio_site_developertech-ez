"use client"

import { Component, type ReactNode } from "react"

/**
 * Catches any render error inside the world map so a failure in the
 * mapping library can never take down the whole page.
 */
export class MapBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Client map failed to render:", error)
    }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
