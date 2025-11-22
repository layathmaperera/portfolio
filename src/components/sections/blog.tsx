import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPostsData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="border-t bg-muted/30 py-20 sm:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering Blog & Insights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts on cloud architecture, automation, and DevOps best practices.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPostsData.map((post) => (
            <Card
              key={post.title}
              className="flex flex-col justify-between overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>
                  {post.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end bg-muted/30 p-4">
                <Button variant="ghost" asChild>
                  <Link href={post.link} target="_blank">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
