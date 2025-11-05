'use client';

import Image from 'next/image';
import { projects } from '@/lib/projectsData';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="absolute inset-0 overflow-y-auto p-3 md:p-4">
        <div className="min-h-screen max-w-7xl mx-auto">
          <div className="relative bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-neutral-800 shadow-2xl animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-neutral-900/98 backdrop-blur-xl border-b border-neutral-800 rounded-t-2xl px-4 md:px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">All Projects</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">{projects.length} projects</p>
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

            {/* Projects Grid */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden bg-neutral-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      
                      {/* Action Buttons on Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white transition-all hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="View live project"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-neutral-700 hover:bg-neutral-600 rounded-full text-white transition-all hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="View GitHub repository"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4 space-y-3">
                      <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* All Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded bg-neutral-700/50 text-neutral-300 hover:bg-neutral-600/50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
