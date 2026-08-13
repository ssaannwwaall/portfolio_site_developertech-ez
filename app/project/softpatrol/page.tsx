"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SoftpatrolProject() {
  const projectImages = [
    { src: "/softpatrol-splash.webp", alt: "Softpatrol App Splash Screen" },
    { src: "/softpatrol-login.webp", alt: "Softpatrol Login Interface" },
    { src: "/softpatrol-dashboard.webp", alt: "Softpatrol Main Dashboard" },
    { src: "/softpatrol-schedule.webp", alt: "Site Schedule Management" },
    { src: "/softpatrol-tracking.webp", alt: "Real-time Tracking Interface" },
    { src: "/softpatrol-history.webp", alt: "Shift History and Analytics" },
    { src: "/softpatrol-holidays.webp", alt: "Holiday and Availability Management" },
  ]

  const technologies = [
    "Flutter",
    "Firebase",
    "GPS Integration",
    "Real-time Tracking",
    "Android 8.0+",
    "Google Play Console",
  ]

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi Sanwal! I'm interested in discussing a security management app project similar to Softpatrol. Can we talk about the development process and features?",
    )
    window.open(`https://wa.me/923074494175?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <Button onClick={handleWhatsAppContact} className="bg-primary hover:bg-primary/90">
              <ExternalLink className="h-4 w-4 mr-2" />
              Discuss Project
            </Button>
          </div>
        </div>
      </header>

      {/* Project Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Softpatrol
            </h1>
            <p className="text-xl text-muted-foreground mb-6">Security Guard Management & Tracking System</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Introducing 'Softpatrol', a cutting-edge guard tracking app that redefines security management. This
              comprehensive project enhances the efficiency and precision of security patrols by leveraging advanced
              mobile technology and real-time GPS tracking capabilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The app empowers security personnel with intuitive tracking features, enabling supervisors to monitor
              their team's movements seamlessly. Through GPS integration and intelligent mapping, Softpatrol ensures
              accurate tracking of patrol routes and comprehensive coverage of designated areas.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-cyan-600">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time GPS tracking and monitoring</li>
                  <li>• Incident logging and reporting system</li>
                  <li>• Shift scheduling and management</li>
                  <li>• Holiday and availability tracking</li>
                  <li>• Secure authentication system</li>
                  <li>• Comprehensive analytics dashboard</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-cyan-600">Technical Specs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Version: 1.7.4</li>
                  <li>• Android 8.0+ compatibility</li>
                  <li>• 1,000+ downloads on Play Store</li>
                  <li>• 39 MB download size</li>
                  <li>• Released: December 26, 2023</li>
                  <li>• Developer: Computer Friends</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Images */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">App Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectImages.map((image, index) => (
                <div key={index} className="bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground text-center">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Interested in Similar Security Solutions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to develop a comprehensive security management system for your organization? Let's discuss how we
              can create a custom solution tailored to your specific security needs.
            </p>
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              Start Your Security Project
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
