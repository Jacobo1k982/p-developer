const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'Desarrollador Full Stack especializado en construir aplicaciones web completas, dinámicas y escalables. Trabajo con stacks modernos como React, Next.js, Node.js, Express, TypeScript y bases de datos SQL/NoSQL. Domino todo el ciclo: frontend, backend, APIs, seguridad, despliegue y optimización.',
        tech: [
            'React', 'Next.js', 'Node.js', 'Express', 'TypeScript',
            'JavaScript', 'Vite', 'REST APIs', 'GraphQL'
        ]
    },
    {
        id: 1,
        title: 'Frontend Moderno',
        desc: 'Experiencia construyendo interfaces rápidas, limpias y responsivas utilizando las mejores prácticas de UI. Trabajo con frameworks modernos, componentes reutilizables y patrones escalables para ofrecer experiencias fluidas y atractivas.',
        tech: [
            'React', 'Next.js', 'Tailwind CSS', 'Shadcn/UI',
            'Framer Motion', 'HTML5', 'CSS3'
        ]
    },
    {
        id: 2,
        title: 'UI/UX Design',
        desc: 'Diseño UI/UX enfocado en la experiencia del usuario. Creo interfaces modernas, accesibles y visualmente atractivas basadas en diseño intuitivo y centrado en el usuario. Prototipado, wireframes y sistemas de diseño.',
        tech: [
            'Figma', 'Adobe XD', 'Prototyping',
            'Design Systems', 'Branding'
        ]
    },
    {
        id: 3,
        title: 'Diseño con Tailwind CSS',
        desc: 'Experto en Tailwind CSS para construir interfaces estéticas, rápidas y escalables. Diseño componentes personalizados, layouts modernos y experiencias visuales de alto nivel optimizadas para cualquier dispositivo.',
        tech: ['Tailwind CSS', 'Responsive Design', 'Custom Components']
    },
    {
        id: 4,
        title: 'Backend & Servidores',
        desc: 'Construyo arquitecturas backend eficientes, seguras y altamente escalables. Implemento autenticación, autorización, middleware, manejo de datos y servicios distribuidos.',
        tech: [
            'Node.js', 'Express', 'JWT Auth', 'TypeScript',
            'API Security', 'Microservices'
        ]
    },
    {
        id: 5,
        title: 'Bases de Datos SQL & NoSQL',
        desc: 'Experiencia gestionando datos estructurados y no estructurados. Diseño modelos eficientes, consultas avanzadas e integración segura. Uso SQL para relaciones complejas y NoSQL para rendimiento y escalabilidad.',
        tech: [
            'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase',
            'Supabase', 'ORM: Prisma'
        ]
    },
    {
        id: 6,
        title: 'Desarrollo & Integración de APIs',
        desc: 'Desarrollo e integro APIs RESTful y GraphQL optimizadas para rapidez, seguridad y escalabilidad. Diseño endpoints limpios y documentados, integrando servicios externos y comunicación entre sistemas.',
        tech: [
            'REST APIs', 'GraphQL', 'Postman',
            'API Documentation', 'Webhooks'
        ]
    },
    {
        id: 7,
        title: 'DevOps, Cloud & Deployments',
        desc: 'Experiencia desplegando proyectos en la nube, configurando pipelines CI/CD y optimizando rendimiento en producción. Manejo de servicios modernos para hosting y automatización.',
        tech: [
            'Vercel', 'Railway', 'Netlify', 'Docker', 'CI/CD',
            'GitHub Actions'
        ]
    },
    {
        id: 8,
        title: 'Git & Github',
        desc: 'Manejo profesional de control de versiones, ramas, colaboración, PRs y flujos avanzados. GitHub es esencial para mantener calidad, orden y eficiencia en el desarrollo de proyectos.',
        tech: ['Git', 'GitHub', 'Version Control', 'Code Reviews']
    },
    {
        id: 9,
        title: 'Testing & Calidad de Código',
        desc: 'Implementación de pruebas unitarias, integración continua y estándares de calidad para asegurar software confiable y libre de errores.',
        tech: [
            'Jest', 'React Testing Library',
            'ESLint', 'Prettier'
        ]
    },
];

export default function handler(req, res) {
    res.status(200).json(expertise);
}
