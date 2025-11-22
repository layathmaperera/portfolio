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
import { Play, Github, ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="pt-24 lg:pt-32">
       <div className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project) => {
          const image = PlaceHolderImages.find(
            (img) => img.id === project.image
          );
          return (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
            >
               <div className="relative w-full aspect-video">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <CardTitle className="text-lg font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-2">
                   <Button variant="outline" size="sm" asChild>
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.links.demo && (
                     <Button size="sm" asChild>
                      <Link href={project.links.demo} target="_blank">
                        <Play className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
       <div className="mt-12 flex justify-center">
        <Button asChild variant="outline">
          <Link href="#" target="_blank">
            Explore All Projects on GitHub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
