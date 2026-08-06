import { useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, FileText, ChevronRight } from 'lucide-react'

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    // loadSlim reduces the bundle size
    await loadSlim(engine)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#A78BFA' },
            links: {
              color: '#7C3AED',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-accent font-mono mb-4 text-sm md:text-base tracking-widest uppercase"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-4 text-white"
        >
          Selvarasan S.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-400 mb-8 h-12 md:h-16"
        >
          I build{' '}
          <TypeAnimation
            sequence={[
              'Interactive Web Apps',
              1500,
              'Responsive Interfaces',
              1500,
              'Scalable Backends',
              1500,
              'Full Stack Experiences',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-secondary"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl font-body mb-12"
        >
          A passionate software engineer specializing in modern web technologies, 
          creating extraordinary digital architectures with a focus on seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'backOut' }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-accent text-white font-medium rounded-lg overflow-hidden flex items-center gap-2 transition-transform hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
          </a>
          
          <a
            href="#resume"
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all hover:scale-105"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-accent" />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
