import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Error boundary for catching runtime errors
    window.addEventListener('error', (e) => {
      console.error('Application error:', e.error)
      setError(e.error)
    })

    window.addEventListener('unhandledrejection', (e) => {
      console.error('Unhandled promise rejection:', e.reason)
      setError(e.reason)
    })
  }, [])

  if (error) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: 'var(--text-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h1>Something went wrong</h1>
        <p>{error.toString()}</p>
        <button onClick={() => window.location.reload()}>Reload Page</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
