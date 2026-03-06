import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Wrench,
  BookOpen,
  Briefcase,
  Award,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

export const portfolioData = {
  personal: {
    name: 'Ankur Singh',
    role: 'Frontend Engineer',
    roles: ['Frontend Engineer', 'SDE-1', 'React Developer', 'Next.js Specialist'],
    summary:
      'Frontend Engineer with 11 months of industry experience building scalable React and Next.js applications. Specialized in performance optimization, large scale refactoring (100k+ LOC), AI integrations, and frontend architecture.',
    email: 'ankursingh3362869@gmail.com',
    location: 'India',
    github: 'https://github.com/Ankur33657',
    linkedin: 'https://linkedin.com/in/ankur-singh',
    leetcode: 'https://leetcode.com/Ankur33657',
    resumeUrl: '#',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  about: {
    introduction:
      "Frontend Engineer with 11 months of industry experience building scalable React and Next.js applications. Specialized in performance optimization, large scale refactoring (100k+ LOC), AI integrations, and frontend architecture.",
    passion:
      'Strong foundation in Data Structures and Algorithms with 900+ problems solved across LeetCode and GeeksforGeeks.',
    goals:
      'My career goal is to build high-impact products and contribute to the evolution of frontend architecture while maintaining a focus on performance and user experience.',
  },
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Chandigarh University',
      year: '2021 - 2025',
      coursework: ['Data Structures', 'Algorithms', 'Web Development', 'Software Engineering'],
    },
  ],
  skills: [
    {
      category: 'Frontend',
      icon: Layout,
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Libraries / Tools',
      icon: Wrench,
      items: ['TanStack Query', 'Zod', 'Material UI', 'Axios'],
    },
    {
      category: 'Backend Familiarity',
      icon: Server,
      items: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs'],
    },
    {
      category: 'Architecture',
      icon: BookOpen,
      items: ['Frontend System Design', 'Caching Strategies', 'Performance Optimization', 'SEO Optimization'],
    },
    {
      category: 'Other',
      icon: Terminal,
      items: ['Docker', 'AWS S3 Optimization', 'JWT Authentication', 'Middleware Design'],
    },
    {
      category: 'Programming',
      icon: Code2,
      items: ['C++', 'Data Structures and Algorithms'],
    },
  ],
  experience: [
    {
      company: 'DZYLO',
      role: 'Software Developer (Intern / SDE-1)',
      duration: 'May 2025 – Present',
      responsibilities: [
        'Refactored a 100k+ lines production frontend codebase improving maintainability, performance, and alignment with industry best practices.',
        'Built scalable frontend architecture using React, Next.js, TypeScript and advanced libraries including TanStack Query and Zod validation.',
        'Implemented centralized caching mechanism to reduce redundant API calls significantly improving application performance.',
        'Designed efficient chat pagination using polling strategy enabling real-time messaging with reduced server load.',
        'Migrated authentication from token-based system to JWT with middleware improving security and session handling.',
        'Moved frontend permission logic to backend authorization layer enabling scalable feature access control.',
        'Implemented comprehensive SEO optimization and automated custom client app generation pipeline.',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Zod', 'JWT'],
    },
    {
      company: 'DZYLO (AI Design Board)',
      role: 'Frontend Developer',
      duration: '2024 - 2025',
      responsibilities: [
        'Built interactive AI powered design board enabling interior designers to generate and visualize room concepts.',
        'Integrated AI chatbot with end-to-end conversation pipeline supporting paginated chat history and optimized message retrieval.',
        'Developed advanced UI interactions using modern React architecture to support dynamic design workflows.',
      ],
      technologies: ['React', 'AI/ML Integration', 'Canvas API', 'WebSocket'],
    },
    {
      company: 'DZYLO (AR/VR Platform)',
      role: 'Frontend Developer',
      duration: '2024 - 2024',
      responsibilities: [
        'Integrated Panolens AR/VR experience into production platform enabling immersive property walkthroughs.',
        'Implemented performance optimizations including S3 swap memory optimization reducing infrastructure costs.',
        'Developed responsive mobile experience and optimized high resolution image rendering for seamless VR navigation.',
      ],
      technologies: ['Panolens.js', 'Three.js', 'AWS S3', 'React'],
    },
  ],
  projects: [
    {
      title: 'ClientApp',
      description: 'A large-scale SaaS platform where I refactored 100k+ LOC, implemented centralized caching, and improved SEO.',
      technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'Zod'],
      github: 'https://github.com/Ankur33657',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'AI Design Board',
      description: 'An interactive design board for interior designers with AI-powered room generation and paginated chatbot.',
      technologies: ['React', 'AI Integration', 'Tailwind CSS'],
      github: 'https://github.com/Ankur33657',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'AR/VR Virtual Tour',
      description: 'Immersive property walkthrough platform using Panolens and optimized S3 swap memory.',
      technologies: ['Panolens.js', 'Three.js', 'React', 'AWS S3'],
      github: 'https://github.com/Ankur33657',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop',
    },
  ],
  codingProfiles: [
    {
      platform: 'LeetCode',
      solved: '600+',
      link: 'https://leetcode.com/Ankur33657',
      badges: ['Knight', 'Daily Streak'],
    },
    {
      platform: 'GeeksforGeeks',
      solved: '300+',
      link: 'https://auth.geeksforgeeks.org/user/ankursingh3362869',
      badges: ['Institute Rank 1'],
    },
    {
      platform: 'HackerRank',
      solved: '200+',
      link: 'https://hackerrank.com/Ankur33657',
      badges: ['5 Star Problem Solving'],
    },
  ],
  certifications: [],
  activities: [],
};

