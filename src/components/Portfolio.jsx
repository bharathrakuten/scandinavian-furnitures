import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function Portfolio({ theme, toggleTheme }) {
  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Bharath Krishna. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
