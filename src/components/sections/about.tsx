import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '../ui/card';

export default function About() {
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section id="about" className="pt-24 lg:pt-32">
      <div className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-lg text-foreground">
          I am a DevOps and Cloud Engineer passionate about building resilient,
          scalable, and secure infrastructure. My focus is on automating
          everything from code integration to production deployment, ensuring
          maximum reliability and uptime.
        </p>
        <p className="text-lg text-muted-foreground">
          With extensive experience across AWS and Azure, I have a proven track
          record of reducing deployment times, optimizing cloud costs, and
          managing complex Kubernetes clusters in high-traffic environments. I
          thrive on bridging the gap between development and operations to foster
          a culture of collaboration and efficiency.
        </p>
      </div>
    </section>
  );
}
