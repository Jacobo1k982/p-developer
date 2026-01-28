'use client'

import { useState, useEffect } from 'react'
import Edu_Card from '@/components/Background/Edu_Card'
import Exp_Card from '@/components/Background/Exp_Card'
import Footer from '@/components/Footer'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'

interface Education {
    institution?: string
    degree?: string
    field?: string
    startDate?: string
    endDate?: string
    description?: string
}

type ExperienceData = {
    company?: string
    position?: string
    department?: string
    startDate?: string
    endDate?: string
    description?: string
    technologies?: string[]
}

interface BackgroundData {
    eduCards?: Education[]
    expCards?: ExperienceData[]
}

function Background() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<BackgroundData | null>(null)

    useEffect(() => {
        const fetchBackground = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('/api/background')
                if (!response.ok) {
                    throw new Error('Error fetching background data')
                }
                const backgroundData = await response.json()
                setData(backgroundData)
            } catch (err) {
                setError('Error al cargar la información')
                console.error('Error fetching background:', err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchBackground()
    }, [])

    return (
        <div className="relative min-h-screen bg-white dark:bg-[#0d1117]">
            {/* Contenedor principal */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 pb-8 pt-12">
                {/* Título de sección */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Mi <span className="text-gray-600 dark:text-gray-400">Trayectoria</span>
                    </h2>
                    <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
                </div>

                {/* Grid de contenido */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Sección de Educación */}
                    <div className="relative">
                        {/* Decoración lateral */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                        <div className="flex flex-col gap-y-6 md:pl-8">
                            {/* Encabezado de educación */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border border-blue-200 dark:border-blue-800">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Educación</h3>
                            </div>

                            {/* Tarjetas de educación */}
                            {isLoading ? (
                                <div className="space-y-4">
                                    {[1, 2, 3].map((index) => (
                                        <ParagraphSkeleton key={index} className="w-full" />
                                    ))}
                                </div>
                            ) : error ? (
                                <div className="p-6 text-center">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{error}</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {data?.eduCards?.map((eduData, key) => (
                                        <div key={key} className="transform transition-all duration-300 hover:-translate-y-1">
                                            <Edu_Card data={eduData} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sección de Experiencia */}
                    <div className="relative">
                        {/* Decoración lateral */}
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                        <div className="flex flex-col gap-y-6 md:pr-8">
                            {/* Encabezado de experiencia */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center border border-green-200 dark:border-green-800">
                                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Experiencia</h3>
                            </div>

                            {/* Tarjetas de experiencia */}
                            {isLoading ? (
                                <div className="space-y-4">
                                    {[1, 2, 3].map((index) => (
                                        <ParagraphSkeleton key={index} className="w-full" />
                                    ))}
                                </div>
                            ) : error ? (
                                <div className="p-6 text-center">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{error}</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {data?.expCards?.map((expData, key) => (
                                        <div key={key} className="transform transition-all duration-300 hover:-translate-y-1">
                                            <Exp_Card data={expData} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Elemento decorativo central */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden md:block transform -translate-x-1/2 pointer-events-none"></div>
            </div>
            <Footer />
        </div>
    );
}

export default Background;