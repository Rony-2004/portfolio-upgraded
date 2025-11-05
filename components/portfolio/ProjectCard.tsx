'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  tag?: string;
  buttons?: Array<{ label: string; variant: 'primary' | 'secondary' }>;
  badges?: Array<{ label: string; color: string }>;
  gradient?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  badge,
  badgeColor = 'bg-blue-500',
  tag,
  buttons,
  badges,
  gradient
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:border-neutral-700">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient || 'from-transparent to-transparent'} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {tag && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 text-xs px-2 py-0.5">
              {tag}
            </Badge>
          </div>
        )}

        {badge && (
          <div className="absolute top-3 right-3">
            <div className={`${badgeColor} text-white font-bold px-2 py-1 rounded-lg shadow-lg text-xs`}>
              {badge}
            </div>
          </div>
        )}

        {badges && (
          <div className="absolute top-3 right-3 flex gap-1.5">
            {badges.map((b, i) => (
              <div key={i} className={`${b.color} text-white font-bold px-2 py-1 rounded-lg shadow-lg text-xs`}>
                {b.label}
              </div>
            ))}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <h3 className="text-lg font-bold text-white drop-shadow-lg">
            {title}
          </h3>
          <p className="text-neutral-200 text-xs leading-relaxed drop-shadow-md line-clamp-2">
            {description}
          </p>

          {buttons && (
            <div className="flex flex-wrap gap-2 pt-1">
              {buttons.map((btn, i) => (
                <Button
                  key={i}
                  size="sm"
                  className={
                    btn.variant === 'primary'
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/20 h-7 text-xs'
                      : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border-white/20 h-7 text-xs'
                  }
                >
                  {btn.label}
                  {btn.variant === 'primary' && <ExternalLink className="ml-1.5 h-3 w-3" />}
                </Button>
              ))}
            </div>
          )}

          {!buttons && (
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/20 group/btn h-7 text-xs">
              View Project
              <ExternalLink className="ml-1.5 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
