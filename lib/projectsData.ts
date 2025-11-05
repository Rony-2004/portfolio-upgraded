export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  gradient?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project KS',
    description: 'SaaS freelancing app with service listings, messaging, reviews, and client-contractor workflows. Built secure simulated payment system with CI/CD deployment.',
    image: '/assets/1.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgrSQL'],
    category: 'SaaS',
    gradient: 'from-blue-500 to-purple-600',
    liveUrl: 'https://project-ks.vercel.app/',
    githubUrl: 'https://github.com/Rony-2004/project-ks'
  },
  {
    id: '2',
    title: 'SimFluence',
    description: 'Simulate human-like agent audiences, predict content virality, and visualize influence spread. Built with Next.js, Node.js, Google Gemini API, and more.',
    image: '/assets/8.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Google Gemini API'],
    category: 'SaaS',
    gradient: 'from-purple-500 to-pink-600',
    liveUrl: 'https://simfluence.vercel.app/',
    githubUrl: 'https://github.com/Rony-2004/Sim-Fluence'
  },
  {
    id: '3',
    title: 'Edu.Empower',
    description: 'AI-powered scholarship platform with intelligent document parsing and smart ranking. Integrated GCP Vision API and Python for analysis.',
    image: '/assets/2.png',
    tags: ['React', 'TypeScript', 'Supabase', 'Prisma', 'Python', 'GCP'],
    category: 'Education',
    gradient: 'from-yellow-500 to-orange-600',
    liveUrl: 'https://edu-empower-rho.vercel.app/',
    githubUrl: 'https://github.com/Rony-2004/edu-empowerr'
  },
  {
    id: '4',
    title: 'Involve – Real-Time Booking App',
    description: 'Urban company-style app with real-time chat, worker availability, and live updates. Redis Pub/Sub for notifications, chat, and location tracking.',
    image: '/assets/3.png',
    tags: ['TypeScript', 'Next.js', 'Socket.io', 'Redis Pub/Sub', 'Blockchain'],
    category: 'SaaS',
    gradient: 'from-blue-400 to-cyan-500',
    liveUrl: '',
    githubUrl: 'https://github.com/Rony-2004/Involve'
  },
  {
    id: '5',
    title: 'DevOps Demo Project',
    description: 'Containerized full-stack app with CI/CD using Jenkins and DockerHub. Simulated microservice architecture for learning DevOps pipeline workflows.',
    image: '/assets/4.png',
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'TypeScript'],
    category: 'DevOps',
    gradient: 'from-cyan-500 to-blue-600',
    liveUrl: '',
    githubUrl: 'https://github.com/Rony-2004/k8s'
  },
  {
    id: '6',
    title: 'Medicine E-Commerce Web App',
    description: 'A platform to browse, search, and buy medicines online with authentication, cart, order management, and prescription uploads.',
    image: '/assets/5.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Cloudinary', 'JWT', 'Docker'],
    category: 'E-commerce',
    gradient: 'from-green-500 to-teal-600',
    liveUrl: '',
    githubUrl: 'https://github.com/Rony-2004/medicine-software'
  },
  {
    id: '7',
    title: 'Real-Time Chat App',
    description: 'A real-time chat application built using WebSocket for instant messaging and live communication.',
    image: '/assets/6.jpg',
    tags: ['WebSocket', 'React', 'Node.js', 'Express', 'TypeScript'],
    category: 'Communication',
    gradient: 'from-purple-500 to-indigo-600',
    liveUrl: '',
    githubUrl: ''
  },
  {
    id: '8',
    title: 'Spotify Clone',
    description: 'A music streaming platform clone using Next.js, React, TypeScript, Tailwind CSS, Supabase (auth/storage), PostgreSQL (database), Stripe (payments), and a public music API.',
    image: '/assets/7.jpg',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe', 'Music API'],
    category: 'Clone',
    gradient: 'from-green-400 to-emerald-600',
    liveUrl: '',
    githubUrl: ''
  },
  {
    id: '9',
    title: 'AI Video Editor',
    description: 'An AI video editor like Cursor',
    image: '/assets/9.jpg',
    tags: ['Next.js',  'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'OpenCV', 'FFMPEG', 'Python'],
    category: 'Clone',
    gradient: 'from-violet-500 to-purple-600',
    liveUrl: '',
    githubUrl: 'https://github.com/Rony-2004/VideoSure'
  }
];

export const categories = [
  'All',
  'SaaS',
  'Education',
  'DevOps',
  'E-commerce',
  'Clone',
  'Communication'
];
