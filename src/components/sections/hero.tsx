'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Layathma_Perera_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
  return (
    <section className="relative flex h-screen items-center justify-center bg-background text-center overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
       <div className={`relative z-10 mx-auto max-w-3xl px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <p className={`mb-4 text-sm font-semibold uppercase tracking-widest text-primary transition-opacity duration-1000 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          Software Engineer
        </p>
        <h1 className={`text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl transition-opacity duration-1000 delay-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          Hello, I'm{' '}
          <span className="text-primary">Layathma Perera</span>
        </h1>
        <p className={`mt-6 text-lg text-muted-foreground transition-opacity duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          I'm passionate about crafting smart, efficient solutions and learning
          how AI and ML shape the future of technology.
        </p>
        <div className={`mt-8 flex flex-wrap justify-center gap-4 transition-opacity duration-1000 delay-900 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <Button size="lg" asChild>
            <Link href="#contact">Meet Layathma</Link>
          </Button>
          <Button size="lg" variant="outline" onClick={handleDownloadCV}>
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
