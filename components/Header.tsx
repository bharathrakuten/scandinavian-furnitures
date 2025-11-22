'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function Header({ user }: HeaderProps) {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/signin' });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Bharath Krishna</h1>
            <p className="text-sm text-primary">MLOps & Kubernetes Engineer</p>
          </div>

          <div className="flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-3 rounded-lg border bg-card px-3 py-2">
                <Avatar className="h-8 w-8 border-2 border-primary">
                  <AvatarImage src={user.image || ''} alt={user.name || 'User'} />
                  <AvatarFallback>
                    {user.name ? getInitials(user.name) : 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium sm:inline-block">
                  {user.name || user.email}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="h-8"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="ml-2 hidden sm:inline">Logout</span>
                </Button>
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>

        <nav className="flex gap-6 pb-4 overflow-x-auto">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
