import type { LucideIcon } from 'lucide-react';
import {
  GitBranch,
  Cloud,
  Layers,
  Container,
  Terminal,
  Workflow,
  ShieldCheck,
  Server,
  Gauge,
  Code,
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

export type SkillCategory = 'Cloud' | 'Containers' | 'IaC' | 'CI/CD' | 'Tools';

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
    title: 'Kubernetes Infrastructure',
    description:
      'Designed and deployed a highly available Kubernetes cluster on AWS using EKS, managing it with Terraform and Helm charts.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Helm', 'EKS'],
    image: 'project-k8s',
    links: {
      github: '#',
    },
  },
  {
    title: 'CI/CD Pipeline Automation',
    description:
      'Built a full CI/CD pipeline for a microservices application using GitHub Actions, Docker, and Canary deployments to production.',
    tags: ['GitHub Actions', 'Docker', 'CI/CD', 'Canary'],
    image: 'project-monitoring',
    links: {
      github: '#',
    },
  },
  {
    title: 'Infrastructure as Code',
    description:
      'Managed all cloud resources for a SaaS platform using Terraform, enabling rapid environment provisioning and consistent deployments.',
    tags: ['Terraform', 'GCP', 'Infrastructure as Code', 'SaaS'],
    image: 'project-iac',
    links: {
      github: '#',
    },
  },
];

export const skillsData: Skill[] = [
  { name: 'AWS', category: 'Cloud', Icon: Cloud },
  { name: 'GCP', category: 'Cloud', Icon: Cloud },
  { name: 'Azure', category: 'Cloud', Icon: Cloud },
  { name: 'Docker', category: 'Containers', Icon: Container },
  { name: 'Kubernetes', category: 'Containers', Icon: Container },
  { name: 'Terraform', category: 'IaC', Icon: Layers },
  { name: 'Ansible', category: 'IaC', Icon: Layers },
  { name: 'GitHub Actions', category: 'CI/CD', Icon: Workflow },
  { name: 'Jenkins', category: 'CI/CD', Icon: Workflow },
  { name: 'Git', category: 'Tools', Icon: GitBranch },
  { name: 'Prometheus', category: 'Tools', Icon: Gauge },
  { name: 'Grafana', category: 'Tools', Icon: Gauge },
  { name: 'Bash', category: 'Tools', Icon: Terminal },
  { name: 'Python', category: 'Tools', Icon: Code },
  { name: 'Go', category: 'Tools', Icon: Code },
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'Jane Smith',
    company: 'Tech Solutions Inc.',
    image: 'testimonial-1',
    text: 'Alex revolutionized our deployment process. The automated CI/CD pipeline they built saved us countless hours and dramatically reduced our deployment errors. A true professional.',
  },
  {
    name: 'John Miller',
    company: 'Creative Agency LLC',
    image: 'testimonial-2',
    text: 'The cloud infrastructure Alex designed for us is rock-solid. Scalable, secure, and cost-effective. Their expertise in AWS and Terraform is top-notch.',
  },
  {
    name: 'Sarah Chen',
    company: 'Innovate Startups',
    image: 'testimonial-3',
    text: "Alex's ability to diagnose and solve complex infrastructure issues is incredible. They are a fantastic team player and a huge asset to any engineering organization.",
  },
];

// Blog data is no longer used
export const blogPostsData: any[] = [];
