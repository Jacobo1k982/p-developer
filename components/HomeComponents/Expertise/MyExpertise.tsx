'use client'

import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ExpertiseCard from '@/components/HomeComponents/Expertise/ExpertiseCard'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'

// Importa los íconos que necesitas para pasarlos a las tarjetas
import {
    Globe,
    Server,
    Code,
    Database,
    Zap,
    Terminal,
    Layers,
    Cpu,
    Layout,
    Smartphone,
    Palette
} from 'lucide-react'

type Expertise = {
    id: string | number
    title: string
    desc: string
    // Agregamos un campo opcional para el nombre del icono si tu API lo devuelve
    iconName?: string
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 12
        }
    }
}

const MyExpertise = () => {
    const { isLoading, error, data } = useQuery<Expertise[]>({
        queryKey: ['expertise'],
        queryFn: async () => {
            const { data } = await axios.get('/api/expertise')
            return data
        },
        staleTime: 1000 * 60 * 10, // 10 minutos
        retry: 2
    })

    // Mapa de iconos basado en palabras clave del título (Fallback si la API no envía el icono)
    const getIconForTitle = (title: string) => {
        const lowerTitle = title.toLowerCase()
        if (lowerTitle.includes('frontend') || lowerTitle.includes('react') || lowerTitle.includes('ui')) return Layout
        if (lowerTitle.includes('backend') || lowerTitle.includes('server')) return Server
        if (lowerTitle.includes('database') || lowerTitle.includes('sql')) return Database
        if (lowerTitle.includes('design') || lowerTitle.includes('css')) return Palette
        if (lowerTitle.includes('mobile') || lowerTitle.includes('app')) return Smartphone
        if (lowerTitle.includes('devops')) return Terminal
        return Code // Default
    }

    if (error) {
        return (
            <section className="py-12 px-4 text-center">
                <div className="mx-auto max-w-3xl rounded-xl border border-red-900/50 bg-red-900/10 p-10">
                    <h2 className="mb-4 text-2xl font-semibold text-red-400">
                        No se pudo cargar la experiencia
                    </h2>
                    <p className="text-gray-400">
                        Algo salió mal al obtener las habilidades.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        {error instanceof Error ? error.message : 'Unknown error'}
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="py-12 md:py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cabecera Unificada */}
            <div className="mb-10 md:mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Mis Habilidades
                </h2>
                <span className="block mt-2 h-1 w-20 bg-blue-500 rounded-full mx-auto"></span>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Tecnologías y herramientas con las que construyo soluciones robustas y escalables.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {isLoading ? (
                    // Skeletons coincidiendo con el grid
                    Array.from({ length: 6 }).map((_, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <ParagraphSkeleton
                                className="h-[240px] rounded-xl bg-gray-900/80 border border-gray-800"
                            />
                        </motion.div>
                    ))
                ) : data && data.length > 0 ? (
                    data?.map((item) => {
                        // Seleccionamos el icono
                        const IconComponent = getIconForTitle(item.title)

                        return (
                            <motion.div key={item.id} variants={itemVariants}>
                                <ExpertiseCard
                                    data={item}
                                    icon={<IconComponent className="w-10 h-10 text-blue-500" />}
                                />
                            </motion.div>
                        )
                    })
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No hay habilidades registradas todavía.
                    </div>
                )}
            </motion.div>
        </section>
    )
}

export default MyExpertise