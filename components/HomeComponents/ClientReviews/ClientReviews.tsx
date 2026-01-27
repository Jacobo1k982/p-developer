'use client'

import { useState, useEffect } from 'react'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'
import ReviewCard from './ReviewCard'

interface Review {
    id: string
    clientName?: string
    clientLocation?: string
    clientSource?: string
    clientReview?: string
    rating?: number
}

const ClientReviews = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<Review[]>([])

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('/api/review')
                if (!response.ok) {
                    throw new Error('Error fetching reviews')
                }
                const reviews = await response.json()
                setData(reviews)
            } catch (err) {
                setError('Error al cargar las opiniones')
                console.error('Error fetching reviews:', err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchReviews()
    }, [])

    return (
        <>
            {/* Title */}
            <div className="px-2 md:px-8 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Opiniones de clientes
            </div>

            {/* Reviews container */}
            <div className="overflow-x-auto w-full grid justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">
                {isLoading ? (
                    [1, 2, 3, 4, 5].map((_, i) => (
                        <ParagraphSkeleton
                            key={i}
                            className="w-80 md:w-96 h-full"
                        />
                    ))
                ) : error ? (
                    <div className="w-full px-2 md:px-8 py-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {error}
                        </p>
                    </div>
                ) : data && data.length > 0 ? (
                    data.map((item, index) => (
                        <ReviewCard key={index} data={item} />
                    ))
                ) : (
                    <div className="w-full px-2 md:px-8 py-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            No hay opiniones disponibles.
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ClientReviews