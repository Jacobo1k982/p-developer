'use client'

import BannerLayout from '../Common/BannerLayout'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <BannerLayout>
      {/* Fondo limpio GitHub dark */}
      <div className="absolute inset-0 bg-[#0d1117]" />

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-5xl"
        >
          {/* Avatar + Intro */}
          <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
            {/* Avatar simple y elegante */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative h-40 w-40 md:h-56 md:w-56 flex-shrink-0"
            >
              <div className="h-full w-full overflow-hidden rounded-full border-4 border-[#30363d] bg-[#161b22] shadow-2xl">
                <img
                  src="./images/hero.png"
                  alt="Jacobo Gutiérrez - Full-Stack Developer"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Texto principal */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Jacobo Gutiérrez
              </h1>

              <p className="mt-4 text-xl md:text-2xl text-[#8b949e] font-medium">
                Full-Stack Developer
              </p>

              <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed text-[#8b949e]">
                Construyo productos digitales escalables y de alto rendimiento. Especializado en Next.js, React, TypeScript y sistemas distribuidos. Apasionado por el rendimiento, la UX y el open source.
              </p>

              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
                <Link
                  to="intro"
                  spy
                  smooth
                  duration={600}
                  className="
                    inline-flex items-center rounded-full bg-[#238636] 
                    px-8 py-4 text-base font-semibold text-white 
                    hover:bg-[#2ea043] transition-colors shadow-md
                  "
                >
                  Explorar Portafolio
                </Link>

                <a
                  href="https://github.com/tu-usuario" // ← reemplaza con tu real
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center rounded-full border border-[#30363d] 
                    px-8 py-4 text-base font-semibold text-[#58a6ff] 
                    hover:border-[#58a6ff] hover:bg-[#161b22] transition-all
                  "
                >
                  Ver GitHub
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
                className="
                  rounded-xl border border-[#30363d] bg-[#161b22] 
                  px-8 py-6 text-center transition-all hover:border-[#58a6ff]/50
                "
              >
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-[#8b949e]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </BannerLayout>
  )
}

export default Banner