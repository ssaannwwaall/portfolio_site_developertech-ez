import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "TaskMaster",
    category: "Productivity",
    description: "Smart task management app with team collaboration and advanced analytics.",
    image: "/task-management-app-interface.png",
    technologies: ["Flutter", "Firebase", "Dart"],
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    id: 2,
    title: "FoodieExplorer",
    category: "Food & Drink",
    description: "Discover local restaurants with AR menu scanning and social reviews.",
    image: "/food-delivery-app-screen.png",
    technologies: ["Swift", "ARKit", "Core Data"],
    color: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    id: 3,
    title: "ShopSmart",
    category: "E-commerce",
    description: "AI-powered shopping assistant with price comparison and deal alerts.",
    image: "/shopping-app-interface.png",
    technologies: ["Flutter", "TensorFlow", "GraphQL"],
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
  },
  {
    id: 4,
    title: "Softpatrol",
    category: "Security & Management",
    description:
      "Cutting-edge guard tracking app that redefines security management with real-time GPS tracking, incident logging, and patrol route monitoring.",
    image: "/softpatrol-dashboard.webp",
    technologies: ["Flutter", "Firebase", "GPS Integration", "Real-time Tracking"],
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    id: 5,
    title: "TBMS Driver",
    category: "Transportation & Logistics",
    description:
      "Advanced taxi dispatch management system with real-time job tracking, driver management, and comprehensive business analytics for modern taxi operations.",
    image: "/tbms-dashboard.webp",
    technologies: ["Flutter", "Real-time Tracking", "Payment Integration", "Cloud Dispatch"],
    color: "bg-gradient-to-br from-emerald-400 to-teal-500",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent mobile app projects that showcase innovation, user-centric design, and technical
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
