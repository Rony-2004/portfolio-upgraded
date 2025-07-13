import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed top-0 w-full z-50 p-4">
      <nav className={`container mx-auto transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-cyan-400/10' 
          : 'bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl'
      }`}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            MU AHMED
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600/50">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group px-4 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-full hover:bg-gray-700/50"
              >
                {item}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 mx-4 mb-4">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 px-4 py-3 rounded-xl hover:bg-gray-800/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;