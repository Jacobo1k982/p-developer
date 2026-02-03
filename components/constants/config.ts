// constants/config.ts

// --- Interfaces / Tipos ---
export interface SkillConfig {
    title: string
    level: number // 0-100 para CircularProgress
}

export interface PersonalDetails {
    fullName: string
    age: number // Mejor número que string para cálculos
    location: string
    availability: 'available' | 'busy' | 'looking'
}

export interface ContactInfo {
    email: string
    phone: string
    whatsapp: string
}

export interface SocialLinks {
    github: string
    linkedin: string
    // Puedes agregar más plataformas aquí
}

// --- Datos Principales ---

export const PORTFOLIO_CONFIG = {
    // Información Personal
    personal: {
        name: 'Jacobo Gutiérrez Rodríguez',
        tagline: 'Desarrollador Full Stack', // Título corto para el H1/H2
        roles: [
            'ReactJS',
            'NextJS',
            'NodeJS',
            'MongoDB',
            'MySQL',
            'REST API',
            'Redux',
            'TypeScript',
            'JavaScript'
        ] as string[], // Array listo para mapear con el componente Badge
    } as const,

    // Detalles Biográficos
    details: {
        location: 'Lourdes, San Pedro, Montes de Oca, San José, Costa Rica',
        age: 44,
        // Campos extra útiles para el Footer o Banner
        experienceYears: '10+',
    } as const,

    // Habilidades Profesionales (Level como número entero)
    skills: [
        {
            title: 'Full Stack Developer',
            level: 85,
        },
        {
            title: 'React Developer',
            level: 91,
        },
        {
            title: 'Desktop App Developer',
            level: 75,
        },
        {
            title: 'Backend Developer',
            level: 80,
        },
        {
            title: 'Technical Blogger',
            level: 83,
        },
    ] as SkillConfig[],

    // Stack Tecnológico (Lista plana para Tags o Grid)
    techStack: [
        'JavaScript',
        'React.JS',
        'Next.JS',
        'TypeScript',
        'NodeJS',
        'Redux',
        'Zustand',
        'CSS',
        'TailwindCSS',
        'Ant Design',
        'Material UI',
        'Next UI',
        'REST API',
        'MongoDB',
        'MySQL',
        'Git',
        'GitHub',
        'Jira',
        'Figma',
        'Adobe XD',
        'Visual Studio Code',
        'PhotoShop',
        'UX/UI Design',
        'Bootstrap',
        'Express.JS',
    ] as string[],

    // Contacto
    contact: {
        email: 'askmecr@gmail.com',
        phone: '(+506) 87905876',
        whatsapp: '(+506) 64541700',
    } as ContactInfo,

    // Redes Sociales
    socials: {
        github: 'https://github.com/Jacobo1k982',
        linkedin: 'https://linkedin.com/in/jacobo-gutierrez/',
    } as SocialLinks,
}

// --- Exportaciones rápidas (Legacy compatibility) ---
// Si otros archivos usan import { NAME } de este archivo,
// mantenemos estas exportaciones para que no se rompa nada:

export const NAME = PORTFOLIO_CONFIG.personal.name;
export const DESIGNATION = PORTFOLIO_CONFIG.personal.roles.join(' | ');

export const DETAILS = {
    Residencia: PORTFOLIO_CONFIG.details.location,
    Provincia: 'San José',
    Edad: PORTFOLIO_CONFIG.details.age.toString(),
};

export const SKILLS = PORTFOLIO_CONFIG.skills;

export const TECH_STACK = PORTFOLIO_CONFIG.techStack;

export const CONTACTS = PORTFOLIO_CONFIG.contact;

export const SOCIAL_LINKS = PORTFOLIO_CONFIG.socials;