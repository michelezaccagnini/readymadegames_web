import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, inquiryType, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !inquiryType || !subject || !message) {
        return res.status(400).json({ 
          message: "Missing required fields: name, email, inquiryType, subject, message" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // Log the submission
      console.log('Contact form submission:', {
        name,
        email,
        company,
        inquiryType,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      // Send email notification to you
      const emailSent = await emailService.sendContactFormEmail({
        name,
        email,
        company,
        inquiryType,
        subject,
        message
      });

      // Send auto-reply to the person who submitted the form
      const autoReplySent = await emailService.sendAutoReply({
        name,
        email,
        company,
        inquiryType,
        subject,
        message
      });

      if (!emailSent) {
        console.warn('Failed to send notification email');
      }

      if (!autoReplySent) {
        console.warn('Failed to send auto-reply email');
      }
      
      res.status(200).json({ 
        message: "Contact form submitted successfully",
        id: Date.now().toString(),
        emailSent,
        autoReplySent
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "SoundSphere Games Website"
    });
  });

  // Game data endpoint (for future use)
  app.get("/api/games", (req, res) => {
    const games = [
      {
        id: 'rhythm-sphere',
        title: 'Rhythm Sphere',
        description: 'Tap to the beat in this immersive 3D music game',
        category: 'mobile',
        platform: ['iOS', 'Android'],
        rating: 4.8,
        downloads: '500K+',
        releaseDate: '2024'
      },
      {
        id: 'sound-waves',
        title: 'Sound Waves',
        description: 'Create music through gesture and movement',
        category: 'unity',
        platform: ['PC', 'Mac', 'VR'],
        rating: 4.6,
        downloads: '250K+',
        releaseDate: '2024'
      },
      {
        id: 'melody-maker',
        title: 'Melody Maker',
        description: 'Web-based music creation for everyone',
        category: 'web',
        platform: ['Web Browser'],
        rating: 4.7,
        downloads: '1M+',
        releaseDate: '2024'
      }
    ];

    res.status(200).json({ games });
  });

  const httpServer = createServer(app);

  return httpServer;
}
