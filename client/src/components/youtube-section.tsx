import YouTubeSync from "@/components/youtube-sync";

export default function YouTubeSection() {
  return (
    <section id="tutorials" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-rain-glow">
          <i className="fab fa-youtube mr-4"></i>Watch Our Videos
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Learn how about RainWare V6 with our videos from Void2Real
        </p>
        
        <YouTubeSync />
      </div>
    </section>
  );
}
