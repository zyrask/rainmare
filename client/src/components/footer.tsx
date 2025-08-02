export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-rain-surface">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://discord.gg/TRB9BQ49YA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-rain-glow transition-colors"
          >
            <i className="fab fa-discord text-2xl"></i>
          </a>
          <a 
            href="https://www.youtube.com/channel/UC2QBXWMtvxwN6b-KUjZzaZQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
        <p className="text-gray-400">
          © 2025 RainWare V6. All rights reserved. Made with ❤️ by vynaro
        </p>
      </div>
    </footer>
  );
}
