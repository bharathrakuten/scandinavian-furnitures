import { useAuth } from '../context/AuthContext'
import './Header.css'

function Header({ theme, toggleTheme }) {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="name">Bharath Krishna</h1>
          <p className="tagline">MLOps & Kubernetes Engineer</p>
        </div>
        <div className="header-right">
          {user && (
            <div className="user-info">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="user-avatar"
                />
              )}
              <span className="user-name">{user.displayName || user.email}</span>
              <button
                className="logout-button"
                onClick={handleLogout}
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          )}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
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
