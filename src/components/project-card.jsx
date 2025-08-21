import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-none">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button asChild size="sm" className="flex-1">
            <Link href={project.demoUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent"
          >
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Código
            </Link>
          </Button>
        </div>

        <div className="flex justify-center py-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent"
          >
            <Link href={`/projects/${project.slug}`}>
              <Info className="mr-2 h-4 w-4" />
              Detalles del proyecto
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
