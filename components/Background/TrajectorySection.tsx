'use client'

import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { GraduationCap, Briefcase } from 'lucide-react'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'
// Importamos las tarjetas refactorizadas anteriormente
import EducationCard from '@/components/HomeComponents/Education/EducationCard'
import ExperienceCard from '@/components/HomeComponents/Experience/ExperienceCard'

interface EduItem {
    id: string
    institution: string
    degree: string
    description: string
    period: string
}

interface ExpItem {
    id: string
    company: string
    role: string
    url: string | null
    description: string
    period: string
    location: string
}

interface BackgroundData {
    education: EduItem[]
    experience: ExpItem[]
}

const TrajectorySection = () => {
    const { isLoading, error, data } = useQuery<BackgroundData>({
        queryKey: ['background'],
        queryFn: async () => {
            const { data } = await axios.get('/background')
            return data
        },
    })

    const education = data?.education || []
    const experience = data?.experience || []

    return (
        <section className="relative py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Título de la Sección */}
            <div className="text-center mb-20">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4"
                >
                    Trayectoria
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    Mi Historia Profesional
                </h2>
                <span className="block mt-4 h-1 w-20 bg-blue-500 rounded-full mx-auto"></span>
            </div>

            {/* Contenedor de la Línea de Tiempo */}
            <div className="relative">
                {/* Línea Vertical Central (Solo Desktop) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent transform -translate-x-1/2 hidden md:block" />

                <div className="space-y-24 md:space-y-32">

                    {/* SECCIÓN: EDUCACIÓN */}
                    <div className="relative">
                        {/* Título de Sección (Centrado) */}
                        <div className="flex items-center justify-center mb-12 md:mb-16 z-20 relative">
                            <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 px-6 py-3 rounded-full shadow-lg">
                                <div className="p-2 bg-blue-500/10 rounded-full text-blue-500">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Formación Académica</h3>
                            </div>
                        </div>

                        <div className="space-y-12 md:space-y-16">
                            {isLoading ? (
                                // Esqueletos en formato Timeline
                                [1, 2].map((_, i) => (
                                    <div key={i} className={`relative md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                        <ParagraphSkeleton className="h-[250px] rounded-xl bg-gray-900/80" />
                                    </div>
                                ))
                            ) : (
                                education.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className={`
                                            relative w-full md:w-[45%]
                                            ${idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
                                        `}
                                    >
                                        {/* Punto de conexión en la línea */}
                                        <div className="absolute top-8 left-0 md:left-auto md:-left-[calc(12.5%-18px)] w-4 h-4 rounded-full bg-gray-900 border-4 border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)] hidden md:block" />

                                        <EducationCard card={item} />
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* SECCIÓN: EXPERIENCIA */}
                    <div className="relative pt-8 md:pt-16">
                        {/* Título de Sección */}
                        <div className="flex items-center justify-center mb-12 md:mb-16 z-20 relative">
                            <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 px-6 py-3 rounded-full shadow-lg">
                                <div className="p-2 bg-indigo-500/10 rounded-full text-indigo-500">
                                    <Briefcase size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Experiencia Laboral</h3>
                            </div>
                        </div>

                        <div className="space-y-12 md:space-y-16">
                            {isLoading ? (
                                [1, 2, 3].map((_, i) => (
                                    <div key={i} className={`relative md:w-[45%] ${i % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                                        <ParagraphSkeleton className="h-[250px] rounded-xl bg-gray-900/80" />
                                    </div>
                                ))
                            ) : (
                                experience.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className={`
                                            relative w-full md:w-[45%]
                                            ${idx % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}
                                        `}
                                    >
                                        {/* Punto de conexión (Color indigo para diferenciar sutilmente) */}
                                        <div className="absolute top-8 right-0 md:right-auto md:-left-[calc(12.5%-18px)] w-4 h-4 rounded-full bg-gray-900 border-4 border-indigo-500 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block" />

                                        <ExperienceCard card={item} />
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TrajectorySection