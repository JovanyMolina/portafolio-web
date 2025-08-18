"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/project-card";
import { Search, Filter } from "lucide-react";
import DatosPortafolio from "@/app/Datos/datos-para-portafolio";

const allTags = [
  ...new Set(DatosPortafolio.allProjects.flatMap((project) => project.tags)),
];

export default function ProyectosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredProjects = DatosPortafolio.allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "" || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Mis Proyectos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora mi colección de proyectos de desarrollo web. Cada uno
          representa un desafío único y una oportunidad de aprendizaje.
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
          <Button
            variant={selectedTag === "" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag("")}
          >
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
          <p className="text-lg text-muted-foreground">
            No se encontraron proyectos que coincidan con tu búsqueda.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setSelectedTag("");
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
          Mostrando {filteredProjects.length} de{" "}
          {DatosPortafolio.allProjects.length} proyectos
        </p>
      </div>
    </div>
  );
}
