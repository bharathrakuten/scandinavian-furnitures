import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'ML Pipeline Automation',
      description:
        'Built end-to-end automated ML pipeline on Kubernetes for training, deploying, and monitoring models at scale.',
      tech: ['Python', 'Kubernetes', 'MLflow', 'Kubeflow', 'Airflow'],
      link: '#',
    },
    {
      title: 'Infrastructure as Code Framework',
      description:
        'Developed comprehensive IaC framework using Terraform for multi-cloud deployments with automated testing.',
      tech: ['Terraform', 'AWS', 'Azure', 'Python', 'GitHub Actions'],
      link: '#',
    },
    {
      title: 'Real-time Monitoring Dashboard',
      description:
        'Created custom monitoring solution with Prometheus and Grafana for tracking ML model performance in production.',
      tech: ['Prometheus', 'Grafana', 'Go', 'Kubernetes', 'Docker'],
      link: '#',
    },
    {
      title: 'Microservices Platform',
      description:
        'Architected scalable microservices platform with service mesh, API gateway, and automated deployment pipelines.',
      tech: ['Kubernetes', 'Istio', 'Docker', 'GitLab CI', 'Helm'],
      link: '#',
    },
    {
      title: 'Model Serving Infrastructure',
      description:
        'Implemented high-performance model serving platform with auto-scaling and A/B testing capabilities.',
      tech: ['TensorFlow Serving', 'Kubernetes', 'gRPC', 'Redis', 'NGINX'],
      link: '#',
    },
    {
      title: 'Cloud Cost Optimization Tool',
      description:
        'Built automated tool to analyze and optimize cloud spending across multiple providers, reducing costs by 35%.',
      tech: ['Python', 'AWS', 'GCP', 'Terraform', 'Grafana'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
