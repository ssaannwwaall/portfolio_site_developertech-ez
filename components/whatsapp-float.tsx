"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "923074494175" // Sanwal Khan's number without + and spaces
    const message = "Hi Sanwal! I'm interested in discussing a mobile app project with you."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
