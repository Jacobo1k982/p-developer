'use client'

import React from 'react'
import { Download as DownloadIcon } from 'lucide-react'

interface DownloadProps {
    icon?: React.ReactNode
}

const Download = ({ icon }: DownloadProps) => {
    return (
        <div className="flex flex-col gap-y-4 pt-6">
            <span className="text-gray-900 dark:text-gray-100 text-xs font-semibold uppercase tracking-wider">
                Descargar CV
            </span>
            <a
                href="/cv.pdf"
                download
                className="
          inline-flex items-center justify-center gap-2
          w-full px-4 py-3
          bg-gray-900 dark:bg-gray-700
          text-white dark:text-gray-100
          rounded-lg
          font-medium text-sm
          hover:bg-gray-800 dark:hover:bg-gray-600
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
        "
            >
                {icon || <DownloadIcon size={16} className="text-gray-200 dark:text-gray-300" />}
                <span>Descargar CV</span>
            </a>
        </div>
    )
}

export default Download