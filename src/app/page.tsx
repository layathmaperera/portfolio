import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <div id="content" className="flex-1">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <About />
            <Separator className="my-16" />
            <Projects />
            <Separator className="my-16" />
            <Skills />
            <Separator className="my-16" />
            <Testimonials />
            <Separator className="my-16" />
            <Contact />
          </div>
        </div>
        <footer className="py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Layathma Perera. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
