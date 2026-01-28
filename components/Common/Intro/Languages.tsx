'use client'

import React, { useEffect, useState } from 'react'
import CircularProgress from '@/components/CircularProgress'

const Languages = () => {
    const [spanish, setSpanish] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const targets = { spanish: 98, english: 40 }
        const duration = 1800
        let start: number | null = null

        const animate = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)

            setSpanish(Math.floor(targets.spanish * progress))
            setEnglish(Math.floor(targets.english * progress))

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [])

    return (
        <div className="py-6">
            <h3 className="
        mb-5 text-xs font-semibold uppercase tracking-wider 
        text-gray-500 dark:text-gray-400
      ">
                Idiomas
            </h3>

            <div className="flex items-center justify-center gap-12 sm:gap-20">
                <div className="flex flex-col items-center group">
                    <div className="relative transition-transform duration-300 group-hover:scale-105">
                        <CircularProgress
                            percent={spanish}
                            size={100}
                            strokeWidth={12}
                            className="drop-shadow-sm"
                        />
                        <span className="
              absolute inset-0 flex items-center justify-center 
              text-2xl font-semibold text-gray-900 dark:text-gray-100
            ">
                            {spanish}%
                        </span>
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Español
                    </span>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="relative transition-transform duration-300 group-hover:scale-105">
                        <CircularProgress
                            percent={english}
                            size={100}
                            strokeWidth={12}
                            className="drop-shadow-sm"
                        />
                        <span className="
              absolute inset-0 flex items-center justify-center 
              text-2xl font-semibold text-gray-900 dark:text-gray-100
            ">
                            {english}%
                        </span>
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Inglés
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Languages