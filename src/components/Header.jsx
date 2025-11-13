import './Header.css'

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="name">Bharath Krishna</h1>
          <p className="tagline">MLOps & Kubernetes Engineer</p>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
