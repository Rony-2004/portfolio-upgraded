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

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      {!loading && (
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