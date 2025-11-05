'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/projectsData';
import { Badge } from '@/components/ui/badge';

interface ProjectsCarouselProps {
  onViewAll: () => void;
}

export default function ProjectsCarousel({ onViewAll }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <div 
      onClick={onViewAll}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-800 group hover:border-emerald-500/50 transition-all cursor-pointer"
    >
      {/* Arrow Icon */}
      <div className="absolute top-3 right-3 z-10 p-2 bg-neutral-800/80 group-hover:bg-neutral-700 border border-neutral-700 group-hover:border-white/60 rounded-full backdrop-blur-sm transition-all group-hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-400 group-hover:text-white transition-colors"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={currentProject.image}
          alt={currentProject.title}
          fill
          className={`object-cover transition-all duration-300 ${
            isAnimating ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
      </div>

      {/* Project Info */}
      <div className="relative p-4 space-y-2">
        <div className="space-y-1">
          <h3 className={`text-lg font-bold text-white transition-all duration-300 group-hover:text-emerald-400 ${
            isAnimating ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            {currentProject.title}
          </h3>
          <p className={`text-xs text-neutral-300 line-clamp-2 transition-all duration-300 ${
            isAnimating ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            {currentProject.description}
          </p>
        </div>

        {/* Tags */}
        <div className={`flex flex-wrap gap-1.5 transition-all duration-300 ${
          isAnimating ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
        }`}>
          {currentProject.tags.slice(0, 4).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-neutral-800 text-neutral-300 text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
