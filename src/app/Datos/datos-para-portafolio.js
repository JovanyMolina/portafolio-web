const skills = [
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Next.js", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Express", category: "backend" },

  { name: "MySQL", category: "base de datos" },
  { name: "SQL Server", category: "base de datos" },
  /*   { name: "MongoDB", category: "base de datos" },*/
  { name: "PostgreSQL", category: "base de datos" },

  { name: "Git", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Axios", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "APIs REST", category: "tools" },

  { name: "Puppeteer", category: "automatizacion" },
];

const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description:
      "Tienda online completa con carrito de compras, pagos y panel de administración.",
    image: "/test1.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce",
    slug: "ecommerce-moderno",
  },
];

const projectsData = {
  "ecommerce-moderno": {
    title: "E-commerce Moderno",
    description:
      "Una tienda online completa construida con las últimas tecnologías web.",
    longDescription:
      "Este proyecto representa una solución completa de e-commerce que incluye todas las funcionalidades esenciales para una tienda online moderna. Desde la gestión de productos hasta el procesamiento de pagos, cada aspecto ha sido cuidadosamente diseñado para ofrecer la mejor experiencia tanto a usuarios como administradores.",
    images: ["/test1.jpg", "/test2.jpg"],
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce",
    duration: "3 meses",
    role: "Full Stack Developer",
    objectives: [
      "Crear una experiencia de compra fluida y segura",
      "Implementar un sistema de pagos robusto con Stripe",
      "Desarrollar un panel de administración completo",
      "Optimizar el rendimiento y SEO",
    ],
    features: [
      "Catálogo de productos con filtros avanzados",
      "Carrito de compras persistente",
      "Sistema de pagos con Stripe",
      "Panel de administración",
      "Gestión de inventario",
      "Sistema de órdenes y facturación",
      "Autenticación de usuarios",
      "Diseño responsive",
    ],
    lessons: [
      "Integración completa de sistemas de pago",
      "Gestión de estado complejo en aplicaciones grandes",
      "Optimización de rendimiento en aplicaciones con muchos datos",
      "Implementación de mejores prácticas de seguridad",
    ],
  },
};

const allProjects = [
  {
    id: 1,
    title: "Notaposweb",
    description:
      "Sistema de un punto de venta para un negocio local de papelería.",
    image: "/test1.jpg",
    tags: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "MySQL",
      "AG-Grid",
      "Font Awesome",
      "SweetAlert2",
    ],
    demoUrl: "/project/*",
    githubUrl: "https://github.com/JovanyMolina/notaposweb",
    slug: "notaposweb",
  },
  {
    id: 2,
    title: "Textilapp",
    description:
      "Pagina web sobre ropa con carrito de compras, pagos y panel de administración para diferentes usuarios.",
    image: "/test1.jpg",
    tags: [
      "Vite",
      "React.js",
      "Express.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Axios",
      "Font Awesome",
      "Api REST",
    ],
    demoUrl: "/project/*",
    githubUrl: "https://github.com/JuanCharlitossLopez/textilyapp",
    slug: "textilapp",
  },
  {
    id: 3,
    title: "Simulador SAT y bot",
    description:
      "Clon de la pagina web del SAT, con funcionalidad de de cargar/descarga de los CFDI, y un Bot para automatizar procesos.",
    image: "/test1.jpg",
    tags: [
      "Next.js",
      "Node.js",
      "React.js",
      "JavaScript",
      "Puppeteer",
      "Axios",
      "SweetAlert2",
      "Tailwind CSS",
    ],
    demoUrl: "/project/*",
    githubUrl: "https://github.com/JovanyMolina/simuladorSatAndBot",
    slug: "simulador-sat-y-bot",
  },
  {
    id: 4,
    title: "Sistema de Asistencias",
    description: "Sistema para la gestión de asistencias en una institución",
    image: "/test1.jpg",
    tags: ["C#", ".Net", "SQL Server"],
    demoUrl: "/project/*",
    githubUrl: "https://github.com/JovanyMolina/SistemaDeAsistencia",
    slug: "sistema-de-asistencias",
  },
  {
    id: 5,
    title: "PVCelulares",
    description: "Sistema para la gestión de ventas/reparación de celulares",
    image: "/test1.jpg",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    demoUrl: "/project/*",
    githubUrl: "https://github.com/JovanyMolina/PVCelulares",
    slug: "pvcelulares",
  },
  {
    id: 6,
    title: "TOOLVIN",
    description: "Sistema para la gestión de ventas de herramientas",
    image: "/test1.jpg",
    tags: ["C#", ".Net", "SQL Server"],
    demoUrl: "/project/*",
    githubUrl: "https://github.com/ElHuachi/5S6A-ING.DE-SOFTWARE",
    slug: "toolvin",
  },
  {
    id: 7,
    title: "Portafolio web",
    description:
      "Pagina web personal para mostrar mis proyectos y habilidades.",
    image: "/test1.jpg",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Shadcn UI",
      "Lucide-react",
    ],
    demoUrl: "/project/*",
    githubUrl: "https://github.com/JovanyMolina/portafolio-web",
    slug: "portafolio-web",
  },
];

module.exports = { skills, featuredProjects, projectsData, allProjects };
