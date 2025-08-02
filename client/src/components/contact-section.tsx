export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-rain-glow">
          <i className="fas fa-envelope mr-4"></i>Get in Touch
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Need help or have questions? Reach out to our developer directly
        </p>
        
        <div className="glass-card rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rain-glow rounded-lg flex items-center justify-center">
                    <i className="fab fa-discord text-rain-dark"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Discord</h4>
                    <p className="text-gray-400">void2realyt</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <i className="fab fa-youtube text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">YouTube Channel</h4>
                    <p className="text-gray-400">Void2Real</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <i className="fab fa-github text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <a 
                      href="https://github.com/void2realyt/RainWare-V6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-rain-glow hover:text-rain-blue transition-colors"
                    >
                      void2realyt/RainWare-V6
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6">Quick Support</h3>
              <div className="space-y-4">
                <button className="w-full bg-rain-glow text-rain-dark px-6 py-3 rounded-lg font-semibold hover:bg-rain-blue transition-colors">
                  <i className="fab fa-discord mr-2"></i>Message on Discord
                </button>
                <button 
                  onClick={() => {
                    const feedbackSection = document.getElementById('feedback');
                    if (feedbackSection) {
                      feedbackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full border-2 border-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50"
                >
                  <i className="fas fa-bug mr-2"></i>Report an Issue
                </button>
                <button 
                  onClick={() => {
                    const feedbackSection = document.getElementById('feedback');
                    if (feedbackSection) {
                      feedbackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full border-2 border-rain-glow px-6 py-3 rounded-lg font-semibold hover:bg-rain-glow hover:text-rain-dark transition-all duration-300 shadow-lg shadow-rain-glow/30 hover:shadow-rain-glow/50"
                >
                  <i className="fas fa-lightbulb mr-2"></i>Suggest Feature
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-rain-surface rounded-lg">
                <p className="text-sm text-gray-300">
                  <i className="fas fa-clock mr-2 text-rain-glow"></i>
                  Average response time: <span className="font-semibold">Under 2 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
