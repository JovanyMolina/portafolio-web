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
    title: "E-commerce Moderno",
    description:
      "Tienda online completa con carrito de compras, sistema de pagos integrado con Stripe, panel de administración para gestión de productos y órdenes.",
    image: "/test1.jpg",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce",
    slug: "ecommerce-moderno",
  },
];

module.exports = { skills, featuredProjects, projectsData, allProjects };
