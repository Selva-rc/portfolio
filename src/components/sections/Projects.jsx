import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { Code2, ExternalLink } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'Smart Hostel Management System',
    description: 'A comprehensive full-stack solution for managing hostel operations, including food menus, student requests, and notices with real-time updates.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/selvarasans',
    live: 'https://example.com'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with cart functionality, payment gateway integration, and a sophisticated admin dashboard for inventory management.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Stripe'],
    category: 'Frontend',
    github: 'https://github.com/selvarasans',
    live: 'https://example.com'
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API built with Spring Boot for managing tasks, assigning roles, and tracking progress. Includes JWT authentication and Swagger documentation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    category: 'Backend',
    github: 'https://github.com/selvarasans',
    live: 'https://example.com'
  },
  {
    id: 4,
    title: 'Real-time Chat App',
    description: 'A real-time messaging application allowing users to create rooms, send instant messages, and share files, built with WebSockets.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Socket.io', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/selvarasans',
    live: 'https://example.com'
  }
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  )

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-body">
            A selection of my best work demonstrating my expertise in building complete, scalable applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-6" />
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <Tilt 
                  options={{ max: 15, scale: 1.02, speed: 400, glare: true, 'max-glare': 0.2 }} 
                  className="h-full"
                >
                  <div className="h-full glass rounded-2xl overflow-hidden border border-white/10 group flex flex-col">
                    <div className="relative w-full h-64 overflow-hidden bg-black/50">
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4 backdrop-blur-sm">
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-black/60 rounded-full text-white hover:bg-accent hover:scale-110 transition-all">
                          <Code2 size={24} />
                        </a>
                        <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-black/60 rounded-full text-white hover:bg-accent hover:scale-110 transition-all">
                          <ExternalLink size={24} />
                        </a>
                      </div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 flex-1 text-base leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-accent/10 text-accent border border-accent/20"
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
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Projects
