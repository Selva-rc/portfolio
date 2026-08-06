import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { Code2, ExternalLink, X, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react'

const getTechLogo = (tag) => {
  const normTag = tag.toLowerCase().replace(/[\s.-]/g, '');
  switch (normTag) {
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#E76F00] fill-currentColor">
          <path d="M19.167 17.667c0 1.267-2.617 2.333-6.267 2.333s-6.3-1.067-6.3-2.333c0-.85 1.183-1.6 3.1-1.983-.317-.4-.517-.833-.6-1.3-.983.25-1.833.65-2.5 1.15C5.367 16.55 4.5 17.65 4.5 19c0 2.217 3.35 4 7.5 4s7.5-1.783 7.5-4c0-.433-.133-.85-.4-1.25-.433-.617-1.367-1.133-2.6-1.5-.067.433-.217.833-.467 1.2.917.333 1.633.783 1.633 1.217zM12 0C9.667 3.5 11.5 5.833 11 8c-.333 1.5-1.333 2.167-2 3.5s-.667 2.5.5 3.5c1.333 1.167 3 .667 4 2 1.333 1.667.667 4.167.667 4.167s2.5-3 1.333-5.333c-.833-1.667-2.667-2.333-2.5-4 .167-1.667 2-2.833 2-4.5S13 1.833 12 0zm-2.5 4.5c.333 1-.333 2.333-1 3.5s-.667 2.333 0 3.167c.667.833 1.5.333 2 1.167.667 1.167.167 2.833.167 2.833s1.5-2 .667-3.667c-.667-1.333-1.833-1.667-1.833-2.833s1.167-2 1.167-3.167S9.833 5.5 9.5 4.5z"/>
        </svg>
      );
    case 'javaswing':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#E76F00] fill-none stroke-currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="15" rx="2" ry="2"/>
          <line x1="2" y1="9" x2="22" y2="9"/>
          <circle cx="5" cy="6" r="1" fill="currentColor"/>
          <circle cx="8" cy="6" r="1" fill="currentColor"/>
          <path d="M12 12c.5 1 .2 2-.5 3h2" strokeWidth="1.5"/>
        </svg>
      );
    case 'sql':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#00758F] fill-currentColor">
          <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 18c-4.42 0-8-1.58-8-3.5V14.3c1.78.85 4.7 1.2 8 1.2s6.22-.35 8-1.2v2.2c0 1.92-3.58 3.5-8 3.5zm0-5c-4.42 0-8-1.58-8-3.5V9.3c1.78.85 4.7 1.2 8 1.2s6.22-.35 8-1.2v2.2c0 1.92-3.58 3.5-8 3.5zm0-5c-4.42 0-8-1.58-8-3.5S7.58 3 12 3s8 1.58 8 3.5-3.58 3.5-8 3.5z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#4479A1] fill-currentColor">
          <path d="M12.11 3.44c-.38.05-.62.3-.65.64-.17 2.07-1.13 3.96-2.67 5.38-.47.43-.88.93-1.22 1.47-.79 1.24-1.12 2.7-1 4.16.14 1.76.94 3.38 2.22 4.54 1.63 1.48 3.86 2.12 6.01 1.76.62-.1 1.13-.5 1.34-1.08.31-.86.11-1.84-.49-2.5-.42-.46-.66-1.06-.66-1.69 0-1.18.78-2.22 1.92-2.54.43-.12.69-.53.64-.98-.12-1.12-.66-2.16-1.52-2.91-1.11-.97-2.61-1.42-4.08-1.25z"/>
        </svg>
      );
    case 'apachenetbeans':
    case 'netbeans':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#1B6AC6] fill-currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#47A248] fill-currentColor">
          <path d="M12 1.5c-.3 0-1.8 1.7-2.3 3.9C7.8 13 10.7 18 11.5 20c.1.3.3.5.5.5s.4-.2.5-.5c.8-2 3.7-7 1.8-14.6-.5-2.2-2-3.9-2.3-3.9zM12 23c.3 0 .5-.2.5-.5v-1.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.1c0 .3.2.5.5.5z"/>
        </svg>
      );
    case 'express':
    case 'expressjs':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#828282] fill-currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H7v-2h6v2zm3-4H7v-2h9v2zm0-4H7V6h9v2z"/>
        </svg>
      );
    case 'react':
    case 'reactjs':
      return (
        <svg viewBox="-11.5 -10.23 23 20.47" className="w-3.5 h-3.5 text-[#61DAFB] fill-none stroke-currentColor" strokeWidth="1">
          <circle r="2.05" fill="currentColor"/>
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#339933] fill-currentColor">
          <path d="M12 1.03C6.48 1.03 2 5.51 2 11.03c0 3.42 1.72 6.43 4.33 8.23l.03.02L12 22.97l5.64-3.69.03-.02c2.61-1.8 4.33-4.81 4.33-8.23 0-5.52-4.48-10-10-10zm2.34 14.52l-.39.26-.06.04-1.89 1.15V9.45c0-.42-.34-.76-.76-.76s-.76.34-.76.76v7.56l-1.89-1.15-.06-.04-.39-.26V11.2c0-.42-.34-.76-.76-.76s-.76.34-.76.76v4.61l3.07 1.87 3.07-1.87v-4.61c0-.42-.34-.76-.76-.76s-.76.34-.76.76v4.35z"/>
        </svg>
      );
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#38BDF8] fill-currentColor">
          <path d="M12.005 17.653c-2.77 0-4.622-1.387-5.547-4.16 1.387 0 2.427-.462 3.12-1.387-1.155-.23-1.963-.808-2.426-1.733.693 0 1.27-.116 1.733-.347-.924-.693-1.386-1.733-1.386-3.12 1.386.462 2.426.347 3.12-.347-.347-.693-.462-1.502-.347-2.426.462 1.386 1.387 2.08 2.77 2.08 2.77 0 4.622 1.387 5.548 4.16-1.387 0-2.427.462-3.12 1.387 1.155.23 1.963.808 2.427 1.733-.693 0-1.27.116-1.733.347.924.693 1.386 1.733 1.386 3.12-1.386-.462-2.426-.347-3.12.347.347.693.462 1.502.347 2.426-.462-1.386-1.387-2.08-2.77-2.08z"/>
        </svg>
      );
    case 'jwt':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#d63aff] fill-currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
      );
    case 'recharts':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#3b82f6] fill-none stroke-currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      );
    case 'springboot':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#6DB33F] fill-currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 15.6c-.4-.1-.7-.3-1-.6l-3.3-3.3c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l2.2 2.2 6.2-6.2c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-7.3 7.3c-.3.3-.6.5-1 .6z"/>
        </svg>
      );
    case 'socketio':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5l-4.5-4.5h3v-4h3v4h3l-4.5 4.5z"/>
        </svg>
      );
    default:
      return null;
  }
};

const projectsData = [
  {
    id: 1,
    title: 'University Management System',
    description: 'A desktop-based University Management System developed using Java (Swing) and SQL, designed to manage academic and administrative operations through a centralized GUI application.',
    image: '/first.jpg',
    tags: ['Java', 'Java Swing', 'SQL', 'MySQL', 'Apache NetBeans'],
    category: 'Backend',
    github: 'https://github.com/Selva-rc/University-Management-System',
    live: 'https://github.com/Selva-rc/University-Management-System',
    details: 'A desktop-based University Management System designed to manage academic and administrative operations through a centralized GUI application. Features modules for fee collection, student and teacher management, examination details tracking, and leave applications.',
    challenges: 'Creating a responsive desktop GUI with complex layouts while ensuring transactional database consistency for fee payments and grade calculations. Solved by writing modular Swing components with GridBagLayout, using PreparedStatement batch executions, and implementing a connection pool for SQL connections.',
    architecture: ['Java Swing GUI Presentation Layer', 'JDBC Database Access Layer', 'MySQL Relational Database', 'NetBeans IDE Build System']
  },
  {
    id: 2,
    title: 'Smart Hostel & Mess Management System',
    description: 'A full-stack MERN web application designed to digitalize hostel operations including room allocation, mess meal booking, complaint tracking, and QR-based meal attendance.',
    image: '/hostel.png',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Recharts'],
    category: 'Full Stack',
    github: 'https://github.com/Selva-rc/smart-hostel-system',
    live: 'https://smart-hostel-system-jnkc.vercel.app/login',
    details: 'A centralized MERN platform featuring role-based dashboards (student, warden, admin) for hostel operations. Includes a QR code meal booking & verification system to prevent duplicate scans, room allocation, complaint tracking with status updates, and a Recharts analytics dashboard. Also features a smart consumption analysis module to predict food wastage patterns based on historical data.',
    challenges: 'Preventing duplicate meal scans and handling concurrent room/meal allocations under high-traffic mess hours. Solved by implementing an Express API with single-use JWT QR code validation, MongoDB transaction controls, and optimized schemas with indices to query occupancy and meal status in less than 5ms.',
    architecture: ['React/Vite & Tailwind CSS Client', 'Node.js & Express REST Backend', 'MongoDB Atlas & Mongoose ODM', 'JWT Authentication & Recharts Analytics']
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API built with Spring Boot for managing tasks, assigning roles, and tracking progress. Includes JWT authentication and Swagger documentation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    category: 'Backend',
    github: 'https://github.com/Selva-rc',
    live: 'https://example.com',
    details: 'A robust corporate task distribution engine designed to handle hierarchical company structural models, project timelines, multi-role security levels, and automatically generated workload summaries.',
    challenges: 'Structuring complex SQL databases with multiple many-to-many joins without creating N+1 query bottlenecks. Solved by implementing custom Hibernate entity mappings, lazy loading configurations, and custom repository queries leveraging JPQL.',
    architecture: ['Spring Security with JWT', 'Spring MVC Controllers', 'Hibernate Persistence Layer', 'Relational MySQL Database Schema']
  },
  {
    id: 4,
    title: 'Real-time Chat App',
    description: 'A real-time messaging application allowing users to create rooms, send instant messages, and share files, built with WebSockets.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Socket.io', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/Selva-rc',
    live: 'https://example.com',
    details: 'An interactive immediate-delivery communications panel allowing users to connect instantly across distinct threads, share binary attachments securely, and track online/typing markers.',
    challenges: 'Guaranteeing continuous message orders and preventing dropped threads under erratic network connectivity. Solved by designing client-side storage fallbacks and implementing automatic WebSocket reconnect triggers in Socket.io with exponential backoff.',
    architecture: ['React Client UI', 'Socket.io Real-time Client', 'Node.js Express Server Gateway', 'Socket.io Engine Protocol']
  }
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [highlightedSkill, setHighlightedSkill] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleSkillSelection = (e) => {
      const skillName = e.detail.skill
      setHighlightedSkill(skillName)
      
      const timer = setTimeout(() => {
        setHighlightedSkill(null)
      }, 5000)
      return () => clearTimeout(timer)
    }

    window.addEventListener('skill-selected', handleSkillSelection)
    return () => window.removeEventListener('skill-selected', handleSkillSelection)
  }, [])

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  )

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/10">
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
            A selection of my best work demonstrating my expertise in building complete, scalable applications. Click any card to explore its case study!
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

        {/* Project Alternating Rows - Premium Asymmetric Split Layout */}
        <div className="flex flex-col gap-20 md:gap-32 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0
              const isHighlighted = highlightedSkill && project.tags.some(
                tag => tag.toLowerCase() === highlightedSkill.toLowerCase()
              )

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`flex flex-col lg:items-center gap-8 lg:gap-16 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Visual Column */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className={`relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-neutral-900 border transition-all duration-500 group/img cursor-pointer shadow-2xl ${
                        isHighlighted 
                          ? 'border-accent shadow-[0_0_40px_rgba(124,58,237,0.4)] scale-[1.02]' 
                          : 'border-white/[0.08] hover:border-accent/40'
                      }`}
                    >
                      {/* Spotlight overlays */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10" />
                      <div className="absolute inset-0 bg-black/15 group-hover/img:bg-black/0 transition-colors duration-500 z-10" />
                      
                      {/* Glowing editorial index number */}
                      <div className="absolute top-6 left-6 z-20 font-heading font-extrabold text-5xl md:text-6xl text-white/10 group-hover/img:text-accent/20 transition-colors duration-500 select-none">
                        0{project.id}
                      </div>

                      {/* Explore hover banner */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center bg-accent/20 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <span className="px-6 py-3 bg-black/85 rounded-full text-white text-sm font-semibold border border-white/10 shadow-xl scale-95 group-hover/img:scale-100 transition-transform duration-300">
                          View Case Study
                        </span>
                      </div>

                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                    </div>
                  </div>

                  {/* Copy Column */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                    <span className="text-accent font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block">
                      {project.category} Project
                    </span>
                    
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className={`text-2xl md:text-4xl font-bold font-heading text-white mb-5 cursor-pointer hover:text-accent transition-colors duration-300 ${
                        isHighlighted ? 'text-accent' : ''
                      }`}
                    >
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-body">
                      {project.description}
                    </p>

                    {/* Architecture highlights list */}
                    <div className="space-y-2 mb-6">
                      {project.architecture.slice(0, 2).map((layer, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{layer}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tag capsule pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => {
                        const isTagHighlighted = highlightedSkill && tag.toLowerCase() === highlightedSkill.toLowerCase()
                        return (
                          <span 
                            key={idx} 
                            className={`px-3 py-1 text-xs font-mono font-medium rounded-full border transition-all duration-300 flex items-center gap-1.5 ${
                              isTagHighlighted 
                                ? 'bg-accent text-white border-accent shadow-[0_0_10px_rgba(124,58,237,0.5)] animate-pulse' 
                                : 'bg-white/[0.03] text-gray-400 border-white/[0.05]'
                            }`}
                          >
                            {getTechLogo(tag)}
                            <span>{tag}</span>
                          </span>
                        )
                      })}
                    </div>

                    {/* Sleek action items row */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:scale-105 transition-all duration-300 text-xs md:text-sm"
                      >
                        Explore Case Study
                      </button>
                      
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Code2 size={18} />
                      </a>
                      
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Details Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl bg-[#0e0e0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/5 transition-all cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              {/* Banner Image */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] via-transparent to-black/40 z-10" />
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-6 left-6 md:left-8 z-20 px-3 py-1 text-xs font-mono font-medium rounded-full bg-accent text-white border border-accent/20 shadow-md">
                  {selectedProject.category}
                </span>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Tech Stack & Architecture */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-white font-heading font-bold">
                      <Cpu size={18} className="text-accent" />
                      <span>Architecture Stack</span>
                    </div>
                    <div className="space-y-3">
                      {selectedProject.architecture.map((layer, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                          <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-200">{layer}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 text-xs font-mono font-semibold rounded-md bg-accent/15 text-accent border border-accent/20 flex items-center gap-1.5"
                        >
                          {getTechLogo(tag)}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Challenges & Solutions */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white font-heading font-bold">
                      <ShieldAlert size={18} className="text-[#EF4444]" />
                      <span>Challenge & Resolution</span>
                    </div>
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5 leading-relaxed relative overflow-hidden h-full flex flex-col justify-center">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#EF4444]" />
                      <p className="text-gray-300 text-sm md:text-base italic pl-2">
                        "{selectedProject.challenges}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 flex-shrink-0">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 py-3 px-6 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 border border-white/10 transition-colors"
                  >
                    <Code2 size={18} />
                    Source Code
                  </a>
                  <a 
                    href={selectedProject.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 py-3 px-6 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                  >
                    <ExternalLink size={18} />
                    Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
