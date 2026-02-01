'use client'

import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ExpertiseCard from './ExpertiseCard'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'
import { cn } from '@/lib/utils'

// Importa TODOS los íconos que usas en iconMap
import {
    Globe,
    Server,
    Code,
    Database,
    Zap,
    Terminal,
    Layers,
    Cpu,
} from 'lucide-react'

// Define the Expertise type if not imported from elsewhere
type Expertise = {
    id: string | number
    title: string
    desc: string
    // Puedes agregar tags?: string[] si lo usas
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
            stiffness: 120,
            damping: 14
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

    if (error) {
        return (
            <section className="py-20 px-4 text-center">
                <div className="mx-auto max-w-3xl rounded-xl border border-[#30363d] bg-[#0d1117] p-10">
                    <h2 className="mb-4 text-2xl font-semibold text-[#f85149]">
                        No se pudo cargar la experiencia
                    </h2>
                    <p className="text-[#8b949e]">
                        Algo salió mal al obtener la matriz de habilidades.
                    </p>
                    <p className="mt-2 text-sm text-[#6e7681]">
                        {error instanceof Error ? error.message : 'Unknown error'}
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="relative bg-[#0d1117] py-20 md:py-24 lg:py-36 border-t border-[#21262d]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header estilo GitHub section */}
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Habilidad
                    </h2>
                    <p className="text-lg text-[#8b949e]">
                        Tecnologías y habilidades centrales con las que trabajo a diario
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, i: number) => (
                            <motion.div key={i} variants={itemVariants}>
                                <div className="h-[280px] rounded-xl border border-[#30363d] bg-[#161b22] animate-pulse" />
                            </motion.div>
                        ))
                        : data?.map((item: Expertise, idx: number) => (
                            <motion.div key={item.id || idx} variants={itemVariants}>
                                <ExpertiseCard data={item} />
                            </motion.div>
                        ))}
                </motion.div>

                {/* Opcional: footer sutil */}
                {!isLoading && data?.length === 0 && (
                    <div className="mt-12 text-center text-[#8b949e]">
                        Aún no hay datos de experiencia disponibles.
                    </div>
                )}
            </div>
        </section>
    )
}

export default MyExpertise