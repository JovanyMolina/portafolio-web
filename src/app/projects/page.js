"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/project-card"
import { Search, Filter } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description:
      "Tienda online completa con carrito de compras, sistema de pagos integrado con Stripe, panel de administración para gestión de productos y órdenes.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce",
    slug: "ecommerce-moderno",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Panel de control con gráficos interactivos, métricas en tiempo real, filtros avanzados y exportación de reportes en PDF.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    demoUrl: "https://dashboard-demo.vercel.app",
    githubUrl: "https://github.com/usuario/dashboard",
    slug: "dashboard-analytics",
  },
  {
    id: 3,
    title: "App de Tareas",
    description:
      "Aplicación de gestión de tareas con autenticación, sincronización en tiempo real, categorías personalizables y recordatorios.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://tasks-app.vercel.app",
    githubUrl: "https://github.com/usuario/tasks-app",
    slug: "app-tareas",
  },
  {
    id: 4,
    title: "Blog Personal",
    description:
      "Blog con sistema de comentarios, categorías, búsqueda avanzada, modo oscuro y optimización SEO completa.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    demoUrl: "https://mi-blog.vercel.app",
    githubUrl: "https://github.com/usuario/blog",
    slug: "blog-personal",
  },
  {
    id: 5,
    title: "API REST Completa",
    description:
      "API RESTful con autenticación JWT, documentación con Swagger, rate limiting, validaciones y testing completo.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://api-docs.herokuapp.com",
    githubUrl: "https://github.com/usuario/api-rest",
    slug: "api-rest",
  },
  {
    id: 6,
    title: "Chat en Tiempo Real",
    description:
      "Aplicación de chat con salas privadas, mensajes en tiempo real, notificaciones push y compartir archivos.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    demoUrl: "https://chat-realtime.vercel.app",
    githubUrl: "https://github.com/usuario/chat-app",
    slug: "chat-tiempo-real",
  },
]

const allTags = [...new Set(allProjects.flatMap((project) => project.tags))]

export default function ProyectosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === "" || project.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Mis Proyectos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora mi colección de proyectos de desarrollo web. Cada uno representa un desafío único y una oportunidad de
          aprendizaje.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant={selectedTag === "" ? "default" : "outline"} size="sm" onClick={() => setSelectedTag("")}>
            <Filter className="mr-2 h-4 w-4" />
            Todos
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No se encontraron proyectos que coincidan con tu búsqueda.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedTag("")
            }}
            className="mt-4"
          >
            Limpiar filtros
          </Button>
        </div>
      )}

      {/* Stats */}
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredProjects.length} de {allProjects.length} proyectos
        </p>
      </div>
    </div>
  )
}
