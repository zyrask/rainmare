export default function HeroSection() {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-rain-surface"></div>
      
      
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse-glow">
          RainWare V6
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Experience the next generation of advanced scripting tools with cutting-edge features, 
          enhanced performance, and an intuitive interface designed for power users.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center animate-slide-up">
          <button 
            onClick={() => scrollToSection('script')} 
            className="bg-gradient-to-r from-rain-blue to-rain-accent px-8 py-4 rounded-lg font-semibold hover:from-rain-accent hover:to-rain-blue transition-all duration-300 transform hover:scale-105 btn-glow-primary"
          >
            <i className="fas fa-code mr-2"></i>Get Script
          </button>
          <button 
            onClick={() => scrollToSection('community')} 
            className="border-2 border-rain-glow px-8 py-4 rounded-lg font-semibold hover:bg-rain-glow hover:text-rain-dark transition-all duration-300 transform hover:scale-105 glow-outline-green"
          >
            <i className="fab fa-discord mr-2"></i>Join Community
          </button>
        </div>
      </div>
    </section>
  );
}
