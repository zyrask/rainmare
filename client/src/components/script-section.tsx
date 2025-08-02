import { useState } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

export default function ScriptSection() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'success'>('idle');
  const sectionRef = useScrollAnimation();

  const script = `getgenv().getcustomasset = nil
loadstring(game:HttpGet("https://raw.githubusercontent.com/void2realyt/RainWare-V6/refs/heads/main/mobileinit.lua"))()`;

  const copyScript = async () => {
    try {
      setCopyStatus('copying');
      await navigator.clipboard.writeText(script);
      setCopyStatus('success');
      
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000);
    } catch (err) {
      console.error('Could not copy text: ', err);
      alert('Failed to copy script. Please copy manually.');
      setCopyStatus('idle');
    }
  };

  return (
    <section ref={sectionRef} id="script" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-rain-glow">
          <i className="fas fa-terminal mr-4"></i>RainWare V6 Script
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Copy and execute the script below to access RainWare V6 features
        </p>
        
        <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400 text-sm">rainware_v6.lua</span>
            </div>
            <button 
              onClick={copyScript}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-outline-green ${
                copyStatus === 'success' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-rain-glow text-rain-dark hover:bg-rain-blue'
              }`}
            >
              <i className={`mr-2 ${copyStatus === 'success' ? 'fas fa-check' : 'fas fa-copy'}`}></i>
              {copyStatus === 'success' ? 'Copied!' : 'Copy Script'}
            </button>
          </div>
          
          <div className="code-editor rounded-lg overflow-hidden">
            <div className="flex">
              <div className="line-numbers px-4 py-4 text-sm font-mono leading-6">
                <div>1</div>
                <div>2</div>
              </div>
              <div className="flex-1 p-4 font-mono text-sm leading-6 syntax-highlight">
                <div>
                  <span className="function">getgenv</span>().<span className="keyword">getcustomasset</span> = <span className="keyword">nil</span>
                </div>
                <div>
                  <span className="function">loadstring</span>(<span className="keyword">game</span>:<span className="function">HttpGet</span>(<span className="string">"https://raw.githubusercontent.com/void2realyt/RainWare-V6/refs/heads/main/mobileinit.lua"</span>))()
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-rain-surface rounded-lg">
            <h4 className="font-semibold mb-2 text-rain-glow">
              <i className="fas fa-info-circle mr-2"></i>Script Information
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><i className="fas fa-check text-green-400 mr-2"></i>Compatible with mobile and desktop</li>
              <li><i className="fas fa-check text-green-400 mr-2"></i>Auto-updating script loader</li>
              <li><i className="fas fa-check text-green-400 mr-2"></i>Enhanced security features</li>
              <li><i className="fas fa-check text-green-400 mr-2"></i>Optimized performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
