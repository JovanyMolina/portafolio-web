import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, Shield, Eye, ArrowLeft, Github } from "lucide-react";

export const metadata = {
  title: "Repositorio Privado - Mi Portafolio",
  description:
    "Este proyecto cuenta con repositorio privado por razones de seguridad y confidencialidad.",
};

export default function RepositorioPrivado() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <Lock className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-balance">
              Repositorio Privado
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Este proyecto cuenta con repositorio privado por razones de
              seguridad y confidencialidad
            </p>
          </div>

          {/* Info Card */}
          <Card className="mb-8 text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Información del Repositorio
              </CardTitle>
              <CardDescription>
                Detalles sobre el acceso al código fuente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Acceso Restringido</h3>
                  <p className="text-sm text-muted-foreground">
                    El código fuente de este proyecto no está disponible
                    públicamente
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Repositorio Privado</h3>
                  <p className="text-sm text-muted-foreground">
                    Por motivos de seguridad, confidencialidad o propiedad
                    intelectual
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al Inicio
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/proyectos">Ver Otros Proyectos</Link>
            </Button>
          </div>

          {/* Contact Note */}
          <div className="mt-12 p-6 rounded-lg bg-muted/50 border">
            <p className="text-sm text-muted-foreground">
              <strong>¿Interesado en el código?</strong>
              <br />
              Si necesitas acceso al repositorio por motivos profesionales o
              educativos, no dudes en contactarme para discutir las
              posibilidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
