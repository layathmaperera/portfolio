import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Library, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="border-t bg-muted/30 py-20 sm:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Infrastructure Showcases
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my work, highlighting architecture and automation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === project.image
            );
            return (
              <Card
                key={project.title}
                className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                {image && (
                  <div className="relative aspect-video w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 bg-muted/30 p-4">
                  <Button variant="outline" asChild>
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.links.diagram && (
                    <Button asChild>
                      <Link href={project.links.diagram} target="_blank">
                        <Library className="mr-2 h-4 w-4" />
                        Architecture
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
