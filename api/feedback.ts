
import type { VercelRequest, VercelResponse } from '@vercel/node';

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1401025687086825563/zHg4mW3aFj7m0WKjTTeqHTHsutNhH4fACbV1hM4DzbkZQJdU0Z6N8xAckDYiyUrFdip4";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
}
