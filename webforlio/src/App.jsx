import Navbar from './components/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import TheForge from './components/sections/TheForge'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="forge" className="section">
          <TheForge />
        </section>
      </main>
      <Footer />
    </div>
  )
}
