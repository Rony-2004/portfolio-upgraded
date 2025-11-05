// Updated ExperienceModal component with requested changes
'use client';

import { Button } from '@/components/ui/button';
import { X, Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const experiences = [
  {
    id: 1,
    role: 'Co-Founder',
    company: 'Fable Frame',
    location: 'Remote',
    duration: 'Oct 2025 - Present',
    type: 'Business',
    description: 'Co-founded a grow agency focused on helping businesses scale through innovative digital solutions and strategic growth initiatives.',
    responsibilities: [
      'Established business strategy and growth roadmap',
      'Built and managed client relationships',
      'Developed service offerings and pricing models',
      'Led technical implementation of client projects',
      'Created marketing strategies for client acquisition',
    ],
  },
    {
    id: 2,
    role: 'Full Stack Developer Intern',
    company: 'NeuroinkX',
    location: 'Remote',
    duration: 'Sept 2025 - Present',
    type: 'Internship',
    description: 'Full stack role at a printing-based company working on web solutions and automation.',
    responsibilities: [
      'Containerized applications using Docker',
      'Developed full-stack features for printing workflows',
      'Implemented monitoring with Grafana',
      'Automated deployment workflows with Jenkins',
    ],
  },
  {
    id: 3,
    role: 'Organizer',
    company: 'CNCF DURGAPUR',
    location: 'On-site',
    duration: 'March 2025 - Present',
    type: 'Community Role',
    description: 'Organized events and workshops to promote cloud-native technologies.',
    responsibilities: [
      'Coordinated with speakers and sponsors for events',
      'Managed event logistics and attendee engagement',
      'Created promotional materials and social media content',
    ],
  },
  {
    id: 4,
    role: 'Backend Developer Intern',
    company: 'Marg ERP',
    location: 'On-site',
    duration: 'July 2025 - Sept 2025',
    type: 'Full-time',
    description: 'Backend work focused on bill formatting and checking for the system.',
    responsibilities: [
      'Built RESTful APIs using Node.js and Express',
      'Worked on bill format structures and verification processes',
      'Optimized backend workflows for billing systems',
      'Collaborated with frontend team for seamless integration',
    ],
  },
  {
    id: 5,
    role: 'Freelancer',
    company: 'Freelance',
    location: 'Remote',
    duration: 'Feb 2025 - Present',
    type: 'Contract',
    description: 'Built custom web applications for various clients across different industries.',
    responsibilities: [
      'Developed full-stack applications using React and Node.js',
      'Implemented CI/CD pipelines for automated deployments',
      'Managed cloud infrastructure on AWS',
      'Delivered projects on time with high client satisfaction',
    ],
  },


];

export default function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="absolute inset-0 overflow-y-auto p-3 md:p-4">
        <div className="min-h-screen max-w-5xl mx-auto">
          <div className="relative bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-neutral-800 shadow-2xl animate-in slide-in-from-bottom duration-300">
            <div className="sticky top-0 z-10 bg-neutral-900/98 backdrop-blur-xl border-b border-neutral-800 rounded-t-2xl px-4 md:px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">Work Experience</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">My professional journey</p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-neutral-800 hover:text-emerald-400 transition-colors h-9 w-9"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Career Timeline Section */}
            <div className="p-4 md:p-6 border-b border-neutral-800">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white">Career Timeline</h3>
                
                {/* Timeline Bar */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm text-neutral-400 font-mono">
                    <span>Feb 2025</span>
                    <span>Nov 2025</span>
                  </div>
                  
                  {/* Timeline with Milestones */}
                  <div className="relative h-2">
                    {/* Background bar */}
                    <div className="absolute inset-0 bg-neutral-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full" />
                    </div>
                    
                    {/* Milestone Dots */}
                    <div className="absolute inset-0">
                      {/* Feb 2025 - Freelancer (0%) */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 group/milestone"
                        style={{ left: '0%' }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-neutral-900 cursor-pointer transform transition-transform group-hover/milestone:scale-150 z-10 relative" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/milestone:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            <div className="bg-neutral-800 px-3 py-2 rounded-lg border border-neutral-700 shadow-xl">
                              <p className="text-xs font-semibold text-white">Freelancer</p>
                              <p className="text-xs text-emerald-400">Freelance</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                <div className="border-4 border-transparent border-t-neutral-800" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* March 2025 - CNCF Durgapur (11%) */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 group/milestone"
                        style={{ left: '11%' }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-neutral-900 cursor-pointer transform transition-transform group-hover/milestone:scale-150 z-10 relative" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/milestone:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            <div className="bg-neutral-800 px-3 py-2 rounded-lg border border-neutral-700 shadow-xl">
                              <p className="text-xs font-semibold text-white">Organizer</p>
                              <p className="text-xs text-emerald-400">CNCF Durgapur</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                <div className="border-4 border-transparent border-t-neutral-800" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* July 2025 - Marg ERP (55%) */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 group/milestone"
                        style={{ left: '55%' }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-neutral-900 cursor-pointer transform transition-transform group-hover/milestone:scale-150 z-10 relative" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/milestone:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            <div className="bg-neutral-800 px-3 py-2 rounded-lg border border-neutral-700 shadow-xl">
                              <p className="text-xs font-semibold text-white">Backend Developer Intern</p>
                              <p className="text-xs text-emerald-400">Marg ERP</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                <div className="border-4 border-transparent border-t-neutral-800" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sept 2025 - NeuroinkX (77%) */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 group/milestone"
                        style={{ left: '77%' }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-neutral-900 cursor-pointer transform transition-transform group-hover/milestone:scale-150 z-10 relative" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/milestone:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            <div className="bg-neutral-800 px-3 py-2 rounded-lg border border-neutral-700 shadow-xl">
                              <p className="text-xs font-semibold text-white">Full Stack Developer Intern</p>
                              <p className="text-xs text-emerald-400">NeuroinkX</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                <div className="border-4 border-transparent border-t-neutral-800" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Oct 2025 - Fable Frame (88%) */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 group/milestone"
                        style={{ left: '88%' }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-neutral-900 cursor-pointer transform transition-transform group-hover/milestone:scale-150 z-10 relative" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/milestone:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            <div className="bg-neutral-800 px-3 py-2 rounded-lg border border-neutral-700 shadow-xl">
                              <p className="text-xs font-semibold text-white">Co-Founder</p>
                              <p className="text-xs text-emerald-400">Fable Frame</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                <div className="border-4 border-transparent border-t-neutral-800" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-neutral-400 text-sm font-mono">
                      Professional Journey: <span className="text-emerald-400 font-semibold">9 Months</span>
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center space-y-1 bg-neutral-800/30 rounded-lg p-3">
                    <p className="text-2xl font-bold text-orange-400">5</p>
                    <p className="text-xs text-neutral-500 font-mono">Positions</p>
                  </div>
                  <div className="text-center space-y-1 bg-neutral-800/30 rounded-lg p-3">
                    <p className="text-2xl font-bold text-emerald-400">8</p>
                    <p className="text-xs text-neutral-500 font-mono">Projects</p>
                  </div>
                  <div className="text-center space-y-1 bg-neutral-800/30 rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-400">22</p>
                    <p className="text-xs text-neutral-500 font-mono">Skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative bg-neutral-800/50 rounded-xl border border-neutral-700/50 p-5 hover:border-emerald-500/30 transition-all"
                >
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-full h-6 w-0.5 bg-neutral-700" />
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        {exp.company === 'Fable Frame' ? (
                          <a 
                            href="https://fableframe.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors inline-block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {exp.company}
                          </a>
                        ) : exp.company === 'Marg ERP' ? (
                          <a 
                            href="https://margcompusoft.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors inline-block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {exp.company}
                          </a>
                        ) : exp.company === 'NeuroinkX' ? (
                          <a 
                            href="https://neuroinkx.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors inline-block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {exp.company}
                          </a>
                        ) : exp.company === 'CNCF DURGAPUR' ? (
                          <a 
                            href="https://community.cncf.io/durgapur" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors inline-block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-emerald-400 font-medium">{exp.company}</p>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-2 py-0.5 bg-neutral-700/50 rounded text-xs">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((item, idx) => (
                            <li key={idx} className="text-sm text-neutral-400 flex items-start gap-2">
                              <span className="text-emerald-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}