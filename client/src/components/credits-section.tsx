export default function CreditsSection() {
  return (
    <section className="py-20 px-6 bg-rain-surface">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-rain-glow">
          <i className="fas fa-heart mr-4"></i>Credits & Acknowledgments
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              <i className="fas fa-code mr-2 text-rain-glow"></i>Development Team
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>void2realyt</strong> - Lead / Owner</li>
              <li><strong>henryfnm</strong> - Active Developer</li>
              <li><strong>Copium</strong> - Active Developer</li>
              <li><strong>vynaro</strong> - Website Developer</li>
            </ul>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              <i className="fas fa-tools mr-2 text-rain-glow"></i>Technologies Used
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Lua</strong> - Core scripting language</li>
              <li><strong>Roblox API</strong> - Game integration</li>
              <li><strong>GitHub</strong> - Version control & hosting</li>
              <li><strong>Discord Webhooks</strong> - Community integration</li>
              <li><strong>YouTube API</strong> - Video content sync</li>
            </ul>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <i className="fas fa-users mr-2 text-rain-glow"></i>Special Thanks
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Special thanks to the entire RainWare community for their continuous support, feedback, and contributions that make this project possible. 
              Your enthusiasm and dedication drive us to constantly improve and innovate. Thank you to all the beta testers who helped identify issues 
              and provided valuable suggestions during the development of V6.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
