'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/portfolio/Hero';
import MusicPlayer from '@/components/portfolio/MusicPlayer';
import TimeWidget from '@/components/portfolio/TimeWidget';
import ProjectsModal from '@/components/portfolio/ProjectsModal';
import ProjectsCarousel from '@/components/portfolio/ProjectsCarousel';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import ExperienceModal from '@/components/portfolio/ExperienceModal';
import CodingTime from '@/components/portfolio/CodingTime';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <main className="min-h-screen bg-black text-white p-3 md:p-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Hero />

            <ProjectsCarousel onViewAll={() => setIsProjectsModalOpen(true)} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Skills />

            <MusicPlayer />
          </div>

          {/* Mobile: TimeWidget full width, then 2 boxes in one line */}
          <div className="block lg:hidden space-y-4">
            <TimeWidget />
            <div className="grid grid-cols-2 gap-4">
              <CodingTime />
              <Experience onOpenModal={() => setIsExperienceModalOpen(true)} />
            </div>
          </div>

          {/* Desktop: All 3 boxes in one line */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4">
            <TimeWidget />
            <CodingTime />
            <Experience onOpenModal={() => setIsExperienceModalOpen(true)} />
          </div>
        </div>
      </main>
      
      <ProjectsModal 
        isOpen={isProjectsModalOpen} 
        onClose={() => setIsProjectsModalOpen(false)} 
      />
      <ExperienceModal 
        isOpen={isExperienceModalOpen} 
        onClose={() => setIsExperienceModalOpen(false)} 
      />
    </>
  );
}
