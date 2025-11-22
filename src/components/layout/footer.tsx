'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Bio & Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-primary">Layathma Perera</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer passionate about crafting smart, efficient
              solutions and exploring how AI and ML shape the future of
              technology.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <a href="mailto:layathmaperera@gmail.com" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span>layathmaperera@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Column 4: Stay Updated */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest insights on AI, ML, and software
              development.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Layathma Perera. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
