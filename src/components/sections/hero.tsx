import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Send } from 'lucide-react';
import {
  PlaceHolderImages,
} from '@/lib/placeholder-images';

export default function Hero() {
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section
      id="about"
      className="container mx-auto max-w-screen-2xl px-4 py-20 sm:py-32"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I'm Alex Doe
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I build beautiful, functional, and accessible web experiences with a focus on modern technologies and user-centric design.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button size="lg" asChild>
              <Link href="#contact">
                <Send className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
             <Button size="lg" variant="secondary" asChild>
              <Link href="#">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Link>
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
        <div className="relative flex justify-center lg:justify-end">
          {headshot && (
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]">
              <Image
                src={headshot.imageUrl}
                alt={headshot.description}
                data-ai-hint={headshot.imageHint}
                fill
                priority
                className="rounded-full border-4 border-primary object-cover shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
