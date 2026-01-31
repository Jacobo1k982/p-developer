// pages/api/background.ts   (Pages Router)

const backgroundData = {
    education: [
        {
            id: "edu-0",
            institution: "CSS: Flexbox y layouts responsivos",
            degree: "Formaciones con este curso",
            description: "CSS: Profundiza en los estilos",
            period: "11/04/2024"
        },
        {
            id: "edu-1",
            institution: "ChatGPT y JavaScript",
            degree: "Construyendo el juego Pong",
            description: "Jornada de IA para desarrolladores",
            period: "04/09/2024"
        },
        {
            id: "edu-2",
            institution: "Hooks en ReactJS",
            degree: "Conociendo su potencial y utilidad",
            description: "Nivelación TypeSript y React - Alura Boost, Explora React con JavaScript, Explora React con JavaScript TypeSript - Bootcamp",
            period: "25/11/2024"
        },
        {
            id: "edu-3",
            institution: "HTML y CSS",
            degree: "ambientes de desarrollo, estructura de archivos y tags",
            description: "HTML y CSS: para proyectos web, nivelación Bootcamp React con Typescript, Programación G9 - ONE, Angular: creando aplicaciones web dinámicas",
            period: "25/11/2024"
        },
        {
            id: "edu-4",
            institution: "Javascript",
            degree: "consumiendo y manejando datos de una API",
            description: "Nivelación TypeSript y React - Alura Boost",
            period: "19/08/2025"
        },
        {
            id: "edu-5",
            institution: "React",
            degree: "Desarrollando con JavaScript",
            description: "Implementar Componentes Reactivos, Investigar y analizar mensajes de erro, Prototipo de una aplicación web con React - Bootcamp",
            period: "20/08/2025"
        },
    ],
    experience: [
        {
            id: "exp-1",
            company: "Bordados ALCA",
            role: "Frontend Developer",
            url: "https://bordadosalca.com/",
            description: "Como desarrollador frontend, uso React, Next.js, Tailwind CSS y JavaScript para crear interfaces de usuario para aplicaciones web.",
            period: "06/2025 - Present",
            location: "Pavas, Costa Rica"
        },
        {
            id: "exp-2",
            company: "Business Process Outsourcing MiConta",
            role: "Frontend Developer",
            url: "https://bpomiconta.netlify.app/",
            description: "Como desarrollador frontend, uso React, Next.js Tailwind CSS y JavaScript para crear interfaces de usuario para aplicaciones web.",
            period: "02/2025 - Present",
            location: "San José, Costa Rica"
        },
    ]
};

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(backgroundData);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}