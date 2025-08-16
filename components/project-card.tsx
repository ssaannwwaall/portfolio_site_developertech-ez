"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  color: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleWhatsAppContact = () => {
    const message = `Hi Sanwal Khan! I'm interested in learning more about your ${project.title} project. Can we discuss mobile app development services?`
    const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className={`${project.color} p-6 relative`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        <div className="relative z-10">
          <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
            {project.category}
          </Badge>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Link href={`/project/${project.id}`} className="flex-1">
            <Button size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          <Button size="sm" variant="outline" onClick={handleWhatsAppContact}>
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
