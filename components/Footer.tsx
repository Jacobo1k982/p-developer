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
        bg-white dark:bg-gray-900
        border-t border-gray-200 dark:border-gray-700
        shadow-sm
        mt-16 
        py-8 
        px-4 
        text-gray-600 dark:text-gray-400
        text-sm
      "
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* ---- COPYRIGHT ---- */}
                <div className="
            flex items-center gap-2 
            text-gray-600 dark:text-gray-400
            transition-all duration-300
            hover:text-gray-900 dark:hover:text-gray-100
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
              bg-gray-100 dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              transition-all duration-300
              hover:bg-gray-200 dark:hover:bg-gray-700
              hover:border-gray-300 dark:hover:border-gray-600
              hover:shadow-sm
              hover:-translate-y-0.5
            "
                    >
                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            Made with
                        </span>
                        <span className="text-red-500 group-hover:scale-110 transition-transform duration-300 inline-block">
                            <Heart size={14} fill="currentColor" />
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                            Jacobo
                        </span>
                    </a>
                </div>

                {/* ---- EMAIL ---- */}
                <div className="hidden md:flex items-center gap-3 group">
                    <div className="
              p-2 rounded-full
              bg-gray-100 dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              transition-all duration-300
              group-hover:bg-gray-200 dark:group-hover:bg-gray-700
              group-hover:border-gray-300 dark:group-hover:border-gray-600
          ">
                        <Mail className="
                size-4 
                text-gray-600 dark:text-gray-400
                transition-all duration-300
                group-hover:text-gray-900 dark:group-hover:text-gray-100
                group-hover:scale-110
            " />
                    </div>
                    <a
                        href="mailto:askmecr@gmail.com"
                        className="
              font-medium
              text-gray-600 dark:text-gray-400
              transition-all duration-300
              hover:text-gray-900 dark:hover:text-gray-100
              relative
              after:content-['']
              after:absolute
              after:bottom-0
              after:left-0
              after:w-0
              after:h-px
              after:bg-gray-900 dark:after:bg-gray-100
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
    );
};

export default Footer;