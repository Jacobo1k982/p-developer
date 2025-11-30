const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'Soy un desarrollador Full Stack con experiencia en la creación de aplicaciones web completas, desde el frontend hasta el backend. Manejo tecnologías modernas, optimizo el rendimiento y ofrezco soluciones eficientes y escalables.',
    },
    {
        id: 1,
        title: 'Designing (UI/UX)',
        desc: "Soy un diseñador UI/UX enfocado en crear interfaces modernas, intuitivas y centradas en el usuario. Combino estética, funcionalidad y experiencia para ofrecer productos digitales fluidos y atractivos.",
    },
    {
        id: 2,
        title: 'Designing with Tailwind CSS',
        desc: 'Soy un desarrollador con experiencia en Tailwind CSS, creando interfaces modernas, responsive y altamente personalizadas mediante un diseño limpio, escalable y eficiente.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub es esencial para el control de versiones y la colaboración. Su interfaz intuitiva y funciones como las solicitudes de incorporación de cambios y el seguimiento de incidencias simplifican el proceso. La integración continua garantiza un código actualizado. GitHub es vital para mi éxito como desarrollador.",
    },
    {
        id: 4,
        title: 'SQL & NoSQL Databases',
        desc: "Tengo experiencia en bases de datos SQL y NoSQL, gestionando datos estructurados y no estructurados. Utilizo SQL para consultas complejas y relaciones, y NoSQL para flexibilidad y escalabilidad en aplicaciones modernas.",
    },
    {
        id: 5,
        title: 'API Development & Integration',
        desc: "Desarrollo e integro APIs RESTful y GraphQL para facilitar la comunicación entre aplicaciones. Diseño APIs eficientes, seguras y escalables, asegurando una integración fluida con servicios externos y optimizando el rendimiento.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
