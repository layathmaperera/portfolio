import Image from 'next/image';
import {
  PlaceHolderImages,
} from '@/lib/placeholder-images';

export default function About() {
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section
      id="about"
      className="border-t py-20 sm:py-32"
    >
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative flex justify-center lg:justify-start">
          {headshot && (
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]">
              <Image
                src={headshot.imageUrl}
                alt={headshot.description}
                data-ai-hint={headshot.imageHint}
                fill
                priority
                className="rounded-lg border-2 border-primary object-cover shadow-2xl"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I am a DevOps and Cloud Engineer passionate about building resilient, scalable, and secure infrastructure. My focus is on automating everything from code integration to production deployment, ensuring maximum reliability and uptime.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            With extensive experience across AWS and Azure, I have a proven track record of reducing deployment times, optimizing cloud costs, and managing complex Kubernetes clusters in high-traffic environments. I thrive on bridging the gap between development and operations to foster a culture of collaboration and efficiency.
          </p>
        </div>

      </div>
    </section>
  );
}
