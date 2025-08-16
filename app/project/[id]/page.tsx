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
    title: "FitTracker Pro",
    category: "Health & Fitness",
    description: "A comprehensive fitness tracking app with AI-powered workout recommendations and social features.",
    fullDescription:
      "FitTracker Pro is a revolutionary fitness application that combines artificial intelligence with social networking to create the ultimate workout companion. The app features personalized workout plans, real-time form correction using computer vision, and a vibrant community where users can share their fitness journey. With over 500+ exercises in the database and integration with popular wearables, FitTracker Pro has helped thousands of users achieve their fitness goals.",
    image: "/fitness-app-interface.png",
    images: [
      "/fitness-app-interface.png",
      "/fitness-app-workout.png",
      "/fitness-app-social.png",
      "/placeholder-wtcyg.png",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "Socket.io"],
    color: "bg-gradient-to-br from-green-400 to-blue-500",
    features: [
      "AI-powered workout recommendations",
      "Real-time form correction",
      "Social fitness community",
      "Wearable device integration",
      "Progress analytics",
    ],
    playStoreUrl: "#",
    appStoreUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "CryptoWallet",
    category: "Finance",
    description: "Secure cryptocurrency wallet with portfolio tracking and trading features.",
    fullDescription:
      "CryptoWallet provides a secure and user-friendly platform for managing cryptocurrency investments. With bank-level security, real-time market data, and advanced portfolio analytics, users can confidently trade and track their digital assets. The app supports multiple cryptocurrencies and includes features like price alerts, news integration, and educational resources.",
    image: "/placeholder-qd5fn.png",
    images: [
      "/crypto-wallet-interface.png",
      "/portfolio-tracking-dashboard.png",
      "/trading-interface.png",
      "/security-settings-screen.png",
    ],
    technologies: ["Kotlin", "Blockchain API", "SQLite", "Retrofit", "Biometric Auth"],
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    features: [
      "Multi-currency support",
      "Real-time market data",
      "Advanced security",
      "Portfolio analytics",
      "Price alerts",
    ],
    playStoreUrl: "#",
    appStoreUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "MindfulMoments",
    category: "Health & Wellness",
    description: "Meditation and mindfulness app with guided sessions and progress tracking.",
    fullDescription:
      "MindfulMoments offers a comprehensive meditation and mindfulness experience with guided sessions, breathing exercises, and progress tracking. The app features content from certified meditation instructors, customizable ambient sounds, and detailed analytics to help users build a consistent mindfulness practice. With offline support and Apple Health integration, users can meditate anywhere, anytime.",
    image: "/meditation-app-interface.png",
    images: [
      "/meditation-app-interface.png",
      "/guided-meditation.png",
      "/breathing-exercises-interface.png",
      "/placeholder.svg?height=400&width=300",
    ],
    technologies: ["React Native", "Redux", "AWS", "HealthKit", "Audio Processing"],
    color: "bg-gradient-to-br from-teal-400 to-green-500",
    features: [
      "Guided meditation sessions",
      "Breathing exercises",
      "Progress tracking",
      "Offline support",
      "Health app integration",
    ],
    playStoreUrl: "#",
    appStoreUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
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
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
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
                    <Button className="w-full bg-transparent" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Google Play Store
                    </Button>
                    <Button className="w-full bg-transparent" variant="outline">
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
