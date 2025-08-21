import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20 flex-1 flex items-center">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Página No Encontrada
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Lo sentimos, la página que buscas no existe o ha sido movida a
              otra ubicación.
            </p>
          </div>

          <Card className="p-8 mb-8">
            <CardContent className="space-y-6">
              <div className="text-center">
                <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="text-xl font-semibold mb-2">
                  ¿Qué puedes hacer?
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Verifica que la URL esté escrita correctamente</li>
                  <li>• Regresa a la página principal</li>
                  <li>• Explora mis proyectos</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Ir al Inicio
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              <Link href="/projects">
                <Search className="mr-2 h-5 w-5" />
                Ver Proyectos
              </Link>
            </Button>
          </div>

          {/*  <div className="mt-8">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver Atrás
              </Link>
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
