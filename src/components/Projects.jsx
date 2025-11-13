import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'ML Model Deployment Platform',
      description: 'Built a comprehensive MLOps platform on Kubernetes for automated model training, versioning, and deployment with A/B testing capabilities.',
      technologies: ['Kubernetes', 'Kubeflow', 'MLflow', 'Python', 'Terraform'],
      link: '#'
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Designed and implemented infrastructure-as-code solution for multi-cloud deployment with automated scaling and disaster recovery.',
      technologies: ['Terraform', 'AWS', 'GCP', 'Ansible', 'GitOps'],
      link: '#'
    },
    {
      title: 'Monitoring & Observability Stack',
      description: 'Developed comprehensive monitoring solution for ML pipelines with custom metrics, alerting, and performance dashboards.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Kubernetes', 'Python'],
      link: '#'
    },
    {
      title: 'CI/CD Pipeline for ML Models',
      description: 'Created automated pipeline for continuous training, testing, and deployment of machine learning models with rollback capabilities.',
      technologies: ['Jenkins', 'Docker', 'GitHub Actions', 'Python', 'Kubernetes'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
