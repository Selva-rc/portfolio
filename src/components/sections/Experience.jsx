import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

const timelineData = [
  {
    id: 1,
    title: 'B.Tech Information Technology',
    subtitle: 'Sathyabama Institute of Science and Technology',
    date: '2023 - 2027',
    description: 'Currently pursuing Bachelor of Technology focusing on core computer science subjects, software engineering, and full-stack development. Active member of technical clubs.',
    icon: <GraduationCap size={24} />,
    type: 'education'
  },
  {
    id: 2,
    title: 'Full Stack Developer Intern',
    subtitle: 'Example Tech Company',
    date: 'Summer 2025',
    description: 'Developed and maintained scalable web applications using React and Node.js. Collaborated with the backend team to design RESTful APIs and improved application performance by 20%.',
    icon: <Briefcase size={24} />,
    type: 'experience'
  },
  {
    id: 3,
    title: 'Advanced Full Stack Certification',
    subtitle: 'Coursera / Meta',
    date: 'Jan 2025',
    description: 'Completed comprehensive coursework on modern web development, including advanced React patterns, system design, and database architecture.',
    icon: <Award size={24} />,
    type: 'certification'
  },
  {
    id: 4,
    title: 'Smart India Hackathon Finalist',
    subtitle: 'National Level Competition',
    date: 'Nov 2024',
    description: 'Led a team of 4 to develop a smart campus solution. Placed in the top 10 out of 500+ participating teams globally.',
    icon: <Award size={24} />,
    type: 'achievement'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Experience & <span className="text-accent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-2" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-secondary to-accent/20 transform md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={item.id} className={`relative flex items-center justify-between md:w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline icon dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-accent z-10 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Empty spacer for alternating layout on desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="w-full md:w-5/12 pl-16 md:pl-0"
                  >
                    <div className="glass p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-white/10 hover:border-accent/50 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
                      
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium rounded-full bg-accent/20 text-accent border border-accent/20">
                        {item.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-heading">
                        {item.title}
                      </h3>
                      <h4 className="text-base text-gray-300 mb-4 font-medium">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
