import { useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
}

export default function YouTubeSync() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      const response = await fetch('/api/youtube/videos');
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      setVideos(data.videos || []);
    } catch (err) {
      setError('Failed to load YouTube videos');
      console.error('YouTube sync error:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatViewCount = (count: string) => {
    const num = parseInt(count);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return count;
  };

  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return duration;
    
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getRelativeTime = (publishedAt: string) => {
    const now = new Date();
    const published = new Date(publishedAt);
    const diffTime = Math.abs(now.getTime() - published.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card rounded-xl p-6 animate-pulse">
          <div className="aspect-video bg-rain-surface rounded-lg mb-4"></div>
          <div className="h-6 bg-rain-surface rounded mb-2"></div>
          <div className="h-4 bg-rain-surface rounded w-3/4"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card rounded-lg p-4 animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-12 bg-rain-surface rounded"></div>
                <div className="flex-1">
                  <div className="h-4 bg-rain-surface rounded mb-2"></div>
                  <div className="h-3 bg-rain-surface rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="glass-card rounded-xl p-8 max-w-md mx-auto">
          <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
          <p className="text-gray-300 mb-4">{error}</p>
          <a 
            href="https://www.youtube.com/channel/UC2QBXWMtvxwN6b-KUjZzaZQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            <i className="fab fa-youtube mr-2"></i>Visit Channel
          </a>
        </div>
      </div>
    );
  }

  const featuredVideo = videos[0];
  const otherVideos = videos.slice(1, 4);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {featuredVideo && (
        <div className="glass-card rounded-xl p-6">
          <div className="aspect-video bg-rain-surface rounded-lg mb-4 relative overflow-hidden group">
            <img 
              src={featuredVideo.thumbnail} 
              alt={featuredVideo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <a 
                href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition-colors"
              >
                <i className="fas fa-play text-2xl text-white"></i>
              </a>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs">
              {formatDuration(featuredVideo.duration)}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{featuredVideo.title}</h3>
          <div className="flex items-center text-sm text-gray-400 space-x-4">
            <span><i className="fas fa-eye mr-1"></i>{formatViewCount(featuredVideo.viewCount)} views</span>
            <span>{getRelativeTime(featuredVideo.publishedAt)}</span>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        {otherVideos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card rounded-lg p-4 hover:bg-rain-surface transition-colors block"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-16 h-12 object-cover rounded"
                />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-80 px-1 text-xs rounded-tl">
                  {formatDuration(video.duration)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold line-clamp-2 text-sm">{video.title}</h4>
                <div className="flex items-center text-xs text-gray-400 space-x-2 mt-1">
                  <span>{formatViewCount(video.viewCount)} views</span>
                  <span>•</span>
                  <span>{getRelativeTime(video.publishedAt)}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
        
        <a 
          href="https://www.youtube.com/channel/UC2QBXWMtvxwN6b-KUjZzaZQ" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
        >
          <i className="fab fa-youtube mr-2"></i>View All Videos
        </a>
      </div>
    </div>
  );
}