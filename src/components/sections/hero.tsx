import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Library } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-20 text-center sm:py-32">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Automating Infrastructure & Architecting Scalable Cloud Solutions
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Hi, I'm Alex Doe. I bridge the gap between development and operations with CI/CD, IaC, and Cloud Native technologies.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">
              <Library className="mr-2 h-5 w-5" />
              View Architecture Diagrams
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
