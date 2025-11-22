import type { LucideIcon } from 'lucide-react';
import {
  BrainCircuit,
  Database,
  Code,
  GitBranch,
  Tensorflow,
  PyTorch,
  Bot,
  Layers3,
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

export type SkillCategory = 'Languages' | 'Frameworks' | 'ML/AI' | 'Tools';

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
    tags: ['Flask', 'XGBoost', 'Scikit-learn', 'Docker'],
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
  createSkill('SQL', 'Languages', Database),
  createSkill('TypeScript', 'Languages', Code),
  createSkill('React', 'Frameworks', Code),
  createSkill('Next.js', 'Frameworks', Code),
  createSkill('Node.js', 'Frameworks', Code),
  createSkill('FastAPI', 'Frameworks', Code),
  createSkill('PyTorch', 'ML/AI', BrainCircuit),
  createSkill('TensorFlow', 'ML/AI', BrainCircuit),
  createSkill('Scikit-learn', 'ML/AI', BrainCircuit),
  createSkill('Hugging Face', 'ML/AI', Bot),
  createSkill('Docker', 'Tools', Layers3),
  createSkill('Git', 'Tools', GitBranch),
  createSkill('PostgreSQL', 'Tools', Database),
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
