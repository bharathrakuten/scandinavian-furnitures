import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation'],
    },
    {
      title: 'Container Orchestration',
      skills: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'Istio'],
    },
    {
      title: 'MLOps & CI/CD',
      skills: ['MLflow', 'Kubeflow', 'Jenkins', 'GitLab CI', 'GitHub Actions'],
    },
    {
      title: 'Programming',
      skills: ['Python', 'Go', 'Bash', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'ML & Data',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Apache Spark'],
    },
    {
      title: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Technical Skills</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
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
