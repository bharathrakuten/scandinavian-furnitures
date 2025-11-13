import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate MLOps and Kubernetes Engineer with expertise in building
            scalable cloud infrastructure and automating machine learning workflows.
            I specialize in containerization, orchestration, and CI/CD pipelines.
          </p>
          <p>
            My focus is on creating robust, production-ready ML systems that bridge
            the gap between data science and operations, ensuring seamless deployment
            and monitoring of ML models at scale.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <span className="highlight-number">5+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">50+</span>
              <span className="highlight-label">Projects Deployed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
