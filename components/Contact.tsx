import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      name: 'Email',
      icon: Mail,
      value: 'bharath@example.com',
      link: 'mailto:bharath@example.com',
    },
    {
      name: 'GitHub',
      icon: Github,
      value: 'github.com/bharathkrishna',
      link: 'https://github.com/bharathkrishna',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      value: 'linkedin.com/in/bharathkrishna',
      link: 'https://linkedin.com/in/bharathkrishna',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      value: '@bharathkrishna',
      link: 'https://twitter.com/bharathkrishna',
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Get In Touch</h2>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-8 text-center text-lg text-muted-foreground">
                I'm always open to discussing new projects, opportunities, or collaborations.
                Feel free to reach out through any of the channels below.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {contacts.map((contact) => (
                  <Button
                    key={contact.name}
                    variant="outline"
                    className="h-auto justify-start p-4"
                    asChild
                  >
                    <a href={contact.link} target="_blank" rel="noopener noreferrer">
                      <contact.icon className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="text-sm font-semibold">{contact.name}</div>
                        <div className="text-xs text-muted-foreground">{contact.value}</div>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
