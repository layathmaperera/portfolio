import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from '@/lib/placeholder-images';

export default function Hero() {
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section
      id="about"
      className="container mx-auto max-w-7xl px-4 py-20 sm:py-32"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hi, I&apos;m Alex Doe
          </h1>
          <p className="mt-4 text-lg text-accent">
            DevOps & Cloud Undergraduate
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A passionate and driven student with a focus on cloud computing,
            automation, and building scalable infrastructure. Eager to apply my
            skills to solve real-world challenges.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button size="lg" asChild>
              <Link href="#">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-2 lg:justify-start">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {headshot && (
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
              <Image
                src={headshot.imageUrl}
                alt={headshot.description}
                data-ai-hint={headshot.imageHint}
                fill
                className="rounded-full border-4 border-accent object-cover shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
