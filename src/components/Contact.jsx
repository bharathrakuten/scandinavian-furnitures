import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-intro">
          I'm always interested in new opportunities and collaborations.
          Feel free to reach out if you'd like to discuss MLOps, Kubernetes,
          or any exciting projects!
        </p>
        <div className="contact-links">
          <a href="mailto:bharath@example.com" className="contact-link">
            <span className="link-icon">📧</span>
            <span>Email</span>
          </a>
          <a href="https://github.com/bharathkrishna" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="link-icon">💻</span>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/bharathkrishna" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="link-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://twitter.com/bharathkrishna" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="link-icon">🐦</span>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
