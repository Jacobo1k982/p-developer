'use client'

import React from 'react'
import CardLayout from '@/components/Common/CardLayout'

interface EducationData {
    title?: string
    year?: string
    degree?: string
    detail?: string
}

interface EduCardProps {
    data: EducationData
}

const Edu_Card = ({ data }: EduCardProps) => {
    return (
        <CardLayout>
            <div className="
        px-8 py-10 
        rounded-xl
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      ">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h3 className="text-lg text-gray-900 dark:text-gray-100 font-semibold tracking-wide">
                        {data?.title}
                    </h3>

                    <div className="
            flex items-center justify-center 
            text-gray-600 dark:text-gray-400
            bg-gray-100 dark:bg-gray-700
            border border-gray-200 dark:border-gray-600
            rounded-full 
            w-28 h-9 
            text-xs 
            font-medium
            transition-colors
          ">
                        {data?.year}
                    </div>
                </div>

                {/* Degree */}
                <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-2 tracking-wide">
                    {data?.degree}
                </p>

                {/* Details */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-5 leading-relaxed">
                    {data?.detail}
                </p>
            </div>
        </CardLayout>
    )
}

export default Edu_Card