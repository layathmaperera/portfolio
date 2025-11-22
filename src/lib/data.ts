import type { LucideIcon } from 'lucide-react';
import {
  GitBranch,
  Code,
  Database,
  Monitor,
  Cog,
  ShieldCheck,
  Server,
  PenTool,
  Figma,
  Briefcase,
  Quote,
} from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github: string;
    live?: string;
  };
};

export type SkillCategory = 'Languages' | 'Frontend' | 'Backend' | 'Tools';

export type Skill = {
  name: string;
  category: SkillCategory;
  Icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  company: string;
  image: string;
  text: string;
};

export const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with a custom CMS, product management, and secure payments via Stripe.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'project-k8s',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Real-time Chat App',
    description:
      'A responsive, real-time chat application using WebSockets, allowing for instant messaging and user presence.',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
    image: 'project-monitoring',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Portfolio Website V2',
    description:
      'My personal portfolio (the one you are on right now!) built with Next.js and Tailwind CSS, deployed on Vercel.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    image: 'project-iac',
    links: {
      github: '#',
    },
  },
];

export const skillsData: Skill[] = [
  { name: 'TypeScript', category: 'Languages', Icon: Code },
  { name: 'JavaScript', category: 'Languages', Icon: Code },
  { name: 'Python', category: 'Languages', Icon: Code },
  { name: 'React', category: 'Frontend', Icon: Monitor },
  { name: 'Next.js', category: 'Frontend', Icon: Monitor },
  { name: 'Tailwind CSS', category: 'Frontend', Icon: PenTool },
  { name: 'Framer Motion', category: 'Frontend', Icon: PenTool },
  { name: 'Node.js', category: 'Backend', Icon: Server },
  { name: 'Express', category: 'Backend', Icon: Server },
  { name: 'PostgreSQL', category: 'Backend', Icon: Database },
  { name: 'MongoDB', category: 'Backend', Icon: Database },
  { name: 'Git', category: 'Tools', Icon: GitBranch },
  { name: 'Docker', category: 'Tools', Icon: Cog },
  { name: 'Figma', category: 'Tools', Icon: Figma },
  { name: 'Vercel', category: 'Tools', Icon: Briefcase },
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'Jane Smith',
    company: 'Tech Solutions Inc.',
    image: 'testimonial-1',
    text: "Alex is a phenomenal developer. Their attention to detail and ability to tackle complex problems is unmatched. They delivered a high-quality product on time and was a pleasure to work with."
  },
  {
    name: 'John Miller',
    company: 'Creative Agency LLC',
    image: 'testimonial-2',
    text: "Working with Alex was a game-changer for our project. Their expertise in UI/UX and frontend development transformed our vision into a beautiful, intuitive, and highly performant web application."
  },
  {
    name: 'Sarah Chen',
    company: 'Innovate Startups',
    image: 'testimonial-3',
    text: "I was impressed by Alex's professionalism and technical skills. They are not only a talented developer but also an excellent communicator, making the entire process smooth and transparent."
  }
];

// Blog data is no longer used
export const blogPostsData: any[] = [];
