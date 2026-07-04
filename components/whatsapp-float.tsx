"use client"
import { MessageCircle } from "lucide-react"
const WA = "https://wa.me/923074494175?text=Hi%20Sanwal!%20I%27m%20interested%20in%20discussing%20a%20project%20with%20DevelopersTech."
export function WhatsAppFloat() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp" title="Chat with DevelopersTech on WhatsApp">
      <MessageCircle size={24} color="white" />
    </a>
  )
}
