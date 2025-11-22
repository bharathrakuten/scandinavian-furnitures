import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Senior MLOps Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description:
        'Lead MLOps initiatives, designing and implementing scalable ML infrastructure on Kubernetes. Built automated CI/CD pipelines for model deployment and monitoring.',
      achievements: [
        'Reduced model deployment time by 70%',
        'Implemented automated model retraining pipeline',
        'Scaled ML infrastructure to handle 10x traffic',
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Solutions Inc',
      period: '2020 - 2022',
      description:
        'Managed cloud infrastructure and container orchestration. Implemented monitoring and logging solutions for production systems.',
      achievements: [
        'Migrated legacy applications to Kubernetes',
        'Achieved 99.9% uptime for critical services',
        'Reduced infrastructure costs by 40%',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'StartupXYZ',
      period: '2018 - 2020',
      description:
        'Developed backend services and APIs. Worked on microservices architecture and containerization.',
      achievements: [
        'Built RESTful APIs serving 1M+ requests/day',
        'Implemented automated testing frameworks',
        'Optimized database performance by 50%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Work Experience</h2>

        <div className="mx-auto max-w-4xl space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative">
              <div className="absolute left-0 top-8 hidden h-full w-px bg-primary md:block" />
              <CardHeader>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
