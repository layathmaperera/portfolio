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
            Hi, I'm Alex Doe. I'm a DevOps and Cloud Engineer passionate about
            building resilient, scalable, and secure infrastructure. My focus
            is on automating everything from code integration to production
            deployment, ensuring maximum reliability and uptime.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            With extensive experience across AWS, Google Cloud, and Azure, I have
            a proven track record of reducing deployment times, optimizing cloud
            costs, and managing complex Kubernetes clusters in high-traffic
            environments. I thrive on bridging the gap between development and
            operations to foster a culture of collaboration and efficiency.
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
