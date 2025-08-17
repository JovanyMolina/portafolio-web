
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Mi Portafolio | Desarrollador Full Stack",
  description: "Portafolio profesional de evidencias - Proyectos de desarrollo web con Next.js, React y JavaScript",
  keywords: "desarrollador, portfolio, Next.js, React, JavaScript, Tailwind CSS",
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-portfolio.com",
    title: "Mi Portafolio | Desarrollador Full Stack",
    description: "Portafolio profesional de evidencias - Proyectos de desarrollo web",
    siteName: "Mi Portafolio",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style>{`
html {
 
}
        `}</style>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Navigation />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
