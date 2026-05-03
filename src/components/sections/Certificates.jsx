import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { Award, ExternalLink, Calendar } from 'lucide-react'

const certificatesData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2024',
    description: 'Earned the AWS Certified Solutions Architect – Associate certification, demonstrating expertise in designing distributed systems.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    tags: ['AWS', 'Cloud', 'Architecture'],
    link: '#'
  },
  {
    id: 2,
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera / Meta',
    date: 'Oct 2024',
    description: 'Completed a 9-course program on modern front-end development, covering React, UI/UX, and performance optimization.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'JavaScript', 'UI/UX'],
    link: '#'
  },
  {
    id: 3,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera / Google',
    date: 'Aug 2024',
    description: 'Foundational certification in data analysis, covering tools like SQL, R, and Tableau for real-world problem solving.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Data Analysis', 'SQL', 'Tableau'],
    link: '#'
  }
]

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Licenses & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-body">
            Professional credentials validating my skills and continuous learning journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt 
                options={{ max: 15, scale: 1.02, speed: 400, glare: true, 'max-glare': 0.1 }} 
                className="h-full"
              >
                <div className="h-full glass rounded-2xl overflow-hidden border border-white/10 group flex flex-col hover:border-accent/50 transition-colors duration-300">
                  <div className="relative w-full h-48 overflow-hidden bg-black/50">
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                      <a href={cert.link} target="_blank" rel="noreferrer" className="p-3 bg-black/60 rounded-full text-white hover:bg-accent hover:scale-110 transition-all">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                    {/* Optional Image fallback or stylized background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/20 z-[1]" />
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-10 text-white bg-black/40 backdrop-blur-md p-2 rounded-lg border border-white/10">
                      <Award size={20} className="text-accent" />
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm font-medium">
                      <Calendar size={16} className="text-secondary" />
                      <span>{cert.date}</span>
                      <span className="mx-2 text-white/20">•</span>
                      <span className="text-accent/80 font-semibold">{cert.issuer}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-heading group-hover:text-accent transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cert.tags.map((tag, idx) => (
                         <span 
                          key={idx} 
                          className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certificates
