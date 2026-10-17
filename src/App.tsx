import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  // Cada seção tem uma cor fixa, definida pelo data-theme no global.css:
  // dark (preto), light (off-white) e brand (azul sólido)
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <div data-theme="dark"><Hero /></div>
        <div data-theme="light"><About /></div>
        <div data-theme="dark"><Projects /></div>
        <div data-theme="light"><Skills /></div>
        <div data-theme="dark"><Services /></div>
        <div data-theme="brand"><Contact /></div>
      </main>
      <div data-theme="dark"><Footer /></div>
    </LanguageProvider>
  )
}