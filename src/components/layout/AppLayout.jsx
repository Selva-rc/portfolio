import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Preloader from '../ui/Preloader'
import ScrollProgress from '../ui/ScrollProgress'
import Navbar from './Navbar'
import Footer from './Footer'
import DigitalTwinBot from '../ui/DigitalTwinBot'

const AppLayout = () => {
  // Smooth scrolling setup with Lenis
  useEffect(() => {
    // Disable native browser scroll restoration to prevent landing on lower sections on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Force absolute snap to top on fresh mount
    window.scrollTo(0, 0)
    lenis.scrollTo(0, { immediate: true })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <DigitalTwinBot />
      
      <div className="min-h-screen flex flex-col w-full bg-background bg-grid-pattern relative text-foreground font-body">
        <Navbar />
        <main className="flex-1 w-full relative">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default AppLayout
