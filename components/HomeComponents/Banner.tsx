'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github } from 'lucide-react'

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 py-16 md:py-0 bg-gradient-to-br from-[#0d1117] via-[#0d1117] to-[#0a0e14] overflow-hidden">
      {/* Fondo dinámico sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#58a6ff08,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#3fb95008,transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-12 lg:gap-24">
          {/* Avatar con glow premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Glow grande y suave */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#58a6ff]/20 via-[#3fb950]/10 to-transparent blur-3xl opacity-70 animate-pulse-slow" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#58a6ff]/10 via-transparent to-transparent blur-xl opacity-50" />

            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-[#30363d]/80 bg-[#161b22] shadow-2xl overflow-hidden">
              <img
                src="./images/hero.png"
                alt="Jacobo Gutiérrez"
                className="h-full w-full object-cover"
              />
              {/* Badge "Disponible" */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#238636] to-[#2ea043] text-white text-xs font-semibold px-4 py-1.5 rounded-full border-2 border-[#0d1117] shadow-lg shadow-green-900/30">
                Disponible
              </div>
            </div>
          </motion.div>

          {/* Contenido principal */}
          <div className="flex-1 text-center md:text-left space-y-8 md:space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.05em] text-[#c9d1d9]"
            >
              Jacobo Gutiérrez
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#58a6ff] tracking-wide"
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.1 }}
              className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#8b949e] max-w-3xl"
            >
              Construyo aplicaciones modernas, escalables y de alto rendimiento.<br className="hidden sm:inline" />
              Next.js · TypeScript · Tailwind CSS · Clean Architecture · Sistemas distribuidos
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1.1 }}
              className="flex flex-wrap justify-center md:justify-start gap-6 pt-6"
            >
              <Button
                size="lg"
                className="rounded-full px-8 py-7 text-base font-medium bg-gradient-to-r from-[#238636] to-[#2ea043] text-white shadow-xl shadow-green-900/30"
              >
                Ver Portafolio
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-7 text-base font-medium border-[#30363d] text-[#c9d1d9]"
              >
                <a
                  href="https://github.com/Jacobo1k982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 md:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10"
        >
          {[
            { value: '6+', label: 'Proyectos destacados' },
            { value: '2+', label: 'Clientes freelance' },
            { value: '10+', label: 'Contribuciones open source' },
            { value: '2024–26', label: 'Año activo' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.8 }}
            >
              <Card className="bg-[#161b22] border-[#30363d] py-6 px-4 text-center shadow-sm backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-[#c9d1d9] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm uppercase tracking-wider text-[#8b949e] font-medium">
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