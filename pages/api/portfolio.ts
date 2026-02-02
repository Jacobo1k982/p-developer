const portfolio = [
    {
        id: "bordados-alca",
        title: "BORDADOS ALCA",
        liveURL: "https://bordadosalca.com/",
        image: "projects/ALCA.png",
        description: "Bordados ALCA es un proyecto desarrollado por JACANA-DEV, la marca de desarrollo web de Jacobo, utilizando tecnologías modernas como Next.js, React y Tailwind CSS. El sitio fue diseñado para una fábrica textil deportiva y empresarial ubicada en Pavas, Costa Rica, ofreciendo una experiencia rápida, elegante y altamente optimizada. Gracias a la arquitectura de Next.js, componentes reutilizables y un diseño responsivo basado en Tailwind, se logró una plataforma ligera, escalable y profesional que destaca los servicios de bordados y confección de la empresa.",
        technologies: [
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
        id: "jacana",
        title: "JACANA",
        liveURL: "https://jacana.netlify.app/",
        image: "projects/JACANA.png",
        description: "JACANA es una tienda online ficticia desarrollada por JACANA-DEV, la marca de desarrollo web de Jacobo. Construida con Next.js, React y Tailwind CSS, la plataforma ofrece una experiencia de usuario rápida y atractiva. El sitio presenta un diseño responsivo y moderno, destacando productos tecnológicos con componentes reutilizables y optimización para SEO. JACANA ejemplifica las habilidades de Jacobo en crear soluciones web profesionales y escalables.",
        technologies: [
            {
                tech: "React.js"
            },
            {
                tech: "Next.js"
            },
        ]

    },
    {
        id: "bpomiconta",
        title: "BPO-MICONTA",
        liveURL: "https://bpomiconta.netlify.app/",
        image: "projects/bpomiconta.png",
        description: "BPOMICONTA es una plataforma informativa moderna diseñada por JACANA-DEV, creada para ofrecer soluciones digitales al sector contable. El proyecto fue desarrollado utilizando Next.js, React y Tailwind CSS, logrando una interfaz limpia, rápida y totalmente responsive. Su arquitectura optimizada, su enfoque en la experiencia de usuario y su diseño profesional lo convierten en un ejemplo sólido del tipo de aplicaciones web que JACANA-DEV puede construir: modernas, funcionales y pensadas para necesidades reales de negocio.",
        technologies: [
            {
                tech: "React.js"
            },
            {
                tech: "Next.js"
            },
        ]
    },
    {
        id: "Juego_del_numero_secreto",
        title: "Juego del Número Secreto",
        liveURL: "https://jacobo1k982.github.io/JuegoSecreto/",
        image: "projects/juego.png",
        description: "El Juego del Número Secreto es una aplicación web interactiva desarrollada por Jacobo utilizando HTML, CSS y JavaScript puro. El juego desafía a los usuarios a adivinar un número generado aleatoriamente entre 1 y 100, proporcionando retroalimentación inmediata sobre si el número ingresado es demasiado alto, demasiado bajo o correcto. Con un diseño sencillo y funcional, este proyecto destaca las habilidades de Jacobo en la creación de experiencias de usuario atractivas y dinámicas sin depender de frameworks externos.",
        technologies: [
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
        id: "jugo_linea",
        title: "Tienda de Juegos online",
        liveURL: "https://jacobo1k982.github.io/Aprendiendo/",
        image: "projects/VIDIOJUEGOS.png",
        description: "La Tienda de Juegos Online es una plataforma web desarrollada por Jacobo utilizando HTML, CSS y JavaScript puro. Este proyecto simula una tienda virtual donde los usuarios pueden explorar una variedad de videojuegos, ver detalles de cada título e interactuar con la interfaz de usuario. Con un diseño atractivo y funcional, la tienda destaca las habilidades de Jacobo en la creación de experiencias web dinámicas y envolventes sin la necesidad de frameworks adicionales.",
        technologies: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
        ]

    },
    {
        id: "juego_del_ahorcado",
        title: "Juego del Ahoracado",
        liveURL: "https://jacobo1k982.github.io/Juego-del-ahorcado/",
        image: "projects/juegoAhorcado.png",
        desription: " El Juego del Ahorcado es una aplicación web interactiva desarrollada por Jacobo utilizando HTML, CSS y JavaScript puro. Este clásico juego desafía a los usuarios a adivinar una palabra oculta letra por letra, proporcionando retroalimentación visual y sonora para cada intento. Con un diseño sencillo pero atractivo, el proyecto resalta las habilidades de Jacobo en la creación de experiencias de usuario dinámicas y entretenidas sin depender de frameworks externos.",
        technologies: [
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
