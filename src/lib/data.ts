import type { LucideIcon } from 'lucide-react';
import {
  Cloud,
  Container,
  Layers,
  Workflow,
  Gauge,
  Database,
} from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github: string;
    diagram?: string;
  };
};

export type SkillCategory = 'Cloud' | 'Containerization' | 'IaC' | 'CI/CD' | 'Monitoring';

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

export type Education = {
  school: string;
  degree: string;
  year: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const projectsData: Project[] = [
  {
    title: 'Multi-Region Serverless API',
    description:
      'Designed and deployed a highly available, multi-region serverless API on AWS using API Gateway, Lambda, and DynamoDB. Managed entirely through Terraform.',
    tags: ['AWS', 'Serverless', 'Terraform', 'API Gateway', 'DynamoDB'],
    image: 'project-k8s',
    links: {
      github: '#',
      diagram: '#',
    },
  },
  {
    title: 'Automated K8s Cluster Provisioning',
    description:
      'Built a reusable Terraform module to provision production-ready EKS clusters, complete with automated node scaling, monitoring via Prometheus, and logging.',
    tags: ['Kubernetes', 'Terraform', 'AWS EKS', 'Prometheus'],
    image: 'project-monitoring',
    links: {
      github: '#',
      diagram: '#',
    },
  },
  {
    title: 'End-to-End CI/CD Pipeline for Microservices',
    description:
      'Architected a complete CI/CD pipeline using GitHub Actions that automates building, testing, and deploying a suite of microservices to Kubernetes with zero downtime.',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'Kubernetes', 'Microservices'],
    image: 'project-iac',
    links: {
      github: '#',
      diagram: '#',
    },
  },
];

export const skillsData: Skill[] = [
  { name: 'AWS', category: 'Cloud', Icon: Cloud },
  { name: 'Google Cloud', category: 'Cloud', Icon: Cloud },
  { name: 'Azure', category: 'Cloud', Icon: Cloud },
  { name: 'Docker', category: 'Containerization', Icon: Container },
  { name: 'Kubernetes', category: 'Containerization', Icon: Container },
  { name: 'Helm', category: 'Containerization', Icon: Container },
  { name: 'Terraform', category: 'IaC', Icon: Layers },
  { name: 'Ansible', category: 'IaC', Icon: Layers },
  { name: 'CloudFormation', category: 'IaC', Icon: Layers },
  { name: 'Jenkins', category: 'CI/CD', Icon: Workflow },
  { name: 'GitHub Actions', category: 'CI/CD', Icon: Workflow },
  { name: 'GitLab CI', category: 'CI/CD', Icon: Workflow },
  { name: 'Prometheus', category: 'Monitoring', Icon: Gauge },
  { name: 'Grafana', category: 'Monitoring', Icon: Gauge },
  { name: 'ELK Stack', category: 'Monitoring', Icon: Database },
];

export const educationData: Education[] = [
    {
        school: 'University of Technology',
        degree: 'M.S. in Computer Science',
        year: '2020-2022',
    },
    {
        school: 'State University',
        degree: 'B.S. in Information Technology',
        year: '2016-2020',
    }
];

export const certificationsData: Certification[] = [
    {
        name: 'AWS Certified DevOps Engineer - Professional',
        issuer: 'Amazon Web Services',
        year: '2023',
    },
    {
        name: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        year: '2022',
    },
    {
        name: 'Terraform Associate',
        issuer: 'HashiCorp',
        year: '2021',
    }
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
