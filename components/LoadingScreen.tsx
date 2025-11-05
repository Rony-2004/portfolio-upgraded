'use client';

import { useState, useEffect } from 'react';

const welcomeMessages = [
  { lang: 'Bengali', text: 'স্বাগতম' },
  { lang: 'Hindi', text: 'नमस्ते' },
  { lang: 'Spanish', text: 'Bienvenido' },
  { lang: 'French', text: 'Bienvenue' },
  { lang: 'German', text: 'Willkommen' },
  { lang: 'Japanese', text: 'ようこそ' },
  { lang: 'Chinese', text: '欢迎' },
  { lang: 'Arabic', text: 'أهلا بك' },
  { lang: 'Russian', text: 'Добро пожаловать' },
  { lang: 'English', text: 'Welcome' }
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentIndex < welcomeMessages.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 250);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 600);
      }, 300);
    }
  }, [currentIndex, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-600 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center perspective-1000">
        {/* Animated Welcome Text with Book Flip */}
        <div className="relative h-32 flex items-center justify-center" style={{ perspective: '1000px' } as React.CSSProperties}>
          {welcomeMessages.map((message, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-300 origin-center ${
                index === currentIndex - 1
                  ? 'opacity-100'
                  : index < currentIndex - 1
                  ? 'opacity-0'
                  : 'opacity-0'
              }`}
              style={{
                transform: index === currentIndex - 1 
                  ? 'rotateX(0deg)' 
                  : index < currentIndex - 1
                  ? 'rotateX(-90deg)'
                  : 'rotateX(90deg)',
                transformStyle: 'preserve-3d'
              } as React.CSSProperties}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
                {message.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
