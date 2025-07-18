import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.png';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeMobileOverlay, setActiveMobileOverlay] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle mobile detection safely for SSR
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    // 1st project
    {
      title: "Project KS",
      description: "SaaS freelancing app with service listings, messaging, reviews, and client-contractor workflows. Built secure simulated payment system with CI/CD deployment.",
      image: img1,
      tech: ["React", "TypeScript", "Tailwind CSS", "Prisma", "PostgrSQL"],
      liveUrl: "https://project-ks.vercel.app/",
      githubUrl: "https://github.com/Rony-2004/project-ks"
    },
    // SimFluence (now 2nd)
    {
      title: "SimFluence",
      description: "Simulate human-like agent audiences, predict content virality, and visualize influence spread. Built with Next.js, Node.js, Google Gemini API, and more.",
      image: img8,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Google Gemini API", "Vercel", "Railway", "Heroku", "GitHub Actions"],
      liveUrl: "https://simfluence.vercel.app/",
      githubUrl: "https://github.com/Rony-2004/Sim-Fluence"
    },
    // rest of the projects in their previous order, except SimFluence and Spotify Clone
    {
      title: "Edu.Empower",
      description: "AI-powered scholarship platform with intelligent document parsing and smart ranking. Integrated GCP Vision API and Python for analysis.",
      image: img2,
      tech: ["React", "TypeScript", "Supabase", "Prisma", "Python", "GCP"],
      liveUrl: "https://edu-empower-rho.vercel.app/",
      githubUrl: "https://github.com/Rony-2004/edu-empowerr"
    },
    {
      title: "Involve – Real-Time Booking App",
      description: "Urban company-style app with real-time chat, worker availability, and live updates. Redis Pub/Sub for notifications, chat, and location tracking.",
      image: img3,
      tech: ["TypeScript", "Next.js", "Socket.io", "Redis Pub/Sub", "Blockchain"],
      liveUrl: "",
      githubUrl: "https://github.com/Rony-2004/Involve"
    },
    {
      title: "DevOps Demo Project",
      description: "Containerized full-stack app with CI/CD using Jenkins and DockerHub. Simulated microservice architecture for learning DevOps pipeline workflows.",
      image: img4,
      tech: ["Docker", "Kubernetes", "Jenkins", "TypeScript"],
      liveUrl: "",
      githubUrl: "https://github.com/Rony-2004/k8s"
    },
    {
      title: "Medicine E-Commerce Web App",
      description: "A platform to browse, search, and buy medicines online with authentication, cart, order management, and prescription uploads.",
      image: img5,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Headless UI", "Radix UI", "Lucide React", "Framer Motion", "React Context API", "Node.js", "Express", "PostgreSQL", "Kysely ORM", "Cloudinary", "JWT", "Docker"],
      liveUrl: "",
      githubUrl: "https://github.com/Rony-2004/medicine-software"
    },
    {
      title: "Real-Time Chat App",
      description: "A real-time chat application built using WebSocket for instant messaging and live communication.",
      image: img6,
      tech: ["WebSocket", "React", "Node.js", "Express", "TypeScript"],
      liveUrl: "",
      githubUrl: "https://github.com/Rony-2004/Lunatic-AI/tree/main/luna"
    },
    // Spotify Clone (now last)
    {
      title: "Spotify Clone",
      description: "A music streaming platform clone using Next.js, React, TypeScript, Tailwind CSS, Supabase (auth/storage), PostgreSQL (database), Stripe (payments), and a public music API.",
      image: img7,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe", "Music API"],
      liveUrl: "",
      githubUrl: ""
    }
  ];

  // Show only first 2 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/30">
      <div className="container mx-auto" onClick={() => setActiveMobileOverlay(null)}>
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work in Web3, DeFi, and 3D development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/20 active:scale-95"
              onClick={(e) => {
                if (isMobile) {
                  e.stopPropagation();
                  setActiveMobileOverlay(activeMobileOverlay === index ? null : index);
                }
              }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Desktop hover overlay */}
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hidden md:flex">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-cyan-500 rounded-full hover:bg-cyan-400 transition-colors duration-300 focus:ring-4 focus:ring-cyan-400 active:ring-4 active:ring-cyan-400 active:scale-110"
                    target="_blank" rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="transition-all duration-200 group-active:scale-125 group-active:text-white" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 focus:ring-4 focus:ring-purple-400 active:ring-4 active:ring-purple-400 active:scale-110"
                    target="_blank" rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="transition-all duration-200 group-active:scale-125 group-active:text-white" />
                  </a>
                )}
              </div>

              {/* Mobile tap overlay */}
              {activeMobileOverlay === index && (
                <div className="absolute top-4 right-4 z-30 md:hidden animate-fade-in" onClick={(e) => e.stopPropagation()}>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-cyan-500 focus:ring-4 focus:ring-cyan-400/50 active:scale-110 shadow-lg transition-all duration-300 transform hover:scale-105"
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => setActiveMobileOverlay(null)}
                      >
                        <ExternalLink size={18} className="drop-shadow-lg" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white font-semibold hover:from-gray-600 hover:to-gray-700 focus:ring-4 focus:ring-purple-400/50 active:scale-110 shadow-lg transition-all duration-300 transform hover:scale-105"
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => setActiveMobileOverlay(null)}
                      >
                        <Github size={18} className="drop-shadow-lg" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > 2 && (
          <div className="text-center mt-12">
            <button
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                setShowAll(true);
              }}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;