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
                title: "Aprender a aprender:",
                subtitle: "tecnicas para tu autodesarrollo",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "000012346",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/aprender-a-aprender-tecnicas-autodesarrollo/certificate",
                imageUrl: "/images/certificados/cursos/aprender-aprender.png", // captura del certificado (PNG)
                iconUrl: "/icons/programming.svg", // ← SVG sugerido (cámbialo por el tuyo)
                iconType: "programming",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-003",
                title: "Challenge AluraGeek:",
                subtitle: "Practicando Front End",
                issuer: "Alura Latam (Oracle)",
                date: "Noviembre 2024",
                credentialId: "000012347",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/challenge-alurageek/certificate",
                imageUrl: "/images/certificados/cursos/challenge-alurageek.png",
                iconUrl: "/icons/personal-development.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-004",
                title: "ChatGPT y JavaScript:",
                subtitle: "construyendo el juego Pong",
                issuer: "Alura Latam (Oracle)",
                date: "Noviembre 2024",
                credentialId: "000012348",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/chatgpt-javascript-construyendo-juego-pong/certificate",
                imageUrl: "/images/certificados/cursos/ChatGPT-y-JavaScript.png",
                iconUrl: "/icons/html-css.svg",
                iconType: "html",
                iconColor: "orange-500",
                hasCertificate: true,
                badgeText: "Certificado Alura"
            },
            {
                id: "cert-005",
                title: "ChatGPT",
                subtitle: "Optimizando la calidad de los resultados",
                issuer: "Alura Latam (Oracle)",
                date: "Julio 2024",
                credentialId: "000012349",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/chatgpt-optimizando-calidad-resultados/certificate",
                imageUrl: "/images/certificados/cursos/ChatGPT.png",
                iconUrl: "/icons/frontend.svg",
                iconType: "frontend",
                iconColor: "blue-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-006",
                title: "CSS",
                subtitle: "Flexbox y layouts responsivos",
                issuer: "Alura Boost (Oracle)",
                date: "Septiembre 2025",
                credentialId: "00001234910", // Nota: repetido → considera corregir en producción
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/css-flexbox-layouts-responsivos/certificate",
                imageUrl: "/images/certificados/cursos/CSS.png",
                iconUrl: "/icons/typescript-react.svg",
                iconType: "react",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado Boost"
            },
            {
                id: "cert-007",
                title: "Desarrollo de carrera",
                subtitle: "Demanda del Mercado",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "000012341011",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/desarrollo-carrera-demanda-mercado/certificate",
                imageUrl: "/images/certificados/cursos/Desarrollo-de-carrera.png",
                iconUrl: "/icons/react-js.svg",
                iconType: "react",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado Alura"
            },
            {
                id: "cert-008",
                title: "Emprendimiento:",
                subtitle: "De la idea al plan de negocios",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123411",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/emprendimiento-idea-plan-negocios/certificate",
                imageUrl: "/images/certificados/cursos/Emprendimiento.png",
                iconUrl: "/icons/001.svg",
                iconType: "react",
                iconColor: "cyan-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-009",
                title: "Foco:",
                subtitle: "Enfocarse trae más resultados para el día a día",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "0000123412",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/foco-habito-dia-a-dia/certificate",
                imageUrl: "/images/certificados/cursos/Foco.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-010",
                title: "Fundamentos de Agilidad:",
                subtitle: "Primeros pasos para la transformación ágil",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123413",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/fundamentos-agilidad-primeros-pasos-transformacion-agil/certificate",
                imageUrl: "/images/certificados/cursos/Fundamentos.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-011",
                title: "Git y GitHub:",
                subtitle: "Repositorio, Commit y Versiones",
                issuer: "Alura Latam (Oracle)",
                date: "Julio 2024",
                credentialId: "0000123414",
                credentialUrl: "",
                imageUrl: "/images/certificados/cursos/git-y-github.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-012",
                title: "GitHub Copilot y ChatGPT:",
                subtitle: "Impulsa tu Desarrollo con IA",
                issuer: "Alura Latam (Oracle)",
                date: "Noviembre 2024",
                credentialId: "0000123415",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/github-copilot-chatgpt-impulsiona-desarrollo-ia/certificate",
                imageUrl: "/images/certificados/cursos/GitHub-Copilot-y-ChatGPT.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-013",
                title: "Hábitos:",
                subtitle: "Ser productivo para cumplir sus metas personales",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "0000123416",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/habitos-productivo-metas-personales/certificate",
                imageUrl: "/images/certificados/cursos/habitos.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-014",
                title: "Hooks en ReactJS:",
                subtitle: "Conociendo su Potencial y Utilidad",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "0000123417",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/hooks-reactjs-conociendo-potencial-utilidad/certificate",
                imageUrl: "/images/certificados/cursos/Hooks-en-ReactJS.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-015",
                title: "HTML y CSS:",
                subtitle: "Trabajando con Responsividad y Publicación de Proyectos",
                issuer: "Alura Latam (Oracle)",
                date: "Julio 2024",
                credentialId: "0000123413",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/html-css-trabajando-responsividad-publicacion-proyectos/certificate",
                imageUrl: "/images/certificados/cursos/HTML-y-CSS.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-016",
                title: "IA Generativa en Front-End:",
                subtitle: "Trabajando con semántica y HTML",
                issuer: "Alura Latam (Oracle)",
                date: "Septiembre 2024",
                credentialId: "0000123414",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/ia-generativa-front-end-trabajando-semantica-html/certificate",
                imageUrl: "/images/certificados/cursos/IA-generativa-en-Front-End.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-017",
                title: "JavaScript para Web:",
                subtitle: "Crea Páginas Dinámicas",
                issuer: "Alura Latam (Oracle)",
                date: "Octubre 2024",
                credentialId: "00001234120",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/javascript-web-paginas-dinamicas/certificate",
                imageUrl: "/images/certificados/cursos/JavaScript-para-web.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-018",
                title: "Lógica de Programación:",
                subtitle: "Explorar funciones y listas",
                issuer: "Alura Latam (Oracle)",
                date: "Julio 2024",
                credentialId: "000012341221",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/logica-programacion-explorar-funciones-listas/certificate",
                imageUrl: "/images/certificados/cursos/Lógica-de-programación.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-019",
                title: "React Router:",
                subtitle: "Navegación en una SPA",
                issuer: "Alura Latam (Oracle)",
                date: "Diciembre 2024",
                credentialId: "000012341222",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/react-router-navegacion-spa/certificate",
                imageUrl: "/images/certificados/cursos/React-Router.png",
                iconUrl: "/icons/emprendimiento.svg",
                iconType: "personal",
                iconColor: "purple-400",
                hasCertificate: true,
                badgeText: "Certificado ONE"
            },
            {
                id: "cert-020",
                title: "React",
                subtitle: "Styled Components y manipulando archivos estáticos",
                issuer: "Alura Latam (Oracle)",
                date: "Enero 2025",
                credentialId: "000012341223",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/course/react-styled-components-manipulando-archivos-estaticos/certificate",
                imageUrl: "/images/certificados/cursos/React.png",
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