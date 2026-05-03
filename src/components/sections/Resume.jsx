import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Document, Page, pdfjs } from 'react-pdf'
import { Download, FileWarning, Loader2 } from 'lucide-react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// IMPORTANT: Configure worker for react-pdf via Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const resumeUrl = '/resume.pdf' // Assuming the user will place resume.pdf in the public folder

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const [width, setWidth] = useState(1200)
  const [error, setError] = useState(false)

  // Responsive PDF width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWidth(window.innerWidth - 64) // mobile padding
      } else if (window.innerWidth < 1024) {
        setWidth(600)
      } else {
        setWidth(800)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setError(false)
  }

  function onDocumentLoadError() {
    setError(true)
  }

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
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
            View my qualifications and experience directly, or download a copy for your records.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-6" />
        </motion.div>

        {/* Download Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={resumeUrl}
          download="Selvarasan_S_Resume.pdf"
          className="mb-12 group relative px-8 py-4 bg-accent text-white font-bold rounded-lg overflow-hidden flex items-center gap-3 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
        >
          <span className="relative z-10">Download CV</span>
          <Download size={20} className="relative z-10 group-hover:translate-y-1 transition-transform" />
          <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
        </motion.a>

        {/* PDF Viewer */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="w-full max-w-4xl glass rounded-2xl p-4 md:p-8 border border-white/10 flex flex-col items-center min-h-[500px] justify-center"
        >
          {error ? (
            <div className="flex flex-col items-center text-gray-400 text-center gap-4 py-20">
              <FileWarning size={64} className="text-accent/50" />
              <p className="text-xl font-heading">Resume file not found</p>
              <p className="text-sm">Please place <code className="bg-black/50 px-2 py-1 rounded text-accent">resume.pdf</code> in the <code className="bg-black/50 px-2 py-1 rounded">/public</code> folder.</p>
            </div>
          ) : (
            <div className="shadow-2xl overflow-hidden rounded-lg">
              <Document
                file={resumeUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex flex-col items-center justify-center py-40 gap-4 text-accent">
                    <Loader2 size={40} className="animate-spin" />
                    <p>Loading PDF...</p>
                  </div>
                }
              >
                {/* Dynamically render all pages if it's a multi-page resume, though usually 1 page is best */}
                {Array.from(new Array(numPages || 1), (el, index) => (
                  <Page 
                    key={`page_${index + 1}`} 
                    pageNumber={index + 1} 
                    width={width}
                    className="mb-4 last:mb-0"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                ))}
              </Document>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  )
}

export default Resume
