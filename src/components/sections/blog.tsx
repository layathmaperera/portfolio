import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { blogPostsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import BlogSummary from '@/components/blog-summary';

export default function Blog() {
  return (
    <section id="blog" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From My Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sharing my knowledge and thoughts on DevOps, cloud, and tech.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPostsData.map((post) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === post.image
            );
            return (
              <Card
                key={post.title}
                className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/10"
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
                  <CardTitle>{post.title}</CardTitle>
                  <p className="pt-1 text-sm text-muted-foreground">
                    {post.date}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <BlogSummary postContent={post.content} />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
