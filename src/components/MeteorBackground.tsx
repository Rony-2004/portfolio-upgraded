import React, { useEffect, useRef } from 'react';

const NUM_METEORS = 20;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const MeteorBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meteors: HTMLDivElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < NUM_METEORS; i++) {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';
      meteor.style.left = `${random(0, 100)}vw`;
      meteor.style.top = `${random(-10, 90)}vh`;
      meteor.style.animationDelay = `${random(0, 5)}s`;
      meteor.style.animationDuration = `${random(1.5, 3.5)}s`;
      container.appendChild(meteor);
      meteors.push(meteor);
    }
    return () => {
      meteors.forEach(m => m.remove());
    };
  }, []);

  return <div ref={containerRef} className="meteor-bg" style={{position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none'}} />;
};

export default MeteorBackground;
