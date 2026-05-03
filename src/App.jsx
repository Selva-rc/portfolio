import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certificates from './components/sections/Certificates'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

const Home = () => (
  <div className="flex flex-col">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Certificates />
    <Resume />
    <Contact />
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
