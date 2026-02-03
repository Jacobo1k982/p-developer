'use client'

import { useState, useEffect } from 'react'
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
    subtitle?: string          // ← Añadido para compatibilidad con el nuevo CursosCard
    hasCertificate?: boolean   // ← Añadido
    badgeText?: string         // ← Añadido
}

const Cursos = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<Cursos[]>([])

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

                    let errorMsg = `Error ${response.status}`
                    try {
                        const errData = await response.json()
                        errorMsg = errData.error || errorMsg
                    } catch { }
                    throw new Error(errorMsg)
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

    return (
        <section className="py-8 md:py-12">
            {/* Título con estilo */}
            <div className="px-4 md:px-8 mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white relative inline-block">
                    Cursos y Certificaciones
                    <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 w-24 rounded"></span>
                </h2>
            </div>

            <div className="px-4 md:px-8">
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <ParagraphSkeleton
                                key={i}
                                className="h-[380px] rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-950/70 border border-gray-800/40 animate-pulse"
                            />
                        ))}
                    </div>
                ) : error ? (
                    <div className="py-16 text-center">
                        <p className="text-xl text-red-400/90 font-medium">{error}</p>
                        <p className="mt-2 text-gray-500">Intenta recargar la página</p>
                    </div>
                ) : data.length === 0 ? (
                    <div className="py-16 text-center">
                        <div className="inline-block p-6 bg-gray-900/40 rounded-xl border border-gray-800/50">
                            <p className="text-lg md:text-xl text-gray-400 mb-2">
                                Aún no hay cursos o certificados para mostrar
                            </p>
                            <p className="text-sm text-gray-600">
                                ¡Pronto agregaré mis certificaciones más recientes!
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 md:gap-8">
                        {data.map((cert) => (
                            <CursosCard key={cert.id} data={cert} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Cursos