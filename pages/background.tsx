'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Edu_Card from '@/components/Background/EducationCard';
import Exp_Card from '@/components/Background/ExperienceCard';
import Footer from '@/components/Footer';
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton';
import { Variants } from "framer-motion";

interface Education {
    id: string
    institution: string
    degree: string
    description: string
    period: string
}

interface Experience {
    id: string
    company: string
    role: string
    url: string | null
    description: string
    period: string
    location: string
}

interface BackgroundData {
    education: Education[]
    experience: Experience[]
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
}

function Background() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<BackgroundData | null>(null)

    useEffect(() => {
        const fetchBackground = async () => {
            try {
                setIsLoading(true)
                setError(null)

                const response = await fetch('/api/background')

                if (!response.ok) {
                    const errorText = await response.text()
                    throw new Error(`Error ${response.status}: ${errorText || 'Sin detalles'}`)
                }

                const backgroundData = await response.json()
                setData(backgroundData)
            } catch (err: any) {
                console.error('Error completo en fetch:', err)
                setError('Error al cargar: ' + (err.message || 'Desconocido'))
            } finally {
                setIsLoading(false)
            }
        }

        fetchBackground()
    }, [])

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0d1117] to-[#0a0e14]">
            {/* Contenedor principal */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24">
                {/* Título premium */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#c9d1d9]">
                        Mi <span className="text-[#58a6ff] relative">
                            Trayectoria
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#58a6ff]/60 to-transparent rounded-full" />
                        </span>
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto">
                        Formación académica y experiencia profesional que definen mi camino
                    </p>
                </motion.div>

                {/* Grid principal */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-10 lg:gap-16 relative"
                >
                    {/* Línea central decorativa (gradiente sutil) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#58a6ff]/30 to-transparent hidden md:block transform -translate-x-1/2 pointer-events-none z-0" />

                    {/* Sección Educación */}
                    <motion.div variants={itemVariants} className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#1a2e44]/70 backdrop-blur-sm border border-[#58a6ff]/20 flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#c9d1d9]">Educación</h3>
                        </div>

                        {isLoading ? (
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <ParagraphSkeleton key={i} className="w-full h-48 rounded-xl" />
                                ))}
                            </div>
                        ) : error ? (
                            <div className="p-8 text-center text-red-400 bg-[#161b22]/50 backdrop-blur-sm rounded-xl border border-red-900/30">
                                {error}
                            </div>
                        ) : !data?.education || data.education.length === 0 ? (
                            <div className="p-8 text-center text-[#8b949e] italic bg-[#161b22]/50 backdrop-blur-sm rounded-xl border border-[#30363d]">
                                No hay información de educación disponible
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {data.education.map((eduData) => (
                                    <motion.div
                                        key={eduData.id}
                                        whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                                    >
                                        <Edu_Card card={eduData} />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Sección Experiencia */}
                    <motion.div variants={itemVariants} className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#1a2e1f]/70 backdrop-blur-sm border border-[#3fb950]/20 flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-[#3fb950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#c9d1d9]">Experiencia</h3>
                        </div>

                        {isLoading ? (
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <ParagraphSkeleton key={i} className="w-full h-48 rounded-xl" />
                                ))}
                            </div>
                        ) : error ? (
                            <div className="p-8 text-center text-red-400 bg-[#161b22]/50 backdrop-blur-sm rounded-xl border border-red-900/30">
                                {error}
                            </div>
                        ) : !data?.experience || data.experience.length === 0 ? (
                            <div className="p-8 text-center text-[#8b949e] italic bg-[#161b22]/50 backdrop-blur-sm rounded-xl border border-[#30363d]">
                                No hay información de experiencia disponible
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {data.experience.map((expData, index) => (
                                    <motion.div
                                        key={expData?.id || `exp-${index}`}
                                        whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                                    >
                                        <Exp_Card card={expData} />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default Background