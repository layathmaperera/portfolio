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
    <section id="testimonials" className="pt-24 lg:pt-32">
       <div className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
          Testimonials
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonialsData.map((testimonial) => {
          const image = PlaceHolderImages.find(
            (img) => img.id === testimonial.image
          );
          return (
            <Card
              key={testimonial.name}
              className="flex flex-col justify-between border bg-muted/30 p-6"
            >
              <CardHeader className="relative p-0">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-muted-foreground/20" />
                <p className="z-10 text-muted-foreground">
                  {testimonial.text}
                </p>
              </CardHeader>
              <CardFooter className="flex items-center gap-4 p-0 pt-6">
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
    </section>
  );
}
