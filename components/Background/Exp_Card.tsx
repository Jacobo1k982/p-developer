'use client'

import React from 'react'
import CardLayout from '@/components/Common/CardLayout'

interface ExperienceData {
    title?: string
    role?: string
    url?: string
    desc?: string
    year?: string
    location?: string
}

interface ExpCardProps {
    data: ExperienceData
}

const Exp_Card = ({ data }: ExpCardProps) => {
    return (
        <CardLayout>
            <div
                className="
            px-8 py-10 
            rounded-xl
            shadow-sm
            border border-gray-200 dark:border-gray-700
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1
        "
            >
                {/* Job Title */}
                <h3 className="text-lg text-gray-900 dark:text-gray-100 font-semibold tracking-wide">
                    {data?.title}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                    {data?.role}
                </p>

                {/* URL */}
                {data?.url && (
                    <p className="text-gray-500 dark:text-gray-500 text-xs italic mt-1 truncate">
                        <a
                            href={data.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                        >
                            {data.url}
                        </a>
                    </p>
                )}

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-5 leading-relaxed text-justify">
                    {data?.desc}
                </p>

                {/* Footer — Year & Location */}
                <div
                    className="
            flex justify-between items-center 
            text-gray-600 dark:text-gray-400
            bg-gray-100 dark:bg-gray-700
            border border-gray-200 dark:border-gray-600
            w-full 
            text-xs 
            rounded-full 
            py-3 px-6 
            mt-6
        "
                >
                    <span>{data?.year}</span>
                    <span>{data?.location}</span>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card