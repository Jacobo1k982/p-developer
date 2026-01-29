'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github } from 'lucide-react'

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 py-16 md:py-0 bg-[#0d1117] overflow-hidden">
      {/* Fondo sutil con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161b22]/40 via-transparent to-[#0d1117]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-12 md:gap-16 lg:gap-24">
          {/* Columna izquierda - Avatar + glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl opacity-60 animate-pulse-slow" />

            <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full border-4 border-[#30363d] bg-[#161b22] shadow-2xl overflow-hidden">
              <img
                src="./images/hero.png"
                alt="Jacobo Gutiérrez"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.08]"
              />
              {/* Badge sutil */}
              <div className="absolute -bottom-1.5 -right-1.5 bg-[#238636] text-white text-xs font-semibold px-3 py-1 rounded-full border-2 border-[#0d1117] shadow-md">
                Available
              </div>
            </div>
          </motion.div>

          {/* Columna derecha - Textos */}
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-white"
            >
              Jacobo Gutiérrez
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9 }}
              className="text-2xl md:text-3xl font-medium text-[#8b949e] tracking-wide"
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-lg md:text-xl leading-relaxed text-[#8b949e] max-w-2xl"
            >
              Creo aplicaciones modernas, rápidas y escalables.<br className="hidden sm:inline" />
              Next.js · TypeScript · Tailwind · Sistemas distribuidos · Clean Architecture
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.9 }}
              className="flex flex-wrap justify-center md:justify-start gap-5 pt-4"
            >
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium bg-[#238636] hover:bg-[#2ea043] text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30 active:scale-[0.97]"
              >
                Ver Portafolio
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-medium border-[#30363d] text-[#c9d1d9] hover:bg-[#161b22] hover:text-white transition-all duration-300 group"
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

        {/* Stats - estilo GitHub contrib graph cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-8"
        >
          {[
            { value: '6+', label: 'Proyectos destacados' },
            { value: '2+', label: 'Clientes freelance' },
            { value: '10+', label: 'Contribuciones OSS' },
            { value: '2024–26', label: 'Año activo' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.15, duration: 0.7 }}
            >
              <Card className="bg-[#161b22] border-[#30363d] hover:border-[#444c56] transition-colors duration-300 py-6 px-5 text-center shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-white tracking-tight">
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