import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Document, Page, pdfjs } from 'react-pdf'
import { Download, Eye, Loader2, FileWarning } from 'lucide-react'

// Configure worker via high-speed unpkg CDN to bypass local bundler processing
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const resumeUrl = '/resume.pdf'

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const [width, setWidth] = useState(800)
  const [error, setError] = useState(false)
  const [renderPdf, setRenderPdf] = useState(false)

  const containerRef = useRef(null)
  // Only mount and render PDF when scrolled near (within 200px of section)
  const isInView = useInView(containerRef, { once: true, margin: '200px' })

  useEffect(() => {
    if (isInView) {
      setRenderPdf(true)
    }
  }, [isInView])

  // Responsive PDF width with debouncing to prevent layout thrashing
  useEffect(() => {
    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (window.innerWidth < 640) {
          setWidth(window.innerWidth - 48) // mobile viewport padding
        } else if (window.innerWidth < 1024) {
          setWidth(640)
        } else {
          setWidth(800)
        }
      }, 150)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setError(false)
  }

  function onDocumentLoadError() {
    setError(true)
  }

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5" ref={containerRef}>
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            My <span className="text-accent">Resume</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-body">
            View my qualifications and experience directly below, or download a copy for your records.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-6" />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          <a
            href={resumeUrl}
            download="Selvarasan_S_Resume.pdf"
            className="group relative px-8 py-4 bg-accent text-white font-bold rounded-xl overflow-hidden flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] cursor-pointer"
          >
            <span className="relative z-10">Download Resume</span>
            <Download size={20} className="relative z-10 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all hover:scale-105"
          >
            <Eye size={20} className="text-secondary group-hover:scale-110 transition-transform" />
            Open in New Tab
          </a>
        </motion.div>

        {/* High Performance React-PDF Document Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl glass rounded-3xl p-4 md:p-6 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center min-h-[500px] justify-center overflow-hidden"
        >
          {error ? (
            <div className="flex flex-col items-center text-gray-400 text-center gap-4 py-20">
              <FileWarning size={64} className="text-accent/50" />
              <p className="text-xl font-heading">Resume file not found</p>
              <p className="text-sm">Please place <code className="bg-black/50 px-2 py-1 rounded text-accent">resume.pdf</code> in the <code className="bg-black/50 px-2 py-1 rounded">/public</code> folder.</p>
            </div>
          ) : renderPdf ? (
            <div className="shadow-2xl overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 p-2">
              <Document
                file={resumeUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex flex-col items-center justify-center py-40 gap-4 text-accent">
                    <Loader2 size={40} className="animate-spin text-accent" />
                    <p className="font-mono text-sm tracking-wider">Mounting Canvas Engines...</p>
                  </div>
                }
              >
                {Array.from(new Array(numPages || 1), (el, index) => (
                  <Page 
                    key={`page_${index + 1}`} 
                    pageNumber={index + 1} 
                    width={width}
                    className="mb-6 last:mb-0 shadow-lg rounded-xl overflow-hidden"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                ))}
              </Document>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-40 gap-4 text-gray-500">
              <Loader2 size={40} className="animate-spin" />
              <p className="font-mono text-sm tracking-wider">Preparing PDF Render Queue...</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
