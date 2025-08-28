import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Construction,
  Clock,
  Wrench,
  ArrowLeft,
  Mail,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function EnConstruccionPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center flex-grow">
      {/* Hero Section */}
      {/*   <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20"> */}
      <section className="py-20 px-4 to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Construction className="w-24 h-24 mx-auto mb-6 text-primary animate-bounce" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Sitio en Construcción
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos trabajando duro para traerte algo increíble.
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            ¡Vuelve pronto!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al Inicio
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
        </div>
      </section>

      {/* Status Section */}
      {/*    <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
               <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>En Progreso</CardTitle>
                <CardDescription>Desarrollo activo en curso</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="text-sm">
                  75% Completado
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Optimizando</CardTitle>
                <CardDescription>Mejorando rendimiento y UX</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-sm">
                  Próximamente
                </Badge>
              </CardContent>
            </Card>

             <Card className="text-center">
              <CardHeader>
                <Github className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Código Limpio</CardTitle>
                <CardDescription>Siguiendo mejores prácticas</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="default" className="text-sm">
                  En Revisión
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Info Section */}
      {/*      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <CardContent className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                ¿Qué estamos construyendo?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Estamos desarrollando una experiencia web completamente nueva
                con las últimas tecnologías. Nuestro equipo está trabajando en
                crear algo que supere tus expectativas.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
              <p className="text-muted-foreground">
                Mientras tanto, puedes contactarnos para cualquier consulta o
                seguir nuestro progreso.
              </p>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Timeline Section */}
      {/*   <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cronograma Estimado
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-600">
                  Fase 1: Diseño y Arquitectura
                </h3>
                <p className="text-muted-foreground">
                  Completado - Estructura base y componentes UI
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 animate-pulse"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-600">
                  Fase 2: Desarrollo Frontend
                </h3>
                <p className="text-muted-foreground">
                  En progreso - Implementación de funcionalidades
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-600">
                  Fase 3: Testing y Optimización
                </h3>
                <p className="text-muted-foreground">
                  Próximamente - Pruebas y mejoras de rendimiento
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-600">
                  Fase 4: Lanzamiento
                </h3>
                <p className="text-muted-foreground">
                  Estimado para las próximas semanas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
