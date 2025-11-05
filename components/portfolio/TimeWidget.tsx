'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

export default function TimeWidget() {
  const [time, setTime] = useState(new Date());
  const [prevSeconds, setPrevSeconds] = useState('00');

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date();
      const kolkataTime = new Date(newTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const newSeconds = kolkataTime.getSeconds().toString().padStart(2, '0');
      
      setPrevSeconds(time.getSeconds().toString().padStart(2, '0'));
      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (date: Date) => {
    // Convert to India/Kolkata timezone (IST - UTC+5:30)
    const kolkataTime = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const hours = kolkataTime.getHours().toString().padStart(2, '0');
    const minutes = kolkataTime.getMinutes().toString().padStart(2, '0');
    const seconds = kolkataTime.getSeconds().toString().padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);
  const day = new Date(time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  const date = new Date(time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-800 p-5 backdrop-blur-xl flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
      
      {/* Animated background circles */}
      <div className="absolute top-5 right-5 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-5 left-5 w-28 h-28 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 space-y-4">
        {/* Location Badge */}
        <div className="flex items-center justify-center">
          <Badge className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/30 px-4 py-1.5 text-sm font-mono">
            🇮🇳 India / Kolkata (IST)
          </Badge>
        </div>

        {/* Main Clock Display */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            {/* Hours */}
            <div className="flex gap-2">
              <DigitDisplay value={hours[0]} />
              <DigitDisplay value={hours[1]} />
            </div>
            
            {/* Colon separator */}
            <div className="flex flex-col gap-2 justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-500" />
            </div>
            
            {/* Minutes */}
            <div className="flex gap-2">
              <DigitDisplay value={minutes[0]} />
              <DigitDisplay value={minutes[1]} />
            </div>
            
            {/* Seconds - smaller */}
            <div className="flex flex-col gap-1 ml-2">
              <SmallDigitDisplay value={seconds[0]} />
              <SmallDigitDisplay value={seconds[1]} />
            </div>
          </div>
        </div>

        {/* Date Info */}
        <div className="flex items-center justify-center gap-4 text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neutral-600" />
            <span className="text-sm font-medium font-mono">{day}</span>
          </div>
          <div className="w-px h-4 bg-neutral-700" />
          <span className="text-sm font-mono">{date}</span>
        </div>
      </div>
    </div>
  );
}

function DigitDisplay({ value }: { value: string }) {
  return (
    <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-3 border border-neutral-700 shadow-2xl w-12 h-14 flex items-center justify-center group hover:border-emerald-500/50 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 text-3xl font-bold font-mono text-white drop-shadow-2xl group-hover:text-emerald-400 transition-colors">{value}</span>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-emerald-500/0 group-hover:bg-emerald-500/5 blur-xl transition-all" />
    </div>
  );
}

function SmallDigitDisplay({ value }: { value: string }) {
  const [prevValue, setPrevValue] = useState(value);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (value !== prevValue) {
      setKey(prev => prev + 1);
      setPrevValue(value);
    }
  }, [value, prevValue]);

  return (
    <div className="relative w-6 h-7 flip-container">
      <div 
        key={key}
        className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded p-1 border border-neutral-700 shadow-lg w-full h-full flex items-center justify-center flip-card"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded" />
        <span className="relative z-10 text-sm font-bold font-mono text-emerald-400 drop-shadow-lg">{value}</span>
      </div>
    </div>
  );
}
