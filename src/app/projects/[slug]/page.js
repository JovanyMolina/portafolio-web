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
import Link from "next/link";
import DatosPortafolio from "@/app/Datos/datos-para-portafolio";
import ClickableImage from "@/components/ClickableImage";
import {
  AnimatedSection,
  AnimatedList,
  AnimatedListItem,
} from "@/components/AnimatedSection";

export async function generateStaticParams() {
  return Object.keys(DatosPortafolio.projectsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const project = DatosPortafolio.projectsData[params.slug];

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title}  Mi Portafolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage(props) {
  const params = await props.params;
  const project = DatosPortafolio.projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <AnimatedSection delay={0.05}>
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Proyectos
          </Link>
        </Button>
      </AnimatedSection>

      {/* Header */}
      <AnimatedSection delay={0.1}>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>

          <AnimatedList
            className="flex flex-wrap gap-2 mb-6"
            delay={0.15}
            amount={0.1}
          >
            {project.tags.map((tag) => (
              <AnimatedListItem key={tag} className="inline-flex">
                <Badge variant="secondary">{tag}</Badge>
              </AnimatedListItem>
            ))}
          </AnimatedList>

          <AnimatedList
            className="flex flex-wrap gap-4"
            delay={0.2}
            amount={0.1}
          >
            <AnimatedListItem className="inline-flex">
              <Button asChild>
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Demo
                </Link>
              </Button>
            </AnimatedListItem>
            <AnimatedListItem className="inline-flex">
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Ver Código
                </Link>
              </Button>
            </AnimatedListItem>
          </AnimatedList>
        </div>
      </AnimatedSection>

      {/* Project Images */}
      <AnimatedSection delay={0.1}>
        <div className="mb-12">
          <div className="grid gap-4">
            <ClickableImage
              src={project.images[0]}
              alt={`${project.title} - Vista principal`}
              className="aspect-video"
            />
            {project.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <ClickableImage
                    key={index}
                    src={image}
                    alt={`${project.title} - Vista ${index + 2}`}
                    className="aspect-video"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Project Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <AnimatedSection delay={0.1}>
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
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
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
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
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
        </AnimatedSection>
      </div>

      {/* Description */}
      <AnimatedSection delay={0.15}>
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
      </AnimatedSection>

      {/* Objectives */}
      <AnimatedSection delay={0.2}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Objetivos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatedList as="ul" className="space-y-2" amount={0.3}>
              {project.objectives.map((objective, index) => (
                <AnimatedListItem
                  key={index}
                  as="li"
                  className="flex items-start"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{objective}</span>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection delay={0.25}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Características Principales</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatedList className="grid md:grid-cols-2 gap-3" amount={0.3}>
              {project.features.map((feature, index) => (
                <AnimatedListItem key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  <span className="text-sm">{feature}</span>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Lessons Learned */}
      <AnimatedSection delay={0.3}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" />
              Lecciones Aprendidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatedList as="ul" className="space-y-3" amount={0.3}>
              {project.lessons.map((lesson, index) => (
                <AnimatedListItem
                  key={index}
                  as="li"
                  className="flex items-start"
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{lesson}</span>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.35}>
        <div className="text-center">
          <Separator className="mb-8" />
          <h3 className="text-2xl font-bold mb-4">
            ¿Te interesa este proyecto?
          </h3>
          <p className="text-muted-foreground mb-6">
            Puedes ver el código fuente o probar la demo en vivo
          </p>
          <AnimatedList
            className="flex gap-4 justify-center flex-wrap"
            amount={0.2}
          >
            <AnimatedListItem className="inline-flex">
              <Button asChild size="lg">
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Demo
                </Link>
              </Button>
            </AnimatedListItem>
            <AnimatedListItem className="inline-flex">
              <Button asChild variant="outline" size="lg">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Ver Código
                </Link>
              </Button>
            </AnimatedListItem>
          </AnimatedList>
        </div>
      </AnimatedSection>
    </div>
  );
}
