'use client'

import React, { useEffect, useState } from 'react'
import CircularProgress from '@/components/CircularProgress'

const Languages = () => {
    const [spanish, setSpanish] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (spanish < 98) {
                setSpanish((prevCount) => prevCount + 1)
            }
            if (english < 40 ) {
                setEnglish((prevCount) => prevCount + 1)
            }
        }, 30)

        return () => clearInterval(timer)
    }, [spanish, english])

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className="text-gray-900 dark:text-gray-100 text-xs font-semibold uppercase tracking-wider">
                    Idiomas
                </span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <CircularProgress percent={spanish} size={75} />
                        <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                            Español
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <CircularProgress percent={english} size={75} />
                        <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                            Inglés
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages
