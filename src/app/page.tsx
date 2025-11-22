import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <div id="content" className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_1000px_at_50%_0,#3e3e3e,transparent)]"></div>
          <div className="relative z-10 container mx-auto max-w-5xl px-4 md:px-8">
            <About />
            <Separator className="my-16" />
            <Projects />
            <Separator className="my-16" />
            <Skills />
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
