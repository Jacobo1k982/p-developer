'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-10 text-center bg-white dark:bg-[#0d1117]">
      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-5xl"
      >
        {/* Avatar + Intro */}
        <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative h-40 w-40 md:h-56 md:w-56 flex-shrink-0"
          >
            <div className="h-full w-full overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-2xl">
              <img
                src="./images/hero.png"
                alt="Jacobo Gutiérrez - Full-Stack Developer"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Texto principal */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              Jacobo Gutiérrez
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              Full-Stack Developer
            </p>

            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Construyo productos digitales escalables y de alto rendimiento. Especializado en Next.js, React, TypeScript y sistemas distribuidos. Apasionado por el rendimiento, la UX y el open source.
            </p>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
              <Button
                size="lg"
                className="rounded-full px-8 py-4 text-base font-semibold"
              >
                Explorar Portafolio
              </Button>

              <a
                href="https://github.com/Jacobo1k982"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-4 text-base font-semibold border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                >
                  Ver GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats estilo GitHub cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:flex md:justify-center gap-6 md:gap-10 lg:gap-16"
        >
          {[
            { value: '6+', label: 'Proyectos Completados' },
            { value: '2+', label: 'Clientes Independientes' },
            { value: '2+', label: 'Reconocimientos' },
            { value: '10+', label: 'Contribuciones OSS' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.15 }}
            >
              <Card className="px-8 py-6 text-center transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Banner