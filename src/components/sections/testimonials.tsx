import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { testimonialsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t py-20 sm:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What My Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I pride myself on building strong relationships and delivering value.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === testimonial.image
            );
            return (
              <Card
                key={testimonial.name}
                className="flex flex-col justify-between border-0 bg-muted/30 shadow-none sm:border sm:bg-card sm:shadow-sm"
              >
                <CardHeader className="relative">
                  <Quote className="absolute -top-2 -left-2 h-10 w-10 text-muted-foreground/20" />
                  <p className="z-10 text-muted-foreground">{testimonial.text}</p>
                </CardHeader>
                <CardFooter className="flex items-center gap-4">
                  {image && (
                    <div className="relative h-12 w-12 shrink-0">
                      <Image
                        src={image.imageUrl}
                        alt={testimonial.name}
                        data-ai-hint="professional portrait"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
