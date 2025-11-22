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
    <section id="blog" className="pt-24 lg:pt-32">
       <div className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
          Blog
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {blogPostsData.map((post) => (
          <Card
            key={post.title}
            className="flex flex-col justify-between overflow-hidden transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-lg">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{post.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end p-4">
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
    </section>
  );
}
