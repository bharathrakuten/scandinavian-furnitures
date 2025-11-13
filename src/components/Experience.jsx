import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Senior MLOps Engineer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading MLOps initiatives, designing and implementing scalable ML infrastructure on Kubernetes, and establishing CI/CD pipelines for ML model deployment.',
      achievements: [
        'Reduced model deployment time by 70% through automation',
        'Implemented monitoring system serving 100+ models',
        'Led migration of ML workloads to Kubernetes'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Managed cloud infrastructure, implemented container orchestration, and automated deployment processes across multiple environments.',
      achievements: [
        'Migrated legacy applications to containerized architecture',
        'Reduced infrastructure costs by 40%',
        'Implemented comprehensive monitoring and alerting'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'StartupHub',
      period: '2018 - 2020',
      description: 'Developed backend services, worked with cloud platforms, and contributed to DevOps practices.',
      achievements: [
        'Built scalable microservices architecture',
        'Introduced automated testing and CI/CD',
        'Improved application performance by 60%'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="job-title">{exp.title}</h3>
              <div className="job-meta">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <p className="job-description">{exp.description}</p>
              <ul className="achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
