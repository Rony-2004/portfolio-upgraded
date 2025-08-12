import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const welcomes = [
  'Welcome', // English
  'स्वागत है', // Hindi
  'স্বাগতম', // Bengali
  'Hi', // Malayalam
  'வரவேற்கிறேன்', // Tamil
  'స్వాగతం', // Telugu
  'ಸ್ವಾಗತ', // Kannada
  'સ્વાગત છે', // Gujarati
  'സ്വಾಗതം', // Malayalam alt
  'ਸੁਆਗਤ ਹੈ', // Punjabi
  'സ്വಾಗതം', // Malayalam alt
];

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [showFinalWelcome, setShowFinalWelcome] = useState(false);
  const [animate, setAnimate] = useState(false);


  useEffect(() => {
    setIndex(0);
    setShowFinalWelcome(false);
    setAnimate(true);
  }, []);

  useEffect(() => {
    setAnimate(true);
    if (showFinalWelcome) {
      const timer = setTimeout(() => onFinish(), 150);
      return () => clearTimeout(timer);
    }
    if (index === 0) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setTimeout(() => setIndex(index + 1), 100);
      }, 0);
      return () => clearTimeout(timer);
    } else if (index < welcomes.length) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setTimeout(() => setIndex(index + 1), 150);
      }, 0);
      if (index === welcomes.length - 1) {
        setTimeout(() => setShowFinalWelcome(true), 150);
      }
      return () => clearTimeout(timer);
    }
  }, [index, showFinalWelcome, onFinish]);

  return (
    <div className="loading-screen">
      <h1 className={animate ? 'flip-text' : ''}>
        {showFinalWelcome ? 'Welcome' : welcomes[index]}
      </h1>
    </div>
  );
}
