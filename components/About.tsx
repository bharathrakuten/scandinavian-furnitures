import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                I'm a passionate MLOps and Kubernetes Engineer with extensive experience in building
                and maintaining scalable cloud infrastructure. I specialize in automating machine
                learning pipelines, orchestrating containerized applications, and implementing DevOps
                best practices to streamline development workflows.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With a strong foundation in cloud technologies and a deep understanding of ML
                deployment challenges, I help organizations bridge the gap between data science and
                production systems.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
