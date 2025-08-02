import { useScrollAnimation } from "../hooks/use-scroll-animation";

export default function CommunitySection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} id="community" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-rain-glow">
          <i className="fab fa-discord mr-4"></i>Join Our Community
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Connect with thousands of users, get support, and stay updated with the latest features
        </p>
        
        <div className="glass-card rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">RainWare Community</h3>
              <p className="text-gray-300 mb-4">
                • Get instant support from our team<br />
                • Share your experiences and tips<br />
                • Early access to new features<br />
                • Regular community events
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span><i className="fas fa-users mr-1"></i>400+ Members</span>
                <span><i className="fas fa-comments mr-1"></i>Active 24/7</span>
              </div>
            </div>
            <div>
              <a 
                href="https://discord.gg/TRB9BQ49YA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 inline-block glow-outline-blue"
              >
                <i className="fab fa-discord mr-3 text-xl"></i>Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
