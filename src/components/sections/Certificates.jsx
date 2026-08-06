import { motion } from 'framer-motion'

const certificatesData = [
  {
    id: 1,
    title: 'Programming in Java (Silver Elite)',
    issuer: 'NPTEL / IIT Kharagpur',
    date: 'Jan-Apr 2026',
    link: '/nptel-java-cert.png'
  },
  {
    id: 2,
    title: 'Software Engineer Certificate',
    issuer: 'HackerRank',
    date: 'Apr 2026',
    link: 'https://www.hackerrank.com/certificates/fbcff6a74534'
  }
]

const getLogo = (issuer) => {
  switch (issuer) {
    case 'Scaler':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0056cc]" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v2h4v2H7V7h10v2h-6v2h6v2z" />
        </svg>
      )
    case 'Smart India Hackathon':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5 0-3.3-2.7-6-6-6S6 4.7 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    case 'TCS iON':
      return (
        <svg viewBox="0 0 32 16" className="w-8 h-4">
          <text x="0" y="13" className="font-sans font-black text-xs lowercase" fill="url(#tcs-grad)" letterSpacing="-0.5px">tcs</text>
          <defs>
            <linearGradient id="tcs-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4560" />
              <stop offset="50%" stopColor="#775dd0" />
              <stop offset="100%" stopColor="#008ffb" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'NPTEL / IIT Kharagpur':
      return (
        <img src="/nptel-logo.jpg" alt="NPTEL Logo" className="w-full h-full object-contain rounded-md" />
      )
    case 'HackerRank':
      return (
        <img src="/hackerrank-logo.png" alt="HackerRank Logo" className="w-full h-full object-contain rounded-md" />
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
  }
}

const Certificates = () => {
  if (certificatesData.length === 0) return null

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Certifications <span className="text-gray-500 text-2xl font-normal ml-2">({certificatesData.length})</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-4" />
        </motion.div>

        <div className="flex flex-col border border-white/10 rounded-2xl divide-y divide-white/10 bg-black/20 overflow-hidden">
          {certificatesData.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-5 md:p-6 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  {getLogo(cert.issuer)}
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-base md:text-lg group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {cert.issuer} &bull; {cert.date}
                  </p>
                </div>
              </div>
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certificates
