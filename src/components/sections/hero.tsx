'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-background text-center">
      <div className="absolute inset-0 -z-10 bg-grid-white/[0.05]" />
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Software Engineer
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Hello, I'm{' '}
          <span className="text-primary">Layathma Perera</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          I'm passionate about crafting smart, efficient solutions and learning
          how AI and ML shape the future of technology.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#about">Meet Layathma</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
