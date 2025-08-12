import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import MeteorBackground from './components/MeteorBackground';


function App() {
  const [loading, setLoading] = useState(true);
  const [showName, setShowName] = useState(false);

  // When loading finishes, show the name for 1.5s, then show main content
  const handleLoadingFinish = () => {
    setLoading(false);
    setShowName(true);
    setTimeout(() => setShowName(false), 1500);
  };

  return (
    <>
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      {!loading && showName && (
        <div className="loading-screen">
          <h1 className="name-message">I am Mowazzem Uddin Ahmed</h1>
        </div>
      )}
      {!loading && !showName && (
        <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
          <MeteorBackground />
          <ParticleBackground />
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;