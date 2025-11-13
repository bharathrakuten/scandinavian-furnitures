import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      skills: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Azure', 'Terraform', 'Helm']
    },
    {
      title: 'MLOps & DevOps',
      skills: ['MLflow', 'Kubeflow', 'Jenkins', 'GitLab CI/CD', 'ArgoCD', 'GitHub Actions']
    },
    {
      title: 'Programming & Tools',
      skills: ['Python', 'Go', 'Bash', 'Git', 'Prometheus', 'Grafana', 'ELK Stack']
    },
    {
      title: 'ML & Data',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Data Pipelines', 'Model Serving']
    }
  ]

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
