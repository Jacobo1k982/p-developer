const portfolio = [
    {
        id: 0,
        projectName: "BORDADOS ALCA",
        url: "https://bordadosalca.com/",
        image: "projects/ALCA.png",
        projectDetail: "Bordados ALCA es un proyecto desarrollado por JACANA-DEV, la marca de desarrollo web de Jacobo, utilizando tecnologías modernas como Next.js, React y Tailwind CSS. El sitio fue diseñado para una fábrica textil deportiva y empresarial ubicada en Pavas, Costa Rica, ofreciendo una experiencia rápida, elegante y altamente optimizada. Gracias a la arquitectura de Next.js, componentes reutilizables y un diseño responsivo basado en Tailwind, se logró una plataforma ligera, escalable y profesional que destaca los servicios de bordados y confección de la empresa.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Next.js"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "JACANA",
        url: "https://jacana.netlify.app/",
        image: "proyects/JACANA.png",
        projectDetail: "JACANA es una tienda online ficticia desarrollada por JACANA-DEV, la marca de desarrollo web de Jacobo. Construida con Next.js, React y Tailwind CSS, la plataforma ofrece una experiencia de usuario rápida y atractiva. El sitio presenta un diseño responsivo y moderno, destacando productos tecnológicos con componentes reutilizables y optimización para SEO. JACANA ejemplifica las habilidades de Jacobo en crear soluciones web profesionales y escalables.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Next.js"
            },
        ]

    }
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
