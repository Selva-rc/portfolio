import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Check, Sparkles, HelpCircle } from 'lucide-react'

const initialWelcomeMessages = [
  {
    sender: 'bot',
    text: "Hi there! I am Selvarasan's Digital Clone, trained on his actual portfolio and credentials.",
  },
  {
    sender: 'bot',
    text: "Ask me anything about his technical projects, Sathyabama college studies, hackathon wins, or hire availability!",
  },
]

const suggestionChips = [
  { label: '⚡ Hackathons', text: 'Tell me about your SIH hackathon project' },
  { label: '💼 Internships', text: 'Are you available for B.Tech internships?' },
  { label: '🛠️ Tech Stack', text: 'What is your complete technical stack?' },
  { label: '🎓 Education', text: 'Where are you studying and what course?' },
  { label: '📧 Contact Links', text: 'How can I contact you directly?' },
]

const DigitalTwinBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialWelcomeMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  const chatEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Dismiss tooltip after 10 seconds or when opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const handleOpenToggle = () => {
    setIsOpen(!isOpen)
    setShowTooltip(false)
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }

  // Client-side keyphrase NLP response generator
  const getTwinResponse = (query) => {
    const q = query.toLowerCase()

    if (q.includes('sih') || q.includes('hackathon') || q.includes('award') || q.includes('smart india')) {
      return {
        text: "Selvarasan is a **National finalist in the Smart India Hackathon 2024**! He led a team of 4 to design a smart campus solution, beating out hundreds of competitive teams. In his B.Tech, he also actively leads technical sessions and participates in tech-club initiatives.",
      }
    }

    if (q.includes('intern') || q.includes('job') || q.includes('hire') || q.includes('work') || q.includes('opening') || q.includes('recruit') || q.includes('relocate')) {
      return {
        text: "Yes! He is **actively looking for Full-Stack / Software Engineering Internship opportunities for Summer/Winter 2025 and 2026**! He is proficient in Java, Spring Boot, React, and databases, and is open to hybrid, on-site (Chennai), or remote placements.",
        links: [{ label: 'Email Direct Inquiry', href: 'mailto:selva200513@gmail.com' }],
      }
    }

    if (q.includes('tech') || q.includes('skills') || q.includes('stack') || q.includes('react') || q.includes('java') || q.includes('spring') || q.includes('database') || q.includes('mongodb') || q.includes('mysql') || q.includes('docker')) {
      return {
        text: "Here is his complete Technical Matrix:\n\n* **Languages**: Java, JavaScript, TypeScript, HTML5, CSS3\n* **Frameworks**: Spring Boot, React, Node.js, Express, Tailwind CSS\n* **Databases**: MySQL, MongoDB\n* **Tools/Infra**: Git, Docker, Postman\n\nHis primary expert focus is backend engineering with Spring Boot integrated with modular React frontends.",
      }
    }

    if (q.includes('study') || q.includes('college') || q.includes('university') || q.includes('sathyabama') || q.includes('education') || q.includes('degree') || q.includes('b.tech') || q.includes('btech')) {
      return {
        text: "He is currently pursuing a **Bachelor of Technology (B.Tech) in Information Technology** at **Sathyabama Institute of Science and Technology, Chennai** (Graduation: 2027).\n\nHe maintains active participation in technical hackathons and collegiate labs, focusing heavily on modern software architecture paradigms.",
      }
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('reach') || q.includes('address') || q.includes('github') || q.includes('connect')) {
      return {
        text: "You can reach out to him instantly using any of these channels:\n\n* 📧 **Email**: [selva200513@gmail.com](mailto:selva200513@gmail.com)\n* 📞 **Phone**: [+91 902 575 2995](tel:+919025752995)\n* 💻 **GitHub**: [github.com/Selva-rc](https://github.com/Selva-rc)\n* 📍 **Location**: Chennai, Tamil Nadu",
        links: [
          { label: 'Send Email', href: 'mailto:selva200513@gmail.com' },
          { label: 'GitHub Profile', href: 'https://github.com/Selva-rc' },
        ],
      }
    }

    if (q.includes('project') || q.includes('portfolio') || q.includes('work') || q.includes('build')) {
      return {
        text: "He has built several high-performance projects, including:\n\n1. **Smart Hostel Management System**: A full-stack solution featuring room requests and notice updates using React, Express, and MongoDB.\n2. **E-Commerce Platform**: Complete frontend application with Stripe payment checkouts and Firebase auth.\n3. **Task Management API**: Robust Spring Boot REST API structured with JWT security.\n4. **Real-time Chat App**: Active messaging room panel leveraging WebSockets.\n\nYou can click on any card in the **Projects** section to read a visual architectural case study of each!",
      }
    }

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return {
        text: "You can view his PDF Resume directly in the **Resume** section of the portfolio, or click below to download a copy immediately!",
        links: [{ label: 'Download PDF Resume', href: '/resume.pdf', download: true }],
      }
    }

    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('yo') || q.includes('greetings')) {
      return {
        text: "Hello! Always glad to chat. Ask me anything about Selvarasan's full-stack qualifications, B.Tech studies, hackathons, or hiring specs. Or click one of the quick suggestions below!",
      }
    }

    if (q.includes('who') || q.includes('selvarasan') || q.includes('name') || q.includes('you')) {
      return {
        text: "I am the digital clone of **Selvarasan S.**, a software developer specializing in React and Java backend systems. Ask me about his tech stack, college studies, SIH hackathons, or hire availability!",
      }
    }

    // Default Fallback
    return {
      text: "I didn't quite catch that context. As a clone, I am trained to talk about specific topics:\n\n* His **Spring Boot/React skills** (try typing *skills*)\n* His **B.Tech University studies** (try typing *college*)\n* His **SIH Hackathon finalist** status (try typing *hackathon*)\n* His **Internship availability** (try typing *intern*)\n* His **Contact channels** (try typing *contact*)\n\nAlternatively, please select one of the quick suggestions chips above!",
    }
  }

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return

    const userMsg = { sender: 'user', text: textToSend }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const response = getTwinResponse(textToSend)
      const botMsg = {
        sender: 'bot',
        text: response.text,
        links: response.links,
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1000)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSendMessage(input)
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        {/* Blinking Call-to-Action Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={handleOpenToggle}
              className="mb-3 px-4 py-2.5 glass border border-accent/30 rounded-2xl text-xs font-semibold text-white cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center gap-2 max-w-[200px] text-left select-none relative group mr-1"
            >
              <Sparkles size={12} className="text-secondary animate-pulse" />
              <span>Ask my digital twin!</span>
              <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-[#0d0d0e] border-r border-b border-accent/20 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing Toggle Bubble */}
        <button
          onClick={handleOpenToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 relative group cursor-pointer ${
            isOpen 
              ? 'bg-neutral-800 border border-white/10 rotate-90' 
              : 'bg-accent border border-accent hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105'
          }`}
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <>
              <MessageSquare size={22} />
              {/* Online pulse point */}
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#10B981] border-2 border-[#0a0a0a] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
            </>
          )}
        </button>
      </div>

      {/* Main Chat Interface Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 w-[340px] sm:w-[380px] h-[500px] glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-[100] text-left"
          >
            {/* Header section */}
            <div className="bg-black/40 border-b border-white/10 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent relative shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                  <Bot size={20} className="animate-pulse" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10B981] border border-[#0d0d0e] rounded-full" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">S.S. Clone</h4>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-ping" />
                    <span>Online & Ready</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable messages box */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/20 select-text">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col max-w-[80%] ${
                    msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                  }`}
                >
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-accent text-white rounded-tr-none shadow-[0_0_15px_rgba(124,58,237,0.2)]'
                        : 'bg-white/5 border border-white/5 text-gray-200 rounded-tl-none whitespace-pre-wrap'
                    }`}
                  >
                    {/* Render basic Markdown bullet points & bold marks in text */}
                    {msg.text.split('\n').map((para, pIdx) => {
                      let content = para
                      
                      // Handle list items
                      const isBullet = para.trim().startsWith('*')
                      if (isBullet) {
                        content = para.replace(/^\*\s+/, '')
                      }

                      // Parse bold items (**bold**)
                      const parts = content.split(/(\*\*.*?\*\*)/g)
                      const parsed = parts.map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIdx} className="font-semibold text-white">{part.slice(2, -2)}</strong>
                        }
                        return part
                      })

                      return (
                        <div key={pIdx} className={`${isBullet ? 'pl-3 flex items-start gap-1.5 my-1' : 'my-1'}`}>
                          {isBullet && <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />}
                          <span>{parsed}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Attachment links mapping */}
                  {msg.links && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.href}
                          download={link.download}
                          target={link.download ? undefined : '_blank'}
                          rel="noreferrer"
                          className="px-3 py-1.5 text-[10px] font-semibold bg-white/5 border border-accent/30 hover:border-accent text-accent hover:text-white rounded-lg flex items-center gap-1 transition-all"
                        >
                          <Check size={10} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Bot thinking indicator */}
              {isTyping && (
                <div className="flex flex-col mr-auto max-w-[80%] items-start">
                  <div className="p-3.5 bg-white/5 border border-white/5 text-gray-200 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick replies suggestion chips wrapper */}
            <div className="px-3 py-2 bg-black/40 border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-none select-none">
              {suggestionChips.map((chip, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(chip.text)}
                  className="px-3 py-1 bg-white/5 hover:bg-accent/15 border border-white/10 hover:border-accent/40 text-[10px] font-medium text-gray-300 hover:text-accent rounded-full whitespace-nowrap transition-all flex-shrink-0 cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input console controller */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-black/50 border-t border-white/10 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about education, skills, SIH..."
                className="flex-1 bg-black/40 border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-all shadow-[0_0_10px_rgba(124,58,237,0.3)] cursor-pointer flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DigitalTwinBot
