'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Code,
  Github,
  Linkedin,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.href.substring(1))
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="hidden lg:flex lg:flex-col lg:justify-between lg:h-screen lg:py-12 lg:px-8 border-r">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            <Link href="/">Alex Doe</Link>
          </h1>
          <h2 className="text-xl font-medium text-muted-foreground mt-2">
            DevOps & Cloud Engineer
          </h2>
          <p className="text-muted-foreground mt-4">
            I build resilient, scalable, and secure cloud infrastructure.
          </p>
        </div>

        <nav>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="h-px w-8 bg-border transition-all" style={{ width: activeSection === item.href.substring(1) ? '2rem' : '1rem', backgroundColor: activeSection === item.href.substring(1) ? 'hsl(var(--foreground))' : 'hsl(var(--border))' }}/>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <Button size="sm" variant="secondary" asChild>
          <Link href="#">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Link>
        </Button>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
