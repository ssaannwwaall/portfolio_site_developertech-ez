"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const handleClick = () => {
    const msg = "Hi Sanwal! I'm interested in discussing a project with DevelopersTech."
    window.open(`https://wa.me/923074494175?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Contact DevelopersTech via WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
