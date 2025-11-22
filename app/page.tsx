import { auth } from '@/auth';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen">
      <Header user={session?.user} />

      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Bharath Krishna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
