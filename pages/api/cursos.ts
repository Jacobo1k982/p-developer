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
                id: "cert-002",
                title: "Principiante en programación G7 - ONE",
                subtitle: "Primeros pasos en lógica y programación",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "000012346",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-programacion-primeros-pasos-grupo7-one-15788/certificate",
                imageUrl: "/images/certificados/002.png", // captura del certificado (PNG)
                iconUrl: "/icons/programming.svg",        // ← SVG sugerido (cámbialo por el tuyo)
                iconType: "programming",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-003",
                title: "Desarrollo Personal G7 - ONE",
                subtitle: "Habilidades blandas y crecimiento personal",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "000012347",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-desarrollo-personal-grupo7-one-15787/certificate",
                imageUrl: "/images/certificados/003.png",
                iconUrl: "/icons/personal-development.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-004",
                title: "Desde cero: HTML y CSS para proyectos Web",
                subtitle: "Estructura y estilos responsivos",
                issuer: "Alura Latam (Oracle)",
                date: "Septiembre 2024",
                credentialId: "000012348",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-html-css-15658/certificate",
                imageUrl: "/images/certificados/004.png",
                iconUrl: "/icons/html-css.svg",
                iconType: "html",
                iconColor: "orange-500",
                hasCertificate: true,
                badgeText: "Certificado Alura"
            },
            {
                id: "cert-005",
                title: "Formación Front End G7 - ONE",
                subtitle: "HTML, CSS, JS y proyectos reales",
                issuer: "Alura Latam (Oracle)",
                date: "Noviembre 2024",
                credentialId: "000012349",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-frontend-grupo7-one-15799/certificate",
                imageUrl: "/images/certificados/005.png",
                iconUrl: "/icons/frontend.svg",
                iconType: "frontend",
                iconColor: "blue-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-006",
                title: "Nivelación TypeScript y React",
                subtitle: "Tipado estático y componentes React",
                issuer: "Alura Boost (Oracle)",
                date: "Enero 2025",
                credentialId: "000012349", // Nota: repetido → considera corregir en producción
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-nivelacion-typescript-react-alura-boost-15903/certificate",
                imageUrl: "/images/certificados/006.png",
                iconUrl: "/icons/typescript-react.svg",
                iconType: "react",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado Boost"
            },
            {
                id: "cert-007",
                title: "Formación Explora React con JavaScript",
                subtitle: "Conceptos fundamentales de React",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123410",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-react-v15784-15784/certificate",
                imageUrl: "/images/certificados/007.png",
                iconUrl: "/icons/react-js.svg",
                iconType: "react",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado Alura"
            },
            {
                id: "cert-008",
                title: "React G7 - ONE",
                subtitle: "React avanzado y mejores prácticas",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123411",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-react-grupo7-one-15800/certificate",
                imageUrl: "/images/certificados/008.png",
                iconUrl: "/icons/001.svg",
                iconType: "react",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-009",
                title: "Formación Emprendimiento",
                subtitle: "Agilidad y Protagonismo Profesional G7 - ONE",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123412",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-emprendimiento-agilidad-y-protagonismo-profesional-grupo7-one-15837/certificate",
                imageUrl: "/images/certificados/009.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            // Agrega más cursos aquí cuando quieras
        ]

        return res.status(200).json(data)
    } catch (error) {
        console.error('Error en /api/cursos:', error)
        return res.status(500).json({ error: 'Error interno del servidor' })
    }
}