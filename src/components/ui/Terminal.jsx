import { useState, useRef, useEffect } from 'react'
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react'

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'info', text: 'Welcome to Selvarasan S. Interactive Shell [v1.0.0]' },
    { type: 'info', text: 'Type "help" to view a list of available commands.' },
    { type: 'prompt', text: '' }, // empty prompt representing starter state
  ])
  const [input, setInput] = useState('')
  const terminalEndRef = useRef(null)
  const inputRef = useRef(null)

  const isFirstRender = useRef(true)

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    scrollToBottom()
  }, [history])

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  const commands = {
    help: () => [
      { type: 'output', text: 'Available commands:' },
      { type: 'output', text: '  about      - A brief bio about Selvarasan' },
      { type: 'output', text: '  skills     - Display core programming skills & tech stack' },
      { type: 'output', text: '  projects   - Show highlights of developed projects' },
      { type: 'output', text: '  contact    - Retrieve contact details & active links' },
      { type: 'output', text: '  clear      - Clear the screen' },
      { type: 'output', text: '  theme      - Cyber-toggle terminal accent color' },
    ],
    about: () => [
      { type: 'output', text: 'Bio:' },
      { type: 'output', text: '  Name:       Selvarasan S.' },
      { type: 'output', text: '  Role:       Full Stack Developer' },
      { type: 'output', text: '  Status:     B.Tech IT Undergraduate @ Sathyabama University (2023 - 2027)' },
      { type: 'output', text: '  Core Focus: Creating highly responsive interfaces & robust Java/React backends.' },
    ],
    skills: () => [
      { type: 'output', text: 'Technical Skills Matrix:' },
      { type: 'output', text: '  Languages:   Java, JavaScript, TypeScript, HTML5, CSS3' },
      { type: 'output', text: '  Frameworks:  React, Spring Boot, Node.js, Express, Tailwind CSS' },
      { type: 'output', text: '  Databases:   MongoDB, MySQL' },
      { type: 'output', text: '  Tools:       Git, Docker, Postman' },
    ],
    projects: () => [
      { type: 'output', text: 'Featured Work:' },
      { type: 'output', text: '  1. Smart Hostel Management System (Full Stack - React, Node, Mongo)' },
      { type: 'output', text: '  2. E-Commerce Platform (Frontend - React, Tailwind, Firebase)' },
      { type: 'output', text: '  3. Task Management API (Backend - Java, Spring Boot, MySQL)' },
      { type: 'output', text: '  4. Real-time Chat App (Full Stack - WebSockets, Node, React)' },
      { type: 'output', text: 'Type "projects" inside the portfolio sections to see detailed cards!' },
    ],
    contact: () => [
      { type: 'output', text: 'Reach Out:' },
      { type: 'output', text: '  Email:    selva200513@gmail.com' },
      { type: 'output', text: '  Phone:    +91 902 575 2995' },
      { type: 'output', text: '  GitHub:   github.com/Selva-rc' },
      { type: 'output', text: '  Location: Chennai, Tamil Nadu' },
    ],
    theme: () => {
      const colors = ['#7C3AED', '#A78BFA', '#10B981', '#06B6D4', '#F59E0B', '#EF4444']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      document.documentElement.style.setProperty('--terminal-accent', randomColor)
      return [{ type: 'success', text: `System accent theme toggled successfully!` }]
    },
  }

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim().toLowerCase()
      const newHistory = [...history]

      // replace the last empty prompt with the typed command
      if (newHistory.length > 0 && newHistory[newHistory.length - 1].type === 'prompt') {
        newHistory[newHistory.length - 1].text = input
      } else {
        newHistory.push({ type: 'prompt', text: input })
      }

      if (trimmedInput === 'clear') {
        setHistory([
          { type: 'info', text: 'Terminal cleared. Type "help" to view a list of available commands.' },
          { type: 'prompt', text: '' },
        ])
        setInput('')
        return
      }

      if (trimmedInput === '') {
        newHistory.push({ type: 'prompt', text: '' })
        setHistory(newHistory)
        return
      }

      const commandAction = commands[trimmedInput]
      if (commandAction) {
        newHistory.push(...commandAction())
      } else {
        newHistory.push({
          type: 'error',
          text: `Command not found: "${input}". Type "help" for a list of valid commands.`,
        })
      }

      newHistory.push({ type: 'prompt', text: '' })
      setHistory(newHistory)
      setInput('')
    }
  }

  return (
    <div
      onClick={handleTerminalClick}
      className="w-full glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl font-mono text-xs md:text-sm text-left flex flex-col h-[320px] md:h-[400px] cursor-text group select-none relative"
      style={{ '--terminal-accent': '#7C3AED' }}
    >
      {/* Terminal Header */}
      <div className="bg-black/50 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-bold tracking-wider uppercase text-[10px]">
          <TerminalIcon size={12} className="text-gray-400 animate-pulse" />
          <span>Interactive Shell</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
          <Sparkles size={10} className="text-secondary" />
          <span>Try: theme</span>
        </div>
      </div>

      {/* Terminal Logs Output */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-2 md:space-y-3 bg-black/25">
        {history.map((log, index) => {
          if (log.type === 'prompt') {
            const showCursor = index === history.length - 1
            return (
              <div key={index} className="flex items-center gap-2">
                <span className="text-accent font-bold" style={{ color: 'var(--terminal-accent)' }}>
                  selva@portfolio:~$
                </span>
                <span className="text-white break-all">
                  {showCursor ? (
                    <>
                      {input}
                      <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-pulse" style={{ backgroundColor: 'var(--terminal-accent)' }} />
                    </>
                  ) : (
                    log.text
                  )}
                </span>
              </div>
            )
          }

          let colorClass = 'text-gray-300'
          if (log.type === 'info') colorClass = 'text-[#A78BFA] font-medium'
          if (log.type === 'error') colorClass = 'text-red-400 font-bold'
          if (log.type === 'success') colorClass = 'text-[#10B981] font-semibold'
          if (log.type === 'output') colorClass = 'text-gray-300'

          return (
            <div key={index} className={`${colorClass} whitespace-pre-wrap break-words pl-2 border-l-2 border-white/5`}>
              {log.text}
            </div>
          )
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Hidden input to catch keystrokes for focus */}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        className="absolute w-px h-px opacity-0 pointer-events-none"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  )
}

export default Terminal
