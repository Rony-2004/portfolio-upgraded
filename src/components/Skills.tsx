import React from 'react';
import { FaCode } from 'react-icons/fa';
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiFirebase, SiGooglecloud, SiKubernetes, SiDocker, SiJenkins, SiGit, SiGithub, SiFigma, SiAdobephotoshop, SiLinux } from 'react-icons/si';

const Skills = () => {
  const sectionRef = React.useRef<HTMLElement>(null);

  const skills = [
    { name: "C", level: 90, color: "from-blue-400 to-cyan-400" },
    { name: "Java", level: 90, color: "from-yellow-400 to-orange-400" },
    { name: "Python", level: 92, color: "from-green-400 to-emerald-400" },
    { name: "HTML/CSS", level: 95, color: "from-pink-400 to-red-400" },
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-400" },
    { name: "TypeScript", level: 92, color: "from-blue-400 to-indigo-400" },
    { name: "React.js", level: 94, color: "from-cyan-400 to-blue-400" },
    { name: "Node.js", level: 90, color: "from-green-400 to-emerald-400" },
    { name: "Express.js", level: 88, color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", level: 90, color: "from-green-400 to-green-600" },
    { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "PostgreSQL", level: 88, color: "from-blue-400 to-purple-400" },
    { name: "Prisma", level: 85, color: "from-purple-400 to-pink-400" },
    { name: "Firebase", level: 80, color: "from-yellow-400 to-orange-400" },
    { name: "Google Cloud", level: 85, color: "from-blue-400 to-cyan-400" },
    { name: "Kubernetes", level: 80, color: "from-blue-400 to-blue-700" },
    { name: "Docker", level: 85, color: "from-cyan-400 to-blue-400" },
    { name: "Jenkins", level: 80, color: "from-red-400 to-red-700" },
    { name: "Git", level: 95, color: "from-orange-400 to-yellow-400" },
    { name: "GitHub", level: 95, color: "from-gray-800 to-black" },
    { name: "VS Code", level: 95, color: "from-blue-400 to-indigo-400" },
    { name: "Figma", level: 80, color: "from-pink-400 to-purple-400" },
    { name: "Photoshop", level: 75, color: "from-blue-400 to-blue-900" },
    { name: "Linux", level: 85, color: "from-green-500 to-green-900" },
    { name: "Unreal Engine", level: 70, color: "from-green-400 to-blue-900" }
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
  const colorMap: Record<string, string> = {
    "from-blue-400": "#60a5fa",
    "to-cyan-400": "#22d3ee",
    "from-yellow-400": "#facc15",
    "to-orange-400": "#fb923c",
    "from-green-400": "#4ade80",
    "to-emerald-400": "#34d399",
    "from-pink-400": "#f472b6",
    "to-red-400": "#f87171",
    "from-red-400": "#f87171",
    "to-red-700": "#b91c1c",
    "from-blue-700": "#1d4ed8",
    "from-blue-900": "#1e3a8a",
    "from-purple-400": "#a78bfa",
    "to-pink-400": "#f472b6",
    "from-cyan-400": "#22d3ee",
    "to-blue-400": "#60a5fa",
    "from-gray-400": "#9ca3af",
    "to-gray-600": "#4b5563",
    "from-green-600": "#16a34a",
    "from-blue-600": "#2563eb",
    "to-blue-600": "#2563eb",
    "from-blue-800": "#1e40af",
    "from-gray-800": "#1f2937",
    "to-black": "#000000",
    "from-gray-700": "#374151",
    "to-gray-900": "#111827",
    "from-indigo-400": "#818cf8",
    "from-purple-500": "#8b5cf6",
    "from-green-500": "#22c55e",
    "to-green-900": "#14532d",
  };

  const skillIcons: Record<string, React.ReactNode> = {
    'C': <FaCode className="inline mr-1" />,
    'Java': <FaCode className="inline mr-1" />,
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
    'VS Code': <FaCode className="inline mr-1" />,
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
            Technologies I Use
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My core programming languages, frameworks, and platforms
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-3 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="relative w-14 h-14 mb-2">
                <svg className="w-full h-full" viewBox="0 0 40 40">
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      {skill.color.includes('to-') ? (
                        <>
                          <stop offset="0%" stopColor={colorMap[skill.color.split(' ')[0]] || '#06b6d4'} />
                          <stop offset="100%" stopColor={colorMap[skill.color.split(' ')[1]] || '#818cf8'} />
                        </>
                      ) : (
                        <stop offset="100%" stopColor={colorMap[skill.color] || '#06b6d4'} />
                      )}
                    </linearGradient>
                  </defs>
                  <circle
                    className="text-gray-300"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="#22223b"
                    r="18"
                    cx="20"
                    cy="20"
                  />
                  <circle
                    stroke={`url(#grad-${index})`}
                    strokeWidth="4"
                    fill="none"
                    r="18"
                    cx="20"
                    cy="20"
                    strokeDasharray={113}
                    strokeDashoffset={113 - (113 * skill.level) / 100}
                    style={{ transition: 'stroke-dashoffset 1s' }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow">
                  {skill.level}%
                </span>
              </div>
              <h3 className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Tools Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Prisma", "Firebase", "Google Cloud", "Kubernetes", "Docker", "Jenkins",
              "Git", "GitHub", "VS Code", "Figma", "Photoshop", "Linux", "Unreal Engine"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                {skillIcons[tech]}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;