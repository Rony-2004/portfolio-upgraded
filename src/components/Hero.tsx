import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      const floatingElements = heroRef.current.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const multiplier = (index + 1) * 0.5;
        (element as HTMLElement).style.transform = 
          `translate(${xPos * multiplier}px, ${yPos * multiplier}px) rotate(${xPos * 0.5}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-pulse"></div>
        <div className="floating-element absolute bottom-40 left-20 w-12 h-12 border-2 border-purple-400 rotate-12"></div>
        <div className="floating-element absolute bottom-20 right-10 w-24 h-24 border border-cyan-300 rounded-full"></div>
      </div>

      <div className="text-center z-10 px-6">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="relative text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Full Stack Devel
              <span className="relative inline-block align-middle w-6 h-6 md:w-9 md:h-9 mx-1">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce floating-element"></span>
              </span>
              per
            </span>
            <span className="block text-white text-3xl md:text-5xl mt-4">
              Building the Future
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creating immersive digital experiences with modern technologies, 
            responsive design, and innovative user interfaces.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-300">
          <a 
            href="/MOWAZZEM UDDIN AHMED CV.pdf" 
            download="MOWAZZEM UDDIN AHMED CV.pdf"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#contact"
            className="group px-8 py-4 border-2 border-gray-400 rounded-full font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Contact Me</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 animate-gradient-shift"></div>
    </section>
  );
};

export default Hero;