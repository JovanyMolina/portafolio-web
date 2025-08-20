import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Code2,
  Palette,
  Database,
  Bot,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import DatosPortafolio from "@/app/Datos/datos-para-portafolio";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero*/}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Avatar className="w-32 h-32 mx-auto mb-8">
            <AvatarImage src="" alt="Mi foto" />
            <AvatarFallback className="text-2xl">JM</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hola, soy Jovany Molina
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desarrollador Full Stack | Desarrollo de software
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/projects">
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              <Link href="/CV-JovanyMolina.pdf" download>
                <FileDown className="mr-2 h-5 w-5" />
                Descargar CV
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
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
              <Link
                href="https://www.linkedin.com/in/jovany-molina-vieyra/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Mí</h2>
          <Card className="p-8">
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy una persona proactiva y comprometida tanto con mi
                aprendizaje como con mis responsabilidades personales y
                profesionales. Me apasiona aprender continuamente, no solo sobre
                tecnología, sino también sobre diversos aspectos de la vida.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Me enfoco en el desarrollo web y de software, creando soluciones
                digitales eficientes, escalables y orientadas al usuario.
                Disfruto colaborar con otras personas, compartir conocimientos y
                trabajar en equipo para alcanzar objetivos en común.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Mi enfoque constante es la mejora continua me impulsa a
                mantenerme actualizado con nuevas herramientas, lenguajes y
                buenas prácticas en el desarrollo moderno.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/20 ">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Habilidades Técnicas
          </h2>

          <div className="grid md:grid-cols-3 gap-8 ">
            <Card>
              <CardHeader className="text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Frontend</CardTitle>
                <CardDescription>
                  Interfaces modernas y responsivas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {DatosPortafolio.skills
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
                <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Backend</CardTitle>
                <CardDescription>
                  Lógica del servidor y manejo de datos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {DatosPortafolio.skills
                    .filter((skill) =>
                      ["backend", "database"].includes(skill.category)
                    )
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
                <CardTitle>Bases de Datos</CardTitle>
                <CardDescription>Almacenamiento y consultas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {DatosPortafolio.skills
                    .filter((skill) =>
                      ["base de datos", "db", "DB"].includes(skill.category)
                    )
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
                <Bot className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Automatización</CardTitle>
                <CardDescription>
                  Automatización de procesos y tareas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {DatosPortafolio.skills
                    .filter((skill) =>
                      ["automatizacion"].includes(skill.category)
                    )
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
                  {DatosPortafolio.skills
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
            <p className="text-lg text-muted-foreground">
              Algunos de mis trabajos más recientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {DatosPortafolio.featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
