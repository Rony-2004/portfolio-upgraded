'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Shuffle, Play, Pause, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tracks = [
  {
    title: 'Ehsaas',
    artist: 'Nucleya ft. Kavya Trehan',
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    audioUrl: '/1.mp3' 
  },
  {
    title: 'Finding Her',
    artist: 'Ritviz',
    cover: 'https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    audioUrl: '/2.mp3' 
  },
  {
    title: 'Humsafar',
    artist: 'Akhil Sachdeva & Mansheel Gujral',
    cover: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    audioUrl: '/3.mp3'
  }
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleNext = () => {
    setCurrentTrack((prev: number) => (prev + 1) % tracks.length);
    setIsPlaying(true);
    setProgress(0);
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrack(randomIndex);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackClick = (index: number) => {
    if (index === currentTrack) {
      togglePlay();
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  useEffect(() => {
    // Clean up previous audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    // Create new audio instance
    audioRef.current = new Audio(tracks[currentTrack].audioUrl);
    
    const audio = audioRef.current;
    
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    // Auto-play if isPlaying is true
    if (isPlaying) {
      audio.play().catch((err: unknown) => console.log('Playback failed:', err));
    }

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err: unknown) => console.log('Playback failed:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-800 p-5 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none" />

      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-4 w-4 text-neutral-400" />
            <h3 className="text-sm font-semibold text-white">RECENT PLAYLIST</h3>
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={togglePlay}
              className="text-neutral-400 hover:text-white hover:bg-white/5 h-7 w-7"
            >
              {isPlaying ? (
                <Pause className="h-3 w-3" />
              ) : (
                <Play className="h-3 w-3" />
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleNext}
              className="text-neutral-400 hover:text-white hover:bg-white/5 h-7 w-7"
            >
              <SkipForward className="h-3 w-3" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleShuffle}
              className="text-neutral-400 hover:text-white hover:bg-white/5 h-7 w-7"
            >
              <Shuffle className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          {tracks.map((track, index) => (
            <div
              key={index}
              onClick={() => handleTrackClick(index)}
              className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                index === currentTrack
                  ? 'bg-white/10 border border-white/20'
                  : 'hover:bg-white/5 border border-transparent'
              }`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-10 h-10 rounded-md object-cover"
                />
                {index === currentTrack && isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md">
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-3 bg-emerald-500 animate-pulse" />
                      <div className="w-0.5 h-3 bg-emerald-500 animate-pulse delay-150" />
                      <div className="w-0.5 h-3 bg-emerald-500 animate-pulse delay-300" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{track.title}</p>
                <p className="text-xs text-neutral-400 truncate">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-0.5 bg-neutral-800 rounded-full overflow-hidden mt-2">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
}
