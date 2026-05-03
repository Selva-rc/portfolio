import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Lottie from 'lottie-react'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react'

// IMPORTANT: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_wunegqw'
const EMAILJS_TEMPLATE_ID = 'template_82b14oz'
const EMAILJS_PUBLIC_KEY = 'mVgbFRkYOLqsWsa-g'

const Contact = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [lottieData, setLottieData] = useState(null)

  // Removed the Lottie fetch because the remote URL returns 403 Forbidden.
  // We will rely purely on the polished Lucide fallback animation.

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Fallback simulation if credentials aren't set yet
    if (EMAILJS_SERVICE_ID === 'service_placeholder') {
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitStatus('success')
        formRef.current.reset()
        
        setTimeout(() => setSubmitStatus(null), 5000)
      }, 2000)
      return
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          setIsSubmitting(false)
          setSubmitStatus('success')
          formRef.current.reset()
          setTimeout(() => setSubmitStatus(null), 5000)
        },
        (error) => {
          setIsSubmitting(false)
          setSubmitStatus('error')
          console.error(error.text)
        }
      )
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-body">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info & Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="w-full h-64 md:h-80 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl animate-pulse" />
              {lottieData ? (
                <Lottie animationData={lottieData} loop={true} className="w-full h-full p-8 relative z-10 drop-shadow-2xl" />
              ) : (
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 text-accent p-12 bg-white/5 rounded-full border border-white/10"
                >
                  <Mail size={100} strokeWidth={1} />
                </motion.div>
              )}
            </div>

            <div className="space-y-6">
              <a href="mailto:selva200513@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-white">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">selva200513@gmail.com</span>
              </a>
              <a href="tel:+919025752995" className="flex items-center gap-4 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-white">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-medium">+91 902 575 2995</span>
              </a>
              <div className="flex items-center gap-4 text-gray-400 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-white">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">Chennai, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl flex flex-col gap-6 border border-white/10 relative overflow-hidden">
               {/* Form internal glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
               
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">01. Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all pl-4"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">02. Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all pl-4"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">03. Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="5"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all pl-4 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-accent disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2 text-center animate-pulse">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
