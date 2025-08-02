
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = 'UC2QBXWMtvxwN6b-KUjZzaZQ'; // Void2Real channel ID
    
    if (!YOUTUBE_API_KEY) {
      return res.status(500).json({ error: 'YouTube API key not configured' });
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    // Get video statistics for each video
    const videoIds = data.items.map((item: any) => item.id.videoId).join(',');
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=statistics,contentDetails`
    );

    const statsData = await statsResponse.json();

    const videos = data.items.map((item: any, index: number) => {
      const stats = statsData.items[index];
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
        publishedAt: item.snippet.publishedAt,
        viewCount: stats?.statistics?.viewCount || '0',
        duration: stats?.contentDetails?.duration || 'PT0S',
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      };
    });

    res.json({ videos });
  } catch (error) {
    console.error('YouTube API error:', error);
    res.status(500).json({ error: "Failed to fetch YouTube videos" });
  }
}
