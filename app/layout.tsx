import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bharath Krishna - MLOps & Kubernetes Engineer',
  description:
    'Personal profile for Bharath Krishna - MLOps & Kubernetes Engineer specializing in cloud infrastructure and ML automation',
  keywords: [
    'MLOps',
    'Kubernetes',
    'DevOps',
    'Cloud Infrastructure',
    'Machine Learning',
    'AWS',
    'Docker',
  ],
  authors: [{ name: 'Bharath Krishna' }],
  openGraph: {
    title: 'Bharath Krishna - MLOps & Kubernetes Engineer',
    description:
      'Personal profile showcasing MLOps and Kubernetes engineering expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
