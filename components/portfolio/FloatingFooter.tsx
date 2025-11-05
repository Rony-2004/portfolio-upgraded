'use client';

import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface FloatingFooterProps {
  onProjectsClick?: () => void;
}

export default function FloatingFooter({ onProjectsClick }: FloatingFooterProps) {
  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-neutral-800 hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
          >
            <Github className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-neutral-800 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
            onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-neutral-800 hover:text-sky-400 transition-colors"
            aria-label="Twitter"
            onClick={() => window.open('https://twitter.com/yourusername', '_blank')}
          >
            <Twitter className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-neutral-800 hover:text-pink-400 transition-colors"
            aria-label="Instagram"
            onClick={() => window.open('https://instagram.com/yourusername', '_blank')}
          >
            <Instagram className="h-5 w-5" />
          </Button>
          
          <div className="w-px h-6 bg-neutral-700 mx-2" />
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-neutral-800 hover:text-emerald-400 transition-colors"
            aria-label="Contact"
            onClick={() => window.open('mailto:your@email.com', '_blank')}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
