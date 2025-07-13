import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "github.com/Rony-2004/", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/mowazzem-uddin-ahmed-rony/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://x.com/ronyping", label: "Twitter" },
    { icon: <Globe className="w-5 h-5" />, url: "https://community.cncf.io/cloud-native-durgapur/", label: "Website" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              DEVELOPER
            </div>
            <p className="text-gray-400 max-w-md">
              Building the future of the web with cutting-edge technologies and innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={link.label}
                className="group p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-center">
            Made with love by MU Ahmed <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;