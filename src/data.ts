import { Project, Skill, Testimonial } from './types';

export const personalInfo = {
  name1: "Ritice",
  name: "NGOUGUEU KEUMENI",
  lastName: "Ritice Jordan",
  title: "Développeur Web Full-Stack",
  subtitle: "Créer des expériences web d'exception avec du code propre, performant et accessible.",
  bio: "Je suis un développeur web passionné par la création d'applications web modernes, fluides et centrées sur l'utilisateur. Spécialisé en React et dans l'écosystème moderne de JavaScript, j'aime transformer des idées complexes en produits numériques simples et élégants.",
  email: "riticejordan99@gmail.com",
  location: "Yaoundé, Cameroun",
  github: "https://github.com/Ritice",
  linkedin: "www.linkedin.com/in/ritice-jordan-ngougueu-keumeni-691077306",
  twitter: "https://twitter.com",
  avatar: "/images/developer_avatar_1783420701002.jpg"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 90, icon: "ReactIcon" },
  { name: "JavaScript (ES6+)", category: "frontend", level: 92, icon: "Code2" },
  { name: "Tailwind CSS", category: "frontend", level: 88, icon: "Palette" },
  { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "FileCode" },
  
  // Backend
  { name: "Node.js & Express", category: "backend", level: 80, icon: "Server" },
  { name: "APIs REST", category: "backend", level: 85, icon: "Cpu" },
  
  // Tools
  { name: "Git & GitHub", category: "tools", level: 88, icon: "GitBranch" },
  { name: "Vite", category: "tools", level: 85, icon: "Zap" },
  { name: "Netlify & Vercel", category: "tools", level: 90, icon: "Globe" }
];

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow - Gestionnaire de Tâches Agile",
    description: "Une application web collaborative de gestion de projets inspirée des tableaux Kanban. Permet de planifier des sprints, de suivre le temps de travail et de visualiser la progression globale en temps réel avec des diagrammes interactifs.",
    image: "/images/project_task_manager_1783420717860.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    demoUrl: "https://taskflow-demo.netlify.app",
    githubUrl: "https://github.com"
  },
  {
    id: "ecosphere",
    title: "EcoSphere - Calculateur d'Empreinte Carbone",
    description: "Un tableau de bord interactif permettant d'évaluer, de suivre et de réduire son empreinte carbone quotidienne. Comprend des visualisations de données précises, un système de défis écologiques et des recommandations personnalisées.",
    image: "/images/project_carbon_tracker_1783420732182.jpg",
    tags: ["React", "Recharts", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://ecosphere-carbon.netlify.app",
    githubUrl: "https://github.com"
  },
  {
    id: "aurameditation",
    title: "Aura Meditation - Application de Mindfulness",
    description: "Un espace de relaxation numérique qui propose des exercices de respiration rythmés, des ambiances sonores configurables (bruit de pluie, forêt, vagues) et un suivi de ses sessions quotidiennes de bien-être.",
    image: "/images/project_meditation_1783420745886.jpg",
    tags: ["React", "Web Audio API", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://aura-mindfulness.netlify.app",
    githubUrl: "https://github.com"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Laurent",
    role: "Product Owner",
    company: "TechPulse",
    content: "Jordan a fait preuve d'une grande rigueur technique et d'un excellent sens esthétique. Les délais ont été respectés avec brio, et le code livré est d'une propreté exemplaire.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "2",
    name: "Alexandre Martin",
    role: "Lead Developer",
    company: "DevSolutions",
    content: "Une collaboration parfaite ! Jordan maîtrise parfaitement React et Tailwind. Il est force de proposition pour l'UX et livre toujours un travail soigné et bien documenté.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  }
];
