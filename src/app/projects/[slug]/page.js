import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DatosPortafolio from "@/app/Datos/datos-para-portafolio";

export async function generateStaticParams() {
  return Object.keys(DatosPortafolio.projectsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = DatosPortafolio.projectsData[params.slug];

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} | Mi Portafolio`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = DatosPortafolio.projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/proyectos">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Proyectos
        </Link>
      </Button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link href={project.demoUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Demo
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Ver Código
            </Link>
          </Button>
        </div>
      </div>

      {/* Project Images */}
      <div className="mb-12">
        <div className="grid gap-4">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={`${project.title} - Vista principal`}
              fill
              className="object-cover"
            />
          </div>
          {project.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-video relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Vista ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Duración
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.duration}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Mi Rol
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.role}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Github className="mr-2 h-5 w-5" />
              Tecnologías
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.tags.length} tecnologías</p>
          </CardContent>
        </Card>
      </div>

      {/* Description */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Descripción del Proyecto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </CardContent>
      </Card>

      {/* Objectives */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Objetivos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{objective}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Características Principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lessons Learned */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="mr-2 h-5 w-5" />
            Lecciones Aprendidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {project.lessons.map((lesson, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{lesson}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Separator className="mb-8" />
        <h3 className="text-2xl font-bold mb-4">¿Te interesa este proyecto?</h3>
        <p className="text-muted-foreground mb-6">
          Puedes ver el código fuente o probar la demo en vivo
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={project.demoUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Ver Código
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
