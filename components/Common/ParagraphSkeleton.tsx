'use client'

import React from 'react'
import CardLayout from './CardLayout'

interface ParagraphSkeletonProps {
    className?: string
}

const ParagraphSkeleton = ({ className = '' }: ParagraphSkeletonProps) => {
    return (
        <CardLayout>
            <div
                role="status"
                className={`
          max-w-full self-center animate-pulse
          p-4
          ${className}
        `}
            >
                {/* Title skeleton */}
                <div className="h-3 rounded bg-gray-200 dark:bg-gray-700 w-48 mb-4"></div>

                {/* Paragraph skeletons with varying widths */}
                <div className="h-2.5 rounded bg-gray-200 dark:bg-gray-700 max-w-[365px] mb-2.5"></div>
                <div className="h-2.5 rounded bg-gray-200 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2.5 rounded bg-gray-200 dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2.5 rounded bg-gray-200 dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
                <div className="h-2.5 rounded bg-gray-200 dark:bg-gray-700 max-w-[360px]"></div>

                {/* Screen reader text */}
                <span className="sr-only">Loading...</span>
            </div>
        </CardLayout>
    )
}

export default ParagraphSkeleton