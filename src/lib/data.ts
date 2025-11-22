import type { LucideIcon } from 'lucide-react';
import {
  BrainCircuit,
  Database,
  Code,
  GitBranch,
  Layers3,
  Bot
} from 'lucide-react';

// A helper function to easily define a skill
const createSkill = (
  name: string,
  category: SkillCategory,
  Icon: LucideIcon
) => ({ name, category, Icon });

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github: string;
    demo?: string;
  };
};

export type SkillCategory = 'Languages' | 'Frameworks & Libraries' | 'Databases' | 'Tools';

export type Skill = {
  name: string;
  category: SkillCategory;
  Icon: LucideIcon;
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
    title: 'Intelligent Document Analyzer',
    description:
      'A web application that uses NLP to extract key information, summarize, and classify uploaded documents. Built with React, FastAPI, and spaCy.',
    tags: ['React', 'Python', 'FastAPI', 'spaCy', 'NLP'],
    image: 'project-k8s', // Placeholder
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Sales Forecasting Tool',
    description:
      'Developed a time-series forecasting model using Prophet to predict future product sales, integrated into a Streamlit dashboard for business analysts.',
    tags: ['Python', 'Prophet', 'Pandas', 'Streamlit'],
    image: 'project-monitoring', // Placeholder
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Customer Churn Prediction API',
    description:
      'Built a REST API with Flask that serves a pre-trained XGBoost model to predict customer churn in real-time, deployed via Docker.',
    tags: ['Flask', 'XGBoost', 'Python'],
    image: 'project-iac', // Placeholder
    links: {
      github: '#',
      demo: '#',
    },
  },
];

export const skillsData: Skill[] = [
  createSkill('Python', 'Languages', Code),
  createSkill('JavaScript', 'Languages', Code),
  createSkill('TypeScript', 'Languages', Code),
  createSkill('Java', 'Languages', Code),
  createSkill('Kotlin', 'Languages', Code),
  createSkill('C', 'Languages', Code),
  createSkill('C++', 'Languages', Code),
  createSkill('HTML', 'Languages', Code),
  createSkill('CSS', 'Languages', Code),
  createSkill('SQL', 'Languages', Database),
  createSkill('React', 'Frameworks & Libraries', Code),
  createSkill('Next.js', 'Frameworks & Libraries', Code),
  createSkill('Node.js', 'Frameworks & Libraries', Code),
  createSkill('Bootstrap', 'Frameworks & Libraries', Layers3),
  createSkill('MongoDB', 'Databases', Database),
  createSkill('Git', 'Tools', GitBranch),
];


export const educationData: Education[] = [
    {
        school: 'University of Colombo School of Computing',
        degree: 'M.S. in Computer Science',
        year: '2022-2024',
    },
    {
        school: 'University of Moratuwa',
        degree: 'B.S. in Computer Science & Engineering',
        year: '2018-2022',
    },
    {
        school: 'Royal College, Colombo',
        degree: 'High School Diploma',
        year: '2004-2017',
    }
];

export const certificationsData: Certification[] = [
    {
        name: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        year: '2023',
    },
    {
        name: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI (Coursera)',
        year: '2022',
    },
    {
        name: 'AWS Certified Machine Learning - Specialty',
        issuer: 'Amazon Web Services',
        year: '2023',
    }
];
