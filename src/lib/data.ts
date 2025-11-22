import type { LucideIcon } from 'lucide-react';
import {
  Cloud,
  GitBranch,
  Terminal,
  Code,
  Database,
  Monitor,
  Cog,
  ShieldCheck,
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

export type SkillCategory = 'Cloud' | 'DevOps' | 'Languages' | 'Tools';

export type Skill = {
  name: string;
  category: SkillCategory;
  proficiency: number;
  Icon: LucideIcon;
};

export type BlogPost = {
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
};

export const projectsData: Project[] = [
  {
    title: 'Kubernetes Cluster Automation',
    description:
      'Automated the deployment and management of a Kubernetes cluster on AWS using Terraform and Ansible. Implemented a CI/CD pipeline with Jenkins to deploy containerized applications.',
    tags: ['Kubernetes', 'AWS', 'Terraform', 'Ansible', 'Jenkins', 'Docker'],
    image: 'project-k8s',
    links: {
      github: '#',
    },
  },
  {
    title: 'Serverless Web App',
    description:
      'Developed a serverless web application on AWS using Lambda, API Gateway, and DynamoDB. The application provides a RESTful API for a simple note-taking service.',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless', 'Node.js'],
    image: 'project-monitoring',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Infrastructure as Code for E-commerce',
    description:
      'Designed and implemented scalable and resilient infrastructure for an e-commerce platform on Azure using Terraform. Included VNets, VMs, and database services.',
    tags: ['Azure', 'Terraform', 'IaC', 'Scalability'],
    image: 'project-iac',
    links: {
      github: '#',
    },
  },
];

export const skillsData: Skill[] = [
  { name: 'AWS', category: 'Cloud', proficiency: 90, Icon: Cloud },
  { name: 'Azure', category: 'Cloud', proficiency: 75, Icon: Cloud },
  { name: 'GCP', category: 'Cloud', proficiency: 60, Icon: Cloud },
  { name: 'Docker', category: 'DevOps', proficiency: 95, Icon: Cog },
  { name: 'Kubernetes', category: 'DevOps', proficiency: 85, Icon: Cog },
  { name: 'Terraform', category: 'DevOps', proficiency: 90, Icon: GitBranch },
  { name: 'Ansible', category: 'DevOps', proficiency: 80, Icon: GitBranch },
  { name: 'Jenkins', category: 'DevOps', proficiency: 85, Icon: Terminal },
  { name: 'Python', category: 'Languages', proficiency: 90, Icon: Code },
  { name: 'Go', category: 'Languages', proficiency: 70, Icon: Code },
  { name: 'Bash', category: 'Languages', proficiency: 95, Icon: Terminal },
  { name: 'Git', category: 'Tools', proficiency: 95, Icon: GitBranch },
  { name: 'Prometheus', category: 'Tools', proficiency: 80, Icon: Monitor },
  { name: 'Grafana', category: 'Tools', proficiency: 85, Icon: Monitor },
  { name: 'PostgreSQL', category: 'Tools', proficiency: 75, Icon: Database },
];

export const blogPostsData: BlogPost[] = [
  {
    title: 'The Rise of GitOps',
    description:
      'An in-depth look at how GitOps is revolutionizing infrastructure management and application deployment. What are the benefits and how to get started.',
    image: 'blog-gitops',
    date: 'October 26, 2023',
    content:
      "GitOps is a modern paradigm for continuous deployment that leverages Git as a single source of truth for declarative infrastructure and applications. By using Git as the control plane, developers can manage infrastructure and application deployments through familiar pull requests. This approach brings several benefits, including improved developer experience, enhanced security, and greater reliability. The core idea is to have a Git repository that contains declarative descriptions of the infrastructure currently desired in the production environment and an automated process to make the production environment match the described state in the repository. When you want to deploy a new version of an application or change the infrastructure, you simply update the repository – the automated process handles everything else. This workflow is not only transparent but also provides a full audit trail of all changes.",
  },
  {
    title: 'Serverless vs. Containers',
    description:
      'A comprehensive comparison between serverless computing and containerization technologies like Docker and Kubernetes. Which one is right for your next project?',
    image: 'blog-serverless',
    date: 'September 15, 2023',
    content:
      "The debate between serverless and containers is one of the hottest topics in cloud-native development. Both offer powerful ways to build and deploy applications, but they cater to different needs and use cases. Containers, popularized by Docker and orchestrated by platforms like Kubernetes, provide a consistent and portable environment for applications. They give you fine-grained control over the runtime, dependencies, and underlying infrastructure. This makes them ideal for complex, stateful applications, or for migrating legacy systems to the cloud. On the other hand, serverless computing, with services like AWS Lambda, abstracts away the infrastructure entirely. You only write your function code and the cloud provider handles provisioning, scaling, and management. This is perfect for event-driven architectures, microservices, and applications with unpredictable traffic patterns, as you only pay for what you use. The choice isn't always one or the other; many modern applications use a hybrid approach, leveraging the strengths of both.",
  },
  {
    title: 'Getting Started with FinOps',
    description:
      'A practical guide to implementing FinOps principles in your organization to gain financial control and predictability over your cloud spending.',
    image: 'blog-finops',
    date: 'August 02, 2023',
    content:
      "As cloud adoption grows, so does the complexity of managing costs. FinOps, or Cloud Financial Operations, is a cultural practice and an operating model that brings financial accountability to the variable spend model of cloud. It’s a collaboration between finance, engineering, and business teams to manage cloud costs. The goal is to make informed, data-driven decisions on cloud spending. The FinOps lifecycle has three phases: Inform, Optimize, and Operate. In the 'Inform' phase, you gain visibility into your cloud spending through tagging, cost allocation, and reporting. The 'Optimize' phase focuses on identifying and implementing cost-saving opportunities, like rightsizing instances, using reserved instances, or shutting down unused resources. Finally, the 'Operate' phase is about continuous improvement and embedding cost-awareness into the development lifecycle. By adopting FinOps, organizations can maximize the business value of the cloud while staying within budget.",
  },
];
