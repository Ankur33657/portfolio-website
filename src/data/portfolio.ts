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
    linkedin: 'https://www.linkedin.com/in/ankur-singh-8b470b206/',
    leetcode: 'https://leetcode.com/Ankur33657',
    resumeUrl: 'https://drive.google.com/file/d/1ckGMfF87RGCzScRSOoPfRoMHsvHISY6J/view?usp=sharing',
    photoUrl: '/profile.jpeg',
  },
  about: {
    introduction:
      "Frontend Engineer with 11 months of industry experience building scalable React and Next.js applications. Specialized in performance optimization, large scale refactoring (100k+ LOC), AI integrations, and frontend architecture.",
    passion:
      'Strong foundation in Data Structures and Algorithms with 1000+ problems solved across LeetCode and GeeksforGeeks.',
    goals:
      'My career goal is to build high-impact products and contribute to the evolution of frontend architecture while maintaining a focus on performance and user experience.',
  },
  education: [
   {
  degree: 'B.E in Computer Science',
  institution: 'Chandigarh University',
  year: '2021 - 2025',
  score: 'CGPA: 8.23 / 10.0',
  coursework: ['Data Structures', 'Algorithms', 'Web Development', 'Software Engineering'],
},
{
  degree: 'Senior Secondary (12th) - PCM',
  institution: 'Oxford Public School, Ranchi, Jharkhand',
  year: '2021',
  score: '93.4%',
  coursework: ['Physics', 'Chemistry', 'Mathematics'],
},
{
  degree: 'Secondary School (10th)',
  institution: 'Lord Buddha Public School, Aurangabad, Bihar',
  year: '2019',
  score: '92%',
  coursework: ['Science', 'Mathematics', 'English', 'Social Science'],
}
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
      items: ['TanStack Query', 'Zod', 'Material UI', 'Axios','Panolense'],
    },
    {
      category: 'Backend Familiarity',
      icon: Server,
      items: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs'],
    },
    {
      category: 'Other',
      icon: Terminal,
      items: ['Docker', 'Oops Concepts', 'JWT Authentication'],
    },
    {
      category: 'Programming',
      icon: Code2,
      items: ['C++', 'Data Structures and Algorithms','Graphs' ,'Dynamic Programming', 'Tree'],
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
        'Implemented comprehensive SEO optimization and automated custom client app generation System.',
        'Integrated Panolens AR/VR experience into production platform enabling immersive property walkthroughs.',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Zod', 'Panolense'],
    },
   
  ],
  projects: [
   
   {
  title: 'Dev Insta',
  description: 'Backend-focused platform with Node.js APIs and real-time features using Socket.io.',
  technologies: ['Node.js', 'Express', 'Socket.io', 'React', 'MongoDB'],
  github: 'https://github.com/Ankur33657/devinsta',
  demo: 'https://devinsta-frontend.vercel.app',
  image: "/DevInsta.png",
},
{
title: 'Uber Backend System',
description: 'Backend ride-matching system using Dijkstra algorithm for route optimization.',
technologies: ['Node.js', 'MongoDB', 'Dijkstra Algorithm','Rate-limiting',],
github: 'https://github.com/Ankur33657',
demo: 'https://github.com/Ankur33657',
image: "/uber.webp",
    },
 {
  title: 'Review Sentiment Analyzer',
  description: 'Sentiment analysis tool that evaluates reviews and generates ratings.',
  technologies: ['React', 'JavaScript', 'Sentiment Analysis'],
  github: 'https://github.com/Ankur33657/sentiment',
  demo: 'https://sentiment-backend.vercel.app ',
  image: '/sentiment.jpg',
},
    {
      title: 'Realtime Notes App',
      description: 'CRUD-based notes application with real-time chat using Socket.io.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/Ankur33657/note-frontend',
      demo: 'https://note-frontend-zerh.vercel.app/login',
      image: "/NoteApp.png"
    },
    {
  title: 'Sudoku Solver',
  description: 'Sudoku solving application using backtracking algorithm to efficiently compute valid solutions.',
  technologies: ['React', 'Data Structures & Algorithms', 'Backtracking'],
  github: 'https://github.com/Ankur33657/Suduko-Solver',
  demo: 'https://suduko-solver-tawny.vercel.app ',
  image: "/Sudoku.png",
}
  ],
  codingProfiles: [
    {
      platform: 'LeetCode',
      solved: '500+',
      link: 'https://leetcode.com/u/Ankur33657/',
      badges: ['365 Days Badge', 'Daily Streak','100 Days Badge'],
    },
    {
      platform: 'GeeksforGeeks',
      solved: '500+',
      link: 'https://www.geeksforgeeks.org/profile/atrianum336?tab=activity',
      badges: ['Institute Rank 203', 'Coding Score-1300+'],
    },
    {
      platform: 'CodeChef',
      solved: '200+',
      link: 'https://www.codechef.com/users/ankur336',
      badges: ['Global Rank:27(April long one)','Global Rank:27(April long two)','Highest Rating 1581'],
    },
  ],
  certifications: [{ name: "HackHound2.0", issuer: "SRM University", year: 'Issued Apr 2024', link: "https://drive.google.com/file/d/13ggeE4rG1b6ESiGBKyppl-ndYtdd0qIe/view" },
    { name: "Probability and statistics", issuer: "NPTEL", year: 'Issued Apr 2023', link: "https://drive.google.com/file/d/1e5ia7zow8-AIX7FVrH-8N6e3rFYXUtt4/view" },
    { name: "Discrete Mathematics", issuer: "NPTEL", year: 'Issued Oct 2022', link: "https://drive.google.com/file/d/1n3MtUOnHcUsvGJameGwdqTpTd9yhhClo/view" },
    { name: "Full stack web development", issuer: "Udemy", year: 'Issued Feb 2024', link: "https://www.linkedin.com/in/ankur-singh-8b470b206/details/certifications/1708812441790/single-media-viewer/?profileId=ACoAADRuQ0gBI9hkKEErW-sT620goPlV5sJs3mM" },
   
  ],
  activities: [
  { title: "Winner – Chase the Code 3.0", description: "Winner of coding contest organized by CSI CU." },
  { title: "SIH Finalist", description: "Finalist for Smart India Hackathon via Teckathon 2.0." },
  { title: "HackHound 2.0", description: "Secured 5th place in hackathon organized by SRM University Delhi." },
  { title: "Lensathon & Code Genius", description: "Participated in IEEE CUSB technical competitions." },
  { title: "CodeChef Global Rank", description: "Achieved global ranks 27 and 24 in CodeChef contests." }
],
};

