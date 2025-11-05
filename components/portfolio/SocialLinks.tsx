'use client';

import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-800 p-5 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
          <h3 className="text-sm font-semibold text-white">CONNECT WITH ME</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 min-w-[120px] bg-neutral-800/50 hover:bg-neutral-700 hover:text-emerald-400 transition-all duration-300 border border-neutral-700 hover:border-emerald-500/50"
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex-1 min-w-[120px] bg-neutral-800/50 hover:bg-neutral-700 hover:text-blue-400 transition-all duration-300 border border-neutral-700 hover:border-blue-500/50"
            onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
          >
            <Linkedin className="h-4 w-4 mr-2" />
            LinkedIn
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex-1 min-w-[120px] bg-neutral-800/50 hover:bg-neutral-700 hover:text-sky-400 transition-all duration-300 border border-neutral-700 hover:border-sky-500/50"
            onClick={() => window.open('https://twitter.com/yourusername', '_blank')}
          >
            <Twitter className="h-4 w-4 mr-2" />
            Twitter
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex-1 min-w-[120px] bg-neutral-800/50 hover:bg-neutral-700 hover:text-pink-400 transition-all duration-300 border border-neutral-700 hover:border-pink-500/50"
            onClick={() => window.open('https://instagram.com/yourusername', '_blank')}
          >
            <Instagram className="h-4 w-4 mr-2" />
            Instagram
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex-1 min-w-[120px] bg-neutral-800/50 hover:bg-neutral-700 hover:text-emerald-400 transition-all duration-300 border border-neutral-700 hover:border-emerald-500/50"
            onClick={() => window.open('mailto:your@email.com', '_blank')}
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
}
