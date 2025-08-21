"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "TaskMaster",
    category: "Productivity",
    description: "Smart task management app with team collaboration and advanced analytics.",
    fullDescription:
      "TaskMaster revolutionizes productivity management with intelligent task prioritization and seamless team collaboration. Built with Flutter and Firebase, this app offers real-time synchronization across devices, advanced project analytics, and AI-driven insights to help teams work more efficiently. The app includes features like time tracking, deadline reminders, and comprehensive reporting tools.",
    image: "/task-management-app-interface.png",
    images: [
      "/task-management-app-interface.png",
      "/task-management-dashboard.png",
      "/team-collaboration-interface.png",
      "/analytics-reports-screen.png",
    ],
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions", "Analytics"],
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
    features: [
      "Smart task prioritization",
      "Team collaboration tools",
      "Time tracking",
      "Advanced analytics",
      "Cross-platform sync",
    ],
    playStoreUrl: "#",
    appStoreUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "FoodieExplorer",
    category: "Food & Drink",
    description: "Discover local restaurants with AR menu scanning and social reviews.",
    fullDescription:
      "FoodieExplorer transforms the dining experience with cutting-edge AR technology and social discovery features. Users can scan restaurant menus to get detailed nutritional information, read reviews from fellow food enthusiasts, and discover hidden gems in their area. The app integrates with popular food delivery services and offers personalized recommendations based on dietary preferences.",
    image: "/food-delivery-app-screen.png",
    images: [
      "/food-delivery-app-screen.png",
      "/ar-menu-scanning-interface.png",
      "/restaurant-discovery-map.png",
      "/social-reviews-ratings.png",
    ],
    technologies: ["Swift", "ARKit", "Core Data", "MapKit", "CloudKit"],
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    features: [
      "AR menu scanning",
      "Social reviews system",
      "Restaurant discovery",
      "Nutritional information",
      "Delivery integration",
    ],
    playStoreUrl: "#",
    appStoreUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ShopSmart",
    category: "E-commerce",
    description: "AI-powered shopping assistant with price comparison and deal alerts.",
    fullDescription:
      "ShopSmart leverages artificial intelligence to provide users with the best shopping experience possible. The app compares prices across multiple retailers, sends personalized deal alerts, and offers smart recommendations based on shopping history. With barcode scanning, wishlist management, and cashback integration, ShopSmart helps users save money and time while shopping.",
    image: "/shopping-app-interface.png",
    images: [
      "/shopping-app-interface.png",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    technologies: ["Flutter", "TensorFlow", "GraphQL", "Firebase", "ML Kit"],
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    features: [
      "AI-powered recommendations",
      "Price comparison",
      "Deal alerts",
      "Barcode scanning",
      "Cashback integration",
    ],
    playStoreUrl: "#",
    appStoreUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Softpatrol",
    category: "Security & Business",
    description: "Comprehensive security guard tracking and management system with real-time monitoring.",
    fullDescription:
      "Softpatrol is a cutting-edge security management application designed to revolutionize how security companies track and manage their guard operations. Built with Flutter and Firebase, this comprehensive solution offers real-time GPS tracking, incident logging, shift management, and detailed analytics. The app ensures accountability, improves response times, and provides complete visibility into security operations with features like patrol route monitoring, emergency alerts, and automated reporting.",
    image: "/softpatrol-splash.webp",
    images: [
      "/softpatrol-splash.webp",
      "/softpatrol-login.webp",
      "/softpatrol-dashboard.webp",
      "/softpatrol-schedule.webp",
      "/softpatrol-tracking.webp",
      "/softpatrol-history.webp",
      "/softpatrol-holidays.webp",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Google Maps API",
      "GPS Tracking",
      "Real-time Database",
      "Push Notifications",
    ],
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    features: [
      "Real-time GPS tracking",
      "Shift scheduling & management",
      "Incident logging & reporting",
      "Route monitoring",
      "Emergency SOS alerts",
      "Holiday & availability management",
      "Comprehensive analytics",
      "Multi-location support",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.computerfriends.soft.patrol&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/softpatrol-staff/id6475000861",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "TBMS Driver",
    category: "Transportation & Logistics",
    description:
      "Advanced taxi dispatch management system with real-time job tracking, driver management, and comprehensive business analytics for modern taxi operations.",
    fullDescription:
      "TBMS Driver is an affordable yet advanced cloud-based dispatch system designed for modern taxi operations. This comprehensive solution offers real-time job tracking, driver management, customer handling, account invoices, and many advanced functions. The system is enriched with features to deliver seamless taxi business operations, including GPS tracking, payment integration, job bidding, and detailed analytics. Regular updates and improvements help keep up with new industry trends and requirements.",
    image: "/tbms-dashboard.webp",
    images: [
      "/tbms-splash.webp",
      "/tbms-login.webp",
      "/tbms-dashboard.webp",
      "/tbms-jobs.webp",
      "/tbms-details.webp",
      "/tbms-tablet.webp",
      "/tbms-earnings.webp",
    ],
    technologies: [
      "Flutter",
      "Cloud Dispatch System",
      "GPS Tracking",
      "Payment Integration",
      "Real-time Database",
      "Job Management",
      "Analytics Dashboard",
    ],
    color: "bg-gradient-to-br from-emerald-400 to-teal-500",
    features: [
      "Cloud-based dispatch system",
      "Real-time job tracking",
      "Driver management & scheduling",
      "Customer handling system",
      "Account invoices & billing",
      "GPS location tracking",
      "Job bidding system",
      "Comprehensive analytics",
      "Multi-device compatibility",
      "Payment processing",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.optiinfo.tbms_driver_new&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/tbms-driver-taxi-system/id633426576",
    githubUrl: "#",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  const handleWhatsAppContact = () => {
    const message = `Hi Sanwal Khan! I'm interested in learning more about your ${project.title} project. Can we discuss mobile app development services?`
    const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleViewDemo = () => {
    if (project.playStoreUrl && project.playStoreUrl !== "#") {
      window.open(project.playStoreUrl, "_blank")
    } else {
      const message = `Hi Sanwal Khan! I'd like to see a demo of your ${project.title} project. Can you show me how it works?`
      const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <Image
                src="/images/company-logo.png"
                alt="DeveloperTech Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-primary">DeveloperTech</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${project.color} py-20 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl mb-8 text-white/90">{project.fullDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90" onClick={handleWhatsAppContact}>
                  Discuss This Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  onClick={handleViewDemo}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {project.playStoreUrl && project.playStoreUrl !== "#" ? "View on Play Store" : "Request Demo"}
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Screenshots Gallery */}
              <div>
                <h2 className="text-3xl font-bold mb-8">App Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={300}
                          height={400}
                          className="w-full h-64 object-cover"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Download Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Download App</h3>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-transparent"
                      variant="outline"
                      onClick={() => {
                        if (project.playStoreUrl && project.playStoreUrl !== "#") {
                          window.open(project.playStoreUrl, "_blank")
                        } else {
                          const message = `Hi Sanwal Khan! I'm interested in downloading your ${project.title} app. Can you provide the Play Store link?`
                          const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Google Play Store
                    </Button>
                    <Button
                      className="w-full bg-transparent"
                      variant="outline"
                      onClick={() => {
                        if (project.appStoreUrl && project.appStoreUrl !== "#") {
                          window.open(project.appStoreUrl, "_blank")
                        } else {
                          const message = `Hi Sanwal Khan! I'm interested in downloading your ${project.title} app. Can you provide the App Store link?`
                          const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apple App Store
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interested in Similar Project?</h3>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss how I can help you build your next mobile app.
                  </p>
                  <Button className="w-full" onClick={handleWhatsAppContact}>
                    Contact via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
