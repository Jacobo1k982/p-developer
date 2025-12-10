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
        image: "projects/JACANA.png",
        projectDetail: "JACANA es una tienda online ficticia desarrollada por JACANA-DEV, la marca de desarrollo web de Jacobo. Construida con Next.js, React y Tailwind CSS, la plataforma ofrece una experiencia de usuario rápida y atractiva. El sitio presenta un diseño responsivo y moderno, destacando productos tecnológicos con componentes reutilizables y optimización para SEO. JACANA ejemplifica las habilidades de Jacobo en crear soluciones web profesionales y escalables.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Next.js"
            },
        ]

    },
    {
        id: 0,
        projectName: "BPO-MICONTA",
        url: "https://bpomiconta.netlify.app/",
        image: "projects/bpomiconta.png",
        projectDetail: "BPOMICONTA es una plataforma informativa moderna diseñada por JACANA-DEV, creada para ofrecer soluciones digitales al sector contable. El proyecto fue desarrollado utilizando Next.js, React y Tailwind CSS, logrando una interfaz limpia, rápida y totalmente responsive. Su arquitectura optimizada, su enfoque en la experiencia de usuario y su diseño profesional lo convierten en un ejemplo sólido del tipo de aplicaciones web que JACANA-DEV puede construir: modernas, funcionales y pensadas para necesidades reales de negocio.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Next.js"
            },
        ]
    },
    {
        id: 0,
        projectName: "Juego del número secreto",
        url: "https://jacobo1k982.github.io/JuegoSecreto/",
        image: "projects/juego.png",
        projectDetail: "El Juego del Número Secreto es una aplicación web interactiva desarrollada por Jacobo utilizando HTML, CSS y JavaScript puro. El juego desafía a los usuarios a adivinar un número generado aleatoriamente entre 1 y 100, proporcionando retroalimentación inmediata sobre si el número ingresado es demasiado alto, demasiado bajo o correcto. Con un diseño sencillo y funcional, este proyecto destaca las habilidades de Jacobo en la creación de experiencias de usuario atractivas y dinámicas sin depender de frameworks externos.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
    {
        id: 0,
        projectName: "Tienda de juegos online",
        url: "https://jacobo1k982.github.io/Aprendiendo/",
        image: "projects/VIDIOJUEGOS.png",
        projectDetail: "La Tienda de Juegos Online es una plataforma web desarrollada por Jacobo utilizando HTML, CSS y JavaScript puro. Este proyecto simula una tienda virtual donde los usuarios pueden explorar una variedad de videojuegos, ver detalles de cada título e interactuar con la interfaz de usuario. Con un diseño atractivo y funcional, la tienda destaca las habilidades de Jacobo en la creación de experiencias web dinámicas y envolventes sin la necesidad de frameworks adicionales.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
        ]

    },
    {
        id: 0,
        projectName: "Juego del ahoracado",
        url: "https://jacobo1k982.github.io/Juego-del-ahorcado/",
        image: "projects/juegoAhorcado.png",
        projectDetail: " El Juego del Ahorcado es una aplicación web interactiva desarrollada por Jacobo utilizando HTML, CSS y JavaScript puro. Este clásico juego desafía a los usuarios a adivinar una palabra oculta letra por letra, proporcionando retroalimentación visual y sonora para cada intento. Con un diseño sencillo pero atractivo, el proyecto resalta las habilidades de Jacobo en la creación de experiencias de usuario dinámicas y entretenidas sin depender de frameworks externos.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    }
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
