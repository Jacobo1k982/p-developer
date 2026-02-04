'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, Sparkles, ArrowRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '@/components/constants/config'

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 py-16 md:py-0 overflow-hidden">

      {/* 1. FONDO AMBIENTE (Profundidad y Luces) */}
      <div className="absolute inset-0 z-0 bg-[#020617]"> {/* Fondo muy oscuro, casi negro */}
        {/* Orbe Azul superior-izquierda */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
        {/* Orbe Violeta inferior-derecha */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] opacity-40" />
        {/* Grid sutil de fondo (opcional) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-12 md:gap-16 lg:gap-24">

          {/* COLUMNA IZQUIERDA: AVATAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Anillo rotatorio decorativo (sutil) */}
            <div className="absolute inset-0 m-auto h-[120%] w-[120%] animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-gray-700/30 opacity-50 pointer-events-none" />

            {/* Resplandor detrás del avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 via-transparent to-purple-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-[#0f172a] bg-gray-900 shadow-2xl overflow-hidden group cursor-pointer">
              <img
                src="./images/hero.png"
                alt="Jacobo Gutiérrez"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />

              {/* Badge de Estado "Available" */}
              <div className="absolute -bottom-1.5 -right-1.5 flex items-center gap-1.5 bg-[#0f172a] border border-blue-500/40 text-blue-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: CONTENIDO */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Portfolio 2026
              </span>
              <h1>{PORTFOLIO_CONFIG.personal.name}</h1>
<p>{PORTFOLIO_CONFIG.personal.tagline}</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Full-Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Construyo el puente entre la interactividad moderna del frontend y la eficiencia lógica del backend, garantizando sistemas seguros, limpios y fáciles de mantener. <br />
              Especializado en <span className="text-gray-200 font-medium">Next.js</span>, <span className="text-gray-200 font-medium">TypeScript</span> y arquitecturas escalables.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <Button
                size="lg"
                className="h-14 px-8 rounded-full text-base font-semibold bg-white text-gray-900 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 border border-transparent"
              >
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full text-base font-medium border-gray-700 bg-gray-900/50 backdrop-blur-sm text-white hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all duration-300 group"
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

        {/* STATS SECTION - Glassmorphism Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { value: '6+', label: 'Proyectos' },
            { value: '3+', label: 'Clientes' },
            { value: '100+', label: 'Commits' },
            { value: '24/7', label: 'Uptime' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="
                relative overflow-hidden 
                bg-white/5 border border-white/10 backdrop-blur-md
                hover:bg-white/10 hover:border-blue-500/30
                transition-all duration-300 
                py-6 px-4 text-center shadow-none
                group
              ">
                {/* Efecto de brillo interno al hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl font-bold text-white tracking-tight group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-400 font-medium group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Banner