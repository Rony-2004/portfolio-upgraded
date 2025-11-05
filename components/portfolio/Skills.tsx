'use client';

const skills = [
  { name: 'Java', icon: '☕' },
 
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '⚡' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Prisma', icon: '◭' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Jenkins', icon: '👷' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Grafana', icon: '📊' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Canva', icon: '🖼️' },
  { name: 'Linux', icon: '🐧' },
];

export default function Skills() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-800 p-4 md:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 space-y-3 md:space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white">Skills</h2>
        </div>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-neutral-800/60 hover:bg-neutral-700/60 border border-neutral-700/50 rounded-lg transition-all duration-300 cursor-default"
            >
              <span className="text-xs md:text-sm font-medium text-neutral-400">
                {skill.icon}
              </span>
              <span className="text-[10px] md:text-xs font-medium text-neutral-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
