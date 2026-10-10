import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Journey />
        <Contact/>

      </main>
      <Footer />
    </>
  )
}

export default App