'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'
import CursosCard from '@/components/HomeComponents/Cursos/CursosCard'

interface Cursos {
    id: string
    title: string
    issuer: string
    date: string
    credentialId?: string
    credentialUrl?: string
    imageUrl?: string
    subtitle?: string
    hasCertificate?: boolean
    badgeText?: string
}

const Cursos = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<Cursos[]>([])

    // Referencia al contenedor del carrusel para controlar el scroll
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                setIsLoading(true)
                setError(null)

                const response = await fetch('/api/cursos', {
                    method: 'GET',
                    cache: 'no-store',
                })

                if (!response.ok) {
                    if (response.status === 404) {
                        setData([])
                        return
                    }
                    throw new Error(`Error ${response.status}`)
                }

                const raw = await response.json()
                setData(Array.isArray(raw) ? raw : [])
            } catch (err: any) {
                console.error('Error fetching certificates:', err)
                setError(err.message || 'No se pudieron cargar los certificados')
            } finally {
                setIsLoading(false)
            }
        }

        fetchCertificates()
    }, [])

    // Función para desplazar el carrusel
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef
            // Desplazamos un poco más del ancho de una tarjeta para mejor UX
            const scrollAmount = direction === 'left' ? -350 : 350

            current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-12 md:py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cabecera */}
            <div className="mb-8 md:mb-10 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Cursos y Certificaciones
                    </h2>
                    <span className="block mt-2 h-1 w-20 bg-blue-500 rounded-full"></span>
                </div>

                {/* Botones de navegación (Solo visibles en escritorio) */}
                {!isLoading && data.length > 4 && (
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-blue-600 border border-gray-700 transition-all"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-blue-600 border border-gray-700 transition-all"
                            aria-label="Siguiente"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>

            <div className="relative group/slider">
                {/* Botones flotantes opcionales para Desktop (Hover effect) */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-gray-900/90 text-white shadow-xl border border-gray-700 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-blue-600 hidden md:block"
                    aria-label="Scroll izquierda"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-gray-900/90 text-white shadow-xl border border-gray-700 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-blue-600 hidden md:block"
                    aria-label="Scroll derecha"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {isLoading ? (
                    // Esqueletos en modo carrusel
                    <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="min-w-[85%] md:min-w-[ calc(33.333%-1rem)] snap-center">
                                <ParagraphSkeleton className="h-[280px] rounded-xl bg-gray-900/80 border border-gray-800" />
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-10 bg-gray-900/30 rounded-xl border border-dashed border-gray-700">
                        <p className="text-red-400">{error}</p>
                    </div>
                ) : data.length === 0 ? (
                    <div className="text-center py-10 bg-gray-900/30 rounded-xl border border-dashed border-gray-700">
                        <p className="text-gray-400">No hay cursos registrados.</p>
                    </div>
                ) : (
                    // CARRUSEL PRINCIPAL
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-8 pt-2 snap-x snap-mandatory scroll-smooth hide-scrollbar"
                    >
                        {data.map((cert) => (
                            <div
                                key={cert.id}
                                // Mobile: 85% de ancho para ver un poco del siguiente ("Peek effect")
                                // Desktop: 1/3 del ancho para ver 3 tarjetas exactas
                                className="min-w-[85%] md:min-w-[calc(33.333%-1rem)] snap-center"
                            >
                                <CursosCard data={cert} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Indicador visual de scroll (Solo móvil) */}
            <div className="md:hidden flex justify-center mt-2 opacity-30">
                <div className="w-12 h-1 bg-gray-500 rounded-full"></div>
            </div>
        </section>
    )
}

export default Cursos