import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Database, Coffee } from 'lucide-react'
import WakaTimeStats from '../ui/WakaTimeStats'

const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { label: 'Projects Completed', value: 10, suffix: '+', icon: <Code2 size={24} /> },
  { label: 'Years Coding', value: 2, suffix: '+', icon: <Coffee size={24} /> },
  { label: 'Technologies', value: 15, suffix: '+', icon: <Database size={24} /> },
  { label: 'GitHub Commits', value: 300, suffix: '+', icon: <Server size={24} /> },
]

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-2xl blur-xl opacity-20 animate-pulse" />
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden flex items-center justify-center transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/profile.png" 
                  alt="Selvarasan S" 
                  className="w-full h-full object-cover scale-105" 
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading leading-snug">
              Passionate Full Stack Developer driven by Java & React
            </h3>
            <div className="text-gray-400 space-y-4 text-base md:text-lg leading-relaxed font-body">
              <p>
                Hello! I'm Selvarasan, a software developer with a deep passion for building 
                robust applications from the ground up. Over the past 2 years, I've immersed myself in 
                the world of coding, constantly learning and applying new technologies to solve complex problems.
              </p>
              <p>
                I am currently pursuing my B.Tech in IT at <span className="text-white font-medium">Sathyabama Institute of Science and Technology</span>, 
                expected to graduate in <span className="text-accent font-medium relative inline-block">2027
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/50 -rotate-2"></span>
                </span>. 
              </p>
              <p>
                My expertise spans across modern frontend experiences with React and powerful backend ecosystems using Java & Spring Boot. 
                I believe in writing clean, scalable code and delivering exceptional user experiences through highly responsive architecture.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300 border-white/5 hover:border-accent/30"
            >
              <div className="text-accent mb-4 p-4 bg-white/5 rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 font-heading flex items-center">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm uppercase text-gray-500 font-semibold tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <WakaTimeStats />
      </div>
    </section>
  )
}

export default About
