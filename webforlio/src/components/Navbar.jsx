import CV from '../assets/Siphelele Msane CV 2026.pdf'

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-links">
        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
        <button onClick={() => scrollToSection('forge')} className="nav-link">The Forge</button>
      </div>
      <a href={CV} download className="cv-button" title="Download CV">
        <span className="cv-text">Get my cv</span>
      </a>
    </nav>
  )
}
