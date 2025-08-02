import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-rain-glow/30 shadow-2xl shadow-rain-glow/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-rain-glow to-rain-blue rounded-xl flex items-center justify-center shadow-lg shadow-rain-glow/30 glow-outline-green">
              <i className="fas fa-cloud-rain text-rain-dark font-bold text-lg"></i>
            </div>
            <span className="text-2xl font-bold text-white">
              RainWare <span className="text-rain-glow">V6</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="px-4 py-2 rounded-lg hover:text-rain-glow hover:bg-rain-glow/10 transition-all duration-300 font-medium border border-transparent hover:border-rain-glow/60 hover:shadow-lg hover:shadow-rain-glow/30 glow-outline-green"
            >
              <i className="fas fa-home mr-2"></i>Home
            </button>
            <button 
              onClick={() => scrollToSection('script')} 
              className="px-4 py-2 rounded-lg hover:text-rain-glow hover:bg-rain-glow/10 transition-all duration-300 font-medium border border-transparent hover:border-rain-glow/60 hover:shadow-lg hover:shadow-rain-glow/30 glow-outline-green"
            >
              <i className="fas fa-code mr-2"></i>Script
            </button>
            <button 
              onClick={() => scrollToSection('community')} 
              className="px-4 py-2 rounded-lg hover:text-rain-glow hover:bg-rain-glow/10 transition-all duration-300 font-medium border border-transparent hover:border-rain-glow/60 hover:shadow-lg hover:shadow-rain-glow/30 glow-outline-blue"
            >
              <i className="fab fa-discord mr-2"></i>Community
            </button>
            <button 
              onClick={() => scrollToSection('tutorials')} 
              className="px-4 py-2 rounded-lg hover:text-rain-glow hover:bg-rain-glow/10 transition-all duration-300 font-medium border border-transparent hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/30 glow-outline-red"
            >
              <i className="fab fa-youtube mr-2"></i>Videos
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-4 py-2 rounded-lg hover:text-rain-glow hover:bg-rain-glow/10 transition-all duration-300 font-medium border border-transparent hover:border-rain-glow/60 hover:shadow-lg hover:shadow-rain-glow/30 glow-outline-green"
            >
              <i className="fas fa-envelope mr-2"></i>Contact
            </button>
            <button 
              onClick={() => scrollToSection('feedback')} 
              className="px-4 py-2 rounded-lg border border-rain-glow/50 text-rain-glow hover:bg-rain-glow hover:text-rain-dark transition-all duration-300 font-medium glow-outline-green hover:shadow-lg hover:shadow-rain-glow/40"
            >
              <i className="fas fa-comment mr-2"></i>Feedback
            </button>
          </div>
          <button className="md:hidden text-rain-glow">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
