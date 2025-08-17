import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Github, Linkedin, Mail, Code, Palette, Database } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"

const skills = [
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Git", category: "tools" },
  { name: "Vercel", category: "tools" },
]

const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Tienda online completa con carrito de compras, pagos y panel de administración.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Stripe", "MongoDB"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce",
    slug: "ecommerce-moderno",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de control con gráficos interactivos y métricas en tiempo real.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Chart.js", "API"],
    demoUrl: "https://dashboard-demo.vercel.app",
    githubUrl: "https://github.com/usuario/dashboard",
    slug: "dashboard-analytics",
  },
  {
    id: 3,
    title: "App de Tareas",
    description: "Aplicación de gestión de tareas con autenticación y sincronización.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Supabase", "Tailwind"],
    demoUrl: "https://tasks-app.vercel.app",
    githubUrl: "https://github.com/usuario/tasks-app",
    slug: "app-tareas",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Avatar className="w-32 h-32 mx-auto mb-8">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Mi foto" />
            <AvatarFallback className="text-2xl">JM</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hola, soy Jovany Molina
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desarrollador Full Stack especializado en crear experiencias web modernas y funcionales
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/projects">
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="mailto:jovanymolina822@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contactar
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/JovanyMolina" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://www.linkedin.com/in/jovany-molina-vieyra/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Mí</h2>
          <Card className="p-8">
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy un desarrollador apasionado por crear soluciones digitales que impacten positivamente en la vida de
                las personas. Con experiencia en tecnologías modernas como React, Next.js y Node.js, me especializo en
                desarrollar aplicaciones web escalables y con excelente experiencia de usuario.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas para mantenerme actualizado en este
                mundo tecnológico en constante evolución.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Interfaces modernas y responsivas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "frontend")
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Backend & Database</CardTitle>
                <CardDescription>APIs robustas y bases de datos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => ["backend", "database"].includes(skill.category))
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Herramientas</CardTitle>
                <CardDescription>Desarrollo y despliegue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "tools")
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-lg text-muted-foreground">Algunos de mis trabajos más recientes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/proyectos">
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
