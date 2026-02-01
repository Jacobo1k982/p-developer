'use client'

import React from 'react'
import { Download as DownloadIcon } from 'lucide-react'

interface DownloadProps {
    icon?: React.ReactNode
}

const Download = ({ icon }: DownloadProps) => {
    return (
        <div className="flex flex-col gap-y-4 pt-6">
            <span className="text-[#c9d1d9] text-xs font-semibold uppercase tracking-wider">
                Descargar CV
            </span>
            <a
                href="/cv.pdf"
                download
                className="
          inline-flex items-center justify-center gap-2
          w-full px-4 py-3
          bg-[#161b22]
          text-[#c9d1d9]
          rounded-lg
          font-medium text-sm
          hover:bg-[#21262d]
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-[#58a6ff]/40 focus:ring-offset-2 focus:ring-offset-[#0d1117]
        "
            >
                {icon || <DownloadIcon size={16} className="text-[#8b949e]" />}
                <span>Descargar CV</span>
            </a>
        </div>
    )
}

export default Download