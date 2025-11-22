import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start">
          <p className="text-lg font-semibold">Let's build scalable systems together.</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CloudFolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Button asChild>
            <Link href="#">
              Schedule a Call
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
