'use client';

import { useState, useEffect } from 'react';

const roles = ['Full Stack', 'DevOps', 'Cloud', 'Frontend', 'Backend'];

interface ExperienceProps {
  onOpenModal?: () => void;
}

export default function Experience({ onOpenModal }: ExperienceProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <div 
      onClick={onOpenModal}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-800 hover:border-emerald-500/50 p-4 md:p-5 flex items-center justify-center cursor-pointer transition-all group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
      
      {/* Arrow Icon */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4">
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
          className="text-neutral-400 group-hover:text-emerald-400 transition-colors md:w-5 md:h-5"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 md:space-y-6 w-full">
        <h2 className="text-lg md:text-2xl font-bold text-white tracking-wide">
          Experience
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2.5">
          <span className="text-xs md:text-xl text-neutral-300">I know</span>
          <span className="text-sm md:text-2xl font-bold text-emerald-400 font-mono tracking-wider">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}
