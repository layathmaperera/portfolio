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

export type ProjectCategory = 'Frontend' | 'Backend' | 'Fullstack'| 'Mobile';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: ProjectCategory;
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
  image?: string;
  verificationUrl?: string;
};

export const projectsData: Project[] = [
  {
    title: 'MeetMind AI - AI-Powered SaaS Platform',
    description:
      'Developed subscription-based professional development platform using Next.js, React, TypeScript, and OpenAI GPT-4. Managed complete project lifecycle from requirements to deployment. Delivered scalable architecture supporting 10,000+ concurrent users with real-time video sessions, AI-powered feedback systems, and automated billing. Implemented Agile methodology, code review protocols, and CI/CD pipeline for quality assurance.',
    tags: ['Next.js 15', 'React 19', 'TypeScript' ,'Stream SDK', 'OpenAI', 'Inngest', 'Drizzle ORM', 'Neon DB', 'Better Auth', 'tRPC', 'Polar' ,'Tailwind CSS 4'],
    image: '/images/projects/meet-ai.jpeg',
    category: 'Fullstack',
    links: {
      github: 'https://github.com/layathmaperera/meet-mind-ai',
      demo: '#',
    },
  },
  {
    title: 'Vibin Music Store & Streaming Platform',
    description:
      'A multi-role web application designed for music streaming and content management. Built using Java Servlets and JSP, this platform simulates a complete music ecosystem where Artists can publish work, Admins manage the catalog, and Users create playlists and stream music through an interactive player.',
    tags: ['Java', 'JSP,' ,'Servlets', 'MySQL' ,'JDBC' ,'HTML','CSS'],
    image: '/images/projects/vibin-music.jpg',
    category: 'Fullstack',
    links: {
      github: 'https://github.com/layathmaperera/vibin-music-store',
      demo: '#',
    },
  },
  {
    title: 'RESTful Expense Tracker API',
    description:
      'Developed a secure REST API for expense management using Django and Django REST Framework, supporting full CRUD operations. Designed a scalable database schema with custom categorization logic and implemented comprehensive APITestCase suites to ensure 90%+ code coverage and data integrity. Utilized ViewSets and Routers to standardize API endpoints and reduce boilerplate code.',
    tags: ['Python', 'Django', 'DRF', 'SQLite', 'PicoCSS','REST API'],
    image: '/images/projects/expense-tracker.jpeg',
    category: 'Backend',
    links: {
      github: 'https://github.com/layathmaperera/expense-tracker',
      demo: '#',
    },
  },
  {
    title: 'Movie Search & Trend Analyzer',
    description:
      'A dynamic, full-stack capable web application that allows users to discover movies and view real-time trending data. Built with React and Vite, it integrates with the TMDB API for extensive movie metadata and utilizes Appwrite as a backend service to track search queries and automatically generate a "Trending Movies" list based on global user activity.',
    tags: ['React', 'TypeScript', 'Vite', 'TMDB API', 'Appwrite'],
    image: '/images/projects/movie-search.jpg',
    category: 'Fullstack',
    links: {
      github: 'https://github.com/layathmaperera/movie-search-demo',
      demo: '#',
    },
  },
  {
    title: 'WellSync Health & Wellness App',
    description:
      'A native Android application designed for holistic personal wellness tracking. Built with Kotlin and the Android SDK, it features a comprehensive suite of tools including habit management, mood monitoring, daily journaling, and automated hydration reminders via background services.',
    tags: ['Kotlin', 'Android SDK', 'MVVM', 'XML Layouts', 'Background Services' ,'App Widgets'],
    image: '/images/projects/wellsync-app.jpeg',
    category: 'Mobile',
    links: {
      github: 'https://github.com/layathmaperera/wellsync-labexam',
      demo: '#',
    },
  },
  {
    title: 'Online Pharmacy Store',
    description:'A full-stack web application developed using HTML, CSS, JavaScript, PHP, and MySQL, designed to provide a seamless online shopping experience for pharmaceutical products. The platform allows users to browse and search for medicines, add items to the cart, and place orders securely. Admins can manage products, track orders, and update inventory efficiently. The project demonstrates strong skills in front-end design, dynamic interactions, server-side scripting, and database management, showcasing the ability to build functional and user-friendly e-commerce solutions.',
    tags: ['HTML', 'CSS', 'JS', 'Php', 'MySQL' ],
    image: '/images/projects/pharmacy.jpeg',
    category: 'Mobile',
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
        school: 'Sri Lanka Institute of Information Technology (SLIIT)',
        degree: 'Bsc.Hons in Software Engineering',
        year: '2023-2027',
    },
    {
        school: 'Rathnavali Balika Vidyalaya, Gampaha',
        degree: 'Advanced Level - Physical Science Stream',
        year: '2019-2022',
    },
    {
        school: 'Yasodara Devi Balika Vidyalaya, Gampaha',
        degree: 'Ordinary Level',
        year: '2009-2019',
    }
];

export const certificationsData: Certification[] = [
    {
        name: 'MySQL Implementation Certified Associate',
        issuer: 'Oracle',
        year: '2025',
        image: '/badges/oracle-mysql.png',
        verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=F1F0F7C7F1248BC115E69C99BE72181299CD2C2FBCFC594810268D2362168177',
    },
    {
        name: ' ACE Multicloud Network Associate Course',
        issuer: 'Aviatrix',
        year: '2025',
        image: '/badges/aviatrix-ace.png',
        verificationUrl: 'https://www.credly.com/badges/8b120349-d0fa-46e7-aa7c-e1e3bc010f94/public_url',
    },
    {
        name: ' Generative AI with OCI',
        issuer: 'Oracle',
        year: '2025',
        image: '/badges/oracle-genai.png',
        verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=20AEC8E15586A35724F466C4FF6C68564DCE72E0F4391DE3E4175998806F0079',
    },
    {
        name: ' Amazon Q Developer Certification',
        issuer: 'Amazon Web Services',
        year: '2025',
        image: '/badges/aws-q-developer.png',
        verificationUrl: 'https://www.credly.com/badges/bd945af6-ac27-4e7b-bff3-bc4fc73dd65b',
    }
];
