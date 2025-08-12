import React from 'react';
import { FaJava, FaCode } from 'react-icons/fa';

import { SiPython, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiFirebase, SiGooglecloud, SiKubernetes, SiDocker, SiJenkins, SiGit, SiGithub, SiFigma, SiAdobephotoshop, SiLinux, SiGrafana } from 'react-icons/si';

const Skills = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
 
  const skillsAndTools = [
    { name: "Java", color: "from-yellow-400 to-orange-400" },
    { name: "Python", color: "from-green-400 to-emerald-400" },
    { name: "HTML/CSS", color: "from-pink-400 to-red-400" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-400" },
    { name: "TypeScript", color: "from-blue-400 to-indigo-400" },
    { name: "React.js", color: "from-cyan-400 to-blue-400" },
    { name: "Node.js", color: "from-green-400 to-emerald-400" },
    { name: "Express.js", color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", color: "from-green-400 to-green-600" },
    { name: "PostgreSQL", color: "from-blue-400 to-purple-400" },
    { name: "Prisma", color: "from-purple-400 to-pink-400" },
    { name: "Firebase", color: "from-yellow-400 to-orange-400" },
    { name: "Google Cloud", color: "from-blue-400 to-cyan-400" },
    { name: "Kubernetes", color: "from-blue-400 to-blue-700" },
    { name: "Docker", color: "from-cyan-400 to-blue-400" },
    { name: "Jenkins", color: "from-red-400 to-red-700" },
    { name: "Git", color: "from-orange-400 to-yellow-400" },
    { name: "GitHub", color: "from-gray-800 to-black" },
    { name: "Grafana", color: "from-orange-400 to-yellow-400" },
    { name: "Figma", color: "from-pink-400 to-purple-400" },
    { name: "Photoshop", color: "from-blue-400 to-blue-900" },
    { name: "Linux", color: "from-green-500 to-green-900" },
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // setIsVisible(true); // This line was removed as per the edit hint.
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Tailwind color class to hex code mapping for SVG gradients


  const skillIcons: Record<string, React.ReactNode> = {
    'C': <FaCode className="inline mr-1" />, 
    'Java': <FaJava className="inline" />, 
    'Python': <SiPython className="inline mr-1" />, 
    'HTML': <SiHtml5 className="inline mr-1" />,
    'CSS': <SiCss3 className="inline mr-1" />,
    'JavaScript': <SiJavascript className="inline mr-1" />,
    'TypeScript': <SiTypescript className="inline mr-1" />,
    'React.js': <SiReact className="inline mr-1" />,
    'Node.js': <SiNodedotjs className="inline mr-1" />,
    'Express.js': <SiExpress className="inline mr-1" />,
    'MongoDB': <SiMongodb className="inline mr-1" />,
    'MySQL': <SiMysql className="inline mr-1" />,
    'PostgreSQL': <SiPostgresql className="inline mr-1" />,
    'Prisma': <SiPrisma className="inline mr-1" />,
    'Firebase': <SiFirebase className="inline mr-1" />,
    'Google Cloud': <SiGooglecloud className="inline mr-1" />,
    'Kubernetes': <SiKubernetes className="inline mr-1" />,
    'Docker': <SiDocker className="inline mr-1" />,
    'Jenkins': <SiJenkins className="inline mr-1" />,
    'Git': <SiGit className="inline mr-1" />,
    'GitHub': <SiGithub className="inline mr-1" />,
  'Grafana': <SiGrafana className="inline mr-1" />, 
    'Figma': <SiFigma className="inline mr-1" />,
    'Photoshop': <SiAdobephotoshop className="inline mr-1" />,
    'Linux': <SiLinux className="inline mr-1" />,
    'Unreal Engine': <FaCode className="inline mr-1" />,
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technologies & Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My core programming languages, frameworks, platforms, and tools
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto">
          {skillsAndTools.map((item, index) => (
            <div
              key={index}
              className="group flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow hover:shadow-cyan-400/30 hover:border-cyan-400 transition-all duration-300 w-16 h-16 sm:w-20 sm:h-20 cursor-pointer animate-bounce-once hover:animate-bounce aspect-square"
            >
              <span className="flex items-center justify-center text-2xl sm:text-3xl text-white drop-shadow-lg">
                {skillIcons[item.name.replace('/CSS', '')] || <FaCode />}
              </span>
            </div>
          ))}
        </div>

  {/* Tools Cloud removed, now combined above */}
      </div>
    </section>
  );
};

export default Skills;