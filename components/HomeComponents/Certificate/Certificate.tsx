'use client'

import { useState, useEffect } from 'react'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'
import CertificateCard from '@/components/HomeComponents/Certificate/CertificateCard'

interface Certificate {
    id: string
    title: string
    issuer: string
    date: string
    credentialId?: string
    credentialUrl?: string
    imageUrl?: string
}

const Certificates = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<Certificate[]>([])

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                setIsLoading(true)
                setError(null)

                const response = await fetch('/api/certificates', {
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
        <>
            <div className="px-4 md:px-8 py-5 text-xl font-semibold text-[#c9d1d9]">
                Certificados
            </div>

            <div className="w-full px-4 md:px-8">
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <ParagraphSkeleton
                                key={i}
                                className="h-64 rounded-xl bg-[#161b22]/70 border border-[#30363d]/50"
                            />
                        ))}
                    </div>
                ) : error ? (
                    <div className="py-12 text-center text-red-400">
                        {error}
                    </div>
                ) : data.length === 0 ? (
                    <div className="py-12 text-center text-[#8b949e]">
                        Aún no hay certificados para mostrar
                    </div>
                ) : (
                    <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#58a6ff] scrollbar-track-[#161b22]">
                        <div className="flex flex-row flex-nowrap gap-6 min-w-max">
                            {data.map(cert => (
                                <div
                                    key={cert.id}
                                    className="flex-shrink-0 w-80 sm:w-96"
                                >
                                    <CertificateCard data={cert} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Certificates