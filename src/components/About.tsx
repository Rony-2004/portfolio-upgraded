import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import cPhoto from '../assets/c.jpg';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Expertise in React, Node.js, and blockchain technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "DevOps & Cloud",
      description: "Containerized deployments, CI/CD, Kubernetes, Docker, Jenkins"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI/ML & Data Analysis",
      description: "AI-powered solutions, GCP Vision API, Python for analytics"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* Profile Photo and Introduction */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Photo Section */}
          <div className="relative group">
            {/* Animated border rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-sm"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-spin-reverse opacity-50 blur-sm"></div>
            
            {/* Photo container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 transform group-hover:scale-105 transition-all duration-500">
              {/* Placeholder for your photo - replace src with your actual photo */}
              <img
                src={cPhoto}
                alt="Profile"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
              
              {/* Floating particles around photo */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-300"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-pink-500 rounded-full animate-bounce animation-delay-500"></div>
              <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-cyan-300 rounded-full animate-bounce animation-delay-700"></div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">MOWAZZEM UDDIN AHMED</span>
            </h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              FULL STACK DEVELOPER 💻 | FOUNDER & ORGANIZER @CNCF CHAPTER DURGAPUR 🏆 | CO-FOUNDER @CODENEST 🚀 | GOOGLE CLOUD ARCADE FACILITATOR 2025 🚀 | AI/ML ENTHUSIAST 🌀 Exploring k8s ☁️, Open Source 🔓, Web Solutions 🌐
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From smart contracts to immersive 3D interfaces, I bridge the gap between 
              cutting-edge technology and exceptional user experiences. Let's build the future together.
            </p>
            
            {/* Quick stats */}
            <div className="flex flex-col items-start gap-2 justify-start lg:justify-start mt-0 lg:ml-0">
              <div className="text-left">
                <span className="text-lg font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">College: </span>
                <span className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">NSHM Knowledge Campus Durgapur (2022-26)</span>
              </div>
              <div className="text-left">
                <span className="text-lg font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">School: </span>
                <span className="text-xl font-extrabold text-cyan-400">Methodist School Dankuni (2010-2022)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div className="text-cyan-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* 3D Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Hackathons" },
            { number: "20+", label: "Cloud Certifications" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;