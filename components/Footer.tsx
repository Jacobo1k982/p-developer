'use client'

import React from 'react'
import { Copyright, Mail, Heart } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className="
        relative
        w-full 
        bg-[#0d1117]
        border-t border-[#30363d]
        shadow-sm
        mt-16 
        py-8 
        px-4 
        text-[#8b949e]
        text-sm
      "
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* ---- COPYRIGHT ---- */}
                <div className="
          flex items-center gap-2 
          text-[#8b949e]
          transition-all duration-300
          hover:text-[#c9d1d9]
          group
        ">
                    <Copyright className="
            size-4 
            transition-all duration-300
            group-hover:scale-110
          " />
                    <span className="font-medium">{currentYear} · All Rights Reserved.</span>
                </div>

                {/* ---- MADE BY ---- */}
                <div className="flex items-center">
                    <a
                        href="https://www.jacana-dev.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              group
              flex items-center gap-2
              px-4 py-2 rounded-full
              bg-[#21262d]
              border border-[#30363d]
              transition-all duration-300
              hover:bg-[#30363d]
              hover:border-[#444c56]
              hover:shadow-sm
              hover:-translate-y-0.5
            "
                    >
                        <span className="text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors">
                            Made with
                        </span>
                        <span className="text-red-400 group-hover:scale-110 transition-transform duration-300 inline-block">
                            <Heart size={14} fill="currentColor" />
                        </span>
                        <span className="font-semibold text-[#c9d1d9] group-hover:text-[#e6edf3] transition-colors">
                            Jacobo
                        </span>
                    </a>
                </div>

                {/* ---- EMAIL ---- */}
                <div className="hidden md:flex items-center gap-3 group">
                    <div className="
            p-2 rounded-full
            bg-[#21262d]
            border border-[#30363d]
            transition-all duration-300
            group-hover:bg-[#30363d]
            group-hover:border-[#444c56]
          ">
                        <Mail className="
              size-4 
              text-[#8b949e]
              transition-all duration-300
              group-hover:text-[#c9d1d9]
              group-hover:scale-110
            " />
                    </div>
                    <a
                        href="mailto:askmecr@gmail.com"
                        className="
              font-medium
              text-[#8b949e]
              transition-all duration-300
              hover:text-[#c9d1d9]
              relative
              after:content-['']
              after:absolute
              after:bottom-0
              after:left-0
              after:w-0
              after:h-px
              after:bg-[#c9d1d9]
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
                    >
                        askmecr@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer