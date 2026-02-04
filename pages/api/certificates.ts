import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método no permitido' })
    }

    try {
        const data = [
            {
                id: "cert",
                title: "Desarrollo Full Stack G7 - ONE",
                issuer: "Alura Latam (Oracle)",
                date: "Marzo 2024",
                credentialId: "00001234531",
                credentialUrl: "",
                imageUrl: "/images/certificados/fullstack.png"
            },
            {
                id: "cert-001",
                title: "Formación lógica de programación con JavaScript",
                issuer: "Alura Latam (Oracle)",
                date: "Julio 2024",
                credentialId: "000012345",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-programacion-primeros-pasos-15697/certificate",
                imageUrl: "/images/certificados/001.png"
            },
            {
                id: "cert-002",
                title: "Principiante en programación G7 - ONE",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "000012346",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-programacion-primeros-pasos-grupo7-one-15788/certificate",
                imageUrl: "/images/certificados/002.png"
            },
            {
                id: "cert-003",
                title: "Desarrollo Personal G7 - ONE",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "000012347",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-desarrollo-personal-grupo7-one-15787/certificate",
                imageUrl: "/images/certificados/003.png"
            },
            {
                id: "cert-004",
                title: "Desde cero: HTML y CSS para proyectos Web",
                issuer: "Alura Latam (Oracle)",
                date: "Septiembre 2024",
                credentialId: "000012348",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-html-css-15658/certificate",
                imageUrl: "/images/certificados/004.png"
            },
            {
                id: "cert-005",
                title: "Formación Front End G7 - ONE",
                issuer: "Alura Latam (Oracle)",
                date: "Noviembre 2024",
                credentialId: "000012349",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-frontend-grupo7-one-15799/certificate",
                imageUrl: "/images/certificados/005.png"
            },
            {
                id: "cert-006",
                title: "Nivelación TypeScript y React",
                issuer: "Alura Boost (Oracle)",
                date: "Enero 2025",
                credentialId: "000012349",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-nivelacion-typescript-react-alura-boost-15903/certificate",
                imageUrl: "/images/certificados/006.png"
            },
            {
                id: "cert-007",
                title: "Formación Explora React con JavaScript",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123410",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-react-v15784-15784/certificate",
                imageUrl: "/images/certificados/007.png"
            },
            {
                id: "cert-008",
                title: "React G7 - ONE",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123411",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-react-grupo7-one-15800/certificate",
                imageUrl: "/images/certificados/008.png"
            },
            {
                id: "cert-009",
                title: "Formación Emprendimiento",
                issuer: "Agilidad y Protagonismo Profesional G7 - ONE",
                date: "Enero 2025",
                credentialId: "0000123412",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-emprendimiento-agilidad-y-protagonismo-profesional-grupo7-one-15837/certificate",
                imageUrl: "/images/certificados/009.png"
            },
        ]

        return res.status(200).json(data)
    } catch (error) {
        console.error('Error en /api/certificates:', error)
        return res.status(500).json({ error: 'Error interno del servidor' })
    }
}