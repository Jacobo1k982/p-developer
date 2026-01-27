'use client'

import React from 'react'
import { MapPin, Star } from 'lucide-react'
import CardLayout from '@/components/Common/CardLayout'

interface Review {
    clientName?: string
    clientLocation?: string
    clientSource?: string
    clientReview?: string
    rating?: number
}

interface ReviewCardProps {
    data: Review
}

const ReviewCard = ({ data }: ReviewCardProps) => {
    const rating = data.rating || 5 // Default 5 stars if not provided

    return (
        <CardLayout className="w-80 md:w-96">
            <div className="flex flex-col justify-between p-4 md:p-6">
                {/* Header: Name, Location, Source */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {data?.clientName}
                        </span>
                        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <MapPin size={12} />
                            <em>{data?.clientLocation}</em>
                        </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        {data?.clientSource}
                    </span>
                </div>

                {/* Review text */}
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {data?.clientReview}
                </div>

                {/* Rating stars */}
                <div className="flex items-center justify-center gap-0.5 bg-gray-100 dark:bg-gray-700 w-max px-3 py-1.5 rounded-full mt-4 self-center">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            size={14}
                            className={
                                index < rating
                                    ? 'fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500'
                                    : 'text-gray-300 dark:text-gray-600'
                            }
                        />
                    ))}
                </div>
            </div>
        </CardLayout>
    )
}

export default ReviewCard