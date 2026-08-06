import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', customIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: 'hover:border-orange-500 hover:shadow-orange-500/20' },
      { name: 'JavaScript', icon: 'javascript', color: 'hover:border-yellow-400 hover:shadow-yellow-400/20' },
      { name: 'TypeScript', icon: 'typescript', color: 'hover:border-blue-500 hover:shadow-blue-500/20' },
      { name: 'HTML5', icon: 'html5', color: 'hover:border-orange-600 hover:shadow-orange-600/20' },
      { name: 'CSS3', customIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: 'hover:border-blue-600 hover:shadow-blue-600/20' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', icon: 'react', color: 'hover:border-cyan-400 hover:shadow-cyan-400/20' },
      { name: 'Spring Boot', icon: 'springboot', color: 'hover:border-green-500 hover:shadow-green-500/20' },
      { name: 'Node.js', icon: 'nodedotjs', color: 'hover:border-green-600 hover:shadow-green-600/20' },
      { name: 'Express', icon: 'express', color: 'hover:border-gray-400 hover:shadow-gray-400/20' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: 'hover:border-cyan-500 hover:shadow-cyan-500/20' },
    ]
  },
  {
    title: 'Tools & Databases',
    skills: [
      { name: 'Git', icon: 'git', color: 'hover:border-orange-600 hover:shadow-orange-600/20' },
      { name: 'MySQL', icon: 'mysql', color: 'hover:border-blue-500 hover:shadow-blue-500/20' },
      { name: 'MongoDB', icon: 'mongodb', color: 'hover:border-green-500 hover:shadow-green-500/20' },
      { name: 'Postman', icon: 'postman', color: 'hover:border-orange-500 hover:shadow-orange-500/20' },
      { name: 'Docker', icon: 'docker', color: 'hover:border-blue-600 hover:shadow-blue-600/20' },
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-body">
            A comprehensive list of the tools and technologies I use to build robust and scalable digital products.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-6" />
        </motion.div>

        <div className="flex flex-col gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-4"
              >
                {category.title}
                <div className="h-[1px] flex-1 bg-white/10" />
              </motion.h3>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {category.skills.map((skill, index) => {
                  const handleSkillClick = () => {
                    const event = new CustomEvent('skill-selected', { detail: { skill: skill.name } })
                    window.dispatchEvent(event)
                    
                    const projectsSection = document.getElementById('projects')
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }

                  return (
                    <motion.div key={index} variants={itemVariants} onClick={handleSkillClick} className="cursor-pointer">
                      <Tilt options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                        <div className={`h-full glass flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 block ${skill.color}`}>
                          <div className="w-16 h-16 relative flex justify-center items-center mb-4 bg-white/5 rounded-xl p-3">
                            <img 
                              src={skill.customIcon || `https://cdn.simpleicons.org/${skill.icon}/white`} 
                              alt={skill.name} 
                              className={`w-full h-full object-contain filter drop-shadow-md ${skill.customIcon ? 'brightness-0 invert' : ''}`}
                            />
                          </div>
                          <span className="text-sm md:text-base font-medium text-gray-300 font-mono text-center">
                            {skill.name}
                          </span>
                        </div>
                      </Tilt>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
