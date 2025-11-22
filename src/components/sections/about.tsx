import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section id="about" className="pt-24 lg:pt-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg text-foreground">
            Hi, I'm Layathma Perera. I'm a Software Engineer passionate about
            crafting smart, efficient solutions and learning how AI and ML shape
            the future of technology.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I have a strong foundation in building scalable and performant web
            applications, with a keen interest in applying machine learning
            models to solve real-world problems. I enjoy working on all aspects
            of the development lifecycle, from conceptualization to deployment.
          </p>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
          {headshot && (
            <div className="relative h-64 w-64 lg:h-80 lg:w-80">
              <Image
                src={headshot.imageUrl}
                alt={headshot.description}
                data-ai-hint={headshot.imageHint}
                fill
                priority
                className="rounded-full border-4 border-primary object-cover shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
