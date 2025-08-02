import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1401025687086825563/zHg4mW3aFj7m0WKjTTeqHTHsutNhH4fACbV1hM4DzbkZQJdU0Z6N8xAckDYiyUrFdip4";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  // Feedback endpoint with Discord webhook
  app.post("/api/feedback", async (req: Request, res: Response) => {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required" });
    }

    try {
      const embed = {
        title: "🌧️ New Feedback from RainWare V6 Website",
        color: 0x3498db,
        fields: [
          {
            name: "👤 User",
            value: name,
            inline: true
          },
          {
            name: "💬 Message",
            value: message,
            inline: false
          },
          {
            name: "📅 Timestamp",
            value: new Date().toISOString(),
            inline: true
          }
        ],
        footer: {
          text: "RainWare V6 Website Feedback System"
        }
      };

      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        }),
      });

      if (!response.ok) {
        throw new Error(`Discord webhook failed: ${response.status}`);
      }

      res.json({ success: true, message: "Feedback sent successfully" });
    } catch (error) {
      console.error('Feedback webhook error:', error);
      res.status(500).json({ error: "Failed to send feedback" });
    }
  });

  // YouTube videos endpoint
  app.get("/api/youtube/videos", async (req: Request, res: Response) => {
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
  });

  const httpServer = createServer(app);
  return httpServer;
}
