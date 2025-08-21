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
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-900 border-0">
            {project.category}
          </Badge>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${project.color}`} />
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs border-cyan-200 text-cyan-700 hover:bg-cyan-50">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Link href={`/project/${project.id}`} className="flex-1">
            <Button size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700">
              View Details
            </Button>
          </Link>
          <Button
            size="sm"
            variant="outline"
            onClick={handleWhatsAppContact}
            className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 bg-transparent"
          >
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
